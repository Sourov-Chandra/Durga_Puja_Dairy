"use client";

import { use, useState, useEffect, Suspense } from "react";
import Link from "next/link";
import { fetchMandapBySlug } from "@/lib/api";
import {
  MapPin,
  Calendar,
  Clock,
  Heart,
  Share2,
  ShieldCheck,
  AlertCircle,
  Music,
  ExternalLink,
  ChevronLeft,
  Building,
} from "lucide-react";

function MandapDetailsContent({ params }) {
  const resolvedParams = use(params);
  const slug = resolvedParams.slug;

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("schedules");
  const [isFavorited, setIsFavorited] = useState(false);

  useEffect(() => {
    async function load() {
      setLoading(true);
      const res = await fetchMandapBySlug(slug);
      setData(res);
      if (res) setIsFavorited(res.isFavorited || false);
      setLoading(false);
    }
    load();
  }, [slug]);

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center text-stone-400">
        <div className="w-10 h-10 border-4 border-amber-500 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
        <p className="text-sm">Loading mandap profile...</p>
      </div>
    );
  }

  if (!data || !data.mandap) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center text-stone-400">
        <span className="text-4xl block mb-3">🛕</span>
        <h2 className="text-2xl font-bold text-stone-100 mb-2">Mandap Not Found</h2>
        <p className="text-xs text-stone-400 mb-6">
          The requested mandap could not be located.
        </p>
        <Link
          href="/explore"
          className="text-xs font-semibold px-4 py-2 rounded-xl bg-amber-500 text-stone-950"
        >
          Return to Directory
        </Link>
      </div>
    );
  }

  const { mandap, schedules, events, announcements } = data;
  const [lng, lat] = mandap.location?.coordinates || [0, 0];
  const mapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
      {/* Back Link */}
      <Link
        href="/explore"
        className="inline-flex items-center gap-1.5 text-xs font-semibold text-stone-400 hover:text-amber-300 transition-colors mb-6"
      >
        <ChevronLeft className="w-4 h-4" />
        <span>Back to Directory</span>
      </Link>

      {/* Hero Banner Card */}
      <div className="bg-stone-900 rounded-3xl overflow-hidden border border-stone-800 shadow-2xl mb-8">
        <div className="relative aspect-[21/9] sm:aspect-[24/9] bg-stone-950">
          <img
            src={
              mandap.coverImage?.url ||
              "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1200&q=80"
            }
            alt={mandap.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-transparent" />

          {/* Badges on Top */}
          <div className="absolute top-4 left-4 flex items-center gap-2">
            {mandap.verificationStatus === "OFFICIAL" && (
              <span className="bg-red-900/90 backdrop-blur-md text-amber-200 border border-amber-500/30 text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1 shadow-md">
                <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                <span>Official Committee</span>
              </span>
            )}
            <span className="bg-stone-900/90 backdrop-blur-md text-stone-200 border border-stone-700 text-xs font-medium px-3 py-1 rounded-full">
              Year {mandap.year || 2026}
            </span>
          </div>

          {/* Title and Address in Hero Overlay */}
          <div className="absolute bottom-4 left-4 right-4 sm:left-8 sm:bottom-8 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <h1 className="text-2xl sm:text-4xl font-extrabold text-stone-100 mb-2">
                {mandap.name}
              </h1>
              <p className="text-xs sm:text-sm text-amber-200/90 font-medium flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-red-400 shrink-0" />
                {mandap.address?.addressLine1}, {mandap.address?.areaOrLocality},{" "}
                {mandap.address?.cityOrDistrict}, {mandap.address?.country}
              </p>
            </div>

            {/* Quick Actions */}
            <div className="flex items-center gap-2">
              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 rounded-xl text-xs font-bold text-stone-950 bg-amber-400 hover:bg-amber-300 transition-colors flex items-center gap-1.5 shadow-md"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>Get Directions</span>
              </a>

              <button
                onClick={() => setIsFavorited(!isFavorited)}
                className={`p-2.5 rounded-xl border transition-all ${
                  isFavorited
                    ? "bg-red-600 border-red-500 text-white"
                    : "bg-stone-900/80 border-stone-700 text-stone-200 hover:text-white"
                }`}
                aria-label="Save to My Diary"
              >
                <Heart className={`w-4 h-4 ${isFavorited ? "fill-white" : ""}`} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column: Schedules, Events, Announcements */}
        <div className="lg:col-span-2">
          {/* Tabs */}
          <div className="flex items-center gap-2 border-b border-stone-800 pb-3 mb-6">
            <button
              onClick={() => setActiveTab("schedules")}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-colors ${
                activeTab === "schedules"
                  ? "bg-amber-500 text-stone-950"
                  : "text-stone-400 hover:text-stone-200"
              }`}
            >
              <Calendar className="w-4 h-4" />
              <span>Puja Schedule</span>
            </button>

            <button
              onClick={() => setActiveTab("events")}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-colors ${
                activeTab === "events"
                  ? "bg-amber-500 text-stone-950"
                  : "text-stone-400 hover:text-stone-200"
              }`}
            >
              <Music className="w-4 h-4" />
              <span>Events ({events?.length || 0})</span>
            </button>

            <button
              onClick={() => setActiveTab("announcements")}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-colors ${
                activeTab === "announcements"
                  ? "bg-amber-500 text-stone-950"
                  : "text-stone-400 hover:text-stone-200"
              }`}
            >
              <AlertCircle className="w-4 h-4" />
              <span>Announcements</span>
            </button>
          </div>

          {/* TAB 1: SCHEDULES */}
          {activeTab === "schedules" && (
            <div className="space-y-4">
              {schedules && schedules.length > 0 ? (
                schedules.map((item) => (
                  <div
                    key={item._id}
                    className="p-5 rounded-2xl bg-stone-900/80 border border-stone-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                  >
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-red-950 text-red-300 border border-red-800">
                          {item.day}
                        </span>
                        <span className="text-xs text-stone-400">
                          {new Date(item.date).toLocaleDateString(undefined, {
                            month: "short",
                            day: "numeric",
                          })}
                        </span>
                      </div>
                      <h4 className="text-base font-bold text-stone-100">
                        {item.title}
                      </h4>
                      {item.description && (
                        <p className="text-xs text-stone-400 mt-1">
                          {item.description}
                        </p>
                      )}
                    </div>

                    <div className="text-right shrink-0">
                      <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-xl bg-amber-950/60 text-amber-300 border border-amber-800/40">
                        <Clock className="w-3.5 h-3.5 text-amber-400" />
                        {item.startTime} {item.endTime ? `– ${item.endTime}` : ""}
                      </span>
                      {item.priestName && (
                        <p className="text-[11px] text-stone-500 mt-1">
                          Priest: {item.priestName}
                        </p>
                      )}
                    </div>
                  </div>
                ))
              ) : (
                <div className="p-8 text-center bg-stone-900/40 rounded-2xl border border-stone-800 text-stone-400 text-xs">
                  No ritual schedule published yet.
                </div>
              )}
            </div>
          )}

          {/* TAB 2: EVENTS */}
          {activeTab === "events" && (
            <div className="space-y-4">
              {events && events.length > 0 ? (
                events.map((evt) => (
                  <div
                    key={evt._id}
                    className="p-5 rounded-2xl bg-stone-900/80 border border-stone-800"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-purple-950 text-purple-300 border border-purple-800">
                        {evt.category?.replace("_", " ")}
                      </span>
                      <span className="text-xs text-amber-400 font-medium flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        {evt.startTime}
                      </span>
                    </div>
                    <h4 className="text-base font-bold text-stone-100 mb-1">
                      {evt.title}
                    </h4>
                    <p className="text-xs text-stone-400">
                      Venue: {evt.venue || "Mandap Courtyard"}
                    </p>
                  </div>
                ))
              ) : (
                <div className="p-8 text-center bg-stone-900/40 rounded-2xl border border-stone-800 text-stone-400 text-xs">
                  No cultural events listed.
                </div>
              )}
            </div>
          )}

          {/* TAB 3: ANNOUNCEMENTS */}
          {activeTab === "announcements" && (
            <div className="space-y-4">
              {announcements && announcements.length > 0 ? (
                announcements.map((ann) => (
                  <div
                    key={ann._id}
                    className="p-5 rounded-2xl bg-stone-900/80 border border-amber-900/40"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <AlertCircle className="w-4 h-4 text-amber-400" />
                      <span className="text-xs font-bold text-amber-300">
                        {ann.title}
                      </span>
                    </div>
                    <p className="text-xs text-stone-300 leading-relaxed">
                      {ann.content}
                    </p>
                  </div>
                ))
              ) : (
                <div className="p-8 text-center bg-stone-900/40 rounded-2xl border border-stone-800 text-stone-400 text-xs">
                  No active announcements.
                </div>
              )}
            </div>
          )}
        </div>

        {/* Right Sidebar: About & Organizer Box */}
        <div className="space-y-6">
          {/* About Card */}
          <div className="p-6 rounded-2xl bg-stone-900/80 border border-stone-800">
            <h3 className="text-base font-bold text-stone-100 mb-3">About this Mandap</h3>
            <p className="text-xs text-stone-300 leading-relaxed mb-4">
              {mandap.description}
            </p>

            <div className="border-t border-stone-800 pt-4 space-y-2 text-xs text-stone-400">
              <div className="flex justify-between">
                <span>Country:</span>
                <span className="text-stone-200 font-medium">
                  {mandap.address?.country}
                </span>
              </div>
              <div className="flex justify-between">
                <span>City:</span>
                <span className="text-stone-200 font-medium">
                  {mandap.address?.cityOrDistrict}
                </span>
              </div>
              <div className="flex justify-between">
                <span>Timezone:</span>
                <span className="text-amber-400 font-medium font-mono">
                  {mandap.address?.timezone || "UTC"}
                </span>
              </div>
              {mandap.contact?.phone && (
                <div className="flex justify-between">
                  <span>Phone:</span>
                  <span className="text-stone-200 font-medium">
                    {mandap.contact.phone}
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* Organizer Claim Box */}
          <div className="p-6 rounded-2xl bg-stone-900/80 border border-amber-800/40">
            <div className="flex items-center gap-2 mb-2 text-amber-400">
              <Building className="w-5 h-5" />
              <h4 className="text-sm font-bold">Puja Committee Organizer?</h4>
            </div>
            <p className="text-xs text-stone-400 leading-relaxed mb-4">
              If you represent this Mandap committee, you can claim management rights
              to update daily rituals, invite volunteers, and upload verified photos.
            </p>
            <Link
              href="/submit?claim=true"
              className="block w-full py-2.5 text-center rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-xs transition-colors"
            >
              Claim this Mandap
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function MandapDetailsPage(props) {
  return (
    <Suspense
      fallback={
        <div className="max-w-7xl mx-auto px-4 py-20 text-center text-stone-400">
          <div className="w-10 h-10 border-4 border-amber-500 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-sm">Loading mandap profile...</p>
        </div>
      }
    >
      <MandapDetailsContent {...props} />
    </Suspense>
  );
}
