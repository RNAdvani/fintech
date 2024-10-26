"use client";

import { SignedIn, SignedOut, UserButton, useUser } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  ChartNoAxesCombined,
  Coins,
  DollarSignIcon,
  Grid3X3,
  Home,
  MessageCircleQuestion,
  Trophy,
} from "lucide-react";
import axios from "axios";
import { Spinner } from "../spinner";

const Sidebar = () => {
  const [expanded, setExpanded] = useState<string | null>(null); // State to handle expanded menus
  const [credits, setCredits] = useState<number | null>(null); // State for user credits
  const { user } = useUser(); // Clerk hook to get user data

  const navLinks = [
    { label: "Learning", route: "/learning", icon: <Home /> },
    { label: "Expense Tracker", route: "/expenses", icon: <DollarSignIcon /> },
    { label: "Stocks", route: "/stocks", icon: <ChartNoAxesCombined /> },
    { label: "Quiz", route: "/quiz", icon: <MessageCircleQuestion /> },
    { label: "Crossword", route: "/crossword", icon: <Grid3X3 /> },
    { label: "Leaderboard", route: "/leaderboard", icon: <Trophy /> },
  ];

  const pathname = usePathname();

  const toggleSubLinks = (label: string) => {
    setExpanded(expanded === label ? null : label); // Toggle expansion
  };
  // Fetch user credits from the API
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

  return (
    <aside className="hidden h-screen w-72 bg-primary-200 p-5 lg:flex">
      <div className="flex size-full flex-col gap-5">
        <Link href={"/"} className="flex items-center gap-2 md:py-2">
          <Image
            src={"/logo.png"}
            width={100}
            height={0}
            alt="logo"
          />
          {/* <h1 className="text-2xl font-bold text-colors-primary-800 px-4 py-2">
            FinLearn
          </h1> */}
        </Link>
        <nav className="h-full flex-col justify-between md:flex md:gap-4">
          <SignedIn>
            <ul className="hidden w-full flex-col gap-3 items-start md:flex">
              {navLinks.map((link) => {
                const isActive = link.route === pathname;
                return (
                  <li key={link.route} className="w-full">
                    <div
                      className={`flex-center p-16-semibold w-full whitespace-nowrap rounded-full bg-cover transition-all group ${
                        isActive ? " text-primary-100" : "text-primary-400"
                      }`}
                    >
                      <Link
                        href={link.route}
                        className="p-16-semibold flex size-full gap-4 p-2"
                      >
                        {link.icon}
                        {link.label}
                      </Link>
                    </div>
                  </li>
                );
              })}
            </ul>

            {/* Display user credits before the UserButton */}
            <ul className="w-full flex flex-col items-start md:flex">
              <li className="flex cursor-pointer gap-2 p-4 text-primary-800">
                {credits !== null ? (
                  <span className="flex flex-row gap-5 text-3xl font-semibold text-primary-100">
                    <Coins size={30} />
                    <p>{credits}</p>
                  </span>
                ) : (
                  <Spinner size="lg" />
                )}
              </li>

              <li className="flex cursor-pointer gap-2 p-4">
                <UserButton
                  appearance={{
                    elements: {
                      button: {
                        color: "white",
                        display: "flex",
                        flexDirection: "row-reverse",
                      },
                    },
                  }}
                  afterSwitchSessionUrl="/"
                  showName
                />
              </li>
            </ul>
          </SignedIn>

          <SignedOut>
            <Button asChild className="button bg-purple-gradient bg-cover">
              <Link href="/sign-in">Sign In</Link>
            </Button>
          </SignedOut>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
