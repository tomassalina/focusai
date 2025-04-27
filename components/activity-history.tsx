"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ChevronLeft,
  ChevronRight,
  Clock,
  ExternalLink,
  Info,
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

// Mock data for demonstration
const activityData = {
  "2023-04-22": {
    totalFocusTime: "7h 51m",
    percentOfWorkDay: "98.1%",
    targetHours: 8,
    activities: [
      { time: "18:04:33", app: "Chrome", details: "twitter.com/home" },
      { time: "18:01:15", app: "Superhuman", details: "Inbox - unread" },
      { time: "18:01:10", app: "Airtable", details: "Tasks" },
      { time: "18:00:03", app: "Slack", details: "General" },
      { time: "17:57:29", app: "Superhuman", details: "Inbox - unread" },
      { time: "17:56:14", app: "Chrome", details: "focusai.app/settings" },
      { time: "17:53:01", app: "Chrome", details: "focusai.app/settings" },
      { time: "17:53:12", app: "Slack", details: "Product Team" },
      { time: "17:49:58", app: "VS Code", details: "mascot.tsx" },
      { time: "17:49:40", app: "Terminal", details: "npm run dev" },
      { time: "17:49:15", app: "VS Code", details: "activity-monitor.tsx" },
      { time: "17:47:21", app: "Terminal", details: "git commit" },
      { time: "17:35:14", app: "VS Code", details: "index.tsx" },
    ],
    workblocks: [
      {
        startTime: "9:00",
        activity: "Daily Stand-Up",
        duration: "32 min",
        score: "-",
      },
      {
        startTime: "10:03",
        activity: "Code",
        duration: "1 hr 10 min",
        score: "97.3",
      },
      {
        startTime: "11:24",
        activity: "Documentation",
        duration: "34 min",
        score: "88.9",
      },
      {
        startTime: "12:57",
        activity: "Design",
        duration: "45 min",
        score: "94.4",
      },
      {
        startTime: "13:49",
        activity: "Code",
        duration: "23 min",
        score: "95.1",
      },
      {
        startTime: "14:45",
        activity: "Code",
        duration: "20 min",
        score: "96.8",
      },
      {
        startTime: "16:05",
        activity: "Meeting",
        duration: "42 min",
        score: "-",
      },
      {
        startTime: "17:10",
        activity: "Documentation",
        duration: "39 min",
        score: "96.2",
      },
    ],
    timeBreakdown: [
      { category: "Code", percentage: 45, duration: "2 hr 46 min" },
      { category: "Meetings", percentage: 15, duration: "1 hr 25 min" },
      { category: "Documentation", percentage: 13, duration: "1 hr 15 min" },
      { category: "Design", percentage: 10, duration: "45 min" },
      { category: "Messaging", percentage: 5, duration: "23 min" },
      { category: "Email", percentage: 4, duration: "20 min" },
      { category: "Task Management", percentage: 2, duration: "11 min" },
      { category: "Productivity", percentage: 2, duration: "10 min" },
      { category: "Miscellaneous", percentage: 1, duration: "4 min" },
    ],
  },
  "2023-04-21": {
    totalFocusTime: "6h 45m",
    percentOfWorkDay: "84.4%",
    targetHours: 8,
    activities: [
      { time: "17:30:22", app: "Chrome", details: "github.com" },
      { time: "17:15:05", app: "VS Code", details: "project.tsx" },
      { time: "16:42:18", app: "Slack", details: "Engineering" },
      { time: "16:30:00", app: "Zoom", details: "Team Meeting" },
      { time: "15:45:12", app: "Figma", details: "Design System" },
      { time: "15:20:33", app: "Chrome", details: "stackoverflow.com" },
      { time: "14:55:47", app: "VS Code", details: "components/ui" },
      { time: "14:30:10", app: "Terminal", details: "npm install" },
      { time: "13:45:22", app: "Chrome", details: "docs.google.com" },
      { time: "13:15:05", app: "Slack", details: "General" },
      { time: "12:30:18", app: "Chrome", details: "youtube.com" },
      { time: "11:45:00", app: "VS Code", details: "api/routes.ts" },
      { time: "11:15:12", app: "Postman", details: "API Testing" },
    ],
    workblocks: [
      {
        startTime: "9:30",
        activity: "Planning",
        duration: "45 min",
        score: "92.1",
      },
      {
        startTime: "10:30",
        activity: "Code",
        duration: "1 hr 30 min",
        score: "94.5",
      },
      {
        startTime: "13:15",
        activity: "Communication",
        duration: "30 min",
        score: "85.2",
      },
      {
        startTime: "14:00",
        activity: "Development",
        duration: "1 hr 45 min",
        score: "93.7",
      },
      { startTime: "16:00", activity: "Meeting", duration: "1 hr", score: "-" },
      {
        startTime: "17:15",
        activity: "Code Review",
        duration: "45 min",
        score: "91.8",
      },
    ],
    timeBreakdown: [
      { category: "Code", percentage: 40, duration: "2 hr 30 min" },
      { category: "Meetings", percentage: 20, duration: "1 hr 45 min" },
      { category: "Design", percentage: 15, duration: "1 hr" },
      { category: "Research", percentage: 10, duration: "45 min" },
      { category: "Communication", percentage: 8, duration: "30 min" },
      { category: "Planning", percentage: 7, duration: "25 min" },
    ],
  },
  "2023-04-20": {
    totalFocusTime: "8h 15m",
    percentOfWorkDay: "103.1%",
    targetHours: 8,
    activities: [
      { time: "18:30:22", app: "VS Code", details: "final commit" },
      { time: "18:15:05", app: "Chrome", details: "vercel.com" },
      { time: "17:42:18", app: "Terminal", details: "npm run build" },
      { time: "17:30:00", app: "VS Code", details: "bug fixes" },
      { time: "16:45:12", app: "Slack", details: "Product Team" },
      { time: "16:20:33", app: "Figma", details: "UI Review" },
      { time: "15:55:47", app: "Chrome", details: "analytics dashboard" },
      { time: "15:30:10", app: "VS Code", details: "feature implementation" },
      { time: "14:45:22", app: "Zoom", details: "Client Meeting" },
      { time: "14:15:05", app: "Notion", details: "Documentation" },
      { time: "13:30:18", app: "VS Code", details: "testing" },
      { time: "12:45:00", app: "Chrome", details: "research" },
      { time: "12:15:12", app: "Slack", details: "Team chat" },
    ],
    workblocks: [
      {
        startTime: "9:00",
        activity: "Planning",
        duration: "30 min",
        score: "90.5",
      },
      {
        startTime: "9:45",
        activity: "Development",
        duration: "2 hr 15 min",
        score: "96.2",
      },
      {
        startTime: "12:15",
        activity: "Communication",
        duration: "45 min",
        score: "88.3",
      },
      {
        startTime: "13:30",
        activity: "Testing",
        duration: "1 hr 15 min",
        score: "95.4",
      },
      {
        startTime: "14:45",
        activity: "Client Meeting",
        duration: "1 hr",
        score: "-",
      },
      {
        startTime: "16:00",
        activity: "Design Review",
        duration: "45 min",
        score: "92.7",
      },
      {
        startTime: "17:00",
        activity: "Deployment",
        duration: "1 hr 30 min",
        score: "97.1",
      },
    ],
    timeBreakdown: [
      { category: "Development", percentage: 45, duration: "3 hr 45 min" },
      { category: "Meetings", percentage: 15, duration: "1 hr 30 min" },
      { category: "Testing", percentage: 15, duration: "1 hr 15 min" },
      { category: "Design", percentage: 10, duration: "45 min" },
      { category: "Communication", percentage: 8, duration: "40 min" },
      { category: "Planning", percentage: 7, duration: "30 min" },
    ],
  },
};

type DateKey = keyof typeof activityData;

// Generate mock data for the activity calendar
const generateCalendarData = () => {
  const data: Record<string, number> = {};
  const today = new Date();

  // Generate data for the past year (52 weeks * 7 days)
  for (let week = 0; week < 52; week++) {
    for (let day = 0; day < 7; day++) {
      const date = new Date();
      date.setDate(today.getDate() - (week * 7 + day));
      const dateStr = date.toISOString().split("T")[0];

      // Generate random focus times (0-15)
      // More likely to have 1-5 focus times, less likely to have 0 or >8
      let focusTimes = 0;
      const rand = Math.random();

      if (rand < 0.15) {
        focusTimes = 0; // 15% chance of 0 focus times
      } else if (rand < 0.4) {
        focusTimes = 1; // 25% chance of 1 focus time
      } else if (rand < 0.65) {
        focusTimes = Math.floor(Math.random() * 3) + 2; // 25% chance of 2-4 focus times
      } else if (rand < 0.85) {
        focusTimes = Math.floor(Math.random() * 3) + 5; // 20% chance of 5-7 focus times
      } else if (rand < 0.95) {
        focusTimes = Math.floor(Math.random() * 4) + 8; // 10% chance of 8-11 focus times
      } else {
        focusTimes = Math.floor(Math.random() * 4) + 12; // 5% chance of 12-15 focus times
      }

      data[dateStr] = focusTimes;
    }
  }

  return data;
};

export default function ActivityHistory() {
  const [selectedDate, setSelectedDate] = useState<DateKey>("2023-04-22");
  const dates = Object.keys(activityData) as DateKey[];
  const currentDateIndex = dates.indexOf(selectedDate);
  const [calendarData] = useState(generateCalendarData());
  const [calendarPeriod, setCalendarPeriod] = useState("year");

  const handlePreviousDay = () => {
    if (currentDateIndex < dates.length - 1) {
      setSelectedDate(dates[currentDateIndex + 1]);
    }
  };

  const handleNextDay = () => {
    if (currentDateIndex > 0) {
      setSelectedDate(dates[currentDateIndex - 1]);
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  };

  const currentData = activityData[selectedDate];

  // Calculate total focus times for the year
  const totalFocusTimes = Object.values(calendarData).reduce(
    (sum, count) => sum + count,
    0
  );

  // Get color based on focus times
  const getFocusTimeColor = (count: number) => {
    if (count === 0) return "bg-muted/50";
    if (count <= 1) return "bg-neutral-200";
    if (count <= 3) return "bg-neutral-400";
    if (count <= 5) return "bg-neutral-600";
    if (count <= 8) return "bg-neutral-800";
    return "bg-neutral-950"; // 12 or more
  };

  // Format date for tooltip
  const formatCalendarDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div>
      <div className="flex flex-col md:flew-row gap-4 items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="icon"
            onClick={handlePreviousDay}
            disabled={currentDateIndex >= dates.length - 1}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <span className="text-sm font-medium">
            {formatDate(selectedDate)}
          </span>
          <Button
            variant="outline"
            size="icon"
            onClick={handleNextDay}
            disabled={currentDateIndex <= 0}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
        <div className="flex flex-col md:flex-row md:items-center gap-4">
          <div className="text-sm">
            <span className="text-muted-foreground">Total Focus Time:</span>{" "}
            <span className="font-medium">{currentData.totalFocusTime}</span>
          </div>
          <div className="text-sm">
            <span className="text-muted-foreground">Work Day:</span>{" "}
            <span className="font-medium">
              {currentData.percentOfWorkDay} of {currentData.targetHours}h
            </span>
          </div>
        </div>
      </div>

      <Tabs defaultValue="timeline" className="mt-4">
        <div className="overflow-x-auto pb-2">
          <TabsList className="mb-4">
            <TabsTrigger value="timeline">Timeline</TabsTrigger>
            <TabsTrigger value="apps">Apps</TabsTrigger>
            <TabsTrigger value="workblocks">Work Blocks</TabsTrigger>
            <TabsTrigger value="calendar">Activity Calendar</TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="timeline">
          <div className="relative h-[120px] mb-6 bg-muted/30 rounded-lg overflow-hidden">
            {/* Timeline visualization */}
            <div className="absolute inset-0 flex">
              {Array.from({ length: 16 }).map((_, i) => (
                <div
                  key={i}
                  className="flex-1 border-r border-muted-foreground/10 relative"
                >
                  <div className="absolute bottom-0 text-xs text-muted-foreground">
                    {(i + 6).toString().padStart(2, "0")}:00
                  </div>
                </div>
              ))}
            </div>

            {/* Activity blocks - just for visualization */}
            <div className="absolute top-4 left-[12.5%] w-[5%] h-4 bg-primary/70 rounded-sm"></div>
            <div className="absolute top-4 left-[25%] w-[10%] h-4 bg-primary/70 rounded-sm"></div>
            <div className="absolute top-4 left-[37.5%] w-[7.5%] h-4 bg-primary/70 rounded-sm"></div>
            <div className="absolute top-4 left-[50%] w-[5%] h-4 bg-primary/70 rounded-sm"></div>
            <div className="absolute top-4 left-[62.5%] w-[7.5%] h-4 bg-primary/70 rounded-sm"></div>
            <div className="absolute top-4 left-[75%] w-[5%] h-4 bg-primary/70 rounded-sm"></div>

            <div className="absolute top-12 left-[18.75%] w-[7.5%] h-4 bg-blue-500/90 rounded-sm"></div>
            <div className="absolute top-12 left-[31.25%] w-[5%] h-4 bg-blue-500/90 rounded-sm"></div>
            <div className="absolute top-12 left-[43.75%] w-[10%] h-4 bg-blue-500/90 rounded-sm"></div>
            <div className="absolute top-12 left-[62.5%] w-[12.5%] h-4 bg-blue-500/90 rounded-sm"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-medium mb-3">Time Breakdown</h3>
              <div className="space-y-3">
                {currentData.timeBreakdown.map((item, index) => (
                  <div key={index}>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm">{item.category}</span>
                      <span className="text-sm text-muted-foreground">
                        {item.duration}
                      </span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div
                        className="h-full bg-primary rounded-full"
                        style={{ width: `${item.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-3">Work Blocks</h3>
              <ScrollArea className="h-[200px]">
                <div className="space-y-2">
                  {currentData.workblocks.map((block, index) => (
                    <div
                      key={index}
                      className="flex items-center p-2 border rounded-lg"
                    >
                      <div className="w-12 text-sm text-muted-foreground">
                        {block.startTime}
                      </div>
                      <div className="flex-1 ml-2">
                        <div className="text-sm lg:text-base font-medium">
                          {block.activity}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {block.duration}
                        </div>
                      </div>
                      {block.score !== "-" && (
                        <Badge
                          variant="outline"
                          className="bg-green-100 text-green-800"
                        >
                          {block.score}
                        </Badge>
                      )}
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="apps">
          <div className="mb-4">
            <h3 className="text-lg font-medium mb-3">Application Activity</h3>
            <ScrollArea className="h-[300px] border rounded-lg p-2">
              <div className="space-y-2">
                {currentData.activities.map((activity, index) => (
                  <div
                    key={index}
                    className="flex items-center p-2 border-b last:border-0"
                  >
                    <div className="w-20 text-sm text-muted-foreground">
                      {activity.time}
                    </div>
                    <div className="w-28">
                      <Badge variant="outline" className="font-medium">
                        {activity.app}
                      </Badge>
                    </div>
                    <div className="flex-1 ml-2 text-sm flex items-center">
                      {activity.details}
                      {activity.app === "Chrome" && (
                        <ExternalLink className="h-3 w-3 ml-1 text-muted-foreground" />
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>
          </div>
        </TabsContent>

        <TabsContent value="workblocks">
          <div className="mb-4">
            <h3 className="text-lg font-medium mb-3">Work Blocks</h3>
            <div className="grid grid-cols-1 gap-2">
              {currentData.workblocks.map((block, index) => (
                <div
                  key={index}
                  className="flex flex-col md:flex-row md:items-center p-3 border rounded-lg"
                >
                  <div className="w-16 text-sm font-medium">
                    {block.startTime}
                  </div>
                  <div className="flex-1">
                    <div className="font-medium">{block.activity}</div>
                    <div className="text-sm text-muted-foreground">
                      {block.duration}
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    {block.score !== "-" ? (
                      <Badge
                        variant="outline"
                        className="bg-green-100 text-green-800"
                      >
                        {block.score}
                      </Badge>
                    ) : (
                      <Badge variant="outline">No Score</Badge>
                    )}
                    <Button variant="ghost" size="sm">
                      <Clock className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </TabsContent>

        <TabsContent value="calendar">
          <div className="mb-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-medium">
                {totalFocusTimes} focus times in the last year
              </h3>
              <Select value={calendarPeriod} onValueChange={setCalendarPeriod}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select period" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="year">Last year</SelectItem>
                  <SelectItem value="6months">Last 6 months</SelectItem>
                  <SelectItem value="3months">Last 3 months</SelectItem>
                  <SelectItem value="month">Last month</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="bg-muted/20 rounded-lg p-4 overflow-x-auto pb-2">
              <div className="min-w-[700px]">
                {/* Month labels */}
                <div className="flex text-xs text-muted-foreground mb-1">
                  <div className="w-8"></div> {/* Empty space for day labels */}
                  {[
                    "Apr",
                    "May",
                    "Jun",
                    "Jul",
                    "Aug",
                    "Sep",
                    "Oct",
                    "Nov",
                    "Dec",
                    "Jan",
                    "Feb",
                    "Mar",
                    "Apr",
                  ].map((month, index) => (
                    <div key={index} className="flex-1 text-center">
                      {month}
                    </div>
                  ))}
                </div>

                {/* Calendar grid */}
                <div className="flex">
                  {/* Day labels */}
                  <div className="flex flex-col mr-2 text-xs text-muted-foreground">
                    <div className="h-2.5"></div>{" "}
                    {/* Empty space for alignment */}
                    <div className="h-2.5 flex items-center">Mon</div>
                    <div className="h-2.5"></div>
                    <div className="h-2.5 flex items-center">Wed</div>
                    <div className="h-2.5"></div>
                    <div className="h-2.5 flex items-center">Fri</div>
                    <div className="h-2.5"></div>
                  </div>

                  {/* Calendar cells */}
                  <div className="flex-1">
                    <div className="grid grid-rows-7 grid-flow-col gap-[2px]">
                      {Object.entries(calendarData).map(
                        ([dateStr, focusCount]) => {
                          const colorClass = getFocusTimeColor(focusCount);
                          const tooltipText = `${formatCalendarDate(
                            dateStr
                          )}: ${focusCount} focus ${
                            focusCount === 1 ? "time" : "times"
                          }`;

                          return (
                            <TooltipProvider key={dateStr}>
                              <Tooltip>
                                <TooltipTrigger asChild>
                                  <div
                                    className={`h-2.5 w-2.5 rounded-sm ${colorClass}`}
                                  ></div>
                                </TooltipTrigger>
                                <TooltipContent side="top">
                                  <p className="text-xs">{tooltipText}</p>
                                </TooltipContent>
                              </Tooltip>
                            </TooltipProvider>
                          );
                        }
                      )}
                    </div>
                  </div>
                </div>

                {/* Legend */}
                <div className="flex justify-end items-center mt-2 text-xs text-muted-foreground">
                  <span>Less</span>
                  <div className="flex mx-2 gap-1">
                    <div className="h-2.5 w-2.5 rounded-sm bg-muted/30"></div>
                    <div className="h-2.5 w-2.5 rounded-sm bg-neutral-200"></div>
                    <div className="h-2.5 w-2.5 rounded-sm bg-neutral-400"></div>
                    <div className="h-2.5 w-2.5 rounded-sm bg-neutral-600"></div>
                    <div className="h-2.5 w-2.5 rounded-sm bg-neutral-800"></div>
                    <div className="h-2.5 w-2.5 rounded-sm bg-neutral-950"></div>
                  </div>
                  <span>More</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-1 mt-3 text-xs text-muted-foreground">
              <Info className="h-3 w-3" />
              <span>
                Focus times represent completed focus sessions (25+ minutes)
              </span>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
