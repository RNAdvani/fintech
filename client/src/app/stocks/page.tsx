import DashboardPage from "@/components/dashboard/DashboardPage";
import { auth } from "@clerk/nextjs/server";

// Import the new SearchBar component
import React from "react";

const Dashboard = async() => {
  const {userId} =  auth();
  return (
    <DashboardPage clerkId={userId as string} />
  );
};

export default Dashboard;
