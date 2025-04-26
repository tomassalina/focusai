"use client";

import { useState, useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import {
  Laptop,
  MousePointer,
  FileText,
  Clock,
  AlertCircle,
} from "lucide-react";

// Mock data for demonstration
const mockApps = [
  { id: 1, name: "VS Code", active: true, icon: "💻" },
  { id: 2, name: "Chrome", active: false, icon: "🌐" },
  { id: 3, name: "Slack", active: false, icon: "💬" },
  { id: 4, name: "Spotify", active: false, icon: "🎵" },
];

type ActivityState = "typing" | "reading" | "scrolling" | "idle";

export default function ActivityMonitor() {
  const [currentActivity, setCurrentActivity] =
    useState<ActivityState>("typing");
  const [activeApps, setActiveApps] = useState(mockApps);
  const [idleTime, setIdleTime] = useState(0);

  // Simulate activity changes
  useEffect(() => {
    const activities: ActivityState[] = [
      "typing",
      "reading",
      "scrolling",
      "idle",
    ];
    const interval = setInterval(() => {
      const randomActivity =
        activities[Math.floor(Math.random() * activities.length)];
      setCurrentActivity(randomActivity);

      // Update idle time
      if (randomActivity === "idle") {
        setIdleTime((prev) => prev + 5);
      } else {
        setIdleTime(0);
      }

      // Randomly change active app
      if (Math.random() > 0.7) {
        const newActiveApps = [...activeApps];
        const currentActiveIndex = newActiveApps.findIndex((app) => app.active);
        newActiveApps[currentActiveIndex].active = false;

        const newActiveIndex = Math.floor(Math.random() * newActiveApps.length);
        newActiveApps[newActiveIndex].active = true;

        setActiveApps(newActiveApps);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [activeApps]);

  const getActivityIcon = () => {
    switch (currentActivity) {
      case "typing":
        return <span className="text-green-500">⌨️</span>;
      case "reading":
        return <FileText className="h-4 w-4 text-blue-500" />;
      case "scrolling":
        return <MousePointer className="h-4 w-4 text-purple-500" />;
      case "idle":
        return <Clock className="h-4 w-4 text-amber-500" />;
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Laptop className="h-5 w-5 text-muted-foreground" />
          <span className="font-medium">Current Status</span>
        </div>
        <Badge variant={currentActivity === "idle" ? "destructive" : "default"}>
          {currentActivity.charAt(0).toUpperCase() + currentActivity.slice(1)}
        </Badge>
      </div>

      <div className="space-y-2">
        <div className="text-sm font-medium">Active Applications</div>
        <div className="flex flex-wrap gap-2">
          {activeApps.map((app) => (
            <Badge
              key={app.id}
              variant={app.active ? "default" : "outline"}
              className={
                app.active
                  ? "bg-green-100 text-green-800 hover:bg-green-100"
                  : ""
              }
            >
              {app.icon} {app.name}
            </Badge>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-2 text-sm">
        <div className="flex items-center gap-1">
          <span>Current activity:</span>
          <span className="font-medium flex items-center gap-1">
            {getActivityIcon()}{" "}
            {currentActivity.charAt(0).toUpperCase() + currentActivity.slice(1)}
          </span>
        </div>
      </div>

      {idleTime > 0 && (
        <div className="flex items-center gap-2 text-sm text-amber-600">
          <AlertCircle className="h-4 w-4" />
          <span>Idle for {idleTime} seconds</span>
        </div>
      )}
    </div>
  );
}
