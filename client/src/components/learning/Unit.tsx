"use client";

import { useEffect, useState } from "react";
import { UnitBanner } from "@/components/learning/UnitBanner";
import { LearnButton } from "@/components/learning/LearnButton";
import { Lesson } from "@my-org/types";
import axios from "axios";

type CategoryProgress = {
  categoryName: string;
  completedLessonsCount: number;
  availableLessons: Lesson[];
  isCategoryCompleted: boolean;
  canTakeMegaQuiz: boolean;
};

type UnitProps = {
  categoryId: string;
  clerkId: string;
  variant?: "primary" | "secondary" | "danger" | "super" | "highlight" | "golden";
};

export function Unit({ categoryId, clerkId, variant = "primary" }: UnitProps) {
  const [progress, setProgress] = useState<CategoryProgress | null>(null);

  useEffect(() => {
    const fetchCategoryProgress = async () => {
      try {
        const res = await axios.post("http://localhost:4000/api/v1/categories/progress",{
          clerkId,
          categoryId
        });
       setProgress(res.data.data);
       console.log(res.data.data);
      } catch (error) {
        console.error('Error fetching category progress:', error);
      }
    };

    fetchCategoryProgress();
  }, [categoryId, clerkId]);

  if (!progress) return <div>Loading...</div>;

  return (
    <section className="space-y-10 pb-16">
      <UnitBanner 
        title={progress.categoryName} 
        description={`${progress.completedLessonsCount} of 10 lessons completed`}
        color={variant}
      />
      <ul className="flex flex-col items-center space-y-5">
        {progress.availableLessons.map((lesson, idx) => (
          <li key={String(lesson._id)}>
            <LearnButton
               id={String(lesson._id)}
              index={idx}
              totalCount={10}
              title={lesson.title}
              current={idx === progress.completedLessonsCount}
              completed={idx < progress.completedLessonsCount}
              percentage={idx === progress.completedLessonsCount ? 0 : 100}
              variant={variant}
            />
          </li>
        ))}
      </ul>
    </section>
  );
}