/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { format, subDays } from "date-fns";
import { cn } from "@/lib/utils";
import Link from "next/link";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Cell,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
} from "recharts";
import {
  ArrowLeft,
  ArrowUpRight,
  CalendarIcon,
  Clock,
  Trophy,
  Users,
  Zap,
  Activity,
  BarChart2,
  Target,
  Flame,
  AlertCircle,
  CheckCircle,
  Star,
  Award,
  TrendingUp,
  TrendingDown,
  Laptop,
  Smartphone,
  Tablet,
  Download,
  Info,
  RefreshCw,
  ChevronDown,
} from "lucide-react";

// Mock data for focus time by day
const focusTimeByDay = [
  { day: "Mon", hours: 5.2, target: 6 },
  { day: "Tue", hours: 6.8, target: 6 },
  { day: "Wed", hours: 4.5, target: 6 },
  { day: "Thu", hours: 7.2, target: 6 },
  { day: "Fri", hours: 5.9, target: 6 },
  { day: "Sat", hours: 3.1, target: 4 },
  { day: "Sun", hours: 2.4, target: 4 },
];

// Mock data for focus time by hour
const focusTimeByHour = [
  { hour: "6AM", productivity: 45 },
  { hour: "7AM", productivity: 60 },
  { hour: "8AM", productivity: 75 },
  { hour: "9AM", productivity: 90 },
  { hour: "10AM", productivity: 95 },
  { hour: "11AM", productivity: 85 },
  { hour: "12PM", productivity: 70 },
  { hour: "1PM", productivity: 65 },
  { hour: "2PM", productivity: 80 },
  { hour: "3PM", productivity: 85 },
  { hour: "4PM", productivity: 75 },
  { hour: "5PM", productivity: 65 },
  { hour: "6PM", productivity: 55 },
  { hour: "7PM", productivity: 50 },
  { hour: "8PM", productivity: 45 },
  { hour: "9PM", productivity: 40 },
];

// Mock data for app usage
const appUsageData = [
  { name: "VS Code", value: 35, color: "#3b82f6" },
  { name: "Chrome", value: 25, color: "#ef4444" },
  { name: "Slack", value: 15, color: "#10b981" },
  { name: "Spotify", value: 10, color: "#8b5cf6" },
  { name: "Notion", value: 8, color: "#000000" },
  { name: "Others", value: 7, color: "#94a3b8" },
];

// Mock data for distraction sources
const distractionData = [
  { name: "Social Media", value: 42, color: "#f97316" },
  { name: "Email", value: 21, color: "#3b82f6" },
  { name: "Messaging", value: 18, color: "#10b981" },
  { name: "News", value: 11, color: "#8b5cf6" },
  { name: "Shopping", value: 8, color: "#ec4899" },
];

// Mock data for focus trends
const focusTrendData = [
  { week: "Week 1", hours: 22.5, sessions: 18 },
  { week: "Week 2", hours: 25.8, sessions: 21 },
  { week: "Week 3", hours: 24.2, sessions: 19 },
  { week: "Week 4", hours: 28.7, sessions: 23 },
  { week: "Week 5", hours: 30.1, sessions: 25 },
  { week: "Week 6", hours: 27.9, sessions: 22 },
  { week: "Week 7", hours: 32.4, sessions: 26 },
  { week: "Week 8", hours: 35.2, sessions: 28 },
];

// Mock data for task completion
const taskCompletionData = [
  { day: "Mon", completed: 8, total: 10 },
  { day: "Tue", completed: 7, total: 8 },
  { day: "Wed", completed: 5, total: 9 },
  { day: "Thu", completed: 9, total: 11 },
  { day: "Fri", completed: 6, total: 7 },
  { day: "Sat", completed: 3, total: 4 },
  { day: "Sun", completed: 2, total: 3 },
];

// Mock data for friend comparison
const friendComparisonData = [
  { name: "You", focus: 32.4, tasks: 40, streak: 7 },
  { name: "Alex", focus: 28.7, tasks: 35, streak: 12 },
  { name: "Sarah", focus: 35.2, tasks: 42, streak: 8 },
  { name: "Michael", focus: 22.5, tasks: 28, streak: 5 },
  { name: "Emily", focus: 38.9, tasks: 45, streak: 20 },
];

// Mock data for character progression
const characterProgressionData = [
  {
    name: "Hooded Warrior",
    level: 3,
    xp: 4250,
    maxXp: 5000,
    focusHours: 127,
    achievements: 15,
  },
  {
    name: "Focus Fox",
    level: 2,
    xp: 2150,
    maxXp: 3000,
    focusHours: 78,
    achievements: 8,
  },
];

// Mock data for productivity radar
const productivityRadarData = [
  { subject: "Focus Time", A: 85, fullMark: 100 },
  { subject: "Task Completion", A: 78, fullMark: 100 },
  { subject: "Distraction Resistance", A: 65, fullMark: 100 },
  { subject: "Streak Consistency", A: 90, fullMark: 100 },
  { subject: "Deep Work", A: 72, fullMark: 100 },
  { subject: "Work-Life Balance", A: 80, fullMark: 100 },
];

// Mock data for monthly focus hours
const monthlyFocusData = [
  { name: "Jan", hours: 85 },
  { name: "Feb", hours: 92 },
  { name: "Mar", hours: 87 },
  { name: "Apr", hours: 95 },
  { name: "May", hours: 110 },
  { name: "Jun", hours: 102 },
  { name: "Jul", hours: 118 },
  { name: "Aug", hours: 125 },
  { name: "Sep", hours: 115 },
  { name: "Oct", hours: 130 },
  { name: "Nov", hours: 122 },
  { name: "Dec", hours: 105 },
];

// Mock data for insights
const insightsData = [
  {
    title: "Peak Productivity Time",
    description:
      "Your most productive hours are between 9AM and 11AM. Schedule important tasks during this time.",
    icon: Clock,
    trend: "up",
    value: "95%",
  },
  {
    title: "Distraction Patterns",
    description:
      "Social media accounts for 42% of your distractions. Consider using website blockers during focus time.",
    icon: AlertCircle,
    trend: "down",
    value: "-15%",
  },
  {
    title: "Task Efficiency",
    description:
      "You complete 78% of your planned tasks. This is 12% higher than last month.",
    icon: CheckCircle,
    trend: "up",
    value: "+12%",
  },
  {
    title: "Focus Consistency",
    description:
      "Your focus sessions are most consistent on Tuesdays and Thursdays.",
    icon: Target,
    trend: "up",
    value: "+8%",
  },
];

export default function AnalyticsPage() {
  // const [date, setDate] = useState<Date>(new Date());
  const [dateRange, setDateRange] = useState<{ from: Date; to: Date }>({
    from: subDays(new Date(), 30),
    to: new Date(),
  });

  return (
    <div className="container mx-auto py-6 px-4">
      <div className="flex items-center gap-2 justify-between mb-6 flex-col md:flex-row">
        <div className="flex items-center gap-4">
          <Link href="/" className="mr-2">
            <ArrowLeft className="h-5 w-5" />
          </Link>
          <h1 className="text-2xl font-bold">Analytics Dashboard</h1>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline" className="flex items-center gap-2">
                  <CalendarIcon className="h-4 w-4" />
                  <span>
                    {format(dateRange.from, "MMM d, yyyy")} -{" "}
                    {format(dateRange.to, "MMM d, yyyy")}
                  </span>
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="end">
                <Calendar
                  initialFocus
                  mode="range"
                  defaultMonth={dateRange.from}
                  selected={{ from: dateRange.from, to: dateRange.to }}
                  onSelect={(range) =>
                    range &&
                    range.from &&
                    range.to &&
                    setDateRange(range as any)
                  }
                  numberOfMonths={2}
                />
              </PopoverContent>
            </Popover>
          </div>
          <Button variant="outline" size="icon">
            <RefreshCw className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon">
            <Download className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-medium text-muted-foreground mb-1">
                  Total Focus Time
                </p>
                <div className="flex items-baseline">
                  <h3 className="text-2xl font-bold">32.4h</h3>
                  <p className="text-sm text-green-600 ml-2 flex items-center">
                    <ArrowUpRight className="h-3 w-3 mr-1" />
                    +12.5%
                  </p>
                </div>
              </div>
              <div className="p-2 bg-primary/10 rounded-full">
                <Clock className="h-5 w-5 text-primary" />
              </div>
            </div>
            <div className="mt-4">
              <div className="flex justify-between text-xs mb-1">
                <span>Weekly Goal (40h)</span>
                <span>81%</span>
              </div>
              <Progress value={81} className="h-1.5" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-medium text-muted-foreground mb-1">
                  Focus Sessions
                </p>
                <div className="flex items-baseline">
                  <h3 className="text-2xl font-bold">26</h3>
                  <p className="text-sm text-green-600 ml-2 flex items-center">
                    <ArrowUpRight className="h-3 w-3 mr-1" />
                    +8.3%
                  </p>
                </div>
              </div>
              <div className="p-2 bg-primary/10 rounded-full">
                <Zap className="h-5 w-5 text-primary" />
              </div>
            </div>
            <div className="mt-4">
              <div className="flex justify-between text-xs mb-1">
                <span>Weekly Goal (30)</span>
                <span>87%</span>
              </div>
              <Progress value={87} className="h-1.5" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-medium text-muted-foreground mb-1">
                  Tasks Completed
                </p>
                <div className="flex items-baseline">
                  <h3 className="text-2xl font-bold">40</h3>
                  <p className="text-sm text-green-600 ml-2 flex items-center">
                    <ArrowUpRight className="h-3 w-3 mr-1" />
                    +5.2%
                  </p>
                </div>
              </div>
              <div className="p-2 bg-primary/10 rounded-full">
                <CheckCircle className="h-5 w-5 text-primary" />
              </div>
            </div>
            <div className="mt-4">
              <div className="flex justify-between text-xs mb-1">
                <span>Completion Rate</span>
                <span>78%</span>
              </div>
              <Progress value={78} className="h-1.5" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-medium text-muted-foreground mb-1">
                  Current Streak
                </p>
                <div className="flex items-baseline">
                  <h3 className="text-2xl font-bold">7 days</h3>
                  <p className="text-sm text-amber-600 ml-2 flex items-center">
                    <Flame className="h-3 w-3 mr-1" />
                    Best: 21
                  </p>
                </div>
              </div>
              <div className="p-2 bg-primary/10 rounded-full">
                <Flame className="h-5 w-5 text-primary" />
              </div>
            </div>
            <div className="mt-4">
              <div className="flex justify-between text-xs mb-1">
                <span>Streak Consistency</span>
                <span>92%</span>
              </div>
              <Progress value={92} className="h-1.5" />
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="overview" className="space-y-4">
        <div className="overflow-x-auto">
          <TabsList className="">
            <TabsTrigger value="overview">
              <BarChart2 className="h-4 w-4 mr-2" />
              Overview
            </TabsTrigger>
            <TabsTrigger value="focus">
              <Clock className="h-4 w-4 mr-2" />
              Focus Analysis
            </TabsTrigger>
            <TabsTrigger value="productivity">
              <Activity className="h-4 w-4 mr-2" />
              Productivity
            </TabsTrigger>
            <TabsTrigger value="social">
              <Users className="h-4 w-4 mr-2" />
              Social Comparison
            </TabsTrigger>
            <TabsTrigger value="insights">
              <Zap className="h-4 w-4 mr-2" />
              Insights
            </TabsTrigger>
          </TabsList>
        </div>

        {/* Overview Tab */}
        <TabsContent value="overview" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Focus Time by Day */}
            <Card>
              <CardHeader>
                <CardTitle>Focus Time by Day</CardTitle>
                <CardDescription>
                  Hours spent focusing each day of the week
                </CardDescription>
              </CardHeader>
              <CardContent className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={focusTimeByDay}
                    margin={{ top: 10, right: 10, left: 0, bottom: 20 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="day" />
                    <YAxis tickFormatter={(value) => `${value}h`} />
                    <Tooltip
                      formatter={(value) => [`${value} hours`, "Focus Time"]}
                      labelFormatter={(label) => `${label}`}
                    />
                    <Legend />
                    <Bar
                      name="Focus Hours"
                      dataKey="hours"
                      fill="#3b82f6"
                      radius={[4, 4, 0, 0]}
                    />
                    <Bar
                      name="Target"
                      dataKey="target"
                      fill="#94a3b8"
                      radius={[4, 4, 0, 0]}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            {/* Productivity by Hour */}
            <Card>
              <CardHeader>
                <CardTitle>Productivity by Hour</CardTitle>
                <CardDescription>
                  Your productivity score throughout the day
                </CardDescription>
              </CardHeader>
              <CardContent className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart
                    data={focusTimeByHour}
                    margin={{ top: 10, right: 10, left: 0, bottom: 20 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="hour" />
                    <YAxis tickFormatter={(value) => `${value}%`} />
                    <Tooltip
                      formatter={(value) => [`${value}%`, "Productivity"]}
                      labelFormatter={(label) => `${label}`}
                    />
                    <Line
                      type="monotone"
                      name="Productivity"
                      dataKey="productivity"
                      stroke="#3b82f6"
                      strokeWidth={2}
                      dot={{ r: 4 }}
                      activeDot={{ r: 6 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* App Usage */}
            <Card>
              <CardHeader>
                <CardTitle>App Usage</CardTitle>
                <CardDescription>
                  Time spent on different applications
                </CardDescription>
              </CardHeader>
              <CardContent className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={appUsageData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={90}
                      paddingAngle={2}
                      dataKey="value"
                      label={({ name, percent }) =>
                        `${name} ${(percent * 100).toFixed(0)}%`
                      }
                      labelLine={false}
                    >
                      {appUsageData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip formatter={(value) => [`${value}%`, "Usage"]} />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            {/* Distraction Sources */}
            <Card>
              <CardHeader>
                <CardTitle>Distraction Sources</CardTitle>
                <CardDescription>
                  What&apos;s distracting you the most
                </CardDescription>
              </CardHeader>
              <CardContent className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={distractionData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={90}
                      paddingAngle={2}
                      dataKey="value"
                      label={({ name, percent }) =>
                        `${name} ${(percent * 100).toFixed(0)}%`
                      }
                      labelLine={false}
                    >
                      {distractionData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip
                      formatter={(value) => [`${value}%`, "Percentage"]}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            {/* Productivity Radar */}
            <Card>
              <CardHeader>
                <CardTitle>Productivity Metrics</CardTitle>
                <CardDescription>
                  Your performance across key metrics
                </CardDescription>
              </CardHeader>
              <CardContent className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <RadarChart
                    cx="50%"
                    cy="50%"
                    outerRadius="80%"
                    data={productivityRadarData}
                  >
                    <PolarGrid />
                    <PolarAngleAxis dataKey="subject" />
                    <PolarRadiusAxis angle={30} domain={[0, 100]} />
                    <Radar
                      name="Performance"
                      dataKey="A"
                      stroke="#3b82f6"
                      fill="#3b82f6"
                      fillOpacity={0.6}
                    />
                    <Tooltip formatter={(value) => [`${value}%`, "Score"]} />
                  </RadarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>

          {/* Focus Trends */}
          <Card>
            <CardHeader>
              <CardTitle>Focus Trends</CardTitle>
              <CardDescription>
                Your focus time and sessions over the past 8 weeks
              </CardDescription>
            </CardHeader>
            <CardContent className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={focusTrendData}
                  margin={{ top: 10, right: 10, left: 0, bottom: 20 }}
                >
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="week" />
                  <YAxis
                    yAxisId="left"
                    tickFormatter={(value) => `${value}h`}
                  />
                  <YAxis
                    yAxisId="right"
                    orientation="right"
                    tickFormatter={(value) => `${value}`}
                  />
                  <Tooltip />
                  <Legend />
                  <Line
                    yAxisId="left"
                    type="monotone"
                    name="Focus Hours"
                    dataKey="hours"
                    stroke="#3b82f6"
                    strokeWidth={2}
                    dot={{ r: 4 }}
                    activeDot={{ r: 6 }}
                  />
                  <Line
                    yAxisId="right"
                    type="monotone"
                    name="Focus Sessions"
                    dataKey="sessions"
                    stroke="#10b981"
                    strokeWidth={2}
                    dot={{ r: 4 }}
                    activeDot={{ r: 6 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Key Insights */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {insightsData.map((insight, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="p-2 bg-primary/10 rounded-full">
                      <insight.icon className="h-5 w-5 text-primary" />
                    </div>
                    <Badge
                      variant="outline"
                      className={cn(
                        insight.trend === "up"
                          ? "bg-green-100 text-green-800"
                          : "bg-red-100 text-red-800"
                      )}
                    >
                      {insight.value}
                    </Badge>
                  </div>
                  <h3 className="text-lg font-medium mt-4">{insight.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    {insight.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Focus Analysis Tab */}
        <TabsContent value="focus" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card className="md:col-span-2">
              <CardHeader>
                <CardTitle>Monthly Focus Hours</CardTitle>
                <CardDescription>
                  Your focus time throughout the year
                </CardDescription>
              </CardHeader>
              <CardContent className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart
                    data={monthlyFocusData}
                    margin={{ top: 10, right: 10, left: 0, bottom: 20 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="name" />
                    <YAxis tickFormatter={(value) => `${value}h`} />
                    <Tooltip
                      formatter={(value) => [`${value} hours`, "Focus Time"]}
                    />
                    <Area
                      type="monotone"
                      dataKey="hours"
                      stroke="#3b82f6"
                      fill="#3b82f6"
                      fillOpacity={0.2}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Focus Distribution</CardTitle>
                <CardDescription>When you focus the most</CardDescription>
              </CardHeader>
              <CardContent className="h-[300px]">
                <div className="grid grid-cols-7 grid-rows-12 gap-1 h-full">
                  {Array.from({ length: 7 * 12 }).map((_, i) => {
                    const day = i % 7;
                    const hour = Math.floor(i / 7) + 8; // Starting from 8 AM
                    const intensity = Math.random();
                    let bgColor = "bg-gray-100";

                    if (intensity > 0.8) bgColor = "bg-blue-500";
                    else if (intensity > 0.6) bgColor = "bg-blue-400";
                    else if (intensity > 0.4) bgColor = "bg-blue-300";
                    else if (intensity > 0.2) bgColor = "bg-blue-200";
                    else if (intensity > 0) bgColor = "bg-blue-100";

                    return (
                      <div
                        key={i}
                        className={`${bgColor} rounded-sm`}
                        title={`${
                          ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][day]
                        } at ${hour > 12 ? hour - 12 : hour}${
                          hour >= 12 ? "PM" : "AM"
                        }`}
                      />
                    );
                  })}
                </div>
                <div className="flex justify-between mt-4 text-xs text-muted-foreground">
                  <div>Sun</div>
                  <div>Mon</div>
                  <div>Tue</div>
                  <div>Wed</div>
                  <div>Thu</div>
                  <div>Fri</div>
                  <div>Sat</div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <CardHeader>
                <CardTitle>Focus Session Length</CardTitle>
                <CardDescription>
                  Distribution of your focus session durations
                </CardDescription>
              </CardHeader>
              <CardContent className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={[
                      { length: "< 15 min", sessions: 5 },
                      { length: "15-30 min", sessions: 12 },
                      { length: "30-45 min", sessions: 18 },
                      { length: "45-60 min", sessions: 24 },
                      { length: "60-90 min", sessions: 15 },
                      { length: "> 90 min", sessions: 8 },
                    ]}
                    margin={{ top: 10, right: 10, left: 0, bottom: 20 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="length" />
                    <YAxis />
                    <Tooltip
                      formatter={(value) => [`${value} sessions`, "Count"]}
                    />
                    <Bar
                      dataKey="sessions"
                      fill="#3b82f6"
                      radius={[4, 4, 0, 0]}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Focus Quality</CardTitle>
                <CardDescription>
                  Quality score of your focus sessions over time
                </CardDescription>
              </CardHeader>
              <CardContent className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart
                    data={[
                      { day: "Mon", quality: 85 },
                      { day: "Tue", quality: 92 },
                      { day: "Wed", quality: 78 },
                      { day: "Thu", quality: 90 },
                      { day: "Fri", quality: 82 },
                      { day: "Sat", quality: 75 },
                      { day: "Sun", quality: 70 },
                    ]}
                    margin={{ top: 10, right: 10, left: 0, bottom: 20 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="day" />
                    <YAxis
                      domain={[0, 100]}
                      tickFormatter={(value) => `${value}%`}
                    />
                    <Tooltip
                      formatter={(value) => [`${value}%`, "Quality Score"]}
                    />
                    <Line
                      type="monotone"
                      dataKey="quality"
                      stroke="#3b82f6"
                      strokeWidth={2}
                      dot={{ r: 4 }}
                      activeDot={{ r: 6 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card>
              <CardHeader>
                <CardTitle>Focus by Device</CardTitle>
                <CardDescription>
                  Hours spent focusing on different devices
                </CardDescription>
              </CardHeader>
              <CardContent className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={[
                        { name: "Desktop", value: 65, color: "#3b82f6" },
                        { name: "Mobile", value: 20, color: "#10b981" },
                        { name: "Tablet", value: 15, color: "#8b5cf6" },
                      ]}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={90}
                      paddingAngle={2}
                      dataKey="value"
                      label={({ name, percent }) =>
                        `${name} ${(percent * 100).toFixed(0)}%`
                      }
                      labelLine={false}
                    >
                      {[
                        { name: "Desktop", value: 65, color: "#3b82f6" },
                        { name: "Mobile", value: 20, color: "#10b981" },
                        { name: "Tablet", value: 15, color: "#8b5cf6" },
                      ].map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip formatter={(value) => [`${value}%`, "Usage"]} />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
              <div className="px-6 pb-6">
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center">
                    <Laptop className="h-4 w-4 mr-2 text-blue-500" />
                    <span>Desktop</span>
                  </div>
                  <div className="flex items-center">
                    <Smartphone className="h-4 w-4 mr-2 text-green-500" />
                    <span>Mobile</span>
                  </div>
                  <div className="flex items-center">
                    <Tablet className="h-4 w-4 mr-2 text-purple-500" />
                    <span>Tablet</span>
                  </div>
                </div>
              </div>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Focus by Location</CardTitle>
                <CardDescription>Where you focus the most</CardDescription>
              </CardHeader>
              <CardContent className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    layout="vertical"
                    data={[
                      { location: "Home Office", hours: 18.5 },
                      { location: "Coffee Shop", hours: 5.2 },
                      { location: "Work Office", hours: 6.8 },
                      { location: "Library", hours: 1.9 },
                    ]}
                    margin={{ top: 10, right: 10, left: 80, bottom: 20 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" horizontal={false} />
                    <XAxis
                      type="number"
                      tickFormatter={(value) => `${value}h`}
                    />
                    <YAxis type="category" dataKey="location" width={80} />
                    <Tooltip
                      formatter={(value) => [`${value} hours`, "Focus Time"]}
                    />
                    <Bar dataKey="hours" fill="#3b82f6" radius={[0, 4, 4, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Focus Interruptions</CardTitle>
                <CardDescription>
                  Number of interruptions during focus time
                </CardDescription>
              </CardHeader>
              <CardContent className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart
                    data={[
                      { day: "Mon", interruptions: 12 },
                      { day: "Tue", interruptions: 8 },
                      { day: "Wed", interruptions: 15 },
                      { day: "Thu", interruptions: 6 },
                      { day: "Fri", interruptions: 10 },
                      { day: "Sat", interruptions: 5 },
                      { day: "Sun", interruptions: 3 },
                    ]}
                    margin={{ top: 10, right: 10, left: 0, bottom: 20 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="day" />
                    <YAxis />
                    <Tooltip
                      formatter={(value) => [`${value}`, "Interruptions"]}
                    />
                    <Line
                      type="monotone"
                      dataKey="interruptions"
                      stroke="#ef4444"
                      strokeWidth={2}
                      dot={{ r: 4 }}
                      activeDot={{ r: 6 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Productivity Tab */}
        <TabsContent value="productivity" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <CardHeader>
                <CardTitle>Task Completion</CardTitle>
                <CardDescription>
                  Tasks completed vs. planned each day
                </CardDescription>
              </CardHeader>
              <CardContent className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={taskCompletionData}
                    margin={{ top: 10, right: 10, left: 0, bottom: 20 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="day" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar
                      name="Completed"
                      dataKey="completed"
                      fill="#10b981"
                      radius={[4, 4, 0, 0]}
                    />
                    <Bar
                      name="Total"
                      dataKey="total"
                      fill="#94a3b8"
                      radius={[4, 4, 0, 0]}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Productivity Score</CardTitle>
                <CardDescription>Your daily productivity score</CardDescription>
              </CardHeader>
              <CardContent className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart
                    data={[
                      { day: "Mon", score: 82 },
                      { day: "Tue", score: 88 },
                      { day: "Wed", score: 76 },
                      { day: "Thu", score: 91 },
                      { day: "Fri", score: 84 },
                      { day: "Sat", score: 72 },
                      { day: "Sun", score: 68 },
                    ]}
                    margin={{ top: 10, right: 10, left: 0, bottom: 20 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="day" />
                    <YAxis
                      domain={[0, 100]}
                      tickFormatter={(value) => `${value}`}
                    />
                    <Tooltip formatter={(value) => [`${value}`, "Score"]} />
                    <Line
                      type="monotone"
                      dataKey="score"
                      stroke="#10b981"
                      strokeWidth={2}
                      dot={{ r: 4 }}
                      activeDot={{ r: 6 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card>
              <CardHeader>
                <CardTitle>Task Categories</CardTitle>
                <CardDescription>
                  Distribution of tasks by category
                </CardDescription>
              </CardHeader>
              <CardContent className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={[
                        { name: "Work", value: 45, color: "#3b82f6" },
                        { name: "Study", value: 25, color: "#8b5cf6" },
                        { name: "Personal", value: 20, color: "#10b981" },
                        { name: "Health", value: 10, color: "#ef4444" },
                      ]}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={90}
                      paddingAngle={2}
                      dataKey="value"
                      label={({ name, percent }) =>
                        `${name} ${(percent * 100).toFixed(0)}%`
                      }
                      labelLine={false}
                    >
                      {[
                        { name: "Work", value: 45, color: "#3b82f6" },
                        { name: "Study", value: 25, color: "#8b5cf6" },
                        { name: "Personal", value: 20, color: "#10b981" },
                        { name: "Health", value: 10, color: "#ef4444" },
                      ].map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip
                      formatter={(value) => [`${value}%`, "Percentage"]}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Task Priority</CardTitle>
                <CardDescription>Tasks by priority level</CardDescription>
              </CardHeader>
              <CardContent className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    layout="vertical"
                    data={[
                      { priority: "High", completed: 12, total: 15 },
                      { priority: "Medium", completed: 18, total: 22 },
                      { priority: "Low", completed: 10, total: 12 },
                    ]}
                    margin={{ top: 10, right: 10, left: 80, bottom: 20 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" horizontal={false} />
                    <XAxis type="number" />
                    <YAxis type="category" dataKey="priority" width={80} />
                    <Tooltip />
                    <Legend />
                    <Bar
                      name="Completed"
                      dataKey="completed"
                      fill="#10b981"
                      radius={[0, 4, 4, 0]}
                    />
                    <Bar
                      name="Total"
                      dataKey="total"
                      stackId="a"
                      fill="#94a3b8"
                      radius={[0, 4, 4, 0]}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Task Completion Time</CardTitle>
                <CardDescription>
                  Average time to complete tasks
                </CardDescription>
              </CardHeader>
              <CardContent className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={[
                      { category: "Work", time: 45 },
                      { category: "Study", time: 35 },
                      { category: "Personal", time: 25 },
                      { category: "Health", time: 20 },
                    ]}
                    margin={{ top: 10, right: 10, left: 0, bottom: 20 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="category" />
                    <YAxis tickFormatter={(value) => `${value}m`} />
                    <Tooltip
                      formatter={(value) => [`${value} minutes`, "Avg. Time"]}
                    />
                    <Bar dataKey="time" fill="#8b5cf6" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Productivity Insights</CardTitle>
              <CardDescription>
                AI-generated insights about your productivity
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start gap-3 p-4 border rounded-lg">
                  <div className="p-2 bg-green-100 rounded-full">
                    <TrendingUp className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-medium">Task Efficiency Improved</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      Your task completion efficiency has improved by 15%
                      compared to last month. You&apos;re completing more tasks
                      in less time.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 border rounded-lg">
                  <div className="p-2 bg-amber-100 rounded-full">
                    <Clock className="h-5 w-5 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="font-medium">Optimal Work Hours</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      Your most productive hours are between 9AM and 11AM.
                      Schedule your most important and challenging tasks during
                      this time.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 border rounded-lg">
                  <div className="p-2 bg-red-100 rounded-full">
                    <TrendingDown className="h-5 w-5 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-medium">Distraction Pattern</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      Social media accounts for 42% of your distractions.
                      Consider using website blockers during focus sessions to
                      minimize these interruptions.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 border rounded-lg">
                  <div className="p-2 bg-blue-100 rounded-full">
                    <Target className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-medium">Focus Session Length</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      Your most effective focus sessions are between 45-60
                      minutes. Consider using this duration for your Pomodoro
                      sessions.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Social Comparison Tab */}
        <TabsContent value="social" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <CardHeader>
                <CardTitle>Friend Comparison</CardTitle>
                <CardDescription>
                  How you compare with your friends
                </CardDescription>
              </CardHeader>
              <CardContent className="h-[400px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={friendComparisonData}
                    margin={{ top: 10, right: 10, left: 0, bottom: 20 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="name" />
                    <YAxis
                      yAxisId="left"
                      tickFormatter={(value) => `${value}h`}
                    />
                    <YAxis yAxisId="right" orientation="right" />
                    <Tooltip />
                    <Legend />
                    <Bar
                      yAxisId="left"
                      name="Focus Hours"
                      dataKey="focus"
                      fill="#3b82f6"
                      radius={[4, 4, 0, 0]}
                    />
                    <Bar
                      yAxisId="right"
                      name="Tasks Completed"
                      dataKey="tasks"
                      fill="#10b981"
                      radius={[4, 4, 0, 0]}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Streak Comparison</CardTitle>
                <CardDescription>
                  Current streak days compared to friends
                </CardDescription>
              </CardHeader>
              <CardContent className="h-[400px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    layout="vertical"
                    data={friendComparisonData}
                    margin={{ top: 10, right: 10, left: 80, bottom: 20 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" horizontal={false} />
                    <XAxis type="number" />
                    <YAxis type="category" dataKey="name" width={80} />
                    <Tooltip
                      formatter={(value) => [`${value} days`, "Streak"]}
                    />
                    <Bar
                      dataKey="streak"
                      fill="#f97316"
                      radius={[0, 4, 4, 0]}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Leaderboard</CardTitle>
              <CardDescription>
                Weekly productivity ranking among friends
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-[400px]">
                <div className="space-y-4">
                  {friendComparisonData
                    .sort((a, b) => b.focus - a.focus)
                    .map((friend, index) => (
                      <div
                        key={index}
                        className={`flex items-center justify-between p-4 rounded-lg ${
                          friend.name === "You"
                            ? "bg-primary/10 border-primary border"
                            : "border"
                        }`}
                      >
                        <div className="flex items-center gap-4">
                          <div className="flex items-center justify-center w-8 h-8 rounded-full bg-muted font-bold">
                            {index + 1}
                          </div>
                          <Avatar>
                            <AvatarImage
                              src={`/abstract-geometric-shapes.png?height=40&width=40&query=${friend.name}`}
                            />
                            <AvatarFallback>
                              {friend.name.charAt(0)}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="font-medium">{friend.name}</div>
                            <div className="text-sm text-muted-foreground">
                              {friend.focus} hours • {friend.tasks} tasks
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="flex items-center gap-1">
                            <Trophy className="h-4 w-4 text-amber-500" />
                            <span className="font-medium">
                              {Math.floor(friend.focus * 100)}
                            </span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Flame className="h-4 w-4 text-orange-500" />
                            <span className="font-medium">{friend.streak}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </ScrollArea>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <CardHeader>
                <CardTitle>Character Progression</CardTitle>
                <CardDescription>
                  Level and XP progress of your characters
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {characterProgressionData.map((character, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <Avatar>
                            <AvatarImage
                              src={`/abstract-geometric-shapes.png?height=40&width=40&query=${character.name}`}
                            />
                            <AvatarFallback>
                              {character.name.charAt(0)}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="font-medium">{character.name}</div>
                            <div className="flex items-center text-sm text-muted-foreground">
                              <Star className="h-3 w-3 mr-1 text-amber-500" />
                              Level {character.level}
                            </div>
                          </div>
                        </div>
                        <Badge
                          variant="outline"
                          className="bg-blue-100 text-blue-800"
                        >
                          {character.focusHours} hours
                        </Badge>
                      </div>
                      <div className="space-y-1">
                        <div className="flex justify-between text-xs">
                          <span>XP Progress</span>
                          <span>
                            {character.xp} / {character.maxXp}
                          </span>
                        </div>
                        <Progress
                          value={(character.xp / character.maxXp) * 100}
                          className="h-2"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Challenges</CardTitle>
                <CardDescription>
                  Active challenges with friends
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 border rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-medium">Focus Marathon</h3>
                      <Badge
                        variant="outline"
                        className="bg-amber-100 text-amber-800"
                      >
                        3 days left
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">
                      Complete 20 hours of focus time this week. Competing with
                      4 friends.
                    </p>
                    <div className="space-y-2">
                      <div className="flex justify-between text-xs">
                        <span>Your Progress (16.5h / 20h)</span>
                        <span>82.5%</span>
                      </div>
                      <Progress value={82.5} className="h-2" />
                    </div>
                    <div className="mt-3 flex items-center gap-2">
                      <Avatar className="h-6 w-6">
                        <AvatarFallback>Y</AvatarFallback>
                      </Avatar>
                      <Avatar className="h-6 w-6">
                        <AvatarFallback>A</AvatarFallback>
                      </Avatar>
                      <Avatar className="h-6 w-6">
                        <AvatarFallback>S</AvatarFallback>
                      </Avatar>
                      <Avatar className="h-6 w-6">
                        <AvatarFallback>E</AvatarFallback>
                      </Avatar>
                    </div>
                  </div>

                  <div className="p-4 border rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-medium">Task Champion</h3>
                      <Badge
                        variant="outline"
                        className="bg-green-100 text-green-800"
                      >
                        5 days left
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">
                      Complete 30 tasks this week. Competing with 3 friends.
                    </p>
                    <div className="space-y-2">
                      <div className="flex justify-between text-xs">
                        <span>Your Progress (22 / 30)</span>
                        <span>73.3%</span>
                      </div>
                      <Progress value={73.3} className="h-2" />
                    </div>
                    <div className="mt-3 flex items-center gap-2">
                      <Avatar className="h-6 w-6">
                        <AvatarFallback>Y</AvatarFallback>
                      </Avatar>
                      <Avatar className="h-6 w-6">
                        <AvatarFallback>M</AvatarFallback>
                      </Avatar>
                      <Avatar className="h-6 w-6">
                        <AvatarFallback>S</AvatarFallback>
                      </Avatar>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Insights Tab */}
        <TabsContent value="insights" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <CardHeader>
                <CardTitle>Productivity Patterns</CardTitle>
                <CardDescription>
                  AI-detected patterns in your productivity
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start gap-3 p-4 border rounded-lg">
                    <div className="p-2 bg-blue-100 rounded-full">
                      <Clock className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-medium">Peak Productivity Hours</h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        Your productivity peaks between 9AM and 11AM, with a
                        secondary peak between 2PM and 4PM. Schedule your most
                        important tasks during these times.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 border rounded-lg">
                    <div className="p-2 bg-green-100 rounded-full">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-medium">Task Completion Pattern</h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        You complete 78% of your tasks, which is 12% higher than
                        last month. You&apos;re most likely to complete tasks on
                        Tuesdays and Thursdays.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 border rounded-lg">
                    <div className="p-2 bg-amber-100 rounded-full">
                      <AlertCircle className="h-5 w-5 text-amber-600" />
                    </div>
                    <div>
                      <h3 className="font-medium">Distraction Triggers</h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        You&apos;re most likely to get distracted after 2 hours
                        of continuous work and around 3PM in the afternoon.
                        Consider taking short breaks before these times.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 border rounded-lg">
                    <div className="p-2 bg-purple-100 rounded-full">
                      <Zap className="h-5 w-5 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="font-medium">Focus Session Length</h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        Your most effective focus sessions are between 45-60
                        minutes long. Sessions longer than 90 minutes show a 25%
                        decrease in productivity. Consider using the Pomodoro
                        technique with 45-minute work intervals.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Recommendations</CardTitle>
                <CardDescription>
                  Personalized recommendations to improve productivity
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start gap-3 p-4 border rounded-lg">
                    <div className="p-2 bg-blue-100 rounded-full">
                      <Target className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-medium">Optimize Your Schedule</h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        Schedule your most challenging and important tasks
                        between 9AM and 11AM when your focus is at its peak. Use
                        the 2PM-4PM window for collaborative or less demanding
                        tasks.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 border rounded-lg">
                    <div className="p-2 bg-green-100 rounded-full">
                      <Zap className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-medium">Adjust Focus Sessions</h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        Use 45-minute focus sessions followed by 10-minute
                        breaks for optimal productivity. This aligns with your
                        natural focus rhythm and can increase your productivity
                        by up to 20%.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 border rounded-lg">
                    <div className="p-2 bg-red-100 rounded-full">
                      <AlertCircle className="h-5 w-5 text-red-600" />
                    </div>
                    <div>
                      <h3 className="font-medium">Reduce Distractions</h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        Use website blockers to limit social media access during
                        focus sessions. Schedule specific times to check email
                        and messages rather than responding immediately.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 border rounded-lg">
                    <div className="p-2 bg-amber-100 rounded-full">
                      <Award className="h-5 w-5 text-amber-600" />
                    </div>
                    <div>
                      <h3 className="font-medium">Set Achievable Goals</h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        Your task completion rate is highest when you set 5-7
                        tasks per day. Aim for this range to maintain momentum
                        without feeling overwhelmed.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Productivity Score Breakdown</CardTitle>
              <CardDescription>
                Detailed analysis of your productivity score components
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">
                        Focus Time Efficiency
                      </span>
                      <span className="text-sm font-medium">85%</span>
                    </div>
                    <Progress value={85} className="h-2 mb-2" />
                    <p className="text-xs text-muted-foreground">
                      Measures how effectively you maintain focus during
                      scheduled sessions.
                    </p>
                  </div>

                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">
                        Task Completion Rate
                      </span>
                      <span className="text-sm font-medium">78%</span>
                    </div>
                    <Progress value={78} className="h-2 mb-2" />
                    <p className="text-xs text-muted-foreground">
                      Percentage of planned tasks that you complete on time.
                    </p>
                  </div>

                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">
                        Distraction Resistance
                      </span>
                      <span className="text-sm font-medium">65%</span>
                    </div>
                    <Progress value={65} className="h-2 mb-2" />
                    <p className="text-xs text-muted-foreground">
                      Your ability to avoid and manage distractions during focus
                      time.
                    </p>
                  </div>

                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">
                        Streak Consistency
                      </span>
                      <span className="text-sm font-medium">90%</span>
                    </div>
                    <Progress value={90} className="h-2 mb-2" />
                    <p className="text-xs text-muted-foreground">
                      How consistently you maintain your daily focus streaks.
                    </p>
                  </div>

                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">
                        Deep Work Quality
                      </span>
                      <span className="text-sm font-medium">72%</span>
                    </div>
                    <Progress value={72} className="h-2 mb-2" />
                    <p className="text-xs text-muted-foreground">
                      Quality and depth of your focused work sessions.
                    </p>
                  </div>

                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">
                        Work-Life Balance
                      </span>
                      <span className="text-sm font-medium">80%</span>
                    </div>
                    <Progress value={80} className="h-2 mb-2" />
                    <p className="text-xs text-muted-foreground">
                      Balance between productivity and taking necessary breaks.
                    </p>
                  </div>
                </div>

                <div className="p-4 bg-muted/30 rounded-lg mt-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Info className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm font-medium">
                      Overall Productivity Score
                    </span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-2xl font-bold">78</span>
                    </div>
                    <div>
                      <div className="text-sm font-medium">Very Good</div>
                      <p className="text-xs text-muted-foreground mt-1">
                        Your productivity score is in the top 25% of all users.
                        Focus on improving your distraction resistance to reach
                        the &quot;Excellent&quot; tier.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <CardHeader>
                <CardTitle>Long-term Trends</CardTitle>
                <CardDescription>
                  Your productivity trends over the past 6 months
                </CardDescription>
              </CardHeader>
              <CardContent className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart
                    data={[
                      { month: "Jan", score: 65 },
                      { month: "Feb", score: 68 },
                      { month: "Mar", score: 72 },
                      { month: "Apr", score: 70 },
                      { month: "May", score: 75 },
                      { month: "Jun", score: 78 },
                    ]}
                    margin={{ top: 10, right: 10, left: 0, bottom: 20 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="month" />
                    <YAxis domain={[0, 100]} />
                    <Tooltip
                      formatter={(value) => [`${value}`, "Productivity Score"]}
                    />
                    <Line
                      type="monotone"
                      dataKey="score"
                      stroke="#3b82f6"
                      strokeWidth={2}
                      dot={{ r: 4 }}
                      activeDot={{ r: 6 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Improvement Areas</CardTitle>
                <CardDescription>
                  Areas with the most potential for improvement
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">
                        Distraction Management
                      </span>
                      <span className="text-sm font-medium text-amber-600">
                        High Impact
                      </span>
                    </div>
                    <Progress value={35} className="h-2 mb-2" />
                    <p className="text-xs text-muted-foreground">
                      Reducing social media distractions could improve your
                      productivity by up to 25%.
                    </p>
                  </div>

                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">
                        Focus Session Length
                      </span>
                      <span className="text-sm font-medium text-amber-600">
                        Medium Impact
                      </span>
                    </div>
                    <Progress value={25} className="h-2 mb-2" />
                    <p className="text-xs text-muted-foreground">
                      Optimizing your focus session length could improve
                      productivity by up to 15%.
                    </p>
                  </div>

                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">
                        Task Prioritization
                      </span>
                      <span className="text-sm font-medium text-amber-600">
                        Medium Impact
                      </span>
                    </div>
                    <Progress value={20} className="h-2 mb-2" />
                    <p className="text-xs text-muted-foreground">
                      Better prioritization of tasks could improve your
                      efficiency by up to 12%.
                    </p>
                  </div>

                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">
                        Break Optimization
                      </span>
                      <span className="text-sm font-medium text-amber-600">
                        Low Impact
                      </span>
                    </div>
                    <Progress value={15} className="h-2 mb-2" />
                    <p className="text-xs text-muted-foreground">
                      Optimizing your break schedule could improve productivity
                      by up to 8%.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
