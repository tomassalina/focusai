"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Sun,
  Cloud,
  CloudRain,
  CloudSnow,
  CloudLightning,
  CloudDrizzle,
  Wind,
} from "lucide-react";

interface WeatherWidgetProps {
  city?: string;
  compact?: boolean;
}

export default function WeatherWidget({
  city = "New York",
  compact = false,
}: WeatherWidgetProps) {
  const [weather, setWeather] = useState<{
    temp: number;
    condition: string;
    humidity: number;
    wind: number;
    location: string;
  }>({
    temp: 72,
    condition: "Sunny",
    humidity: 45,
    wind: 8,
    location: city,
  });

  // Simulate weather changes
  useEffect(() => {
    const interval = setInterval(() => {
      const conditions = [
        "Sunny",
        "Cloudy",
        "Rainy",
        "Snowy",
        "Stormy",
        "Windy",
        "Drizzle",
      ];
      const randomCondition =
        conditions[Math.floor(Math.random() * conditions.length)];
      const randomTemp = Math.floor(Math.random() * 30) + 50; // 50-80°F
      const randomHumidity = Math.floor(Math.random() * 50) + 30; // 30-80%
      const randomWind = Math.floor(Math.random() * 15) + 2; // 2-17 mph

      setWeather({
        ...weather,
        temp: randomTemp,
        condition: randomCondition,
        humidity: randomHumidity,
        wind: randomWind,
      });
    }, 10000); // Update every 10 seconds for demo

    return () => clearInterval(interval);
  }, [weather]);

  const getWeatherIcon = () => {
    switch (weather.condition) {
      case "Sunny":
        return (
          <Sun
            className={
              compact ? "h-8 w-8 text-amber-500" : "h-16 w-16 text-amber-500"
            }
          />
        );
      case "Cloudy":
        return (
          <Cloud
            className={
              compact ? "h-8 w-8 text-gray-500" : "h-16 w-16 text-gray-500"
            }
          />
        );
      case "Rainy":
        return (
          <CloudRain
            className={
              compact ? "h-8 w-8 text-blue-500" : "h-16 w-16 text-blue-500"
            }
          />
        );
      case "Snowy":
        return (
          <CloudSnow
            className={
              compact ? "h-8 w-8 text-blue-300" : "h-16 w-16 text-blue-300"
            }
          />
        );
      case "Stormy":
        return (
          <CloudLightning
            className={
              compact ? "h-8 w-8 text-purple-500" : "h-16 w-16 text-purple-500"
            }
          />
        );
      case "Windy":
        return (
          <Wind
            className={
              compact ? "h-8 w-8 text-gray-400" : "h-16 w-16 text-gray-400"
            }
          />
        );
      case "Drizzle":
        return (
          <CloudDrizzle
            className={
              compact ? "h-8 w-8 text-blue-400" : "h-16 w-16 text-blue-400"
            }
          />
        );
      default:
        return (
          <Sun
            className={
              compact ? "h-8 w-8 text-amber-500" : "h-16 w-16 text-amber-500"
            }
          />
        );
    }
  };

  if (compact) {
    return (
      <Card className="overflow-hidden">
        <CardContent className="p-4">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm font-medium">{weather.location}</div>
              <div className="text-2xl font-bold">{weather.temp}°F</div>
            </div>
            {getWeatherIcon()}
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="overflow-hidden">
      <CardHeader className="pb-2">
        <CardTitle>Weather</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col items-center mb-4">
          {getWeatherIcon()}
          <div className="text-3xl font-bold mt-2">{weather.temp}°F</div>
          <div className="text-muted-foreground">{weather.condition}</div>
          <div className="text-sm text-muted-foreground">
            {weather.location}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2 text-sm">
          <div className="flex flex-col items-center p-2 bg-muted/30 rounded-md">
            <span className="text-muted-foreground">Humidity</span>
            <span className="font-medium">{weather.humidity}%</span>
          </div>
          <div className="flex flex-col items-center p-2 bg-muted/30 rounded-md">
            <span className="text-muted-foreground">Wind</span>
            <span className="font-medium">{weather.wind} mph</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
