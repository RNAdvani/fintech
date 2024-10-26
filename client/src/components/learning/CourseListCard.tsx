import { Category } from "@my-org/types";

type CoursesListCardProps = {
  course: Category;
  icon: JSX.Element; // Add this line
};

export function CoursesListCard({ course, icon }: CoursesListCardProps) {
  // Update props to include `icon`
  return (
    <div>
      <label className="flex min-h-[217px] aspect-square cursor-pointer flex-col items-center justify-center gap-y-6 rounded-xl border-2 border-b-4 bg-card px-[30%] pb-6 pt-14 font-bold text-card-foreground ring-offset-background transition-colors hover:bg-border/60 active:border-2 peer-focus-visible:outline-none peer-focus-visible:ring-2 peer-focus-visible:ring-ring peer-focus-visible:ring-offset-2 peer-disabled:cursor-not-allowed peer-disabled:opacity-50 peer-disabled:hover:bg-card peer-disabled:active:border-b-4">
        <div className="  ">{icon}</div>
        <span>{course.name}</span>
      </label>
    </div>
  );
}
