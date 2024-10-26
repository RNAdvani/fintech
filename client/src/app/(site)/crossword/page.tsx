// page.tsx
"use client";

import React from "react";
import Crossword from "@/components/crossword/crosswordpuzzle";
import grid from "@/components/crossword/grid";
import { toast } from "sonner";
import { useUser } from "@clerk/nextjs";
import axios from "axios";
interface Clue {
  text: string; // The text of the clue
  direction: "across" | "down"; // The direction of the answer
  number: number; // A unique number for the clue
}

type CrosswordProps = {
  onCrosswordSolved: (solved: boolean) => void;
};

const page = () => {
  const clues: Clue[] = [
    {
      number: 1,
      direction: "across",
      text: "Financial assets owned by an individual or company",
    },
    { number: 2, direction: "across", text: "Ownership interest in a company" },
    {
      number: 3,
      direction: "across",
      text: "A debt investment in a company or government",
    },
    {
      number: 4,
      direction: "across",
      text: "Payments made by a company to its shareholders",
    },
    {
      number: 5,
      direction: "across",
      text: "The income return on an investment",
    },
    {
      number: 1,
      direction: "down",
      text: "A financial plan for a specific period",
    },
    { number: 2, direction: "down", text: "Money set aside for future use" },
    {
      number: 3,
      direction: "down",
      text: "The ability to borrow money or access goods or services",
    },
    {
      number: 4,
      direction: "down",
      text: "Allocating money with the expectation of future profit",
    },
    {
      number: 5,
      direction: "down",
      text: "The potential for loss in an investment",
    },
    {
      number: 6,
      direction: "down",
      text: "An amount of money that is owed or due",
    },
    {
      number: 7,
      direction: "down",
      text: "A compulsory financial charge imposed by a government",
    },
    {
      number: 8,
      direction: "down",
      text: "A measure of the profitability of an investment (abbr.)",
    },
  ];
  const user = useUser();

  const updateCredits = async (score: number) => {
    try {
      const response = await axios.post(
        "http://localhost:4000/api/v1/users/update-credits",
        {
          clerkId: user.user?.id, // Replace with actual Clerk ID
          credits: score, // Credits based on score
        }
      );

      // Assuming the API sends a success message
      if (response.status === 200) {
        toast.success(response.data.message || "Credits updated successfully!");
      } else {
        toast.error(response.data.message || "Failed to update credits");
      }
    } catch (error) {
      // Check for error response from the server
      console.log(error);
    }
  };
  const handleCrosswordSolved = async (solved: boolean) => {
    if (solved) {
      alert("Congratulations! You solved the crossword!");
    }

    await updateCredits(solved ? 10 : 0);
  };

  return (
    <div className="flex flex-row justify-center items-center">
      <Crossword
        grid={grid as any}
        clues={clues}
        onCrosswordSolved={handleCrosswordSolved}
      />
    </div>
  );
};

export default page;
