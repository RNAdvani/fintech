"use client";

import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import useModalStore from "@/hooks/useModalStore";
import { useUser } from "@clerk/nextjs";
import axios from "axios";
import { Loader2 } from "lucide-react";
import { redirect, useRouter } from "next/navigation";
import { Router } from "next/router";
import { useEffect, useState } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { toast } from "sonner";

type Props = {
  questions: {
    category: string;
    id: string;
    correctAnswer: string;
    incorrectAnswers: string[];
    question: string;
    tags: string[];
    type: string;
    difficulty: string;
    regions: [];
    isNiche: boolean;
  }[];
  limit: number;
  category: string;
};

const Questions = ({ questions, limit }: Props) => {
  const router = useRouter();

  const user = useUser();
  const alphabeticNumeral = (index: number) => {
    const asciiCode = index + 65;
    const letter = String.fromCharCode(asciiCode);
    return letter + ". ";
  };
  const [curr, setCurr] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [selected, setSelected] = useState<string>("");
  const [progressValue, setProgressValue] = useState(0);
  const [score, setScore] = useState(0);
  const { onOpen } = useModalStore();
  const [key, setKey] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleShuffle = (correctAnswer: string, incorrectAnswers: string[]) => {
    const shuffledAnswers = [...incorrectAnswers];

    shuffledAnswers.sort(() => Math.random() - 0.5);
    const randomIndex = Math.floor(
      Math.random() * (shuffledAnswers.length + 1)
    );
    shuffledAnswers.splice(randomIndex, 0, correctAnswer);

    return shuffledAnswers;
  };

  const handleCheck = (answer: string, isTimeUp: boolean = false) => {
    setSelected(answer);
    if (answer === questions[curr].correctAnswer && !isTimeUp)
      setScore(score + 1);
  };

  const handleSelect = (i: string) => {
    if (selected === i && selected === questions[curr].correctAnswer) {
      return "bg-green-500";
    } else if (selected === i && selected !== questions[curr].correctAnswer) {
      return "bg-red-500";
    } else if (!selected && i === questions[curr].correctAnswer) {
      return "bg-green-500";
    } else {
      return "bg-primary-200";
    }
  };

  const handleNext = () => {
    setCurr((curr) => curr + 1);
    setSelected("");
    setKey((prevKey) => prevKey + 1);
  };

  const handleQuit = () => {
    router.push("/quiz");
  };

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

  const handleShowResult = async () => {
    onOpen("showResults", {
      score,
      limit,
    });

    // Call the API to update the user's credits
    await updateCredits(score);

    setShowResult(true);
  };

  const handleTimeUp = () => {
    handleCheck(questions[curr].correctAnswer, true);
    toast.info("You ran out of Time!");
  };

  useEffect(() => {
    if (questions?.length >= 5) {
      setAnswers(
        handleShuffle(
          questions[curr].correctAnswer,
          questions[curr].incorrectAnswers
        )
      );
    }
    setProgressValue((100 / limit) * (curr + 1));
  }, [curr, questions, limit]);

  if (!questions || !answers.length) {
    return <Loader2 className="size-10 text-white animate-spin" />;
  }

  return (
    <div className="bg-primary-300 px-3 py-5 md:p-6 shadow-md w-full md:w-[80%] lg:w-[70%] max-w-5xl sm:rounded-lg">
      <Progress value={progressValue} className="bg-primary-400" />
      <div className="flex justify-between items-center h-20 text-sm md:text-base">
        <div className="space-y-1">
          <p className="font-semibold text-primary-400">Score: {score}</p>
        </div>
        <CountdownCircleTimer
          key={key}
          isPlaying={!selected}
          duration={15}
          size={45}
          strokeWidth={4}
          colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
          colorsTime={[15, 8, 3, 0]}
          onComplete={handleTimeUp}
        >
          {({ remainingTime }) => (
            <div className="text-center font-bold text-primary-400">
              {remainingTime}
            </div>
          )}
        </CountdownCircleTimer>
      </div>
      <Separator />
      <div className="min-h-[50vh] py-4 xl:py-8 px-3 md:px-5 w-full">
        <h2 className="text-2xl text-center font-medium text-primary-400">
          {`Q${curr + 1}. ${questions[curr].question}`}
        </h2>
        <div className="py-4 md:py-5 xl:py-7 flex flex-col gap-y-3 md:gap-y-5">
          {answers.map((answer, i) => (
            <button
              key={i}
              className={`option ${
                selected
                  ? handleSelect(answer)
                  : "bg-transparent hover:bg-[#3f3f3f]"
              } text-white py-2 px-4 rounded-md transition duration-200`}
              disabled={!!selected}
              onClick={() => handleCheck(answer)}
            >
              {alphabeticNumeral(i)} {answer}
            </button>
          ))}
        </div>
        {showResult && (
          <div className="mt-4 p-4 bg-gray-800 text-white rounded-md">
            <h3 className="font-semibold">Results</h3>
            <p>Your Score: {score}</p>
          </div>
        )}
        <Separator />
        <div className="flex mt-5 md:justify-between md:flex-row flex-col gap-4 md:gap-0 mx-auto max-w-xs w-full">
          <Button
            disabled={!selected}
            className={`bg-primary-100 hover:bg-primary-200 text-white`}
            onClick={() =>
              questions.length === curr + 1 ? handleShowResult() : handleNext()
            }
          >
            {questions.length - 1 !== curr ? "Next Question" : "Show Results"}
          </Button>
          <Button
            variant={"default"}
            onClick={handleQuit}
            className="bg-primary-300 hover:bg-primary-200 text-white"
          >
            Quit Quiz
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Questions;
