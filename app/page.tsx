"use client";
import React from "react";
import Link from "next/link";
import Navbar from "@/components/ui/Navbar";
import Bot from "@/components/Bot";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import { ButtonTop } from "@/components/store/ButtonTop";

export default function Page() {
  return (
    <div className="bg-black">
      <Navbar />
      <Hero />
      <Services/>
      <Bot />
      <ButtonTop/>
    </div>

    
  );
}
