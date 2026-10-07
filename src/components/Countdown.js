"use client";

import { useState, useEffect } from "react";
import { Clock } from "lucide-react";

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Target: Durga Puja 2026 Maha Shasthi (October 17, 2026)
    const targetDate = new Date("2026-10-17T06:00:00Z").getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="inline-flex flex-wrap items-center gap-3 bg-stone-900/90 border border-amber-800/40 px-5 py-3 rounded-2xl shadow-xl shadow-red-950/30 backdrop-blur-sm">
      <div className="flex items-center gap-2 text-amber-400 font-semibold text-xs tracking-wider uppercase pr-2 border-r border-amber-900/50">
        <Clock className="w-4 h-4 animate-pulse text-amber-500" />
        <span>Maha Shasthi 2026</span>
      </div>

      <div className="flex items-center gap-4 text-center">
        <div className="flex flex-col">
          <span className="text-xl sm:text-2xl font-black text-amber-100 font-mono">
            {String(timeLeft.days).padStart(2, "0")}
          </span>
          <span className="text-[10px] text-amber-400/80 uppercase font-medium">Days</span>
        </div>
        <span className="text-amber-600 font-bold">:</span>
        <div className="flex flex-col">
          <span className="text-xl sm:text-2xl font-black text-amber-100 font-mono">
            {String(timeLeft.hours).padStart(2, "0")}
          </span>
          <span className="text-[10px] text-amber-400/80 uppercase font-medium">Hours</span>
        </div>
        <span className="text-amber-600 font-bold">:</span>
        <div className="flex flex-col">
          <span className="text-xl sm:text-2xl font-black text-amber-100 font-mono">
            {String(timeLeft.minutes).padStart(2, "0")}
          </span>
          <span className="text-[10px] text-amber-400/80 uppercase font-medium">Mins</span>
        </div>
        <span className="text-amber-600 font-bold">:</span>
        <div className="flex flex-col">
          <span className="text-xl sm:text-2xl font-black text-amber-100 font-mono">
            {String(timeLeft.seconds).padStart(2, "0")}
          </span>
          <span className="text-[10px] text-amber-400/80 uppercase font-medium">Secs</span>
        </div>
      </div>
    </div>
  );
}
