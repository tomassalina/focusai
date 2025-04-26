"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  ArrowLeft,
  Trophy,
  Diamond,
  Star,
  Filter,
  Clock,
  BarChart2,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import TreasureChest from "@/components/treasure-chest";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

// Widgets
import WeatherWidget from "@/components/widgets/weather-widget";
import PomodoroWidget from "@/components/widgets/pomodoro-widget";
import QuoteWidget from "@/components/widgets/quote-widget";
import HabitTrackerWidget from "@/components/widgets/habit-tracker-widget";
import CountdownWidget from "@/components/widgets/countdown-widget";
import NotesWidget from "@/components/widgets/notes-widget";
import LifePercentage from "@/components/life-percentage";
import AppUsageChart from "@/components/app-usage-chart";

// Mock character data
const characters = [
  {
    id: 1,
    name: "Hooded Warrior",
    image: "/characters/character-1-normal.png",
    description: "Your loyal companion on the productivity journey.",
    rarity: "Common",
    owned: true,
    price: { coins: 0, emeralds: 0 },
  },
  {
    id: 2,
    name: "Focus Fox",
    image: "/characters/character-2-normal.png",
    description:
      "Quick and nimble, helps you stay alert during focus sessions.",
    rarity: "Rare",
    owned: false,
    price: { coins: 1000, emeralds: 20 },
  },
  {
    id: 3,
    name: "Productivity Panda",
    image: "/characters/character-3-normal.png",
    description: "Calm and focused, perfect for long work sessions.",
    rarity: "Epic",
    owned: false,
    price: { coins: 2500, emeralds: 40 },
  },
  {
    id: 4,
    name: "Time Wizard",
    image: "/characters/character-4-normal.png",
    description: "Master of time management with special productivity powers.",
    rarity: "Legendary",
    owned: false,
    price: { coins: 3000, emeralds: 50 },
  },
  {
    id: 5,
    name: "Cosmic Guardian",
    image: "/characters/character-5-normal.png",
    description:
      "Protector of your focus with otherworldly concentration abilities.",
    rarity: "Legendary",
    owned: false,
    price: { coins: 4000, emeralds: 75 },
  },
  {
    id: 6,
    name: "Zen Master",
    image: "/characters/character-6-normal.png",
    description: "Brings peace and clarity to your work environment.",
    rarity: "Epic",
    owned: false,
    price: { coins: 2000, emeralds: 35 },
  },
  {
    id: 7,
    name: "Digital Detective",
    image: "/characters/character-7-normal.png",
    description: "Helps you track down distractions and eliminate them.",
    rarity: "Rare",
    owned: false,
    price: { coins: 1500, emeralds: 25 },
  },
  {
    id: 8,
    name: "Quantum Companion",
    image: "/characters/character-8-normal.png",
    description: "Exists in multiple states to help you multitask effectively.",
    rarity: "Legendary",
    owned: false,
    price: { coins: 5000, emeralds: 100 },
  },
];

// Mock theme data
const themes = [
  {
    id: 1,
    name: "Classic Office",
    image: "/themes/theme-1.png",
    description: "Traditional workspace with a professional feel.",
    rarity: "Common",
    owned: true,
    price: { emeralds: 0 },
  },
  {
    id: 2,
    name: "Zen Garden",
    image: "/themes/theme-2.png",
    description: "Peaceful environment with natural elements for calm focus.",
    rarity: "Rare",
    owned: false,
    price: { emeralds: 15 },
  },
  {
    id: 3,
    name: "Space Station",
    image: "/themes/theme-3.png",
    description: "Futuristic workspace with a view of the cosmos.",
    rarity: "Epic",
    owned: false,
    price: { emeralds: 30 },
  },
  {
    id: 4,
    name: "Enchanted Library",
    image: "/themes/theme-4.png",
    description: "Surrounded by ancient knowledge and magical ambiance.",
    rarity: "Legendary",
    owned: false,
    price: { emeralds: 40 },
  },
];

// Mock emerald packages
const emeraldPackages = [
  {
    id: 1,
    name: "Starter Pack",
    amount: 50,
    price: "$4.99",
    bonus: "+5 bonus",
    popular: false,
  },
  {
    id: 2,
    name: "Value Pack",
    amount: 125,
    price: "$9.99",
    bonus: "+25 bonus",
    popular: true,
  },
  {
    id: 3,
    name: "Premium Pack",
    amount: 300,
    price: "$19.99",
    bonus: "+75 bonus",
    popular: false,
  },
  {
    id: 4,
    name: "Ultimate Pack",
    amount: 650,
    price: "$39.99",
    bonus: "+150 bonus",
    popular: false,
  },
];

// Mock widgets data
const widgets = [
  {
    id: 1,
    name: "Time Elapsed",
    description:
      "Track the percentage of time elapsed for day, week, month, etc.",
    price: 25,
    owned: true,
    component: LifePercentage,
    props: { birthDate: "2004-08-30", scale: 30 },
  },
  {
    id: 2,
    name: "App Usage Chart",
    description: "Visualize your application usage with an interactive chart.",
    price: 30,
    owned: true,
    component: AppUsageChart,
  },
  {
    id: 3,
    name: "Weather",
    description: "Stay updated with current weather conditions.",
    price: 20,
    owned: false,
    component: WeatherWidget,
  },
  {
    id: 4,
    name: "Pomodoro Timer",
    description: "Boost productivity with a customizable Pomodoro timer.",
    price: 35,
    owned: false,
    component: PomodoroWidget,
  },
  {
    id: 5,
    name: "Motivational Quotes",
    description: "Get inspired with daily productivity quotes.",
    price: 15,
    owned: false,
    component: QuoteWidget,
  },
  {
    id: 6,
    name: "Habit Tracker",
    description: "Track your daily habits and build streaks.",
    price: 40,
    owned: false,
    component: HabitTrackerWidget,
  },
  {
    id: 7,
    name: "Countdown Timer",
    description: "Count down to important deadlines and events.",
    price: 25,
    owned: false,
    component: CountdownWidget,
  },
  {
    id: 8,
    name: "Quick Notes",
    description: "Jot down ideas and reminders quickly.",
    price: 30,
    owned: false,
    component: NotesWidget,
  },
];

export default function MarketplacePage() {
  const [selectedWidget, setSelectedWidget] = useState<
    (typeof widgets)[0] | null
  >(null);
  const [widgetModalOpen, setWidgetModalOpen] = useState(false);

  const handleWidgetClick = (widget: (typeof widgets)[0]) => {
    setSelectedWidget(widget);
    setWidgetModalOpen(true);
  };

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="flex items-center justify-between mb-6 flex-wrap gap-4 md:flex-nowrap">
        <div className="flex items-center gap-4">
          <Link href="/#slide-3" className="mr-2">
            <ArrowLeft className="h-5 w-5" />
          </Link>
          <h1 className="text-2xl font-bold">Character Marketplace</h1>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 bg-amber-100 text-amber-800 px-3 py-1 rounded-full">
            <Trophy className="h-5 w-5 text-amber-500" />
            <span className="font-medium">3,250</span>
          </div>
          <div className="flex items-center gap-2 bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full">
            <Diamond className="h-5 w-5 text-emerald-500" />
            <span className="font-medium">75</span>
          </div>
        </div>
      </div>

      <Tabs defaultValue="chests">
        <div className="flex items-center justify-between mb-6 flex-wrap gap-2 md:flex-nowrap">
          <div className="overflow-x-auto">
            <TabsList>
              <TabsTrigger value="chests">Chests</TabsTrigger>
              <TabsTrigger value="characters">Characters</TabsTrigger>
              <TabsTrigger value="themes">Themes</TabsTrigger>
              <TabsTrigger value="widgets">Widgets</TabsTrigger>
              <TabsTrigger value="emeralds">Get Emeralds</TabsTrigger>
            </TabsList>
          </div>
          <Button variant="outline" size="sm">
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </Button>
        </div>

        <TabsContent value="chests">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <TreasureChest
              id={1}
              name="Basic Chest"
              description="A simple chest with a chance for common and rare items."
              price={500}
              image="/chests/chest-1.png"
              openedImage="/chests/chest-1.png"
              rarity="Common"
              rewards={{
                minCoins: 300,
                maxCoins: 700,
                emeraldChance: 0.1,
                minEmeralds: 5,
                maxEmeralds: 10,
                characterChance: 0.05,
              }}
            />

            <TreasureChest
              id={2}
              name="Silver Chest"
              description="A valuable chest with better rewards and higher chances."
              price={1200}
              image="/chests/chest-2.png"
              openedImage="/chests/chest-2.png"
              rarity="Rare"
              rewards={{
                minCoins: 800,
                maxCoins: 1500,
                emeraldChance: 0.3,
                minEmeralds: 10,
                maxEmeralds: 25,
                characterChance: 0.15,
              }}
            />

            <TreasureChest
              id={3}
              name="Golden Chest"
              description="A premium chest with excellent rewards and high chances for rare items."
              price={2500}
              image="/chests/chest-3.png"
              openedImage="/chests/chest-3.png"
              rarity="Epic"
              rewards={{
                minCoins: 1500,
                maxCoins: 3000,
                emeraldChance: 0.6,
                minEmeralds: 20,
                maxEmeralds: 50,
                characterChance: 0.3,
              }}
            />

            <TreasureChest
              id={4}
              name="Legendary Chest"
              description="The ultimate chest with guaranteed premium rewards and characters."
              price={5000}
              image="/chests/chest-4.png"
              openedImage="/chests/chest-4.png"
              rarity="Legendary"
              rewards={{
                minCoins: 3000,
                maxCoins: 6000,
                emeraldChance: 1,
                minEmeralds: 50,
                maxEmeralds: 100,
                characterChance: 0.75,
              }}
            />
          </div>
        </TabsContent>

        <TabsContent value="characters">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {characters.map((character) => (
              <Card key={character.id} className="overflow-hidden">
                <div className="relative h-48 bg-muted flex items-center justify-center">
                  <Image
                    src={character.image || "/placeholder.svg"}
                    alt={character.name}
                    width={150}
                    height={150}
                    className="object-contain"
                  />
                  <div className="absolute top-2 right-2">
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
                  </div>
                </div>
                <CardHeader className="pb-2">
                  <CardTitle>{character.name}</CardTitle>
                  <CardDescription>{character.description}</CardDescription>
                </CardHeader>
                <CardFooter>
                  {character.owned ? (
                    <Button
                      variant="outline"
                      className="w-full bg-green-50 text-green-800 border-green-200"
                    >
                      Owned
                    </Button>
                  ) : (
                    <Button className="w-full">
                      {character.owned ? (
                        "Owned"
                      ) : (
                        <>
                          <Trophy className="h-4 w-4 mr-2 text-amber-300" />
                          {character.price.coins} /{" "}
                          <Diamond className="h-4 w-4 mx-1 text-emerald-300" />
                          {character.price.emeralds}
                        </>
                      )}
                    </Button>
                  )}
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="themes">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {themes.map((theme) => (
              <Card key={theme.id} className="overflow-hidden">
                <div className="relative h-48 bg-muted">
                  <Image
                    src={theme.image || "/placeholder.svg"}
                    alt={theme.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-2 right-2">
                    <Badge
                      variant="outline"
                      className={
                        theme.rarity === "Common"
                          ? "bg-gray-100 text-gray-800"
                          : theme.rarity === "Rare"
                          ? "bg-blue-100 text-blue-800"
                          : theme.rarity === "Epic"
                          ? "bg-purple-100 text-purple-800"
                          : "bg-amber-100 text-amber-800"
                      }
                    >
                      {theme.rarity}
                    </Badge>
                  </div>
                </div>
                <CardHeader className="pb-2">
                  <CardTitle>{theme.name}</CardTitle>
                  <CardDescription>{theme.description}</CardDescription>
                </CardHeader>
                <CardFooter>
                  {theme.owned ? (
                    <Button
                      variant="outline"
                      className="w-full bg-green-50 text-green-800 border-green-200"
                    >
                      Owned
                    </Button>
                  ) : (
                    <Button className="w-full">
                      {theme.owned ? (
                        "Owned"
                      ) : (
                        <>
                          <Diamond className="h-4 w-4 mr-2 text-emerald-300" />
                          {theme.price.emeralds}
                        </>
                      )}
                    </Button>
                  )}
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="widgets">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {widgets.map((widget) => (
              <Card key={widget.id} className="overflow-hidden">
                <div className="relative h-48 bg-muted flex items-center justify-center p-4">
                  {widget.component && (
                    <widget.component
                      compact
                      {...(widget.props || {})}
                      birthDate={widget.props?.birthDate || "2000-01-01"}
                      scale={widget.props?.scale || 100}
                    />
                  )}
                  <div className="absolute top-2 right-2">
                    <Badge
                      variant="outline"
                      className={
                        widget.owned
                          ? "bg-green-100 text-green-800"
                          : "bg-blue-100 text-blue-800"
                      }
                    >
                      {widget.owned ? "Owned" : "Premium"}
                    </Badge>
                  </div>
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center gap-2">
                    {widget.name}
                    {widget.name === "Time Elapsed" && (
                      <Clock className="h-4 w-4 text-muted-foreground" />
                    )}
                    {widget.name === "App Usage Chart" && (
                      <BarChart2 className="h-4 w-4 text-muted-foreground" />
                    )}
                  </CardTitle>
                  <CardDescription>{widget.description}</CardDescription>
                </CardHeader>
                <CardFooter>
                  {widget.owned ? (
                    <Button
                      className="w-full"
                      onClick={() => handleWidgetClick(widget)}
                    >
                      View Widget
                    </Button>
                  ) : (
                    <Button className="w-full">
                      <Diamond className="h-4 w-4 mr-2 text-emerald-300" />
                      {widget.price}
                    </Button>
                  )}
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="emeralds">
          <div className="max-w-3xl mx-auto">
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>Premium Currency</CardTitle>
                <CardDescription>
                  Emeralds are a premium currency that can be used to purchase
                  exclusive characters and themes.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-4 p-4 bg-muted rounded-lg">
                  <Diamond className="h-8 w-8 text-emerald-500" />
                  <div>
                    <h3 className="font-medium">Emerald Benefits</h3>
                    <ul className="text-sm text-muted-foreground mt-1 space-y-1">
                      <li className="flex items-center gap-2">
                        <Star className="h-4 w-4 text-amber-500" /> Access to
                        exclusive legendary characters
                      </li>
                      <li className="flex items-center gap-2">
                        <Star className="h-4 w-4 text-amber-500" /> Unlock
                        premium themes and environments
                      </li>
                      <li className="flex items-center gap-2">
                        <Star className="h-4 w-4 text-amber-500" /> Support
                        ongoing development of FocusAI
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {emeraldPackages.map((pkg) => (
                <Card
                  key={pkg.id}
                  className={pkg.popular ? "border-emerald-500" : ""}
                >
                  {pkg.popular && (
                    <div className="bg-emerald-500 text-white text-center py-1 text-xs font-medium">
                      MOST POPULAR
                    </div>
                  )}
                  <CardHeader className="text-center pb-2">
                    <CardTitle>{pkg.name}</CardTitle>
                    <div className="flex items-center justify-center gap-1 mt-2">
                      <Diamond className="h-6 w-6 text-emerald-500" />
                      <span className="text-2xl font-bold">{pkg.amount}</span>
                    </div>
                    <CardDescription className="text-emerald-500 font-medium">
                      {pkg.bonus}
                    </CardDescription>
                  </CardHeader>
                  <CardFooter>
                    <Button className="w-full">{pkg.price}</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </TabsContent>
      </Tabs>

      {/* Widget Preview Modal */}
      <Dialog open={widgetModalOpen} onOpenChange={setWidgetModalOpen}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle>{selectedWidget?.name}</DialogTitle>
          </DialogHeader>
          <div className="p-4">
            {selectedWidget?.component && (
              <selectedWidget.component
                {...(selectedWidget.props || {})}
                birthDate={selectedWidget.props?.birthDate || "2000-01-01"}
              />
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
