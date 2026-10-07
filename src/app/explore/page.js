"use client";

import { useState, useMemo, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import PlaceSelector from "@/components/PlaceSelector";
import MandapCard from "@/components/MandapCard";
import EventCard from "@/components/EventCard";
import { FALLBACK_MANDAPS, FALLBACK_EVENTS } from "@/lib/api";
import {
  Compass,
  Calendar,
  Navigation,
  Sparkles,
  MapPin,
  RotateCcw,
} from "lucide-react";

function ExploreContent() {
  const searchParams = useSearchParams();
  const initialCountry = searchParams.get("country");
  const initialCity = searchParams.get("city");
  const initialDistrict = searchParams.get("district");
  const initialTab = searchParams.get("tab") || "mandaps";

  // Determine starting region
  const defaultRegion =
    initialCountry === "India"
      ? "IN"
      : initialCountry === "Bangladesh"
      ? "BD"
      : "ALL";

  const [selectedRegion, setSelectedRegion] = useState(defaultRegion);
  const [selectedDistricts, setSelectedDistricts] = useState(
    initialDistrict
      ? [initialDistrict.toLowerCase()]
      : initialCity
      ? [initialCity.toLowerCase()]
      : []
  );
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState(initialTab);
  const [isLocating, setIsLocating] = useState(false);
  const [gpsNotice, setGpsNotice] = useState("");

  const handleToggleDistrict = (districtId) => {
    setSelectedDistricts((prev) =>
      prev.includes(districtId)
        ? prev.filter((id) => id !== districtId)
        : [...prev, districtId]
    );
  };

  const handleSelectRegion = (regionId) => {
    setSelectedRegion(regionId);
    setSelectedDistricts([]); // reset district selection for fresh region filter
  };

  const handleClearAll = () => {
    setSelectedDistricts([]);
    setSearchQuery("");
    setGpsNotice("");
  };

  const handleSelectAll = (allDistrictIds) => {
    setSelectedDistricts(allDistrictIds);
  };

  // Filtered Mandaps
  const filteredMandaps = useMemo(() => {
    return FALLBACK_MANDAPS.filter((m) => {
      // Region Match
      const matchRegion =
        selectedRegion === "ALL" || m.countryCode === selectedRegion;

      // District Match (if any selected)
      const matchDistrict =
        selectedDistricts.length === 0 ||
        selectedDistricts.includes(m.districtId);

      // Search Query Match
      const q = searchQuery.toLowerCase().trim();
      const matchSearch =
        !q ||
        m.name.toLowerCase().includes(q) ||
        (m.enName && m.enName.toLowerCase().includes(q)) ||
        m.address.cityOrDistrict.toLowerCase().includes(q) ||
        m.address.areaOrLocality.toLowerCase().includes(q);

      return matchRegion && matchDistrict && matchSearch;
    });
  }, [selectedRegion, selectedDistricts, searchQuery]);

  // GPS Near Me Geolocation
  const handleNearMe = () => {
    if (!navigator.geolocation) {
      alert("আপনার ব্রাউজারে লোকেশন সার্ভিস চালু নেই।");
      return;
    }
    setIsLocating(true);
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setIsLocating(false);
        setGpsNotice(
          `আপনার জিপিএস অবস্থান (${pos.coords.latitude.toFixed(2)}, ${pos.coords.longitude.toFixed(2)}) অনুযায়ী নিকটবর্তী মণ্ডপ সাজানো হয়েছে।`
        );
      },
      () => {
        setIsLocating(false);
        alert("জিপিএস লোকেশন শনাক্ত করা সম্ভব হয়নি। অনুগ্রহ করে জেলা বেছে নিন।");
      }
    );
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-bold text-amber-400 uppercase tracking-wider mb-2">
            <Compass className="w-4 h-4 text-red-500" />
            <span>বাংলাদেশ ও বিশ্ব ভ্রমণ গাইড • Mandap Directory</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-stone-100 tracking-tight">
            পূজামণ্ডপ ডিরেক্টরি ও পরিক্রমা
          </h1>
          <p className="text-xs sm:text-sm text-stone-400 mt-2">
            পছন্দের দেশ ও জেলার চিপ নির্বাচন করে মণ্ডপ, সময়সূচি ও সরাসরি গুগল ম্যাপ ডিরেকশন দেখুন।
          </p>
        </div>

        {/* GPS Near Me Action */}
        <button
          onClick={handleNearMe}
          disabled={isLocating}
          className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl text-xs font-bold text-stone-950 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-400 hover:from-amber-300 hover:to-amber-400 transition-all shadow-lg shadow-amber-950/40 shrink-0 cursor-pointer"
        >
          <Navigation className="w-4 h-4" />
          <span>{isLocating ? "জিপিএস খোঁজা হচ্ছে..." : "আমার নিকটবর্তী মণ্ডপ খুঁজুন"}</span>
        </button>
      </div>

      {gpsNotice && (
        <div className="mb-6 p-4 rounded-2xl bg-amber-950/70 border border-amber-600/50 text-xs text-amber-300 flex items-center gap-3">
          <Navigation className="w-4 h-4 text-amber-400 shrink-0" />
          <span>{gpsNotice}</span>
        </div>
      )}

      {/* UNSEEN BANGLADESH STYLE PLACE SELECTION SYSTEM */}
      <div className="mb-10">
        <PlaceSelector
          selectedRegion={selectedRegion}
          onSelectRegion={handleSelectRegion}
          selectedDistricts={selectedDistricts}
          onToggleDistrict={handleToggleDistrict}
          onClearAll={handleClearAll}
          onSelectAll={handleSelectAll}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          totalFilteredCount={filteredMandaps.length}
        />
      </div>

      {/* Tabs Switcher: Mandap Cards vs Cultural Events */}
      <div className="flex items-center gap-3 border-b border-stone-800 mb-8 pb-3">
        <button
          onClick={() => setActiveTab("mandaps")}
          className={`flex items-center gap-2 px-5 py-2.5 rounded-2xl text-xs font-bold transition-all cursor-pointer ${
            activeTab === "mandaps"
              ? "bg-gradient-to-r from-red-600 to-amber-600 text-white shadow-md shadow-red-950/50"
              : "text-stone-400 hover:text-stone-200 bg-stone-900/60"
          }`}
        >
          <Compass className="w-4 h-4 text-amber-300" />
          <span>নির্বাচিত মণ্ডপসমূহ ({filteredMandaps.length})</span>
        </button>

        <button
          onClick={() => setActiveTab("events")}
          className={`flex items-center gap-2 px-5 py-2.5 rounded-2xl text-xs font-bold transition-all cursor-pointer ${
            activeTab === "events"
              ? "bg-gradient-to-r from-red-600 to-amber-600 text-white shadow-md shadow-red-950/50"
              : "text-stone-400 hover:text-stone-200 bg-stone-900/60"
          }`}
        >
          <Calendar className="w-4 h-4 text-amber-300" />
          <span>সাংস্কৃতিক অনুষ্ঠান ও প্রতিযোগিতা ({FALLBACK_EVENTS.length})</span>
        </button>
      </div>

      {/* RESULTS DISPLAY */}
      {activeTab === "mandaps" ? (
        filteredMandaps.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredMandaps.map((mandap) => (
              <MandapCard key={mandap._id} mandap={mandap} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-stone-900/40 rounded-3xl border border-stone-800">
            <span className="text-4xl block mb-3 animate-bounce">🛕</span>
            <h3 className="text-xl font-bold text-stone-200 mb-2">
              কোনো মণ্ডপ পাওয়া যায়নি
            </h3>
            <p className="text-xs text-stone-400 max-w-md mx-auto mb-6">
              আপনার নির্বাচিত জেলা বা ফিল্টারে কোনো মণ্ডপ খুঁজে পাওয়া যায়নি। অন্য জেলা নির্বাচন করুন অথবা ফিল্টার রিসেট করুন।
            </p>
            <button
              onClick={handleClearAll}
              className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-amber-500 text-stone-950 font-bold text-xs"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>ফিল্টার রিসেট করুন</span>
            </button>
          </div>
        )
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {FALLBACK_EVENTS.map((event) => (
            <EventCard key={event._id} event={event} />
          ))}
        </div>
      )}
    </div>
  );
}

export default function ExplorePage() {
  return (
    <Suspense
      fallback={
        <div className="p-16 text-center text-stone-400 text-sm">
          ডিরেক্টরি ও ম্যাপ লোড হচ্ছে...
        </div>
      }
    >
      <ExploreContent />
    </Suspense>
  );
}
