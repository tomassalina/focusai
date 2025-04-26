"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  ArrowLeft,
  Plus,
  Check,
  Clock,
  MoreHorizontal,
  Timer,
} from "lucide-react";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// Mock data for demonstration
const initialTasks = [
  {
    id: 1,
    title: "Complete project proposal",
    completed: false,
    priority: "high",
    focusTime: 60,
    category: "work",
  },
  {
    id: 2,
    title: "Research new technologies",
    completed: false,
    priority: "medium",
    focusTime: 45,
    category: "work",
  },
  {
    id: 3,
    title: "Review documentation",
    completed: true,
    priority: "low",
    focusTime: 30,
    category: "work",
  },
  {
    id: 4,
    title: "Prepare for presentation",
    completed: false,
    priority: "high",
    focusTime: 90,
    category: "work",
  },
  {
    id: 5,
    title: "Study for exam",
    completed: false,
    priority: "high",
    focusTime: 120,
    category: "study",
  },
  {
    id: 6,
    title: "Complete assignment",
    completed: true,
    priority: "medium",
    focusTime: 60,
    category: "study",
  },
  {
    id: 7,
    title: "Read chapter 5",
    completed: false,
    priority: "low",
    focusTime: 45,
    category: "study",
  },
];

export default function TasksPage() {
  const [tasks, setTasks] = useState(initialTasks);
  const [newTaskTitle, setNewTaskTitle] = useState("");

  const handleAddTask = () => {
    if (newTaskTitle.trim()) {
      const newTask = {
        id: tasks.length + 1,
        title: newTaskTitle,
        completed: false,
        priority: "medium",
        focusTime: 30,
        category: "work",
      };
      setTasks([...tasks, newTask]);
      setNewTaskTitle("");
    }
  };

  const handleToggleComplete = (id: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleDeleteTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "bg-red-100 text-red-800";
      case "medium":
        return "bg-amber-100 text-amber-800";
      case "low":
        return "bg-green-100 text-green-800";
      default:
        return "";
    }
  };

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="flex items-center mb-6">
        <Link href="/" className="mr-4">
          <ArrowLeft className="h-5 w-5" />
        </Link>
        <h1 className="text-2xl font-bold">Tasks & Focus</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle>Task Management</CardTitle>
              <CardDescription>
                Organize your tasks and track progress
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex gap-2 mb-6">
                <Input
                  placeholder="Add a new task..."
                  value={newTaskTitle}
                  onChange={(e) => setNewTaskTitle(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleAddTask()}
                />
                <Button onClick={handleAddTask}>
                  <Plus className="h-4 w-4 mr-1" /> Add
                </Button>
              </div>

              <Tabs defaultValue="all">
                <TabsList className="mb-4">
                  <TabsTrigger value="all">All Tasks</TabsTrigger>
                  <TabsTrigger value="work">Work</TabsTrigger>
                  <TabsTrigger value="study">Study</TabsTrigger>
                  <TabsTrigger value="completed">Completed</TabsTrigger>
                </TabsList>

                <TabsContent value="all">
                  <div className="space-y-2">
                    {tasks.map((task) => (
                      <TaskItem
                        key={task.id}
                        task={task}
                        onToggleComplete={handleToggleComplete}
                        onDelete={handleDeleteTask}
                        priorityColor={getPriorityColor(task.priority)}
                      />
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="work">
                  <div className="space-y-2">
                    {tasks
                      .filter((task) => task.category === "work")
                      .map((task) => (
                        <TaskItem
                          key={task.id}
                          task={task}
                          onToggleComplete={handleToggleComplete}
                          onDelete={handleDeleteTask}
                          priorityColor={getPriorityColor(task.priority)}
                        />
                      ))}
                  </div>
                </TabsContent>

                <TabsContent value="study">
                  <div className="space-y-2">
                    {tasks
                      .filter((task) => task.category === "study")
                      .map((task) => (
                        <TaskItem
                          key={task.id}
                          task={task}
                          onToggleComplete={handleToggleComplete}
                          onDelete={handleDeleteTask}
                          priorityColor={getPriorityColor(task.priority)}
                        />
                      ))}
                  </div>
                </TabsContent>

                <TabsContent value="completed">
                  <div className="space-y-2">
                    {tasks
                      .filter((task) => task.completed)
                      .map((task) => (
                        <TaskItem
                          key={task.id}
                          task={task}
                          onToggleComplete={handleToggleComplete}
                          onDelete={handleDeleteTask}
                          priorityColor={getPriorityColor(task.priority)}
                        />
                      ))}
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>

        <div>
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Task Statistics</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-medium">Completed Tasks</span>
                    <span className="text-sm text-muted-foreground">
                      {tasks.filter((t) => t.completed).length} / {tasks.length}
                    </span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div
                      className="h-full bg-primary rounded-full"
                      style={{
                        width: `${
                          (tasks.filter((t) => t.completed).length /
                            tasks.length) *
                          100
                        }%`,
                      }}
                    ></div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="p-3 border rounded-lg">
                    <div className="text-sm text-muted-foreground mb-1">
                      High Priority
                    </div>
                    <div className="text-2xl font-bold">
                      {tasks.filter((t) => t.priority === "high").length}
                    </div>
                  </div>
                  <div className="p-3 border rounded-lg">
                    <div className="text-sm text-muted-foreground mb-1">
                      Focus Time
                    </div>
                    <div className="text-2xl font-bold">
                      {Math.floor(
                        tasks.reduce((acc, task) => acc + task.focusTime, 0) /
                          60
                      )}
                      h
                    </div>
                  </div>
                </div>

                <div className="p-3 border rounded-lg">
                  <div className="text-sm font-medium mb-2">
                    Task Categories
                  </div>
                  <div className="flex gap-2">
                    <Badge
                      variant="outline"
                      className="bg-blue-100 text-blue-800"
                    >
                      Work: {tasks.filter((t) => t.category === "work").length}
                    </Badge>
                    <Badge
                      variant="outline"
                      className="bg-purple-100 text-purple-800"
                    >
                      Study:{" "}
                      {tasks.filter((t) => t.category === "study").length}
                    </Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Focus Suggestions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-3 border rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium">Complete project proposal</h4>
                    <Badge
                      variant="outline"
                      className="bg-red-100 text-red-800"
                    >
                      High
                    </Badge>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                    <Clock className="h-4 w-4" /> 60 min focus time
                  </div>
                  <Button size="sm" className="w-full">
                    <Timer className="h-4 w-4 mr-1" /> Start Focus Session
                  </Button>
                </div>

                <div className="p-3 border rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium">Study for exam</h4>
                    <Badge
                      variant="outline"
                      className="bg-red-100 text-red-800"
                    >
                      High
                    </Badge>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                    <Clock className="h-4 w-4" /> 120 min focus time
                  </div>
                  <Button size="sm" className="w-full">
                    <Timer className="h-4 w-4 mr-1" /> Start Focus Session
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

interface TaskItemProps {
  task: {
    id: number;
    title: string;
    completed: boolean;
    priority: string;
    focusTime: number;
    category: string;
  };
  onToggleComplete: (id: number) => void;
  onDelete: (id: number) => void;
  priorityColor: string;
}

function TaskItem({
  task,
  onToggleComplete,
  onDelete,
  priorityColor,
}: TaskItemProps) {
  return (
    <div
      className={`p-3 border rounded-lg flex items-center gap-3 ${
        task.completed ? "bg-muted/30" : ""
      }`}
    >
      <Button
        variant="ghost"
        size="icon"
        className="h-6 w-6 rounded-full"
        onClick={() => onToggleComplete(task.id)}
      >
        {task.completed ? (
          <Check className="h-4 w-4 text-green-500" />
        ) : (
          <div className="h-4 w-4 rounded-full border-2"></div>
        )}
      </Button>

      <div className="flex-1">
        <p
          className={`${
            task.completed ? "line-through text-muted-foreground" : ""
          }`}
        >
          {task.title}
        </p>
      </div>

      <div className="flex items-center gap-2">
        <Badge variant="outline" className={priorityColor}>
          {task.priority}
        </Badge>

        <div className="flex items-center gap-1 text-xs text-muted-foreground">
          <Clock className="h-3 w-3" />
          <span>{task.focusTime}m</span>
        </div>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => onToggleComplete(task.id)}>
              {task.completed ? "Mark as incomplete" : "Mark as complete"}
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => onDelete(task.id)}>
              Delete
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}
