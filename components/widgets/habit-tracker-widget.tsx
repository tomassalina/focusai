"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { CheckCircle, Circle, Plus } from "lucide-react";
import { cn } from "@/lib/utils";

interface HabitTrackerWidgetProps {
  compact?: boolean;
}

interface Habit {
  id: number;
  name: string;
  target: number;
  current: number;
  streak: number;
  lastUpdated: Date | null;
}

export default function HabitTrackerWidget({
  compact = false,
}: HabitTrackerWidgetProps) {
  const [habits, setHabits] = useState<Habit[]>([
    {
      id: 1,
      name: "Meditate",
      target: 1,
      current: 1,
      streak: 7,
      lastUpdated: new Date(),
    },
    {
      id: 2,
      name: "Read",
      target: 1,
      current: 0,
      streak: 3,
      lastUpdated: null,
    },
    {
      id: 3,
      name: "Exercise",
      target: 1,
      current: 1,
      streak: 5,
      lastUpdated: new Date(),
    },
  ]);

  const toggleHabit = (id: number) => {
    setHabits(
      habits.map((habit) => {
        if (habit.id === id) {
          const newCurrent =
            habit.current === habit.target ? 0 : habit.current + 1;
          const newStreak =
            newCurrent === habit.target ? habit.streak + 1 : habit.streak;
          const newLastUpdated = newCurrent > 0 ? new Date() : null;
          return {
            ...habit,
            current: newCurrent,
            streak: newStreak,
            lastUpdated: newLastUpdated,
          };
        }
        return habit;
      })
    );
  };

  if (compact) {
    return (
      <Card className="overflow-hidden">
        <CardContent className="p-4">
          <div className="space-y-2">
            {habits.slice(0, 2).map((habit) => (
              <div key={habit.id} className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Button
                    variant="ghost"
                    size="icon"
                    className={cn(
                      "h-6 w-6 rounded-full p-0",
                      habit.current === habit.target
                        ? "text-green-500"
                        : "text-muted-foreground"
                    )}
                    onClick={() => toggleHabit(habit.id)}
                  >
                    {habit.current === habit.target ? (
                      <CheckCircle className="h-5 w-5" />
                    ) : (
                      <Circle className="h-5 w-5" />
                    )}
                  </Button>
                  <span className="text-sm">{habit.name}</span>
                </div>
                <span className="text-xs text-muted-foreground">
                  {habit.streak} days
                </span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="overflow-hidden">
      <CardHeader className="pb-2">
        <CardTitle>Habit Tracker</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {habits.map((habit) => (
            <div key={habit.id} className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Button
                    variant="ghost"
                    size="icon"
                    className={cn(
                      "h-8 w-8 rounded-full p-0",
                      habit.current === habit.target
                        ? "text-green-500"
                        : "text-muted-foreground"
                    )}
                    onClick={() => toggleHabit(habit.id)}
                  >
                    {habit.current === habit.target ? (
                      <CheckCircle className="h-6 w-6" />
                    ) : (
                      <Circle className="h-6 w-6" />
                    )}
                  </Button>
                  <div>
                    <div className="font-medium">{habit.name}</div>
                    <div className="text-xs text-muted-foreground">
                      {habit.streak} day streak
                    </div>
                  </div>
                </div>
                <div className="text-sm">
                  {habit.current}/{habit.target}
                </div>
              </div>
              <Progress
                value={(habit.current / habit.target) * 100}
                className="h-1"
              />
            </div>
          ))}

          <Button variant="outline" size="sm" className="w-full mt-2">
            <Plus className="h-4 w-4 mr-1" /> Add Habit
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
