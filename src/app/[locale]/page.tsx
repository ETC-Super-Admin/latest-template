"use client";

import React from "react";
import { Button } from "@heroui/react";
import NextLink from "next/link";

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center text-center h-full">
      <h1 className="text-4xl font-bold">Learn Chinese for Airport Travel</h1>
      <p className="text-xl text-gray-500 mt-4">Master essential vocabulary and phrases for your next trip.</p>
      <Button as={NextLink} href="/categories" color="primary" size="lg" className="mt-8">
        Start Learning
      </Button>
    </div>
  );
}
