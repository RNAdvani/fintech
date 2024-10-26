import { ErrorHandler } from "../lib/ErrorHandler";
import { TryCatch } from "../lib/TryCatch";
import { UserModel } from "../schemas";

export const addWatchlistStock = TryCatch(async (req, res, next) => {
  const { clerkId, stock } = req.body;

  const updatedUser = await UserModel.findOneAndUpdate(
    { clerkId },
    { 
      $set: { watchlist: { $ifNull: ["$watchlist", [stock]] } },
      $addToSet: { watchlist: stock }
    },
    { new: true, upsert: true, runValidators: true }
  );

  if (!updatedUser) {
    return next(new ErrorHandler(404, "User not found"));
  }

  return res.status(200).json({
    success: true,
    message: "Stock added to watchlist successfully",
    watchlist: updatedUser.watchlist,
  });
});

export const removeWatchlistStock = TryCatch(async (req, res, next) => {
  const { clerkId, stock } = req.body;

  const updatedUser = await UserModel.findOneAndUpdate(
    { clerkId },
    { $pull: { watchlist: stock } },
    { new: true }
  );

  if (!updatedUser) {
    return next(new ErrorHandler(404, "User not found"));
  }

  return res.status(200).json({
    success: true,
    message: "Stock removed from watchlist successfully",
    watchlist: updatedUser.watchlist,
  });
});

export const getWatchlist = TryCatch(async (req, res, next) => {
  const { clerkId } = req.query;

  const user = await UserModel.findOne({ clerkId });
  if (!user) {
    return next(new ErrorHandler(404, "User not found"));
  }

  return res.status(200).json({ success: true, watchlist: user.watchlist || [] });
});