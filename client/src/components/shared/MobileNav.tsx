"use client";

import React, { useEffect, useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { SignedIn, SignedOut, UserButton, useUser } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import {
  ChartNoAxesCombined,
  DollarSignIcon,
  Grid3X3,
  Home,
  Menu,
  MessageCircleQuestion,
  Trophy,
} from "lucide-react";
import axios from "axios";
import { Spinner } from "../spinner";

const MobileNav = () => {
  const [expanded, setExpanded] = useState<string | null>(null); // State to handle expanded menus
  const [credits, setCredits] = useState<number | null>(null); // State for credits
  const pathname = usePathname();

  const navLinks = [
    {
      label: "Learning",
      route: "/learning",
      icon: <Home />,
    },
    {
      label: "Expense Tracker",
      route: "/expenses",
      icon: <DollarSignIcon />,
    },
    {
      label: "Stocks",
      route: "/stocks",
      icon: <ChartNoAxesCombined />,
    },
    {
      label: "Quiz",
      route: "/quiz",
      icon: <MessageCircleQuestion />,
    },
    {
      label: "Crossword",
      route: "/crossword",
      icon: <Grid3X3 />,
    },
    {
      label: "Leaderboard",
      route: "/leaderboard",
      icon: <Trophy />,
    },
  ];
  const { user } = useUser();
  useEffect(() => {
    const fetchCredits = async () => {
      if (user) {
        console.log("Fetching credits for user:", user.id);
        try {
          const response = await axios.post(
            `http://localhost:4000/api/v1/users/getcredits`,
            { clerkId: user.id }
          );
          console.log(response.data);
          setCredits(response.data.data);
        } catch (error) {
          console.error("Error fetching credits:", error);
        }
      }
    };
    fetchCredits();
  }, [user]);

  const toggleSubLinks = (label: string) => {
    setExpanded(expanded === label ? null : label);
  };

  return (
    <header className="flex flex-row justify-between fixed h-16 w-full bg-primary-200 p-5 lg:hidden">
      <Link href={"/learning"} className="flex items-center gap-2 md:py-2">
        <Image src={"/financial-literacy.png"} width={28} height={28} alt="" />
        <h1 className="text-2xl font-bold text-primary">FinLearn</h1>
      </Link>
      <nav className="flex gap-2">
        <SignedIn>
          <div className="flex items-center gap-2">
            <span className="text-sm">
              Credits : {credits !== null ? credits : <Spinner />}
            </span>
            <UserButton afterSwitchSessionUrl="/learning" />
          </div>
          <Sheet>
            <SheetTrigger>
              <Menu />
            </SheetTrigger>
            <SheetContent className="focus:ring-0 focus-visible:ring-transparent focus:ring-offset-0 focus-visible:ring-offset-0 focus-visible:outline-none focus-visible:border-none !important sm:w-64 w-50">
              <SheetHeader>
                <div className="flex items-center justify-between w-full">
                  <SheetTitle className="flex items-center gap-2">
                    <Image
                      src={"/financial-literacy.png"}
                      width={28}
                      height={28}
                      alt="logo"
                    />
                    <h1 className="text-xl font-bold text-primary">FinLearn</h1>
                  </SheetTitle>
                  <Menu />
                </div>
              </SheetHeader>

              <ul className="mt-8 flex w-full flex-col items-start gap-5">
                {navLinks.map((link) => {
                  const isActive = link.route === pathname;

                  return (
                    <li key={link.route} className="w-full">
                      <div
                        className={`${
                          isActive && "gradient-text"
                        } p-18 whitespace-nowrap flex items-center gap-2 text-dark-700 cursor-pointer`}
                      >
                        {link.icon}
                        <Link href={link.route}>{link.label}</Link>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </SheetContent>
          </Sheet>
        </SignedIn>

        <SignedOut>
          <Button asChild className="button bg-purple-gradient bg-cover">
            <Link href="/sign-in">Sign In</Link>
          </Button>
        </SignedOut>
      </nav>
    </header>
  );
};

export default MobileNav;
