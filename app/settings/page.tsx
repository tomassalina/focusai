import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ArrowLeft, Bell, Clock, Shield, Palette, User } from "lucide-react";
import Link from "next/link";

export default function SettingsPage() {
  return (
    <div className="container mx-auto px-4 py-6">
      <div className="flex items-center mb-6">
        <Link href="/#slide-3" className="mr-4">
          <ArrowLeft className="h-5 w-5" />
        </Link>
        <h1 className="text-2xl font-bold">Settings</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="h-5 w-5" /> Focus Settings
            </CardTitle>
            <CardDescription>Customize your focus sessions</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="focus-duration">Focus Session Duration</Label>
              <div className="flex items-center gap-2 mt-2">
                <Slider
                  defaultValue={[25]}
                  max={60}
                  step={5}
                  className="flex-1"
                />
                <span className="w-12 text-center">25m</span>
              </div>
            </div>

            <div>
              <Label htmlFor="break-duration">Break Duration</Label>
              <div className="flex items-center gap-2 mt-2">
                <Slider
                  defaultValue={[5]}
                  max={30}
                  step={1}
                  className="flex-1"
                />
                <span className="w-12 text-center">5m</span>
              </div>
            </div>

            <div>
              <Label htmlFor="focus-technique">Focus Technique</Label>
              <Select defaultValue="pomodoro">
                <SelectTrigger className="mt-2">
                  <SelectValue placeholder="Select technique" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="pomodoro">Pomodoro (25/5)</SelectItem>
                  <SelectItem value="52-17">52/17 Method</SelectItem>
                  <SelectItem value="90-20">90/20 Method</SelectItem>
                  <SelectItem value="custom">Custom</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="auto-start-breaks">Auto-start Breaks</Label>
                <p className="text-sm text-muted-foreground">
                  Automatically start breaks after focus sessions
                </p>
              </div>
              <Switch id="auto-start-breaks" defaultChecked />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="streak-requirement">
                  Daily Streak Requirement
                </Label>
                <p className="text-sm text-muted-foreground">
                  Minimum focus sessions needed for daily streak
                </p>
              </div>
              <Select defaultValue="3">
                <SelectTrigger className="w-20">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="3">3</SelectItem>
                  <SelectItem value="4">4</SelectItem>
                  <SelectItem value="5">5</SelectItem>
                  <SelectItem value="6">5</SelectItem>
                  <SelectItem value="7">5</SelectItem>
                  <SelectItem value="8">5</SelectItem>
                  <SelectItem value="9">5</SelectItem>
                  <SelectItem value="10">5</SelectItem>
                  <SelectItem value="11">5</SelectItem>
                  <SelectItem value="12">5</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Bell className="h-5 w-5" /> Notifications
            </CardTitle>
            <CardDescription>
              Configure how FocusAI notifies you
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="focus-reminders">Focus Reminders</Label>
                <p className="text-sm text-muted-foreground">
                  Remind you to stay focused
                </p>
              </div>
              <Switch id="focus-reminders" defaultChecked />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="break-reminders">Break Reminders</Label>
                <p className="text-sm text-muted-foreground">
                  Remind you to take breaks
                </p>
              </div>
              <Switch id="break-reminders" defaultChecked />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="distraction-alerts">Distraction Alerts</Label>
                <p className="text-sm text-muted-foreground">
                  Alert when you&apos;re getting distracted
                </p>
              </div>
              <Switch id="distraction-alerts" defaultChecked />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="achievement-notifications">
                  Achievement Notifications
                </Label>
                <p className="text-sm text-muted-foreground">
                  Notify when you earn achievements
                </p>
              </div>
              <Switch id="achievement-notifications" defaultChecked />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Palette className="h-5 w-5" /> Appearance
            </CardTitle>
            <CardDescription>Customize how FocusAI looks</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="theme">Theme</Label>
              <Select defaultValue="system">
                <SelectTrigger className="mt-2">
                  <SelectValue placeholder="Select theme" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="light">Light</SelectItem>
                  <SelectItem value="dark">Dark</SelectItem>
                  <SelectItem value="system">System</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="accent-color">Accent Color</Label>
              <Select defaultValue="blue">
                <SelectTrigger className="mt-2">
                  <SelectValue placeholder="Select color" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="blue">Blue</SelectItem>
                  <SelectItem value="green">Green</SelectItem>
                  <SelectItem value="purple">Purple</SelectItem>
                  <SelectItem value="pink">Pink</SelectItem>
                  <SelectItem value="orange">Orange</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5" /> Privacy & Data
            </CardTitle>
            <CardDescription>
              Control your data and privacy settings
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="collect-analytics">Collect Analytics</Label>
                <p className="text-sm text-muted-foreground">
                  Collect anonymous usage data to improve the app
                </p>
              </div>
              <Switch id="collect-analytics" defaultChecked />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="store-locally">Store Data Locally</Label>
                <p className="text-sm text-muted-foreground">
                  Keep all your data on your device
                </p>
              </div>
              <Switch id="store-locally" defaultChecked />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="sync-cloud">Sync with Cloud</Label>
                <p className="text-sm text-muted-foreground">
                  Sync your data across devices
                </p>
              </div>
              <Switch id="sync-cloud" />
            </div>

            <div>
              <Button variant="destructive" size="sm">
                Delete All Data
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <User className="h-5 w-5" /> Account
            </CardTitle>
            <CardDescription>Manage your account settings</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="name">Name</Label>
                <Input id="name" defaultValue="John Doe" className="mt-2" />
              </div>

              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  defaultValue="john.doe@example.com"
                  className="mt-2"
                />
              </div>
            </div>

            <div>
              <Label htmlFor="subscription">Subscription Plan</Label>
              <div className="p-3 border rounded-lg mt-2 flex items-center justify-between">
                <div>
                  <p className="font-medium">Free Trial</p>
                  <p className="text-sm text-muted-foreground">
                    30 days remaining
                  </p>
                </div>
                <Button>Upgrade</Button>
              </div>
            </div>

            <div className="flex justify-end gap-2">
              <Button variant="outline">Cancel</Button>
              <Button>Save Changes</Button>
            </div>
          </CardContent>
        </Card>

        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <User className="h-5 w-5" /> Personal Information
            </CardTitle>
            <CardDescription>
              Manage your personal details and preferences
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <Label htmlFor="birthdate">Birth Date</Label>
                <Input
                  id="birthdate"
                  type="date"
                  defaultValue="2004-08-30"
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="lifeExpectancy">Life Expectancy (years)</Label>
                <Input
                  id="lifeExpectancy"
                  type="number"
                  defaultValue="80"
                  min="1"
                  max="120"
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="timezone">Timezone</Label>
                <Select defaultValue="UTC-3">
                  <SelectTrigger className="mt-2">
                    <SelectValue placeholder="Select timezone" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="UTC-12">UTC-12</SelectItem>
                    <SelectItem value="UTC-11">UTC-11</SelectItem>
                    <SelectItem value="UTC-10">UTC-10</SelectItem>
                    <SelectItem value="UTC-9">UTC-9</SelectItem>
                    <SelectItem value="UTC-8">UTC-8 (PST)</SelectItem>
                    <SelectItem value="UTC-7">UTC-7 (MST)</SelectItem>
                    <SelectItem value="UTC-6">UTC-6 (CST)</SelectItem>
                    <SelectItem value="UTC-5">UTC-5 (EST)</SelectItem>
                    <SelectItem value="UTC-4">UTC-4</SelectItem>
                    <SelectItem value="UTC-3">UTC-3</SelectItem>
                    <SelectItem value="UTC-2">UTC-2</SelectItem>
                    <SelectItem value="UTC-1">UTC-1</SelectItem>
                    <SelectItem value="UTC+0">UTC+0</SelectItem>
                    <SelectItem value="UTC+1">UTC+1 (CET)</SelectItem>
                    <SelectItem value="UTC+2">UTC+2</SelectItem>
                    <SelectItem value="UTC+3">UTC+3</SelectItem>
                    <SelectItem value="UTC+4">UTC+4</SelectItem>
                    <SelectItem value="UTC+5">UTC+5</SelectItem>
                    <SelectItem value="UTC+6">UTC+6</SelectItem>
                    <SelectItem value="UTC+7">UTC+7</SelectItem>
                    <SelectItem value="UTC+8">UTC+8</SelectItem>
                    <SelectItem value="UTC+9">UTC+9 (JST)</SelectItem>
                    <SelectItem value="UTC+10">UTC+10</SelectItem>
                    <SelectItem value="UTC+11">UTC+11</SelectItem>
                    <SelectItem value="UTC+12">UTC+12</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div>
              <Label htmlFor="lifeGoals">Life Goals</Label>
              <textarea
                id="lifeGoals"
                className="w-full min-h-[100px] p-2 mt-2 border rounded-md"
                placeholder="Enter your long-term life goals..."
                defaultValue={`1. Complete my education in computer science
2. Build a successful tech startup
3. Travel to at least 30 countries
4. Learn three foreign languages fluently`}
              ></textarea>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
