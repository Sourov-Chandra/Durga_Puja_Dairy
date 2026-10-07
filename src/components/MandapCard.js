"use client";

import { useState } from "react";
import Link from "next/link";
import { MapPin, Heart, ShieldCheck, Clock, Eye, Navigation, Sparkles } from "lucide-react";

export default function MandapCard({ mandap }) {
  const [isFavorited, setIsFavorited] = useState(false);
  const [favoriteCount, setFavoriteCount] = useState(mandap.favoriteCount || 0);

  const toggleFav = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (isFavorited) {
      setIsFavorited(false);
      setFavoriteCount((prev) => Math.max(0, prev - 1));
    } else {
      setIsFavorited(true);
      setFavoriteCount((prev) => prev + 1);
    }
  };

  const [lng, lat] = mandap.location?.coordinates || [0, 0];
  const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`;

  const coverUrl =
    mandap.coverImage?.url ||
    "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=800&q=80";

  return (
    <div className="group bg-stone-900/90 rounded-3xl overflow-hidden border border-stone-800 hover:border-amber-700/60 shadow-xl hover:shadow-2xl hover:shadow-red-950/30 transition-all duration-300 flex flex-col justify-between">
      <div>
        {/* Cover Image & Overlays */}
        <div className="relative aspect-[16/10] overflow-hidden bg-stone-950">
          <img
            src={coverUrl}
            alt={mandap.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950/95 via-stone-950/25 to-transparent" />

          {/* Top Badges */}
          <div className="absolute top-3 left-3 flex flex-wrap gap-1.5 items-center">
            {mandap.verificationStatus === "OFFICIAL" && (
              <span className="bg-red-900/90 backdrop-blur-md text-amber-200 border border-amber-500/40 text-[11px] font-bold px-2.5 py-1 rounded-full flex items-center gap-1 shadow-md">
                <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                <span>অফিসিয়াল কমিটি</span>
              </span>
            )}
            {mandap.tag && (
              <span className="bg-stone-950/85 backdrop-blur-md text-amber-300 border border-amber-800/40 text-[11px] font-semibold px-2.5 py-1 rounded-full flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-amber-400" />
                <span>{mandap.tag}</span>
              </span>
            )}
          </div>

          {/* Favorite Bookmark Button */}
          <button
            onClick={toggleFav}
            className={`absolute top-3 right-3 p-2.5 rounded-full backdrop-blur-md transition-all ${
              isFavorited
                ? "bg-red-600 text-white shadow-md shadow-red-700/50 scale-110"
                : "bg-stone-950/75 text-stone-300 hover:text-white hover:bg-stone-900 hover:scale-105"
            }`}
            aria-label="Save to My Diary"
          >
            <Heart
              className={`w-4 h-4 ${isFavorited ? "fill-white" : ""}`}
            />
          </button>

          {/* Location & Timezone Bar */}
          <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-stone-300">
            <span className="flex items-center gap-1.5 bg-stone-950/85 px-2.5 py-1 rounded-xl backdrop-blur-sm border border-stone-800 font-semibold text-amber-200">
              <MapPin className="w-3.5 h-3.5 text-red-500" />
              <span>
                {mandap.districtBn || mandap.address?.cityOrDistrict},{" "}
                {mandap.address?.country}
              </span>
            </span>

            {mandap.address?.timezone && (
              <span className="flex items-center gap-1 text-[11px] bg-stone-900/85 px-2 py-0.5 rounded-lg text-stone-300 border border-stone-800">
                <Clock className="w-3 h-3 text-amber-500" />
                <span>
                  {mandap.address.timezone.split("/")[1]?.replace("_", " ")}
                </span>
              </span>
            )}
          </div>
        </div>

        {/* Card Body */}
        <div className="p-5">
          <Link href={`/mandap/${mandap.slug}`}>
            <h3 className="text-lg font-bold text-stone-100 group-hover:text-amber-300 transition-colors line-clamp-1 mb-1">
              {mandap.name}
            </h3>
          </Link>

          {mandap.enName && (
            <p className="text-xs text-stone-400 font-normal mb-2.5 line-clamp-1">
              {mandap.enName}
            </p>
          )}

          <p className="text-xs text-stone-400 line-clamp-2 leading-relaxed mb-4">
            {mandap.description}
          </p>

          <p className="text-[11px] text-stone-500 flex items-center gap-1 mb-2">
            <span className="text-amber-500/80">ঠিকানা:</span>
            <span className="truncate">{mandap.address?.addressLine1}</span>
          </p>
        </div>
      </div>

      {/* Card Action Buttons (Direct Google Map Directions + Details) */}
      <div className="px-5 pb-5 pt-3 border-t border-stone-800/80 flex items-center justify-between gap-2">
        <div className="flex items-center gap-3 text-xs text-stone-400">
          <span className="flex items-center gap-1">
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500/30" />
            {favoriteCount}
          </span>
          <span className="flex items-center gap-1">
            <Eye className="w-3.5 h-3.5 text-stone-500" />
            {mandap.viewCount || 0}
          </span>
        </div>

        <div className="flex items-center gap-1.5">
          {/* Unseen Bangladesh style: One-click Map Directions */}
          <a
            href={googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-xl text-stone-300 bg-stone-950 border border-stone-800 hover:border-amber-600 hover:text-amber-300 transition-colors"
            title="Google Maps ম্যাপ ডিরেকশন"
          >
            <Navigation className="w-3.5 h-3.5 text-amber-500" />
          </a>

          <Link
            href={`/mandap/${mandap.slug}`}
            className="text-xs font-bold text-stone-950 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 px-3.5 py-2 rounded-xl transition-all shadow-md"
          >
            বিস্তারিত দেখুন →
          </Link>
        </div>
      </div>
    </div>
  );
}
