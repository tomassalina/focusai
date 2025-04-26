"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Trophy,
  Users,
  Flame,
  Star,
  Award,
  Crown,
  Zap,
  Clock,
  Calendar,
  Globe,
  Users2,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Diamond } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";

// Mock data for demonstration
const friends = [
  {
    id: 1,
    name: "Alex Johnson",
    avatar: "/mystical-forest-spirit.png",
    streak: 12,
    todayFocus: "3h 45m",
    status: "online",
    level: 24,
  },
  {
    id: 2,
    name: "Sarah Williams",
    avatar: "/bioluminescent-forest.png",
    streak: 8,
    todayFocus: "2h 30m",
    status: "online",
    level: 18,
  },
  {
    id: 3,
    name: "Michael Brown",
    avatar: "/diverse-group-meeting.png",
    streak: 5,
    todayFocus: "1h 15m",
    status: "offline",
    level: 15,
  },
  {
    id: 4,
    name: "Emily Davis",
    avatar: "/diverse-group-meeting.png",
    streak: 20,
    todayFocus: "4h 10m",
    status: "online",
    level: 32,
  },
  {
    id: 5,
    name: "David Wilson",
    avatar: "/diverse-group-meeting.png",
    streak: 3,
    todayFocus: "0h 45m",
    status: "offline",
    level: 9,
  },
];

const friendsLeaderboard = [
  {
    id: 1,
    name: "Emily Davis",
    avatar: "/diverse-group-meeting.png",
    score: 4850,
    rank: 1,
  },
  {
    id: 2,
    name: "Alex Johnson",
    avatar: "/mystical-forest-spirit.png",
    score: 4320,
    rank: 2,
  },
  {
    id: 3,
    name: "Sarah Williams",
    avatar: "/bioluminescent-forest.png",
    score: 3950,
    rank: 3,
  },
  {
    id: 4,
    name: "Michael Brown",
    avatar: "/diverse-group-meeting.png",
    score: 3200,
    rank: 4,
  },
  {
    id: 5,
    name: "David Wilson",
    avatar: "/diverse-group-meeting.png",
    score: 2800,
    rank: 5,
  },
  {
    id: 6,
    name: "You",
    avatar: "/blue-abstract-flow.png",
    score: 2650,
    rank: 6,
  },
  {
    id: 7,
    name: "Jessica Taylor",
    avatar: "/blue-abstract-flow.png",
    score: 2400,
    rank: 7,
  },
  {
    id: 8,
    name: "Ryan Martinez",
    avatar: "/diverse-avatars.png",
    score: 2100,
    rank: 8,
  },
];

const globalLeaderboard = [
  {
    id: 1,
    name: "FocusMaster99",
    avatar: "/blue-abstract-flow.png",
    score: 9850,
    rank: 1,
  },
  {
    id: 2,
    name: "ProductivityGuru",
    avatar: "/diverse-avatars.png",
    score: 9320,
    rank: 2,
  },
  {
    id: 3,
    name: "ZenWorker",
    avatar: "/mystical-forest-spirit.png",
    score: 8950,
    rank: 3,
  },
  {
    id: 4,
    name: "DeepFocuser",
    avatar: "/diverse-group-meeting.png",
    score: 8200,
    rank: 4,
  },
  {
    id: 5,
    name: "TimeWizard",
    avatar: "/wise-forest-mage.png",
    score: 7800,
    rank: 5,
  },
  {
    id: 6,
    name: "You",
    avatar: "/blue-abstract-flow.png",
    score: 2650,
    rank: 187,
  },
  {
    id: 7,
    name: "Emily Davis",
    avatar: "/diverse-group-meeting.png",
    score: 4850,
    rank: 42,
  },
  {
    id: 8,
    name: "Alex Johnson",
    avatar: "/mystical-forest-spirit.png",
    score: 4320,
    rank: 56,
  },
];

const challenges = [
  {
    id: 1,
    title: "Focus Marathon",
    description: "Complete 5 hours of focused work today",
    reward: 500,
    progress: 65,
    timeLeft: "8h 30m",
  },
  {
    id: 2,
    title: "Distraction Slayer",
    description: "Have less than 10 distractions in a day",
    reward: 300,
    progress: 40,
    timeLeft: "8h 30m",
  },
  {
    id: 3,
    title: "Early Bird",
    description: "Start your first focus session before 9 AM",
    reward: 200,
    progress: 100,
    timeLeft: "Completed",
  },
];

// const characters = [
//   {
//     id: 1,
//     name: "Robo Helper",
//     image: "/futuristic-helper-bot.png",
//     rarity: "Common",
//     owned: true,
//     price: 0,
//   },
//   {
//     id: 2,
//     name: "Focus Fox",
//     image: "/red-fox-portrait.png",
//     rarity: "Rare",
//     owned: true,
//     price: 1000,
//   },
//   {
//     id: 3,
//     name: "Productivity Panda",
//     image: "/giant-panda-eating.png",
//     rarity: "Epic",
//     owned: false,
//     price: 2500,
//   },
//   {
//     id: 4,
//     name: "Time Wizard",
//     image: "/wise-forest-mage.png",
//     rarity: "Legendary",
//     owned: false,
//     price: 5000,
//   },
// ];

export default function SocialFeatures() {
  const [userCoins] = useState(3200);
  const [userStreak] = useState(7);
  const [userLevel] = useState(15);
  const [showGlobalLeaderboard, setShowGlobalLeaderboard] = useState(false);

  // Challenge creation state
  const [startDate, setStartDate] = useState<Date | undefined>(new Date());
  const [endDate, setEndDate] = useState<Date | undefined>(
    new Date(new Date().setDate(new Date().getDate() + 7))
  );
  const [startTime, setStartTime] = useState("09:00");
  const [endTime, setEndTime] = useState("18:00");

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader className="pb-3">
          <CardTitle>Your Progress</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex flex-col items-center p-3 border rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <Flame className="h-5 w-5 text-orange-500" />
                <span className="font-medium">Daily Streak</span>
              </div>
              <div className="text-3xl font-bold text-orange-500 mb-1">
                {userStreak} days
              </div>
              <div className="text-xs text-muted-foreground">Keep it up!</div>
            </div>

            <div className="flex flex-col items-center p-3 border rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <Trophy className="h-5 w-5 text-amber-500" />
                <span className="font-medium">Focus Coins</span>
              </div>
              <div className="text-3xl font-bold text-amber-500 mb-1">
                {userCoins}
              </div>
              <div className="text-xs text-muted-foreground">
                Spend on characters
              </div>
            </div>

            <div className="flex flex-col items-center p-3 border rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <Star className="h-5 w-5 text-blue-500" />
                <span className="font-medium">Level {userLevel}</span>
              </div>
              <Progress value={75} className="w-full h-2 mb-1" />
              <div className="text-xs text-muted-foreground">
                750/1000 XP to next level
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="friends">
        <TabsList className="mb-4">
          <TabsTrigger value="friends">
            <Users className="h-4 w-4 mr-2" />
            Friends
          </TabsTrigger>
          <TabsTrigger value="leaderboard">
            <Trophy className="h-4 w-4 mr-2" />
            Leaderboard
          </TabsTrigger>
          <TabsTrigger value="challenges">
            <Zap className="h-4 w-4 mr-2" />
            Challenges
          </TabsTrigger>
          {/*}<TabsTrigger value="characters">
            <Gift className="h-4 w-4 mr-2" />
            Characters
          </TabsTrigger> {*/}
        </TabsList>

        <TabsContent value="friends">
          <Card>
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle>Friends Activity</CardTitle>
                <Button variant="outline" size="sm">
                  Add Friend
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-[300px]">
                <div className="space-y-4">
                  {friends.map((friend) => (
                    <div
                      key={friend.id}
                      className="flex items-center justify-between p-3 border rounded-lg"
                    >
                      <div className="flex items-center gap-3">
                        <Avatar>
                          <AvatarImage
                            src={friend.avatar || "/placeholder.svg"}
                            alt={friend.name}
                          />
                          <AvatarFallback>
                            {friend.name.charAt(0)}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-medium flex items-center gap-2">
                            {friend.name}
                            <span
                              className={`w-2 h-2 rounded-full ${
                                friend.status === "online"
                                  ? "bg-green-500"
                                  : "bg-gray-300"
                              }`}
                            ></span>
                          </div>
                          <div className="text-sm text-muted-foreground">
                            Level {friend.level}
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-end">
                        <div className="flex items-center gap-1 text-sm">
                          <Flame className="h-4 w-4 text-orange-500" />
                          <span>{friend.streak} day streak</span>
                        </div>
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <Clock className="h-3 w-3" />
                          <span>Today: {friend.todayFocus}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="leaderboard">
          <Card>
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle>Weekly Leaderboard</CardTitle>
                <div className="flex items-center gap-4">
                  <div className="flex items-center space-x-2">
                    <div className="flex items-center space-x-1">
                      <Users2
                        className={`h-4 w-4 ${
                          !showGlobalLeaderboard
                            ? "text-primary"
                            : "text-muted-foreground"
                        }`}
                      />
                      <span
                        className={`text-sm ${
                          !showGlobalLeaderboard
                            ? "font-medium"
                            : "text-muted-foreground"
                        }`}
                      >
                        Friends
                      </span>
                    </div>
                    <Switch
                      checked={showGlobalLeaderboard}
                      onCheckedChange={setShowGlobalLeaderboard}
                      id="leaderboard-type"
                    />
                    <div className="flex items-center space-x-1">
                      <Globe
                        className={`h-4 w-4 ${
                          showGlobalLeaderboard
                            ? "text-primary"
                            : "text-muted-foreground"
                        }`}
                      />
                      <span
                        className={`text-sm ${
                          showGlobalLeaderboard
                            ? "font-medium"
                            : "text-muted-foreground"
                        }`}
                      >
                        Global
                      </span>
                    </div>
                  </div>
                  <Badge
                    variant="outline"
                    className="bg-blue-100 text-blue-800"
                  >
                    Week 17
                  </Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-[300px]">
                <div className="space-y-3">
                  {(showGlobalLeaderboard
                    ? globalLeaderboard
                    : friendsLeaderboard
                  ).map((user) => (
                    <div
                      key={user.id}
                      className={`flex items-center justify-between p-3 rounded-lg ${
                        user.name === "You"
                          ? "bg-primary/10 border-primary border"
                          : "border"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-8 text-center font-bold">
                          {user.rank === 1 && (
                            <Crown className="h-5 w-5 text-amber-500 mx-auto" />
                          )}
                          {user.rank === 2 && (
                            <Award className="h-5 w-5 text-gray-400 mx-auto" />
                          )}
                          {user.rank === 3 && (
                            <Award className="h-5 w-5 text-amber-700 mx-auto" />
                          )}
                          {user.rank > 3 && <span>{user.rank}</span>}
                        </div>
                        <Avatar>
                          <AvatarImage
                            src={user.avatar || "/placeholder.svg"}
                            alt={user.name}
                          />
                          <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div className="font-medium">{user.name}</div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Trophy className="h-4 w-4 text-amber-500" />
                        <span className="font-bold">{user.score}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="challenges">
          <Card>
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle>Daily Challenges</CardTitle>
                <div className="flex items-center gap-2">
                  <Badge
                    variant="outline"
                    className="bg-green-100 text-green-800"
                  >
                    1/3 Completed
                  </Badge>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button size="sm" variant="default">
                        <Zap className="h-4 w-4 mr-1" /> Create Challenge
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[600px]">
                      <DialogHeader>
                        <DialogTitle>Create New Challenge</DialogTitle>
                        <DialogDescription>
                          Challenge your friends and compete for rewards!
                        </DialogDescription>
                      </DialogHeader>
                      <div className="grid gap-4 py-4">
                        <div className="grid gap-2">
                          <Label htmlFor="challenge-name">Challenge Name</Label>
                          <Input
                            id="challenge-name"
                            placeholder="Focus Marathon"
                          />
                        </div>

                        <div className="grid gap-2">
                          <Label>Select Friends</Label>
                          <div className="grid grid-cols-2 gap-2">
                            {friends.map((friend) => (
                              <div
                                key={friend.id}
                                className="flex items-center space-x-2"
                              >
                                <Checkbox id={`friend-${friend.id}`} />
                                <label
                                  htmlFor={`friend-${friend.id}`}
                                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                >
                                  {friend.name}
                                </label>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          <div className="grid gap-2">
                            <Label>Start Date & Time</Label>
                            <div className="flex gap-2">
                              <Popover>
                                <PopoverTrigger asChild>
                                  <Button
                                    variant={"outline"}
                                    className={cn(
                                      "w-full justify-start text-left font-normal",
                                      !startDate && "text-muted-foreground"
                                    )}
                                  >
                                    <Calendar className="mr-2 h-4 w-4" />
                                    {startDate ? (
                                      format(startDate, "PPP")
                                    ) : (
                                      <span>Pick a date</span>
                                    )}
                                  </Button>
                                </PopoverTrigger>
                                <PopoverContent className="w-auto p-0">
                                  <CalendarComponent
                                    mode="single"
                                    selected={startDate}
                                    onSelect={setStartDate}
                                    initialFocus
                                  />
                                </PopoverContent>
                              </Popover>
                              <Input
                                type="time"
                                value={startTime}
                                onChange={(e) => setStartTime(e.target.value)}
                                className="w-24"
                              />
                            </div>
                          </div>

                          <div className="grid gap-2">
                            <Label>End Date & Time</Label>
                            <div className="flex gap-2">
                              <Popover>
                                <PopoverTrigger asChild>
                                  <Button
                                    variant={"outline"}
                                    className={cn(
                                      "w-full justify-start text-left font-normal",
                                      !endDate && "text-muted-foreground"
                                    )}
                                  >
                                    <Calendar className="mr-2 h-4 w-4" />
                                    {endDate ? (
                                      format(endDate, "PPP")
                                    ) : (
                                      <span>Pick a date</span>
                                    )}
                                  </Button>
                                </PopoverTrigger>
                                <PopoverContent className="w-auto p-0">
                                  <CalendarComponent
                                    mode="single"
                                    selected={endDate}
                                    onSelect={setEndDate}
                                    initialFocus
                                  />
                                </PopoverContent>
                              </Popover>
                              <Input
                                type="time"
                                value={endTime}
                                onChange={(e) => setEndTime(e.target.value)}
                                className="w-24"
                              />
                            </div>
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          <div className="grid gap-2">
                            <Label htmlFor="goal">Daily Goal (hours)</Label>
                            <Input
                              id="goal"
                              type="number"
                              min="1"
                              max="12"
                              defaultValue="4"
                            />
                          </div>
                          <div className="grid gap-2">
                            <Label htmlFor="challenge-type">
                              Challenge Type
                            </Label>
                            <select
                              id="challenge-type"
                              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            >
                              <option value="focus">Focus Time</option>
                              <option value="tasks">Tasks Completed</option>
                              <option value="streak">Streak Days</option>
                              <option value="distraction">
                                Least Distractions
                              </option>
                            </select>
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          <div className="grid gap-2">
                            <Label htmlFor="coins-bet">Focus Coins Bet</Label>
                            <div className="flex items-center">
                              <Input
                                id="coins-bet"
                                type="number"
                                min="0"
                                defaultValue="500"
                              />
                              <Trophy className="h-4 w-4 ml-2 text-amber-500" />
                            </div>
                          </div>
                          <div className="grid gap-2">
                            <Label htmlFor="emeralds-bet">Emeralds Bet</Label>
                            <div className="flex items-center">
                              <Input
                                id="emeralds-bet"
                                type="number"
                                min="0"
                                defaultValue="10"
                              />
                              <Diamond className="h-4 w-4 ml-2 text-emerald-500" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <DialogFooter>
                        <Button type="submit">Create Challenge</Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {challenges.map((challenge) => (
                  <div key={challenge.id} className="border rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-medium">{challenge.title}</h3>
                      <div className="flex items-center gap-1">
                        <Trophy className="h-4 w-4 text-amber-500" />
                        <span className="font-bold">{challenge.reward}</span>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">
                      {challenge.description}
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-xs">
                        <span>Progress</span>
                        <span>{challenge.progress}%</span>
                      </div>
                      <Progress value={challenge.progress} className="h-2" />
                      <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <span>
                          {challenge.timeLeft === "Completed" ? (
                            <Badge
                              variant="outline"
                              className="bg-green-100 text-green-800"
                            >
                              Completed
                            </Badge>
                          ) : (
                            <span>Time left: {challenge.timeLeft}</span>
                          )}
                        </span>
                        {challenge.progress < 100 && (
                          <Button
                            variant="ghost"
                            size="sm"
                            className="h-6 text-xs"
                          >
                            Focus Now
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                ))}

                <Button className="w-full">View All Challenges</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/*} <TabsContent value="characters">
          <Card>
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle>Character Collection</CardTitle>
                <div className="flex items-center gap-2">
                  <Trophy className="h-4 w-4 text-amber-500" />
                  <span className="font-bold">{userCoins} coins</span>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {characters.map((character) => (
                  <div key={character.id} className="border rounded-lg p-3 flex flex-col items-center">
                    <div className="w-20 h-20 mb-2">
                      <img
                        src={character.image || "/placeholder.svg"}
                        alt={character.name}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <h3 className="font-medium text-center">{character.name}</h3>
                    <Badge
                      variant="outline"
                      className={
                        character.rarity === "Common"
                          ? "bg-gray-100 text-gray-800"
                          : character.rarity === "Rare"
                            ? "bg-blue-100 text-blue-800"
                            : character.rarity === "Epic"
                              ? "bg-purple-100 text-purple-800"
                              : "bg-amber-100 text-amber-800"
                      }
                    >
                      {character.rarity}
                    </Badge>
                    <div className="mt-2">
                      {character.owned ? (
                        <Badge variant="outline" className="bg-green-100 text-green-800">
                          Owned
                        </Badge>
                      ) : (
                        <Button
                          size="sm"
                          variant={userCoins >= character.price ? "default" : "outline"}
                          disabled={userCoins < character.price}
                        >
                          <Trophy className="h-3 w-3 mr-1 text-amber-500" />
                          {character.price}
                        </Button>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-4 p-4 border rounded-lg bg-muted/30">
                <h3 className="font-medium mb-2">Mystery Box</h3>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm">Get a random character with a chance for rare and legendary items!</p>
                    <div className="flex items-center gap-2 mt-1">
                      <Trophy className="h-4 w-4 text-amber-500" />
                      <span className="font-bold">1000 coins</span>
                    </div>
                  </div>
                  <Button>Open Box</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent> {*/}
      </Tabs>
    </div>
  );
}
