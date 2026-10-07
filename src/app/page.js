"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Countdown from "@/components/Countdown";
import MandapCard from "@/components/MandapCard";
import EventCard from "@/components/EventCard";
import { FALLBACK_MANDAPS, FALLBACK_EVENTS, DISTRICT_CATALOG } from "@/lib/api";
import {
  Search,
  MapPin,
  Globe2,
  Calendar,
  Sparkles,
  ShieldCheck,
  Compass,
  ArrowRight,
  PlusCircle,
  Play,
  Flame,
} from "lucide-react";

export default function HomePage() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [activeRegion, setActiveRegion] = useState("ALL");

  const handleSearch = (e) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (searchQuery.trim()) params.set("search", searchQuery.trim());
    router.push(`/explore?${params.toString()}`);
  };

  const featuredMandaps =
    activeRegion === "ALL"
      ? FALLBACK_MANDAPS
      : FALLBACK_MANDAPS.filter((m) => m.countryCode === activeRegion);

  return (
    <div className="flex flex-col gap-16 pb-20 overflow-hidden">
      {/* HERO SECTION WITH VIDEO / ANIMATED FESTIVAL ATMOSPHERE */}
      <section className="relative overflow-hidden bg-stone-950 pt-16 pb-28 border-b border-amber-950/60">
        {/* Animated Background Video / Ambient Image Layer */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          {/* Looping royalty-free festive video element with fallback poster */}
          <video
            autoPlay
            loop
            muted
            playsInline
            poster="https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1920&q=80"
            className="w-full h-full object-cover opacity-20 scale-105 filter blur-[1px]"
          >
            <source
              src="https://assets.mixkit.co/videos/preview/mixkit-fire-sparks-rising-in-the-dark-42448-large.mp4"
              type="video/mp4"
            />
          </video>
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/80 to-stone-950/60" />
        </div>

        {/* Ambient Glows */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-red-600/20 via-amber-500/15 to-transparent blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          {/* Festival Welcome Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-red-950/90 border border-amber-500/50 text-amber-300 text-xs font-bold tracking-wide shadow-xl shadow-red-950/60 mb-6 animate-pulse">
            <Flame className="w-4 h-4 text-amber-400" />
            <span>মা আসছেন • শারদোৎসব ২০২৬ • বিশ্বব্যাপী দুর্গাপূজা পরিক্রমা</span>
          </div>

          {/* Main Headline in Bengali & English */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-stone-100 tracking-tight leading-[1.15] mb-4 max-w-4xl mx-auto">
            বিশ্বজুড়ে দুর্গাপূজা আবিষ্কার করুন <br />
            <span className="bg-gradient-to-r from-amber-200 via-amber-400 to-red-500 bg-clip-text text-transparent">
              Durga Puja Dairy
            </span>
          </h1>

          <p className="text-sm sm:text-lg text-stone-300 max-w-2xl mx-auto mb-8 leading-relaxed font-medium">
            ঠাকুরগাঁও, ঢাকা ও কলকাতার ঐতিহ্যবাহী মণ্ডপ থেকে লন্ডন ও নিউ ইয়র্কের বর্ণাঢ্য উৎসব — 
            এক ক্লিকে খুঁজুন পূজামণ্ডপ, অঞ্জলি সময়সূচি ও সরাসরি গুগল ম্যাপ ডিরেকশন।
          </p>

          {/* Live Festival Countdown with motion */}
          <div className="flex justify-center mb-10 transform hover:scale-[1.02] transition-transform">
            <Countdown />
          </div>

          {/* Instant Search Bar */}
          <form
            onSubmit={handleSearch}
            className="max-w-3xl mx-auto bg-stone-900/95 border border-amber-600/50 rounded-3xl p-2 sm:p-2.5 shadow-2xl shadow-red-950/70 backdrop-blur-md flex flex-col sm:flex-row items-center gap-2"
          >
            <div className="flex-1 flex items-center gap-3 px-4 py-2.5 w-full">
              <Search className="w-5 h-5 text-amber-400 shrink-0" />
              <input
                type="text"
                placeholder="মণ্ডপের নাম, মন্দির বা এলাকা লিখুন (e.g. গোবিন্দ জিউ, বাগবাজার, ঢাকেশ্বরী)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-transparent text-stone-100 placeholder-stone-400 text-xs sm:text-sm focus:outline-none"
              />
            </div>

            <button
              type="submit"
              className="w-full sm:w-auto px-7 py-3.5 rounded-2xl font-bold text-xs sm:text-sm text-stone-950 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-400 hover:from-amber-300 hover:to-amber-400 shadow-md shadow-amber-950/50 transition-all shrink-0 cursor-pointer"
            >
              মণ্ডপ খুঁজুন
            </button>
          </form>

          {/* Unseen Bangladesh Style: Quick District Chips Bar */}
          <div className="mt-8 flex flex-col items-center gap-3">
            <div className="flex items-center gap-2 text-xs text-amber-300/80 font-semibold uppercase tracking-wider">
              <MapPin className="w-3.5 h-3.5 text-red-500" />
              <span>জনপ্রিয় জেলা ও শহর বাছাই:</span>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-2 max-w-3xl">
              {[
                { bn: "ঠাকুরগাঁও", en: "Thakurgaon", id: "thakurgaon", flag: "🇧🇩" },
                { bn: "ঢাকা", en: "Dhaka", id: "dhaka", flag: "🇧🇩" },
                { bn: "দিনাজপুর", en: "Dinajpur", id: "dinajpur", flag: "🇧🇩" },
                { bn: "কলকাতা", en: "Kolkata", id: "kolkata", flag: "🇮🇳" },
                { bn: "হাওড়া", en: "Howrah", id: "howrah", flag: "🇮🇳" },
                { bn: "লন্ডন", en: "London", id: "london", flag: "🇬🇧" },
                { bn: "নিউ ইয়র্ক", en: "New York", id: "newyork", flag: "🇺🇸" },
              ].map((chip) => (
                <Link
                  key={chip.id}
                  href={`/explore?district=${chip.id}`}
                  className="group flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-stone-900/90 border border-stone-800 hover:border-amber-600 text-stone-300 hover:text-amber-200 text-xs font-semibold transition-all hover:scale-105"
                >
                  <span>{chip.flag}</span>
                  <span className="font-bold">{chip.bn}</span>
                  <span className="text-[10px] text-stone-500 group-hover:text-amber-400">
                    ({chip.en})
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED MANDAPS WITH REGION SWITCHER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider mb-2">
              <Compass className="w-4 h-4 text-red-500" />
              <span>ঐতিহ্যবাহী পূজামণ্ডপ ডিরেক্টরি</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-stone-100">
              নির্বাচিত প্রধান পূজামণ্ডপসমূহ
            </h2>
          </div>

          {/* Region Tabs */}
          <div className="flex items-center gap-1.5 p-1.5 rounded-2xl bg-stone-900 border border-stone-800 text-xs">
            {[
              { id: "ALL", label: "🌍 সমগ্র বিশ্ব" },
              { id: "BD", label: "🇧🇩 বাংলাদেশ" },
              { id: "IN", label: "🇮🇳 ভারত" },
              { id: "GB", label: "🇬🇧 যুক্তরাজ্য" },
              { id: "US", label: "🇺🇸 যুক্তরাষ্ট্র" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveRegion(tab.id)}
                className={`px-3.5 py-1.5 rounded-xl font-bold transition-all cursor-pointer ${
                  activeRegion === tab.id
                    ? "bg-gradient-to-r from-red-600 to-amber-600 text-white shadow-md shadow-red-950/60"
                    : "text-stone-400 hover:text-stone-200"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Mandap Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredMandaps.slice(0, 6).map((mandap) => (
            <MandapCard key={mandap._id} mandap={mandap} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/explore"
            className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-2xl text-xs sm:text-sm font-bold text-stone-950 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 transition-all shadow-xl shadow-amber-950/50 hover:scale-105 cursor-pointer"
          >
            <span>সম্পূর্ণ ডিরেক্টরি ও জেলা ফিল্টার দেখুন</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* CULTURAL EVENTS SECTION */}
      <section className="bg-stone-900/60 border-y border-stone-800/80 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
            <div>
              <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider mb-2">
                <Calendar className="w-4 h-4 text-amber-400" />
                <span>আরতি, অঞ্জলি ও সাংস্কৃতিক আসর</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-black text-stone-100">
                আসন্ন সাংস্কৃতিক উৎসব ও প্রতিযোগিতা
              </h2>
            </div>

            <Link
              href="/explore?tab=events"
              className="text-xs font-bold text-amber-400 hover:text-amber-300 flex items-center gap-1"
            >
              <span>সকল অনুষ্ঠান দেখুন</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {FALLBACK_EVENTS.map((evt) => (
              <EventCard key={evt._id} event={evt} />
            ))}
          </div>
        </div>
      </section>

      {/* UNSEEN BANGLADESH STYLE INSPIRATION CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-red-950 via-stone-900 to-amber-950 border border-amber-600/50 p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
          <div className="max-w-xl">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-2 block">
              কমিটি ও পূজা আয়োজকবৃন্দ
            </span>
            <h3 className="text-2xl sm:text-4xl font-black text-stone-100 mb-3">
              আপনার এলাকার পূজা কি তালিকায় নেই?
            </h3>
            <p className="text-xs sm:text-sm text-stone-300 leading-relaxed font-medium">
              ভক্তদের জন্য আপনার মন্দিরের সঠিক অবস্থান, অঞ্জলি সময়সূচি ও আলোকসজ্জার ছবি যুক্ত করুন। ডুপ্লিকেট রোধক ব্যবস্থার মাধ্যমে স্বাচ্ছন্দ্যে পূজা নিবন্ধন করুন।
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
            <Link
              href="/submit"
              className="w-full sm:w-auto px-7 py-4 rounded-2xl font-bold text-xs sm:text-sm text-stone-950 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 transition-all text-center flex items-center justify-center gap-2 shadow-xl shadow-amber-950/60"
            >
              <PlusCircle className="w-4 h-4" />
              <span>নতুন মণ্ডপ জমা দিন</span>
            </Link>

            <Link
              href="/explore"
              className="w-full sm:w-auto px-7 py-4 rounded-2xl font-bold text-xs sm:text-sm text-stone-200 bg-stone-900/90 border border-stone-700 hover:bg-stone-850 hover:text-white transition-all text-center"
            >
              ডিরেক্টরি ব্রাউজ করুন
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
