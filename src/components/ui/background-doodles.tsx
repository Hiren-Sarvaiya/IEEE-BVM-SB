"use client";

import React from "react";
import {
  Cpu, Laptop, Code, Atom, Globe, Database,
  Cog, Binary, Zap, Boxes, FileCode, Terminal,
  Settings, Server, Network, Shield, Layers,
  Lightbulb, GraduationCap, Microscope
} from "lucide-react";

const doodles = [
  { Icon: Cpu, top: "5%", left: "10%", rotate: 15 },
  { Icon: Code, top: "15%", left: "85%", rotate: -10 },
  { Icon: Laptop, top: "40%", left: "5%", rotate: -20 },
  { Icon: Atom, top: "25%", left: "20%", rotate: 25 },
  { Icon: Globe, top: "60%", left: "90%", rotate: 12 },
  { Icon: Database, top: "80%", left: "15%", rotate: -15 },
  { Icon: Cog, top: "10%", left: "50%", rotate: 45 },
  { Icon: Binary, top: "35%", left: "75%", rotate: -5 },
  { Icon: Zap, top: "55%", left: "30%", rotate: 30 },
  { Icon: Boxes, top: "70%", left: "80%", rotate: -25 },
  { Icon: Terminal, top: "90%", left: "45%", rotate: 10 },
  { Icon: GraduationCap, top: "45%", left: "55%", rotate: -15 },
  { Icon: Server, top: "20%", left: "40%", rotate: 20 },
  { Icon: Microscope, top: "75%", left: "60%", rotate: 35 },
  { Icon: Lightbulb, top: "5%", left: "70%", rotate: -30 },
  { Icon: Shield, top: "85%", left: "5%", rotate: 15 },
  { Icon: Layers, top: "30%", left: "95%", rotate: -10 },
  { Icon: Network, top: "65%", left: "2%", rotate: 40 },
  { Icon: FileCode, top: "50%", left: "15%", rotate: -25 },
  { Icon: Settings, top: "95%", left: "80%", rotate: 20 },
];

export function BackgroundDoodles() {
  return (
    <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden opacity-[0.08] dark:opacity-[0.05]">
      {doodles.map((doodle, i) => (
        <div
          key={i}
          className="absolute"
          style={{
            top: doodle.top,
            left: doodle.left,
            transform: `rotate(${doodle.rotate}deg)`,
          }}
        >
          <doodle.Icon className="w-12 h-12 md:w-20 md:h-20" strokeWidth={1} />
        </div>
      ))}
    </div>
  );
}
