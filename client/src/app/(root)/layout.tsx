import React from "react";
import MobileNav from "@/components/shared/MobileNav";
import Sidebar from "@/components/shared/Sidebar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex min-h-screen w-full flex-col bg-primary-200 lg:flex-row">
      <Sidebar />
      <MobileNav />
      <div className="mt-16 flex-1 overflow-auto py-8 lg:mt-0 lg:max-h-screen lg:py-10 ">
        <div className="max-w-5xl px-5 md:px-10 w-full text-white ">
          {children}
        </div>
      </div>
    </main>
  );
};

export default Layout;
