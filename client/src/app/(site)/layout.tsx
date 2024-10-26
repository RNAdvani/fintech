import { Montserrat } from "next/font/google";
import { cn } from "@/lib/utils";

import MobileNav from "@/components/shared/MobileNav";
import Sidebar from "@/components/shared/Sidebar";
import ChatbotModal from "@/components/shared/Chat";


const font = Montserrat({ subsets: ["latin"], weight: "500" });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main lang="en" className="w-full flex flex-row h-screen">
          <div className="h-full">
            <MobileNav />
            <Sidebar />
          </div>
          <div className="flex flex-col w-full h-full overflow-y-scroll">
            {children}
          </div>
    </main>
  );
}
