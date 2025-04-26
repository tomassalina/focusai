/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";
import { Card } from "@/components/ui/card";

// Mock data for demonstration
const initialData = [
  { name: "VS Code", minutes: 120, color: "#3b82f6" },
  { name: "Chrome", minutes: 45, color: "#ef4444" },
  { name: "Slack", minutes: 30, color: "#10b981" },
  { name: "Spotify", minutes: 15, color: "#8b5cf6" },
  { name: "Twitter", minutes: 10, color: "#f97316" },
];

export default function AppUsageChart() {
  const [data, setData] = useState(initialData);

  // Simulate data changes for demonstration
  useEffect(() => {
    const interval = setInterval(() => {
      const newData = data.map((item) => ({
        ...item,
        minutes: item.minutes + Math.floor(Math.random() * 5),
      }));
      setData(newData);
    }, 10000);

    return () => clearInterval(interval);
  }, [data]);

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      return (
        <Card className="p-2 text-xs bg-background border shadow-sm">
          <p className="font-medium">{payload[0].payload.name}</p>
          <p>{payload[0].value} minutes</p>
        </Card>
      );
    }
    return null;
  };

  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        data={data}
        margin={{ top: 5, right: 5, left: -20, bottom: 5 }}
        barSize={20}
      >
        <XAxis
          dataKey="name"
          axisLine={false}
          tickLine={false}
          tick={{ fontSize: 10 }}
        />
        <YAxis
          axisLine={false}
          tickLine={false}
          tick={{ fontSize: 10 }}
          tickFormatter={(value: any) => `${value}m`}
        />
        <Tooltip content={<CustomTooltip />} />
        <Bar dataKey="minutes" radius={[4, 4, 0, 0]}>
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}
