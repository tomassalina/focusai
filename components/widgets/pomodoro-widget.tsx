"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Play, Pause, RotateCcw, Coffee } from "lucide-react";

interface PomodoroWidgetProps {
  compact?: boolean;
}

export default function PomodoroWidget({
  compact = false,
}: PomodoroWidgetProps) {
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(true);
  const [time, setTime] = useState(25 * 60); // 25 minutes in seconds
  const [isBreak, setIsBreak] = useState(false);
  const [cycles, setCycles] = useState(0);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    if (isActive && !isPaused) {
      interval = setInterval(() => {
        setTime((time) => {
          if (time <= 1) {
            clearInterval(interval!);
            // Toggle between focus and break
            setIsBreak(!isBreak);
            if (isBreak) {
              setCycles((c) => c + 1);
              return 25 * 60; // 25 min focus
            } else {
              return 5 * 60; // 5 min break
            }
          }
          return time - 1;
        });
      }, 1000);
    } else if (interval) {
      clearInterval(interval);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isActive, isPaused, isBreak]);

  const handleStart = () => {
    setIsActive(true);
    setIsPaused(false);
  };

  const handlePause = () => {
    setIsPaused(true);
  };

  const handleResume = () => {
    setIsPaused(false);
  };

  const handleReset = () => {
    setIsActive(false);
    setIsPaused(true);
    setTime(isBreak ? 5 * 60 : 25 * 60);
  };

  const handleToggleMode = () => {
    setIsActive(false);
    setIsPaused(true);
    setIsBreak(!isBreak);
    setTime(!isBreak ? 5 * 60 : 25 * 60);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs
      .toString()
      .padStart(2, "0")}`;
  };

  const calculateProgress = () => {
    const totalSeconds = isBreak ? 5 * 60 : 25 * 60;
    return ((totalSeconds - time) / totalSeconds) * 100;
  };

  if (compact) {
    return (
      <Card className="overflow-hidden">
        <CardContent className="p-4">
          <div className="flex flex-col items-center">
            <div className="text-2xl font-bold mb-1">{formatTime(time)}</div>
            <div className="w-full mb-2">
              <Progress value={calculateProgress()} className="h-1" />
            </div>
            <div className="flex gap-1">
              {isPaused ? (
                <Button
                  onClick={isActive ? handleResume : handleStart}
                  size="sm"
                  variant="outline"
                  className="h-7 w-7 p-0"
                >
                  <Play className="h-3 w-3" />
                </Button>
              ) : (
                <Button
                  onClick={handlePause}
                  size="sm"
                  variant="outline"
                  className="h-7 w-7 p-0"
                >
                  <Pause className="h-3 w-3" />
                </Button>
              )}
              <Button
                onClick={handleReset}
                size="sm"
                variant="outline"
                className="h-7 w-7 p-0"
              >
                <RotateCcw className="h-3 w-3" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="overflow-hidden">
      <CardHeader className="pb-2">
        <CardTitle>Pomodoro Timer</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col items-center">
          <div className="text-4xl font-bold mb-2">{formatTime(time)}</div>
          <div className="text-sm text-muted-foreground mb-2">
            {isBreak ? "Break Time" : "Focus Time"} • Cycle {cycles}
          </div>
          <div className="w-full mb-4">
            <Progress value={calculateProgress()} className="h-2" />
          </div>
          <div className="flex gap-2">
            {isPaused ? (
              <Button onClick={isActive ? handleResume : handleStart} size="sm">
                <Play className="h-4 w-4 mr-1" />{" "}
                {isActive ? "Resume" : "Start"}
              </Button>
            ) : (
              <Button onClick={handlePause} variant="outline" size="sm">
                <Pause className="h-4 w-4 mr-1" /> Pause
              </Button>
            )}

            <Button onClick={handleReset} variant="outline" size="sm">
              <RotateCcw className="h-4 w-4 mr-1" /> Reset
            </Button>

            <Button onClick={handleToggleMode} variant="outline" size="sm">
              <Coffee className="h-4 w-4 mr-1" /> {isBreak ? "Focus" : "Break"}
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
