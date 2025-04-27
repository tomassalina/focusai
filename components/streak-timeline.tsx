"use client";

import { Flame } from "lucide-react";
import { cn } from "@/lib/utils";

interface StreakTimelineProps {
  currentStreak: number;
  bestStreak: number;
  todayProgress: number;
  className?: string;
}

export default function StreakTimeline({
  currentStreak,
  bestStreak,
  todayProgress,
  className,
}: StreakTimelineProps) {
  // Generate days for the timeline
  const days = [
    { day: "Mon", completed: true, date: "04/15" },
    { day: "Tue", completed: true, date: "04/16" },
    { day: "Wed", completed: true, date: "04/17" },
    { day: "Thu", completed: true, date: "04/18" },
    { day: "Fri", completed: true, date: "04/19" },
    { day: "Sat", completed: false, date: "04/20" },
    { day: "Sun", completed: false, date: "04/21" },
    { day: "Mon", completed: true, date: "04/22", today: true },
  ];

  return (
    <div className={cn("space-y-4", className)}>
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center gap-2">
          <Flame className="h-5 w-5 text-orange-500" />
          <span className="font-medium">Current Streak</span>{" "}
          <span className="font-medium text-orange-500">
            {currentStreak} days
          </span>
        </div>
        <div className="flex items-center gap-4">
          <div className="text-sm">
            <span className="text-muted-foreground">Best Streak:</span>{" "}
            <span className="font-medium">{bestStreak} days</span>
          </div>
        </div>
      </div>

      <div className="relative">
        {/* Progress bar background */}
        <div className="h-2 bg-muted rounded-full w-full"></div>

        {/* Progress bar fill */}
        <div
          className="absolute top-0 left-0 h-2 bg-orange-500 rounded-full"
          style={{ width: `${todayProgress}%` }}
        ></div>
      </div>

      <div className="flex justify-between">
        {days.map((day, index) => (
          <div
            key={index}
            className="flex flex-col items-center"
            title={`${day.date} - ${
              day.completed ? "Completed" : "Not completed"
            }`}
          >
            <div className="text-xs text-muted-foreground mb-1">{day.day}</div>
            <div
              className={cn(
                "w-5 h-5 rounded-full flex items-center justify-center md:w-10 md:h-10",
                day.completed
                  ? "bg-orange-100 text-orange-800 border-2 border-orange-300"
                  : "bg-gray-100 text-gray-400 border-2 border-gray-200",
                day.today ? "ring-2 ring-offset-2 ring-primary" : ""
              )}
            >
              {day.completed ? (
                <Flame className="h-5 w-5 text-orange-500" />
              ) : (
                <Flame className="h-5 w-5 text-gray-300" />
              )}
            </div>
            {day.today && (
              <div className="text-xs font-medium text-primary mt-1">Today</div>
            )}
          </div>
        ))}
      </div>

      <div className="text-xs text-muted-foreground mb-3 bg-muted p-2 rounded-md">
        <div className="flex flex-col md:flex-row items-center gap-1 text-center md:text-left">
          <span className="font-medium text-primary">Streak requirement:</span>{" "}
          Complete at least 3 focus sessions (25 min each) daily
        </div>
      </div>
    </div>
  );
}
