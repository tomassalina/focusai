"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import {
  Play,
  Pause,
  SkipForward,
  SkipBack,
  Volume2,
  Music,
} from "lucide-react";

// Mock music data
const musicGenres = [
  {
    name: "Lofi",
    tracks: [
      { title: "Chill Study Beats", artist: "ChillHop", duration: "3:45" },
      { title: "Coffee Shop Ambience", artist: "LofiGirl", duration: "4:20" },
      { title: "Late Night Coding", artist: "CodeBeats", duration: "3:10" },
    ],
  },
  {
    name: "Classical",
    tracks: [
      { title: "Moonlight Sonata", artist: "Beethoven", duration: "5:20" },
      { title: "Clair de Lune", artist: "Debussy", duration: "4:50" },
      { title: "Four Seasons: Spring", artist: "Vivaldi", duration: "3:35" },
    ],
  },
  {
    name: "Focus",
    tracks: [
      { title: "Deep Concentration", artist: "FocusWave", duration: "4:15" },
      { title: "Brain Boost", artist: "NeuralBeats", duration: "3:55" },
      { title: "Productivity Zone", artist: "WorkFlow", duration: "4:30" },
    ],
  },
  {
    name: "Nature",
    tracks: [
      { title: "Rainfall", artist: "NatureSounds", duration: "5:10" },
      { title: "Ocean Waves", artist: "SeaScape", duration: "4:45" },
      { title: "Forest Morning", artist: "WildLife", duration: "3:50" },
    ],
  },
];

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentGenre, setCurrentGenre] = useState("Lofi");
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [volume, setVolume] = useState([70]);
  const [expanded, setExpanded] = useState(true);

  const currentGenreData =
    musicGenres.find((genre) => genre.name === currentGenre) || musicGenres[0];
  const currentTrack = currentGenreData.tracks[currentTrackIndex];

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const nextTrack = () => {
    setCurrentTrackIndex((prev) => (prev + 1) % currentGenreData.tracks.length);
  };

  const prevTrack = () => {
    setCurrentTrackIndex((prev) =>
      prev === 0 ? currentGenreData.tracks.length - 1 : prev - 1
    );
  };

  const handleGenreChange = (value: string) => {
    setCurrentGenre(value);
    setCurrentTrackIndex(0);
  };

  return (
    <div className="flex items-center gap-2 bg-muted/30 rounded-lg p-2">
      <Button
        variant="ghost"
        size="icon"
        className="h-8 w-8 rounded-full"
        onClick={() => setExpanded(!expanded)}
        title="Toggle music player"
      >
        <Music className="h-4 w-4" />
      </Button>

      {expanded && (
        <>
          <Select value={currentGenre} onValueChange={handleGenreChange}>
            <SelectTrigger className="w-[100px] h-8">
              <SelectValue placeholder="Genre" />
            </SelectTrigger>
            <SelectContent>
              {musicGenres.map((genre) => (
                <SelectItem key={genre.name} value={genre.name}>
                  {genre.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <div className="flex items-center gap-1">
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8"
              onClick={prevTrack}
            >
              <SkipBack className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8"
              onClick={togglePlay}
            >
              {isPlaying ? (
                <Pause className="h-4 w-4" />
              ) : (
                <Play className="h-4 w-4" />
              )}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8"
              onClick={nextTrack}
            >
              <SkipForward className="h-4 w-4" />
            </Button>
          </div>

          <div className="hidden md:flex items-center gap-2">
            <Volume2 className="h-4 w-4 text-muted-foreground" />
            <Slider
              value={volume}
              max={100}
              step={1}
              className="w-20"
              onValueChange={setVolume}
              aria-label="Volume"
            />
          </div>

          <div className="hidden md:block text-xs text-muted-foreground">
            <div className="font-medium">{currentTrack.title}</div>
            <div>{currentTrack.artist}</div>
          </div>
        </>
      )}
    </div>
  );
}
