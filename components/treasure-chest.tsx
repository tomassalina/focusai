"use client";

import { useState } from "react";
import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Trophy, Diamond, Star, Sparkles } from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface TreasureChestProps {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  openedImage: string;
  rarity: "Common" | "Rare" | "Epic" | "Legendary";
  rewards: {
    minCoins: number;
    maxCoins: number;
    emeraldChance: number;
    minEmeralds: number;
    maxEmeralds: number;
    characterChance: number;
  };
}

export default function TreasureChest({
  name,
  description,
  price,
  image,
  openedImage,
  rarity,
  rewards,
}: TreasureChestProps) {
  const [isOpening, setIsOpening] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [showReward, setShowReward] = useState(false);
  const [reward, setReward] = useState<{
    coins: number;
    emeralds: number;
    character?: { name: string; image: string; rarity: string };
  }>({ coins: 0, emeralds: 0 });

  const handleOpen = () => {
    setIsOpening(true);

    // Generate random rewards
    const coins =
      Math.floor(Math.random() * (rewards.maxCoins - rewards.minCoins + 1)) +
      rewards.minCoins;

    let emeralds = 0;
    if (Math.random() < rewards.emeraldChance) {
      emeralds =
        Math.floor(
          Math.random() * (rewards.maxEmeralds - rewards.minEmeralds + 1)
        ) + rewards.minEmeralds;
    }

    let character = undefined;
    if (Math.random() < rewards.characterChance) {
      // Mock character reward
      const characters = [
        {
          name: "Focus Fox",
          image: "/characters/character-2-normal.png",
          rarity: "Rare",
        },
        {
          name: "Productivity Panda",
          image: "/characters/character-3-normal.png",
          rarity: "Epic",
        },
        {
          name: "Time Wizard",
          image: "/characters/character-4-normal.png",
          rarity: "Legendary",
        },
      ];
      character = characters[Math.floor(Math.random() * characters.length)];
    }

    setReward({ coins, emeralds, character });

    // Simulate chest opening animation
    setTimeout(() => {
      setIsOpen(true);
      setTimeout(() => {
        setShowReward(true);
      }, 1000);
    }, 1500);
  };

  const handleClose = () => {
    setIsOpening(false);
    setIsOpen(false);
    setShowReward(false);
  };

  const getRarityColor = () => {
    switch (rarity) {
      case "Common":
        return "bg-gray-100 text-gray-800";
      case "Rare":
        return "bg-blue-100 text-blue-800";
      case "Epic":
        return "bg-purple-100 text-purple-800";
      case "Legendary":
        return "bg-amber-100 text-amber-800";
    }
  };

  return (
    <>
      <Card className="overflow-hidden">
        <div className="relative h-48 bg-muted flex items-center justify-center">
          <Image
            src={image || "/placeholder.svg"}
            alt={name}
            width={150}
            height={150}
            className="object-contain"
          />
          <div className="absolute top-2 right-2">
            <Badge variant="outline" className={getRarityColor()}>
              {rarity}
            </Badge>
          </div>
        </div>
        <CardHeader className="pb-2">
          <CardTitle>{name}</CardTitle>
          <p className="text-sm text-muted-foreground">{description}</p>
        </CardHeader>
        <CardFooter>
          <Button className="w-full" onClick={() => setIsOpening(true)}>
            <Trophy className="h-4 w-4 mr-2 text-amber-300" />
            {price}
          </Button>
        </CardFooter>
      </Card>

      <Dialog open={isOpening} onOpenChange={setIsOpening}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>{name}</DialogTitle>
            <DialogDescription>{description}</DialogDescription>
          </DialogHeader>

          <div className="flex flex-col items-center justify-center py-6">
            <AnimatePresence>
              {!isOpen ? (
                <motion.div
                  initial={{ scale: 1 }}
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{
                    repeat: Number.POSITIVE_INFINITY,
                    duration: 1.5,
                  }}
                  className="relative"
                >
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={name}
                    width={200}
                    height={200}
                    className="object-contain"
                  />
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="relative"
                >
                  <Image
                    src={openedImage || "/placeholder.svg"}
                    alt={`${name} opened`}
                    width={200}
                    height={200}
                    className="object-contain"
                  />
                </motion.div>
              )}
            </AnimatePresence>

            <AnimatePresence>
              {showReward && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-6 text-center"
                >
                  <h3 className="text-xl font-bold mb-4 flex items-center justify-center gap-2">
                    <Sparkles className="h-5 w-5 text-amber-500" />
                    Your Rewards
                    <Sparkles className="h-5 w-5 text-amber-500" />
                  </h3>

                  <div className="space-y-4">
                    {reward.coins > 0 && (
                      <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="flex items-center justify-center gap-2 text-lg font-bold"
                      >
                        <Trophy className="h-6 w-6 text-amber-500" />
                        <span>{reward.coins} Focus Coins</span>
                      </motion.div>
                    )}

                    {reward.emeralds > 0 && (
                      <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="flex items-center justify-center gap-2 text-lg font-bold"
                      >
                        <Diamond className="h-6 w-6 text-emerald-500" />
                        <span>{reward.emeralds} Emeralds</span>
                      </motion.div>
                    )}

                    {reward.character && (
                      <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.6 }}
                        className="flex flex-col items-center"
                      >
                        <div className="mb-2 flex items-center gap-2">
                          <Star className="h-6 w-6 text-purple-500" />
                          <span className="text-lg font-bold">
                            New Character!
                          </span>
                        </div>
                        <div className="relative h-24 w-24 mb-2">
                          <Image
                            src={reward.character.image || "/placeholder.svg"}
                            alt={reward.character.name}
                            fill
                            className="object-contain"
                          />
                        </div>
                        <div className="font-medium">
                          {reward.character.name}
                        </div>
                        <Badge
                          variant="outline"
                          className={
                            reward.character.rarity === "Rare"
                              ? "bg-blue-100 text-blue-800"
                              : reward.character.rarity === "Epic"
                              ? "bg-purple-100 text-purple-800"
                              : "bg-amber-100 text-amber-800"
                          }
                        >
                          {reward.character.rarity}
                        </Badge>
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="flex justify-between">
            {!isOpen ? (
              <Button className="w-full" onClick={handleOpen}>
                Open Chest ({price}{" "}
                <Trophy className="h-4 w-4 ml-1 text-amber-300" />)
              </Button>
            ) : (
              <Button className="w-full" onClick={handleClose}>
                Claim Rewards
              </Button>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
