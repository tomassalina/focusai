/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import type React from "react";

import { useState, useRef, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Send, Paperclip } from "lucide-react";

type Message = {
  id: string;
  content: string;
  sender: "user" | "assistant";
  timestamp: Date;
  mascotState?: "normal" | "angry" | "crying";
};

// Initial conversation
const initialMessages: Message[] = [
  {
    id: "1",
    content:
      "Hey there! I'm your FocusAI buddy. How's your productivity going today?",
    sender: "assistant",
    timestamp: new Date(Date.now() - 1000 * 60 * 60), // 1 hour ago
    mascotState: "normal",
  },
  {
    id: "2",
    content:
      "I've been struggling to focus on my project. Too many distractions.",
    sender: "user",
    timestamp: new Date(Date.now() - 1000 * 60 * 55), // 55 minutes ago
  },
  {
    id: "3",
    content:
      "I understand! Let's set up a focus session. How about 25 minutes of deep work with no distractions?",
    sender: "assistant",
    timestamp: new Date(Date.now() - 1000 * 60 * 50), // 50 minutes ago
    mascotState: "normal",
  },
  {
    id: "4",
    content: "That sounds good. Can you also remind me to take breaks?",
    sender: "user",
    timestamp: new Date(Date.now() - 1000 * 60 * 45), // 45 minutes ago
  },
  {
    id: "5",
    content:
      "I'll remind you to take a 5-minute break after each focus session. Let's get started!",
    sender: "assistant",
    timestamp: new Date(Date.now() - 1000 * 60 * 40), // 40 minutes ago
    mascotState: "normal",
  },
];

// Possible assistant responses
const assistantResponses = [
  {
    content:
      "Great job on that focus session! You're making excellent progress today.",
    state: "normal",
  },
  {
    content:
      "I noticed you've been working for 45 minutes straight. Time for a quick break?",
    state: "normal",
  },
  {
    content:
      "You seem to be spending a lot of time on social media. Let's refocus on your priorities.",
    state: "angry",
  },
  {
    content:
      "Your productivity score is 15% higher today compared to yesterday. Keep it up!",
    state: "normal",
  },
  {
    content: "I see you have a meeting in 15 minutes. Need help preparing?",
    state: "normal",
  },
  {
    content:
      "You've been struggling with focus lately. Would you like to try a different technique?",
    state: "crying",
  },
  {
    content: "You've earned 120 focus coins today! That's awesome progress.",
    state: "normal",
  },
  {
    content:
      "Ready for another focus session? I'm here to help you stay on track.",
    state: "normal",
  },
];

export default function ChatInterface() {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [inputValue, setInputValue] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputValue,
      sender: "user",
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");

    // Simulate assistant response after a delay
    setTimeout(() => {
      const randomResponse =
        assistantResponses[
          Math.floor(Math.random() * assistantResponses.length)
        ];
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: randomResponse.content,
        sender: "assistant",
        timestamp: new Date(),
        mascotState: randomResponse.state as "normal" | "angry" | "crying",
      };
      setMessages((prev) => [...prev, aiMessage]);
    }, 1000);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  return (
    <Card className="h-full flex flex-col">
      <CardHeader className="pb-3 flex-shrink-0">
        <CardTitle className="flex items-center justify-between">
          <span>Focus Buddy</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col p-0 overflow-hidden">
        <ScrollArea className="flex-1 px-4 pb-0" ref={scrollAreaRef}>
          <div className="space-y-4 pt-1 pb-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${
                  message.sender === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[80%] rounded-lg p-3 ${
                    message.sender === "user"
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-foreground"
                  }`}
                >
                  {message.content}
                  <div
                    className={`text-xs mt-1 ${
                      message.sender === "user"
                        ? "text-primary-foreground/70"
                        : "text-muted-foreground"
                    }`}
                  >
                    {message.timestamp.toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </div>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
        </ScrollArea>

        <div className="p-4 flex items-center gap-2 border-t mt-auto flex-shrink-0">
          <Input
            placeholder="Type a message..."
            value={inputValue}
            onChange={(e: any) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-1"
          />
          <Button variant="ghost" size="icon">
            <Paperclip className="h-4 w-4" />
          </Button>
          <Button size="icon" onClick={handleSendMessage}>
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
