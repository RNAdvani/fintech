"use client";

import { CoursesListCard } from "@/components/learning/CourseListCard";
import { Category } from "@my-org/types";
import { FontFamilyIcon, PersonIcon } from "@radix-ui/react-icons";
import {
  Apple,
  ChartLine,
  CircleDollarSign,
  PersonStanding,
  PiggyBank,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export function CoursesList() {
  const router = useRouter();
  const [courses, setCourses] = useState<Category[]>([]);

  const Icons = [
    {
      Investment: <CircleDollarSign />,
      Saving: <PiggyBank />,
      Earning: <ChartLine />,
      Retiring: <PersonStanding />,
    },
  ];

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch(
          "http://localhost:4000/api/v1/categories/all"
        );
        const data = await response.json();
        if (data.success) {
          setCourses(data.data);
        }
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };

    fetchCourses();
  }, []);

  return (
    <div className="grid grid-cols-2 xl:grid-cols-4 items-center gap-6 xl:gap-4 py-10">
      {courses.map((course) => (
        <div
          key={String(course._id)}
          onClick={() => {
            router.push(`/learning/${course._id}`);
          }}
        >
          <CoursesListCard
            icon={Icons[0][course.name as keyof (typeof Icons)[0]]}
            course={course}
          />
        </div>
      ))}
    </div>
  );
}
