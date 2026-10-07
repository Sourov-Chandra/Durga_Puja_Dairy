import Link from "next/link";
import { Heart, Globe2, Sparkles, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-stone-950 border-t border-amber-950/60 text-stone-300 pt-16 pb-12 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand & Mission */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl">🪔</span>
              <span className="text-xl font-bold text-amber-100">
                Durga Puja Dairy
              </span>
            </div>
            <p className="text-sm text-stone-400 leading-relaxed mb-4">
              The premier worldwide platform to discover Durga Puja mandaps,
              ritual schedules, cultural events, and announcements across the globe.
            </p>
            <div className="inline-flex items-center gap-2 text-xs font-semibold px-3 py-1.5 rounded-full bg-amber-950/60 text-amber-300 border border-amber-800/40">
              <Sparkles className="w-3.5 h-3.5" />
              শুভ শারদীয়া • Happy Durga Puja
            </div>
          </div>

          {/* Global Coverage */}
          <div>
            <h4 className="text-sm font-semibold text-amber-200 uppercase tracking-wider mb-4 flex items-center gap-2">
              <Globe2 className="w-4 h-4 text-amber-500" />
              Worldwide Regions
            </h4>
            <ul className="space-y-2 text-sm text-stone-400">
              <li>
                <Link href="/explore?country=India" className="hover:text-amber-300 transition-colors">
                  🇮🇳 India (Kolkata, Delhi, Mumbai, Bengaluru)
                </Link>
              </li>
              <li>
                <Link href="/explore?country=Bangladesh" className="hover:text-amber-300 transition-colors">
                  🇧🇩 Bangladesh (Dhaka, Thakurgaon, Chittagong)
                </Link>
              </li>
              <li>
                <Link href="/explore?country=United+States" className="hover:text-amber-300 transition-colors">
                  🇺🇸 United States (New York, California, Texas)
                </Link>
              </li>
              <li>
                <Link href="/explore?country=United+Kingdom" className="hover:text-amber-300 transition-colors">
                  🇬🇧 United Kingdom (London, Manchester)
                </Link>
              </li>
              <li>
                <Link href="/explore?country=Australia" className="hover:text-amber-300 transition-colors">
                  🇦🇺 Australia (Sydney, Melbourne)
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-amber-200 uppercase tracking-wider mb-4">
              Explore & Diary
            </h4>
            <ul className="space-y-2 text-sm text-stone-400">
              <li>
                <Link href="/explore" className="hover:text-amber-300 transition-colors">
                  Mandap Directory
                </Link>
              </li>
              <li>
                <Link href="/my-diary" className="hover:text-amber-300 transition-colors">
                  My Diary (Saved Mandaps)
                </Link>
              </li>
              <li>
                <Link href="/submit" className="hover:text-amber-300 transition-colors">
                  Submit Unlisted Mandap
                </Link>
              </li>
              <li>
                <Link href="/explore?tab=events" className="hover:text-amber-300 transition-colors">
                  Cultural Competitions & Aarti
                </Link>
              </li>
            </ul>
          </div>

          {/* Organizers & Committee */}
          <div>
            <h4 className="text-sm font-semibold text-amber-200 uppercase tracking-wider mb-4">
              Committee & Organizers
            </h4>
            <p className="text-sm text-stone-400 mb-4">
              Are you on a Puja committee? Claim your Mandap profile to update schedules, post announcements, and manage volunteers.
            </p>
            <Link
              href="/submit"
              className="inline-flex items-center justify-center w-full px-4 py-2.5 rounded-xl text-sm font-medium text-amber-200 bg-stone-900 border border-amber-900/60 hover:bg-stone-850 hover:text-white transition-colors"
            >
              Claim or Submit Mandap
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-stone-900 pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-500 gap-4">
          <p>© 2026 Durga Puja Dairy. Celebrating heritage worldwide.</p>
          <p className="flex items-center gap-1.5 text-stone-400">
            Crafted with <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" /> for devotees everywhere
          </p>
        </div>
      </div>
    </footer>
  );
}
