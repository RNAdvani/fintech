"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";

const QuizSettings = () => {
  const difficultyOptions = [
    {
      value: "easy",
      option: "Easy",
    },
    {
      value: "medium",
      option: "Medium",
    },
    {
      value: "hard",
      option: "Hard",
    },
  ];
  const router = useRouter();
  const [difficulty, setDifficulty] = useState<string>("");
  const [limit, setLimit] = useState([10]);

  const handleQuizStart = () => {
    router.push(`/quiz/questions`);
  };

  return (
    <div className="flex flex-col justify-center items-center gap-4 md:gap-6">
      <Select
        value={difficulty}
        onValueChange={(value) => setDifficulty(value)}
      >
        <SelectTrigger className="w-full md:max-w-xs xl:max-w-md">
          <SelectValue placeholder="Difficulty" />
        </SelectTrigger>
        <SelectContent>
          {difficultyOptions.map((difficulty) => (
            <SelectItem value={difficulty.value} key={difficulty.value}>
              {difficulty.option}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <p className="text-sm lg:text-sm font-semibold">
        Total Questions: {limit[0]}
      </p>
      <Slider
        value={limit}
        onValueChange={(value) => setLimit(value)}
        max={50}
        step={5}
        min={5}
        className="w-full md:max-w-xs xl:max-w-md"
      />
      <Button onClick={handleQuizStart}>Start Quiz</Button>
    </div>
  );
};

export default QuizSettings;
