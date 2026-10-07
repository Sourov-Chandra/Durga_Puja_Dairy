"use client";

import { useState, useMemo } from "react";
import { WORLD_REGIONS, DISTRICT_CATALOG } from "@/lib/api";
import { Search, MapPin, Check, X, RotateCcw, Sparkles } from "lucide-react";

export default function PlaceSelector({
  selectedRegion,
  onSelectRegion,
  selectedDistricts,
  onToggleDistrict,
  onClearAll,
  onSelectAll,
  searchQuery,
  onSearchChange,
  totalFilteredCount,
}) {
  const [districtSearch, setDistrictSearch] = useState("");

  // Filter districts by selected region and local search
  const availableDistricts = useMemo(() => {
    return DISTRICT_CATALOG.filter((d) => {
      const matchRegion =
        selectedRegion === "ALL" || d.regionId === selectedRegion;
      const matchSearch =
        !districtSearch ||
        d.bnName.toLowerCase().includes(districtSearch.toLowerCase()) ||
        d.enName.toLowerCase().includes(districtSearch.toLowerCase());
      return matchRegion && matchSearch;
    });
  }, [selectedRegion, districtSearch]);

  const allVisibleSelected =
    availableDistricts.length > 0 &&
    availableDistricts.every((d) => selectedDistricts.includes(d.id));

  return (
    <div className="bg-stone-900/90 border border-amber-900/40 rounded-3xl p-5 sm:p-7 shadow-2xl backdrop-blur-md transition-all">
      {/* LEVEL 1: REGION / COUNTRY SELECTION ROW */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-3">
          <label className="text-xs font-bold uppercase tracking-wider text-amber-400 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
            <span>১. দেশ বা অঞ্চল নির্বাচন করুন (Select Country)</span>
          </label>
          <span className="text-xs text-stone-400">
            {WORLD_REGIONS.length}টি দেশ অন্তর্ভুক্ত
          </span>
        </div>

        {/* Scrollable Region Pills (Unseen Bangladesh style) */}
        <div className="flex items-center gap-2.5 overflow-x-auto pb-2 scrollbar-thin">
          {WORLD_REGIONS.map((r) => {
            const isSelected = selectedRegion === r.id;
            return (
              <button
                key={r.id}
                type="button"
                onClick={() => onSelectRegion(r.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all shrink-0 border cursor-pointer ${
                  isSelected
                    ? "bg-gradient-to-r from-red-600 via-rose-600 to-amber-600 text-white border-amber-500/60 shadow-lg shadow-red-950/60 scale-[1.03]"
                    : "bg-stone-950/80 text-stone-300 border-stone-800 hover:border-amber-800/80 hover:text-amber-200"
                }`}
              >
                <span className="text-base">{r.flag}</span>
                <span>{r.bnName}</span>
                <span className="text-[11px] opacity-75 font-normal">
                  ({r.enName})
                </span>
                <span
                  className={`text-[10px] px-1.5 py-0.5 rounded-full font-bold ml-1 ${
                    isSelected
                      ? "bg-black/30 text-amber-200"
                      : "bg-stone-900 text-stone-400"
                  }`}
                >
                  {r.count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* LEVEL 2: DISTRICT & PLACE CHIPS SELECTION */}
      <div className="pt-4 border-t border-stone-800/80">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
          <div>
            <label className="text-xs font-bold uppercase tracking-wider text-amber-400 flex items-center gap-2">
              <MapPin className="w-4 h-4 text-red-500" />
              <span>২. জেলা বা শহর বাছাই করুন (Click District Chips)</span>
            </label>
            <p className="text-xs text-stone-400 mt-0.5">
              পছন্দের জেলার চিপে ক্লিক করে একাধিক মণ্ডপ একসঙ্গে ফিল্টার করুন
            </p>
          </div>

          {/* Quick Selection Actions */}
          <div className="flex items-center gap-2 shrink-0">
            <button
              type="button"
              onClick={() => onSelectAll(availableDistricts.map((d) => d.id))}
              className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-stone-950 border border-stone-800 hover:border-amber-700 text-stone-300 hover:text-amber-300 transition-colors"
            >
              সব বাছুন (All)
            </button>
            <button
              type="button"
              onClick={onClearAll}
              className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-stone-950 border border-stone-800 hover:border-red-800 text-stone-400 hover:text-red-300 transition-colors flex items-center gap-1"
            >
              <RotateCcw className="w-3 h-3" />
              <span>মুছুন (Clear)</span>
            </button>
          </div>
        </div>

        {/* Search District Filter */}
        <div className="relative mb-3">
          <Search className="w-3.5 h-3.5 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="জেলার নাম লিখুন (e.g. ঠাকুরগাঁও, কলকাতা, ঢাকা, London)..."
            value={districtSearch}
            onChange={(e) => setDistrictSearch(e.target.value)}
            className="w-full bg-stone-950 border border-stone-800 rounded-xl pl-9 pr-3 py-2 text-xs text-stone-200 placeholder-stone-500 focus:outline-none focus:border-amber-600"
          />
        </div>

        {/* Place Chips Grid (Exact interaction pattern of Unseen Bangladesh) */}
        <div className="flex flex-wrap gap-2 pt-1 max-h-48 overflow-y-auto pr-1">
          {availableDistricts.map((d) => {
            const isSelected = selectedDistricts.includes(d.id);
            return (
              <button
                key={d.id}
                type="button"
                onClick={() => onToggleDistrict(d.id)}
                aria-pressed={isSelected}
                className={`group flex items-center gap-2 px-3.5 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer border select-none ${
                  isSelected
                    ? "bg-amber-950/80 border-amber-500 text-amber-200 shadow-md shadow-amber-950/50 scale-[1.02]"
                    : "bg-stone-950/70 border-stone-800 text-stone-300 hover:border-stone-700 hover:text-white"
                }`}
              >
                {/* Active Indicator Checkmark */}
                <span
                  className={`w-4 h-4 rounded-full flex items-center justify-center text-[10px] transition-colors ${
                    isSelected
                      ? "bg-amber-500 text-stone-950 font-black"
                      : "bg-stone-800 text-transparent group-hover:text-stone-500"
                  }`}
                >
                  <Check className="w-2.5 h-2.5 stroke-[3]" />
                </span>

                <span className="font-bold">{d.bnName}</span>
                <span className="text-[11px] opacity-70 font-normal">
                  • {d.enName}
                </span>

                <span
                  className={`text-[10px] px-1.5 py-0.5 rounded-full font-bold ml-0.5 ${
                    isSelected
                      ? "bg-amber-900/60 text-amber-200"
                      : "bg-stone-900 text-stone-500"
                  }`}
                >
                  {d.count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* LEVEL 3: ACTIVE SUMMARY FOOTER */}
      <div className="mt-5 pt-4 border-t border-stone-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-2 text-stone-300">
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          <span>
            {selectedDistricts.length > 0 ? (
              <>
                <strong className="text-amber-300 font-bold">
                  {selectedDistricts.length}টি জেলা
                </strong>{" "}
                বাছাই করা হয়েছে • মোট{" "}
                <strong className="text-amber-300 font-bold">
                  {totalFilteredCount}টি মণ্ডপ
                </strong>{" "}
                প্রদর্শিত
              </>
            ) : (
              <>সকল জেলার মোট <strong className="text-amber-300">{totalFilteredCount}টি মণ্ডপ</strong> প্রদর্শিত</>
            )}
          </span>
        </div>

        {/* Global Mandap Keyword Search */}
        <div className="relative w-full sm:w-64">
          <Search className="w-3.5 h-3.5 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="মণ্ডপ বা মন্দিরের নাম খুঁজুন..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full bg-stone-950 border border-stone-800 rounded-xl pl-8 pr-3 py-1.5 text-xs text-stone-200 placeholder-stone-500 focus:outline-none focus:border-amber-600"
          />
        </div>
      </div>
    </div>
  );
}
