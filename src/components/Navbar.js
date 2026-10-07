"use client";

import { useState } from "react";
import Link from "next/link";
import { Compass, BookMarked, PlusCircle, Calendar, Menu, X, Globe, Sparkles } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-stone-950/95 backdrop-blur-md border-b border-amber-900/30 text-stone-100 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-500 via-red-600 to-rose-700 p-0.5 shadow-lg shadow-red-950/50 group-hover:scale-105 transition-transform flex items-center justify-center">
              <span className="text-2xl">🪔</span>
            </div>
            <div>
              <span className="text-xl font-bold tracking-tight text-amber-100 flex items-center gap-1.5">
                Durga Puja Dairy
                <span className="text-xs px-2 py-0.5 rounded-full bg-red-950 text-amber-400 border border-amber-800/50 font-medium">
                  Global
                </span>
              </span>
              <p className="text-xs text-amber-300/70 font-medium tracking-wide">
                Worldwide Puja Guide & Mandap Directory
              </p>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            <Link
              href="/explore"
              className="px-3.5 py-2 rounded-xl text-sm font-medium text-stone-200 hover:text-amber-300 hover:bg-stone-900/80 transition-colors flex items-center gap-2"
            >
              <Compass className="w-4 h-4 text-amber-500" />
              Explore Mandaps
            </Link>

            <Link
              href="/explore?tab=events"
              className="px-3.5 py-2 rounded-xl text-sm font-medium text-stone-200 hover:text-amber-300 hover:bg-stone-900/80 transition-colors flex items-center gap-2"
            >
              <Calendar className="w-4 h-4 text-amber-500" />
              Events & Schedules
            </Link>

            <Link
              href="/my-diary"
              className="px-3.5 py-2 rounded-xl text-sm font-medium text-stone-200 hover:text-amber-300 hover:bg-stone-900/80 transition-colors flex items-center gap-2"
            >
              <BookMarked className="w-4 h-4 text-amber-500" />
              My Diary
            </Link>

            <Link
              href="/submit"
              className="px-3.5 py-2 rounded-xl text-sm font-medium text-amber-300 bg-amber-950/40 border border-amber-800/40 hover:bg-amber-900/50 transition-colors flex items-center gap-2 ml-2"
            >
              <PlusCircle className="w-4 h-4 text-amber-400" />
              Submit Mandap
            </Link>
          </nav>

          {/* Action Button & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <Link
              href="/explore"
              className="hidden lg:inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-red-700 via-rose-700 to-amber-600 hover:from-red-600 hover:to-amber-500 shadow-md shadow-red-950/50 transition-all hover:shadow-red-900/50 hover:scale-[1.02]"
            >
              <Globe className="w-4 h-4" />
              Find Near Me
            </Link>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2.5 rounded-xl bg-stone-900 text-stone-300 hover:text-white border border-stone-800"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-stone-950 border-b border-amber-900/40 px-4 pt-3 pb-6 space-y-2">
          <Link
            href="/explore"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-3 px-4 py-3 rounded-xl text-stone-200 hover:bg-stone-900"
          >
            <Compass className="w-5 h-5 text-amber-400" />
            Explore Mandaps
          </Link>
          <Link
            href="/explore?tab=events"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-3 px-4 py-3 rounded-xl text-stone-200 hover:bg-stone-900"
          >
            <Calendar className="w-5 h-5 text-amber-400" />
            Events & Schedules
          </Link>
          <Link
            href="/my-diary"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-3 px-4 py-3 rounded-xl text-stone-200 hover:bg-stone-900"
          >
            <BookMarked className="w-5 h-5 text-amber-400" />
            My Diary
          </Link>
          <Link
            href="/submit"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-3 px-4 py-3 rounded-xl text-amber-300 bg-amber-950/60 border border-amber-800/50"
          >
            <PlusCircle className="w-5 h-5 text-amber-400" />
            Submit Mandap
          </Link>
        </div>
      )}
    </header>
  );
}
