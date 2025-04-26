"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Play, Pause, RotateCcw, Coffee } from "lucide-react";
import { cn } from "@/lib/utils";

export default function FocusTimer() {
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(true);
  const [time, setTime] = useState(25 * 60); // 25 minutes in seconds
  const [isBreak, setIsBreak] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    if (isActive && !isPaused) {
      interval = setInterval(() => {
        setTime((time) => {
          if (time <= 1) {
            clearInterval(interval!);
            // Toggle between focus and break
            setIsBreak(!isBreak);
            return isBreak ? 25 * 60 : 5 * 60; // 25 min focus or 5 min break
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

  return (
    <div className="flex flex-col items-center">
      <div className="text-4xl font-bold mb-4 flex items-center gap-2">
        <span>{formatTime(time)}</span>
        <span
          className={cn(
            "text-sm px-2 py-1 rounded",
            isBreak
              ? "bg-blue-100 text-blue-800"
              : "bg-green-100 text-green-800"
          )}
        >
          {isBreak ? "Break" : "Focus"}
        </span>
      </div>

      <div className="flex gap-2">
        {isPaused ? (
          <Button onClick={isActive ? handleResume : handleStart} size="sm">
            <Play className="h-4 w-4 mr-1" /> {isActive ? "Resume" : "Start"}
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
  );
}
