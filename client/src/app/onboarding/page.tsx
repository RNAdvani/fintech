import { IncomeCard } from "@/components/cards/income-card";
import { auth } from "@clerk/nextjs/server";

const Onboarding = async () => {
  const user = auth()
   
  return (
    <div className="min-h-[calc(100vh-180px)] max-w-xl p-5 m-auto flex items-center justify-center">
      <IncomeCard
        userId = {user.userId!}
        title="Financial Setup: Let&rsquo;s Get Started"
        actionLabel="Continue to Dashboard"
      />
    </div>
  );
};

export default Onboarding;
