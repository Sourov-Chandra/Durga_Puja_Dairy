"use client";

import { useState } from "react";
import Link from "next/link";
import MandapCard from "@/components/MandapCard";
import { FALLBACK_MANDAPS } from "@/lib/api";
import { BookMarked, Compass, Calendar, Sparkles } from "lucide-react";

export default function MyDiaryPage() {
  // Show first 2 sample mandaps as default saved mandaps
  const [savedMandaps, setSavedMandaps] = useState(
    FALLBACK_MANDAPS.slice(0, 3)
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full">
      <div className="mb-8 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-400 uppercase tracking-wider mb-2">
            <BookMarked className="w-4 h-4" />
            <span>Personal Itinerary</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-stone-100">
            My Durga Puja Diary
          </h1>
          <p className="text-sm text-stone-400 mt-1">
            Your saved pandals and festival route for Durga Puja 2026.
          </p>
        </div>

        <Link
          href="/explore"
          className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-bold text-stone-950 bg-amber-400 hover:bg-amber-300 transition-colors shadow-md"
        >
          <Compass className="w-4 h-4" />
          <span>Discover More Pandals</span>
        </Link>
      </div>

      {savedMandaps.length > 0 ? (
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {savedMandaps.map((mandap) => (
              <MandapCard key={mandap._id} mandap={mandap} />
            ))}
          </div>

          <div className="mt-12 p-6 rounded-2xl bg-stone-900/80 border border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="text-3xl">🪔</span>
              <div>
                <h4 className="text-sm font-bold text-stone-100">
                  Ready for Puja Parikrama?
                </h4>
                <p className="text-xs text-stone-400">
                  You have {savedMandaps.length} pandals saved. Check their daily schedules for Pushpanjali and Aarti timings.
                </p>
              </div>
            </div>

            <Link
              href="/explore?tab=events"
              className="px-4 py-2 rounded-xl text-xs font-semibold text-amber-300 bg-amber-950/60 border border-amber-800/40 hover:bg-amber-900/50 transition-colors"
            >
              View Daily Ritual Calendar
            </Link>
          </div>
        </div>
      ) : (
        <div className="text-center py-20 bg-stone-900/40 rounded-3xl border border-stone-800">
          <BookMarked className="w-12 h-12 text-stone-600 mx-auto mb-4" />
          <h3 className="text-xl font-bold text-stone-200 mb-2">
            Your Diary is Empty
          </h3>
          <p className="text-xs text-stone-400 max-w-sm mx-auto mb-6">
            Click the heart icon on any mandap across the directory to build your personalized Durga Puja route.
          </p>
          <Link
            href="/explore"
            className="px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-xs"
          >
            Explore Worldwide Mandaps
          </Link>
        </div>
      )}
    </div>
  );
}
