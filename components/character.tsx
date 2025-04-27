"use client";

import type React from "react";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Star,
  Trophy,
  Clock,
  AlertCircle,
  Zap,
  Award,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

type MascotState = "normal" | "angry" | "crying";

interface MascotProps {
  state?: MascotState;
  onInteract?: (newState: MascotState) => void;
  width?: number;
  height?: number;
}

// Mock character data
const characters = [
  {
    id: 1,
    name: "Hooded Warrior",
    image: "/characters/character-1-normal.png",
    angryImage: "/characters/character-1-angry.png",
    cryingImage: "/characters/character-1-crying.png",
    level: 3,
    xp: 4250,
    maxXp: 5000,
    totalFocusHours: 127,
    totalFocusSessions: 312,
    distractions: 156,
    tasksCompleted: 89,
    streakDays: 42,
    achievements: 15,
  },
  {
    id: 2,
    name: "Focus Fox",
    image: "/characters/character-2-normal.png",
    angryImage: "/characters/character-2-normal.png",
    cryingImage: "/characters/red_fox.png",
    level: 2,
    xp: 2150,
    maxXp: 3000,
    totalFocusHours: 78,
    totalFocusSessions: 187,
    distractions: 92,
    tasksCompleted: 53,
    streakDays: 21,
    achievements: 8,
  },
];

// Level progression data
const levelProgression = [
  { level: 1, xpNeeded: 0, reward: "Basic customization" },
  { level: 2, xpNeeded: 1000, reward: "New expressions" },
  { level: 3, xpNeeded: 3000, reward: "Special animations" },
  { level: 4, xpNeeded: 6000, reward: "Unique background" },
  { level: 5, xpNeeded: 10000, reward: "Legendary status" },
];

// Mock focus history data
const focusHistoryData = [
  { month: "Jan", hours: 18 },
  { month: "Feb", hours: 22 },
  { month: "Mar", hours: 19 },
  { month: "Apr", hours: 25 },
  { month: "May", hours: 32 },
  { month: "Jun", hours: 28 },
];

// Mock achievements data
const achievementsData = [
  {
    name: "Early Bird",
    description: "Complete 10 focus sessions before 9 AM",
    completed: true,
  },
  {
    name: "Focus Master",
    description: "Complete 100 focus sessions",
    completed: true,
  },
  {
    name: "No Distractions",
    description: "Complete a 2-hour session with no distractions",
    completed: true,
  },
  {
    name: "Streak Warrior",
    description: "Maintain a 30-day streak",
    completed: true,
  },
  { name: "Task Champion", description: "Complete 50 tasks", completed: true },
  {
    name: "Night Owl",
    description: "Complete 20 focus sessions after 8 PM",
    completed: false,
  },
  {
    name: "Weekend Warrior",
    description: "Complete 20 focus sessions on weekends",
    completed: false,
  },
  {
    name: "Productivity Guru",
    description: "Reach 200 hours of total focus time",
    completed: false,
  },
];

export default function Character({
  state = "normal",
  onInteract,
  width = 470,
  height = 470,
}: MascotProps) {
  const [currentState, setCurrentState] = useState<MascotState>(state);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCharacterIndex, setSelectedCharacterIndex] = useState(0);

  useEffect(() => {
    setCurrentState(state);
  }, [state]);

  const handleStateChange = (newState: MascotState, e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent event from bubbling up

    if (onInteract) {
      onInteract(newState);
    } else {
      setCurrentState(newState);
    }
  };

  const handleCharacterClick = () => {
    setIsModalOpen(true);
  };

  const getCharacterImage = () => {
    switch (currentState) {
      case "angry":
        return "/characters/character-1-angry.png";
      case "crying":
        return "/characters/character-1-crying.png";
      case "normal":
      default:
        return "/characters/character-1-normal.png";
    }
  };

  const selectedCharacter = characters[selectedCharacterIndex];

  const nextCharacter = () => {
    setSelectedCharacterIndex((prev) => (prev + 1) % characters.length);
  };

  const prevCharacter = () => {
    setSelectedCharacterIndex(
      (prev) => (prev - 1 + characters.length) % characters.length
    );
  };

  return (
    <>
      <div className="relative select-none px-4 pt-0 flex items-center justify-center">
        <motion.div
          initial={{ scale: 1 }}
          animate={{
            scale: [1, 1.05, 1],
          }}
          transition={{
            repeat: 3,
            duration: 2,
            repeatType: "reverse",
          }}
          onClick={handleCharacterClick}
          className="cursor-pointer"
        >
          <div className="relative flex items-center justify-center">
            <Image
              src={getCharacterImage() || "/placeholder.svg"}
              alt={`Character in ${currentState} state`}
              width={width}
              height={height}
              className="object-contain"
              priority
            />
          </div>
        </motion.div>

        {/* State controls - vertical icons on the right */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 flex flex-col gap-2 mr-2">
          <button
            onClick={(e) => handleStateChange("normal", e)}
            className={`p-1 rounded-full transition-colors ${
              currentState === "normal"
                ? "bg-blue-100 text-blue-500"
                : "bg-gray-100 text-gray-400 hover:bg-gray-200"
            }`}
            title="Normal state"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
              <line x1="9" y1="9" x2="9.01" y2="9"></line>
              <line x1="15" y1="9" x2="15.01" y2="9"></line>
            </svg>
          </button>
          <button
            onClick={(e) => handleStateChange("crying", e)}
            className={`p-1 rounded-full transition-colors ${
              currentState === "crying"
                ? "bg-blue-100 text-blue-500"
                : "bg-gray-100 text-gray-400 hover:bg-gray-200"
            }`}
            title="Crying state"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M9.5 9A.5.5 0 0 0 9 8.5"></path>
              <path d="M14.5 9a.5.5 0 0 1 .5-.5"></path>
              <path d="M9 15h6"></path>
              <path d="M7 16c.5 1 2 2 5 2s4.5-1 5-2"></path>
              <path d="M8.5 2a6.5 6.5 0 0 0-6 9 6 6 0 0 0 1 2.5"></path>
              <path d="M17.5 11.5A6 6 0 0 1 21 6a6.5 6.5 0 0 0-6.5-4"></path>
              <path d="M9 11h0"></path>
              <path d="M15 11h0"></path>
              <path d="M8 14h0"></path>
              <path d="M16 14h0"></path>
              <path d="M8.5 2C5 2 2 5.5 2 9.5c0 2.5 1 4 2 5.5"></path>
            </svg>
          </button>
          <button
            onClick={(e) => handleStateChange("angry", e)}
            className={`p-1 rounded-full transition-colors ${
              currentState === "angry"
                ? "bg-blue-100 text-blue-500"
                : "bg-gray-100 text-gray-400 hover:bg-gray-200"
            }`}
            title="Angry state"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <path d="M16 16s-1.5-2-4-2-4 2-4 2"></path>
              <path d="M7.5 8 10 9"></path>
              <path d="m14 9 2.5-1"></path>
              <path d="M9 10h0"></path>
              <path d="M15 10h0"></path>
            </svg>
          </button>
        </div>

        {/* Experience bar */}
        <div className="absolute -bottom-0 left-6 right-0 px-2">
          <div className="flex flex-col gap-1">
            <div className="flex justify-between items-center text-xs">
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-blue-500 mr-1"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
                <span className="font-medium">Level {3}</span>
              </div>
              <span className="text-muted-foreground">4,250 XP</span>
            </div>
            <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
              <div
                className="h-full bg-primary rounded-full"
                style={{ width: "75%" }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      {/* Character Details Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="sm:max-w-[900px] max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl flex items-center justify-between">
              <span>Character Details</span>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="icon" onClick={prevCharacter}>
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <span className="text-sm font-normal">
                  {selectedCharacterIndex + 1}/{characters.length}
                </span>
                <Button variant="outline" size="icon" onClick={nextCharacter}>
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </DialogTitle>
          </DialogHeader>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Character Display */}
            <div className="md:col-span-1">
              <div className="flex flex-col items-center">
                <div className="relative w-64 h-64 mb-4">
                  <Image
                    src={selectedCharacter.image || "/placeholder.svg"}
                    alt={selectedCharacter.name}
                    fill
                    className="object-contain"
                  />
                </div>
                <h2 className="text-xl font-bold mb-2">
                  {selectedCharacter.name}
                </h2>
                <div className="flex items-center gap-2 mb-4">
                  <Star className="h-5 w-5 text-blue-500" />
                  <span className="font-medium">
                    Level {selectedCharacter.level}
                  </span>
                </div>

                <div className="w-full space-y-1 mb-4">
                  <div className="flex justify-between text-sm">
                    <span>XP Progress</span>
                    <span>
                      {selectedCharacter.xp} / {selectedCharacter.maxXp}
                    </span>
                  </div>
                  <Progress
                    value={
                      (selectedCharacter.xp / selectedCharacter.maxXp) * 100
                    }
                    className="h-2"
                  />
                </div>

                <div className="grid grid-cols-2 gap-2 w-full">
                  <div className="flex flex-col items-center p-2 border rounded-lg">
                    <Clock className="h-4 w-4 text-muted-foreground mb-1" />
                    <span className="text-lg font-bold">
                      {selectedCharacter.totalFocusHours}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      Focus Hours
                    </span>
                  </div>
                  <div className="flex flex-col items-center p-2 border rounded-lg">
                    <Zap className="h-4 w-4 text-muted-foreground mb-1" />
                    <span className="text-lg font-bold">
                      {selectedCharacter.totalFocusSessions}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      Sessions
                    </span>
                  </div>
                  <div className="flex flex-col items-center p-2 border rounded-lg">
                    <AlertCircle className="h-4 w-4 text-muted-foreground mb-1" />
                    <span className="text-lg font-bold">
                      {selectedCharacter.distractions}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      Distractions
                    </span>
                  </div>
                  <div className="flex flex-col items-center p-2 border rounded-lg">
                    <Trophy className="h-4 w-4 text-muted-foreground mb-1" />
                    <span className="text-lg font-bold">
                      {selectedCharacter.achievements}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      Achievements
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Character Stats and Details */}
            <div className="md:col-span-2">
              <Tabs defaultValue="progression">
                <TabsList className="mb-4">
                  <TabsTrigger value="progression">
                    Level Progression
                  </TabsTrigger>
                  <TabsTrigger value="stats">Statistics</TabsTrigger>
                  <TabsTrigger value="achievements">Achievements</TabsTrigger>
                </TabsList>

                <TabsContent value="progression">
                  <Card>
                    <CardHeader>
                      <CardTitle>Level Progression</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {levelProgression.map((level) => (
                          <div
                            key={level.level}
                            className={`p-4 border rounded-lg ${
                              level.level === selectedCharacter.level
                                ? "bg-primary/10 border-primary"
                                : ""
                            }`}
                          >
                            <div className="flex items-center justify-between mb-2">
                              <div className="flex items-center gap-2">
                                <Badge className="h-6 w-6 rounded-full flex items-center justify-center">
                                  {level.level}
                                </Badge>
                                <span className="font-medium">
                                  Level {level.level}
                                </span>
                              </div>
                              <Badge
                                variant="outline"
                                className={
                                  level.level <= selectedCharacter.level
                                    ? "bg-green-100 text-green-800"
                                    : ""
                                }
                              >
                                {level.level <= selectedCharacter.level
                                  ? "Unlocked"
                                  : `${level.xpNeeded} XP needed`}
                              </Badge>
                            </div>
                            <div className="text-sm text-muted-foreground">
                              <span>Reward: </span>
                              <span className="font-medium text-foreground">
                                {level.reward}
                              </span>
                            </div>
                            {level.level === selectedCharacter.level && (
                              <div className="mt-2">
                                <div className="flex justify-between text-xs mb-1">
                                  <span>
                                    Progress to Level {level.level + 1}
                                  </span>
                                  <span>
                                    {selectedCharacter.xp - level.xpNeeded} /{" "}
                                    {(
                                      levelProgression[level.level] || {
                                        xpNeeded: selectedCharacter.maxXp,
                                      }
                                    ).xpNeeded - level.xpNeeded}
                                  </span>
                                </div>
                                <Progress
                                  value={
                                    ((selectedCharacter.xp - level.xpNeeded) /
                                      ((
                                        levelProgression[level.level] || {
                                          xpNeeded: selectedCharacter.maxXp,
                                        }
                                      ).xpNeeded -
                                        level.xpNeeded)) *
                                    100
                                  }
                                  className="h-2"
                                />
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="stats">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Card>
                      <CardHeader>
                        <CardTitle>Focus History</CardTitle>
                      </CardHeader>
                      <CardContent className="h-[200px] relative">
                        <div className="absolute inset-0 flex items-end">
                          {focusHistoryData.map((month, i) => (
                            <div
                              key={i}
                              className="flex-1 flex flex-col items-center"
                            >
                              <div
                                className="w-full max-w-[30px] bg-primary rounded-t-md"
                                style={{
                                  height: `${(month.hours / 35) * 100}%`,
                                }}
                              ></div>
                              <div className="text-xs mt-1">{month.month}</div>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle>Performance Metrics</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div>
                            <div className="flex justify-between mb-1">
                              <span className="text-sm">Focus Efficiency</span>
                              <span className="text-sm font-medium">87%</span>
                            </div>
                            <Progress value={87} className="h-2" />
                          </div>
                          <div>
                            <div className="flex justify-between mb-1">
                              <span className="text-sm">
                                Task Completion Rate
                              </span>
                              <span className="text-sm font-medium">92%</span>
                            </div>
                            <Progress value={92} className="h-2" />
                          </div>
                          <div>
                            <div className="flex justify-between mb-1">
                              <span className="text-sm">
                                Distraction Resistance
                              </span>
                              <span className="text-sm font-medium">75%</span>
                            </div>
                            <Progress value={75} className="h-2" />
                          </div>
                          <div>
                            <div className="flex justify-between mb-1">
                              <span className="text-sm">
                                Streak Consistency
                              </span>
                              <span className="text-sm font-medium">83%</span>
                            </div>
                            <Progress value={83} className="h-2" />
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="md:col-span-2">
                      <CardHeader>
                        <CardTitle>Activity Summary</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                          <div className="p-3 border rounded-lg">
                            <div className="text-sm text-muted-foreground mb-1">
                              Average Daily Focus
                            </div>
                            <div className="text-xl font-bold">2.4h</div>
                          </div>
                          <div className="p-3 border rounded-lg">
                            <div className="text-sm text-muted-foreground mb-1">
                              Best Focus Day
                            </div>
                            <div className="text-xl font-bold">Monday</div>
                          </div>
                          <div className="p-3 border rounded-lg">
                            <div className="text-sm text-muted-foreground mb-1">
                              Best Focus Time
                            </div>
                            <div className="text-xl font-bold">10-12 AM</div>
                          </div>
                          <div className="p-3 border rounded-lg">
                            <div className="text-sm text-muted-foreground mb-1">
                              Longest Streak
                            </div>
                            <div className="text-xl font-bold">
                              {selectedCharacter.streakDays} days
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>

                <TabsContent value="achievements">
                  <Card>
                    <CardHeader>
                      <CardTitle>
                        Achievements (
                        {achievementsData.filter((a) => a.completed).length}/
                        {achievementsData.length})
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {achievementsData.map((achievement, i) => (
                          <div
                            key={i}
                            className={`p-4 border rounded-lg flex items-start gap-3 ${
                              achievement.completed
                                ? "bg-primary/5"
                                : "opacity-70"
                            }`}
                          >
                            <div
                              className={`rounded-full p-2 ${
                                achievement.completed
                                  ? "bg-green-100 text-green-800"
                                  : "bg-muted text-muted-foreground"
                              }`}
                            >
                              {achievement.completed ? (
                                <Award className="h-5 w-5" />
                              ) : (
                                <Award className="h-5 w-5" />
                              )}
                            </div>
                            <div>
                              <div className="font-medium">
                                {achievement.name}
                              </div>
                              <div className="text-sm text-muted-foreground">
                                {achievement.description}
                              </div>
                              {achievement.completed && (
                                <Badge
                                  variant="outline"
                                  className="mt-1 bg-green-100 text-green-800"
                                >
                                  Completed
                                </Badge>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
