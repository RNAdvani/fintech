import { CoursesList } from "@/components/learning/CourseList";
import { Accessibility, Banknote, DollarSign, HandCoins } from "lucide-react";
import { CategoryWithImage } from "@/types";
import axios from "axios";

export default async function Courses() {
  const handleGetCourses = async () => {
    try {
      const res = await axios.get(
        "http://localhost:4000/api/v1/categories/all"
      );
      console.log(res.data);
    } catch (error) {
      console.error("Error fetching courses:", error);
    }
  };

  return (
    <div className="flex flex-col h-full justify-center">
      <h1 className="text-semi-bold text-6xl">Courses</h1>
      <CoursesList />
    </div>
  );
}
