import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import {
  Calendar,
  CheckCircle,
  BarChart2,
  Settings,
  Award,
  AlertCircle,
  ShoppingBag,
} from "lucide-react";
import Link from "next/link";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import Character from "@/components/character";
import FocusTimer from "@/components/focus-timer";
import ActivityMonitor from "@/components/activity-monitor";
import AppUsageChart from "@/components/app-usage-chart";
import ActivityHistory from "@/components/activity-history";
import ChatInterface from "@/components/chat-interface";
import SocialFeatures from "@/components/social-features";
import MusicPlayer from "@/components/music-player";
import StreakTimeline from "@/components/streak-timeline";
import CurrencyDisplay from "@/components/currency-display";
import LifePercentage from "@/components/life-percentage";

export default function Dashboard() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur">
        <div className="container mx-auto flex h-16 items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="text-xl font-bold text-primary">FocusAI</span>
            <CurrencyDisplay coins={3250} emeralds={75} />
          </div>
          <nav className="flex items-center gap-6">
            <Link
              href="/marketplace"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              <ShoppingBag className="h-5 w-5" />
            </Link>
            <Link
              href="/analytics"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              <BarChart2 className="h-5 w-5" />
            </Link>
            <Link
              href="/calendar"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              <Calendar className="h-5 w-5" />
            </Link>
            <Link
              href="/tasks"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              <CheckCircle className="h-5 w-5" />
            </Link>
            <Link
              href="/settings"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              <Settings className="h-5 w-5" />
            </Link>
          </nav>
        </div>
      </header>

      <main className="flex-1 container mx-auto py-6">
        <div className="flex items-center justify-between mb-6">
          <Tabs defaultValue="focus" className="w-full">
            <div className="flex items-center justify-between">
              <TabsList>
                <TabsTrigger value="focus">Focus Dashboard</TabsTrigger>
                <TabsTrigger value="social">Social & Rewards</TabsTrigger>
              </TabsList>
              <MusicPlayer />
            </div>

            <TabsContent value="focus">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                <div className="md:col-span-2">
                  <Card className="mb-6 gap-2 pb-8">
                    <CardHeader className="pb-3">
                      <div className="flex justify-between items-center">
                        <CardTitle>Focus Dashboard</CardTitle>
                        <div className="flex items-center gap-2">
                          <Badge
                            variant="outline"
                            className="bg-green-100 text-green-800"
                          >
                            Focus Sessions: 2/3
                          </Badge>
                          <Link href="/tasks">
                            <Badge
                              variant="outline"
                              className="bg-orange-100 text-orange-800 cursor-pointer"
                            >
                              Tasks: 4/7
                            </Badge>
                          </Link>
                        </div>
                      </div>
                      <CardDescription>
                        Track your productivity and stay focused
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-col md:flex-row gap-6 items-center">
                        <div className="flex-1">
                          <FocusTimer />
                        </div>
                        <div className="flex-1 flex justify-center">
                          <Character state="normal" width={150} height={150} />
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Streak Timeline */}
                  <Card className="mb-6">
                    <CardContent className="pt-6">
                      <StreakTimeline
                        currentStreak={7}
                        bestStreak={14}
                        todayProgress={65}
                      />
                    </CardContent>
                  </Card>

                  {/* Life Percentage */}
                  <Card className="mb-6">
                    <CardHeader>
                      <CardTitle className="text-base">Time Elapsed</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <LifePercentage birthDate="2004-08-30" />
                    </CardContent>
                  </Card>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-base">
                          Today&apos;s Focus
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div>
                            <div className="flex items-center justify-between mb-1">
                              <span className="text-sm font-medium">
                                Focus Time
                              </span>
                              <span className="text-sm text-muted-foreground">
                                3h 25m / 5h
                              </span>
                            </div>
                            <Progress value={68} className="h-2" />
                          </div>
                          <div>
                            <div className="flex items-center justify-between mb-1">
                              <span className="text-sm font-medium">
                                Tasks Completed
                              </span>
                              <span className="text-sm text-muted-foreground">
                                4 / 7
                              </span>
                            </div>
                            <Progress value={57} className="h-2" />
                          </div>
                          <div>
                            <div className="flex items-center justify-between mb-1">
                              <span className="text-sm font-medium">
                                Distractions
                              </span>
                              <span className="text-sm text-muted-foreground">
                                8 times
                              </span>
                            </div>
                            <div className="flex items-center gap-2 mt-2">
                              <Badge
                                variant="outline"
                                className="bg-red-50 text-red-800"
                              >
                                Twitter
                              </Badge>
                              <Badge
                                variant="outline"
                                className="bg-red-50 text-red-800"
                              >
                                YouTube
                              </Badge>
                              <Badge
                                variant="outline"
                                className="bg-red-50 text-red-800"
                              >
                                Instagram
                              </Badge>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle className="text-base">
                          Activity Monitor
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ActivityMonitor />
                      </CardContent>
                    </Card>
                  </div>

                  {/* Activity History integrated into main dashboard */}
                  <Card className="mb-6">
                    <CardHeader>
                      <CardTitle className="text-base">
                        Activity History
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ActivityHistory />
                    </CardContent>
                  </Card>
                </div>

                <div className="space-y-6">
                  <div className="h-[974px]">
                    <ChatInterface />
                  </div>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-base">App Usage</CardTitle>
                    </CardHeader>
                    <CardContent className="h-[200px]">
                      <AppUsageChart />
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-base">
                        Tips & Insights
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex gap-2 items-start">
                          <AlertCircle className="h-5 w-5 text-amber-500 flex-shrink-0" />
                          <p className="text-sm">
                            You tend to lose focus after 40 minutes. Try the
                            Pomodoro technique: 25 min work, 5 min break.
                          </p>
                        </div>
                        <div className="flex gap-2 items-start">
                          <Award className="h-5 w-5 text-green-500 flex-shrink-0" />
                          <p className="text-sm">
                            Your most productive time is between 9-11 AM.
                            Schedule important tasks during this window.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="social">
              <div className="mt-6">
                <SocialFeatures />
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
    // \
    //   <div className="mb-24"></div>
  );
}
