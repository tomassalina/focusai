"use client";

import { useEffect, useState } from "react";

interface LifePercentageProps {
  birthDate: string;
  scale?: number;
}

export default function LifePercentage({
  birthDate,
  scale = 100,
}: LifePercentageProps) {
  const [percentages, setPercentages] = useState({
    day: 0,
    week: 0,
    month: 0,
    life: 0,
  });

  useEffect(() => {
    // Update time every minute
    const calculatePercentages = () => {
      const now = new Date();

      // Day percentage
      const currentHour = now.getHours();
      const currentMinute = now.getMinutes();
      const totalMinutesInDay = 24 * 60;
      const minutesPassed = currentHour * 60 + currentMinute;
      const dayPercentage = (minutesPassed / totalMinutesInDay) * 100;

      // Week percentage
      const currentDay = now.getDay(); // 0 = Sunday, 6 = Saturday
      const daysPassed = currentDay;
      const hoursPassed = daysPassed * 24 + currentHour + currentMinute / 60;
      const totalHoursInWeek = 7 * 24;
      const weekPercentage = (hoursPassed / totalHoursInWeek) * 100;

      // Month percentage
      const currentDate = now.getDate();
      const totalDaysInMonth = new Date(
        now.getFullYear(),
        now.getMonth() + 1,
        0
      ).getDate();
      const monthPercentage = (currentDate / totalDaysInMonth) * 100;

      // Life percentage (assuming 80 years average lifespan)
      const birth = new Date(birthDate);
      const ageInMilliseconds = now.getTime() - birth.getTime();
      const ageInYears = ageInMilliseconds / (1000 * 60 * 60 * 24 * 365.25);
      const lifeExpectancy = 80;
      const lifePercentage = (ageInYears / lifeExpectancy) * 100;

      setPercentages({
        day: Number.parseFloat(dayPercentage.toFixed(1)),
        week: Number.parseFloat(weekPercentage.toFixed(1)),
        month: Number.parseFloat(monthPercentage.toFixed(1)),
        life: Number.parseFloat(lifePercentage.toFixed(1)),
      });
    };

    calculatePercentages();
    const interval = setInterval(calculatePercentages, 60000); // Update every minute

    return () => clearInterval(interval);
  }, [birthDate]);

  return (
    <div className={`flex justify-between scale-${scale}`}>
      <div className="text-center">
        <div className="text-2xl font-bold">{percentages.day}%</div>
        <div className="text-xs text-muted-foreground">Day</div>
      </div>

      <div className="text-center">
        <div className="text-2xl font-bold">{percentages.week}%</div>
        <div className="text-xs text-muted-foreground">Week</div>
      </div>

      <div className="text-center">
        <div className="text-2xl font-bold">{percentages.month}%</div>
        <div className="text-xs text-muted-foreground">Month</div>
      </div>

      <div className="text-center">
        <div className="text-2xl font-bold">{percentages.life}%</div>
        <div className="text-xs text-muted-foreground">Life</div>
      </div>
    </div>
  );
}
