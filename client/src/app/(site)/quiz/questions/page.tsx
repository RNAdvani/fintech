import Questions from "@/components/quiz/questions";
import { redirect } from "next/navigation";

export const fetchCache = "force-no-store";

type Props = {
  searchParams: {
    category: string;
    difficulty: string;
    limit: string;
  };
};

// async function getData(category: string, difficulty: string, limit: string) {
//   const res = []

//   // if (!res.ok) {
//   //   throw new Error("Failed to fetch data!");
//   // }

//   // return res.json();
//   return res;
// }

const QuestionsPage = async ({ searchParams }: Props) => {
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
  const category = searchParams.category as string;
  const difficulty = searchParams.difficulty;
  const limit = searchParams.limit;

  const validateDifficulty = (difficulty: string) => {
    const validDifficulties = difficultyOptions.map((option) => option.value);
    return validDifficulties.includes(difficulty);
  };

  const validateLimit = (limit: string) => {
    const parsedLimit = parseInt(limit, 10);
    return !isNaN(parsedLimit) && parsedLimit >= 5 && parsedLimit <= 50;
  };

  // const response = await getData(category, difficulty, limit);
  const response: {
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
  }[] = [
    {
      category: "saving",
      id: "FIN001",
      correctAnswer: "Inflation",
      incorrectAnswers: ["Deflation", "Stagnation", "Depreciation"],
      question:
        "What is the term for the gradual increase in the overall price level of goods and services in an economy over time?",
      tags: ["economics", "monetary policy"],
      type: "multiple_choice",
      difficulty: "easy",
      regions: [],
      isNiche: false,
    },
    {
      category: "investment",
      id: "FIN002",
      correctAnswer: "Utility company",
      incorrectAnswers: ["Technology startup", "Cryptocurrency", "Penny stock"],
      question: "Which of the following is considered a defensive stock?",
      tags: ["stocks", "defensive investments"],
      type: "multiple_choice",
      difficulty: "medium",
      regions: [],
      isNiche: false,
    },
    {
      category: "debt",
      id: "FIN003",
      correctAnswer: "Prime rate",
      incorrectAnswers: ["Federal funds rate", "Discount rate", "LIBOR"],
      question:
        "What is the term for the interest rate that banks charge their most creditworthy customers?",
      tags: ["banking", "interest rates"],
      type: "multiple_choice",
      difficulty: "medium",
      regions: [],
      isNiche: false,
    },
    {
      category: "retirement",
      id: "FIN004",
      correctAnswer: "Required Minimum Distribution",
      incorrectAnswers: [
        "Retirement Money Distribution",
        "Required Minimum Deposit",
        "Retirement Management Decision",
      ],
      question:
        "In the context of retirement planning, what does the acronym RMD stand for?",
      tags: ["retirement planning", "tax regulations"],
      type: "multiple_choice",
      difficulty: "hard",
      regions: [],
      isNiche: false,
    },
    {
      category: "debt",
      id: "FIN005",
      correctAnswer: "Moody's",
      incorrectAnswers: ["Experian", "TransUnion", "Equifax"],
      question:
        "Which of the following is NOT typically considered one of the three main credit bureaus in the United States?",
      tags: ["credit reporting", "financial institutions"],
      type: "multiple_choice",
      difficulty: "easy",
      regions: [],
      isNiche: false,
    },
    // ... (remaining questions follow the same pattern)
    {
      category: "investment",
      id: "FIN030",
      correctAnswer: "Guaranteed payout in retirement",
      incorrectAnswers: [
        "Employee controls investments",
        "Portable between employers",
        "No employer contributions",
      ],
      question:
        "Which of the following is a characteristic of a defined benefit pension plan?",
      tags: ["retirement planning", "pension plans"],
      type: "multiple_choice",
      difficulty: "hard",
      regions: [],
      isNiche: false,
    },
  ];

  return (
    <div className="bg-primary-200 min-h-screen flex items-center justify-center py-10">
      <Questions
        questions={response}
        limit={parseInt(limit, 10)}
        category={category}
      />
    </div>
  );
};

export default QuestionsPage;
