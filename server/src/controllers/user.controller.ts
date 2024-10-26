import { Webhook, WebhookRequiredHeaders } from "svix";
import { TryCatch } from "../lib/TryCatch";
import { UserModel as User } from "../schemas";
import { ErrorHandler } from "../lib/ErrorHandler";

export const createUserAction = async ({
  clerkId,
  email,
  name,
}: {
  clerkId: string;
  name: string;
  email: string;
}) => {
  try {
    console.log({ clerkId, email, name });
    const user = await User.create({
      clerkId,
      name,
      email,
      watchlist: [],
      courses: [],
      progress:{},
    });
    return user;
  } catch (error) {
    console.log(error);
  }
  return null;
};

export const createUser = TryCatch(async (req, res, next) => {
  console.log("Webhook received");
  const webhookSecret = process.env.CLERK_WEBHOOK_SECRET as string;

  // Verify the webhook signature
  const payload = JSON.stringify(req.body);
  const headers = req.headers;

  const whHeaders: WebhookRequiredHeaders = {
    "svix-id": headers["svix-id"] as string,
    "svix-signature": headers["svix-signature"] as string,
    "svix-timestamp": headers["svix-timestamp"] as string,
  };

  const wh = new Webhook(webhookSecret);
  let evt;

  console.log({ payload, whHeaders, webhookSecret });

  try {
    evt = wh.verify(payload, whHeaders);
    console.log("Webhook verified:", evt);
  } catch (err) {
    console.error("Error verifying webhook:", err);
    return res.status(400).json({ error: "Invalid signature" });
  }

  // Handle the webhook
  const eventType = (evt as any).type;
  if (eventType === "user.created") {
    const { id, email_addresses, first_name, last_name } = (evt as any).data;
    // Create user in your database
    try {
      await createUserAction({
        clerkId: id,
        email: email_addresses[0].email_address,
        name: `${first_name} ${last_name}`.trim(),
      });
      return res.status(200).json({ message: "User created in database" });
    } catch (error) {
      console.error("Error creating user in database:", error);
      return res
        .status(500)
        .json({ error: "Failed to create user in database" });
    }
  }

  return res.status(200).json({ message: "Webhook received" });
});

export const getUser = TryCatch(async (req, res, next) => {
  const { clerkId } = req.body;
  const user = await User.findOne({ clerkId });
  if (!user) {
    return next(new ErrorHandler(404, "User not found"));
  }
  return res.status(200).json({
    success: true,
    data: user,
    message: "User retrieved successfully",
  });
});

export const updateUser = TryCatch(async (req, res, next) => {
  const { clerkId } = req.body;
  const user = await User.findOneAndUpdate({ clerkId }, req.body as any, {
    new: true,
  });
  if (!user) {
    return next(new ErrorHandler(404, "User not found"));
  }
  return res.status(200).json({
    success: true,
    data: user,
    message: "User updated successfully",
  });
});

export const updateUserCredits = TryCatch(async (req, res, next) => {
  const { clerkId, credits } = req.body;
  const user = await User.findOne({ clerkId });
  if (!user) {
    return next(new ErrorHandler(404, "User not found"));
  }

  user.credits += credits;
  await user.save();
  return res.status(200).json({
    success: true,
    data: user,
    message: "User credits updated successfully",
  });
});

export const getLeaderboard = TryCatch(async (req, res, next) => {
  const users = await User.find().sort({ credits: -1 });
  return res.status(200).json({
    success: true,
    data: users,
    message: "Leaderboard retrieved successfully",
  });
});

export const getCredits = TryCatch(async (req, res, next) => {
  const { clerkId } = req.body;
  const user = await User.findOne({ clerkId });
  if (!user) {
    return next(new ErrorHandler(404, "User not found"));
  }
  return res.status(200).json({
    success: true,
    data: user.credits,
    message: "Credits retrieved successfully",
  });
});

export const getStreak = TryCatch(async (req, res, next) => {
  const { clerkId } = req.body;
  const user = await User.findOne({ clerkId });
  if (!user) {
    return next(new ErrorHandler(404, "User not found"));
  }
  return res.status(200).json({
    success: true,
    data: user.streak,
    message: "Streak retrieved successfully",
  });
});

export const updateStreak = TryCatch(async (req, res, next) => {
  const { clerkId, streak } = req.body;
  const user = await User.findOne({ clerkId });
  const today = new Date();
  if (!user) {
    return next(new ErrorHandler(404, "User not found"));
  }
  const lastQuizDate = user.lastQuizDate
    ? user.lastQuizDate.toISOString().slice(0, 10)
    : null;
  const todayString = today.toISOString().slice(0, 10);

  if (lastQuizDate === todayString) {
    return res.status(400).json({ message: "Quiz already completed today" });
  }

  if (
    lastQuizDate &&
    new Date(lastQuizDate).getTime() ===
      new Date(todayString).getTime() - 86400000
  ) {
    user.streak += 1;
  } else {
    user.streak = 1;
  }

  user.lastQuizDate = today;
  await user.save();

  res.json({ streak: user.streak });
});
