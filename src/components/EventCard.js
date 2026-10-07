import { Calendar, Clock, MapPin, Music } from "lucide-react";

export default function EventCard({ event }) {
  const getCategoryBadge = (cat) => {
    switch (cat) {
      case "DHAK_COMPETITION":
        return { label: "Dhak Competition", color: "bg-red-950 text-red-300 border-red-800" };
      case "AARTI_DHUNUCHI":
        return { label: "Dhunuchi & Aarti", color: "bg-amber-950 text-amber-300 border-amber-800" };
      case "RITUAL":
        return { label: "Sacred Ritual", color: "bg-rose-950 text-rose-300 border-rose-800" };
      default:
        return { label: "Cultural Evening", color: "bg-purple-950 text-purple-300 border-purple-800" };
    }
  };

  const badge = getCategoryBadge(event.category);

  return (
    <div className="bg-stone-900/90 rounded-2xl p-5 border border-stone-800 hover:border-amber-700/50 transition-all flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between mb-3">
          <span
            className={`text-[11px] font-semibold px-2.5 py-1 rounded-full border ${badge.color}`}
          >
            {badge.label}
          </span>
          <span className="text-xs text-amber-400/90 flex items-center gap-1 font-medium">
            <Clock className="w-3.5 h-3.5" />
            {event.startTime}
          </span>
        </div>

        <h4 className="text-base font-bold text-stone-100 mb-2 leading-snug">
          {event.title}
        </h4>

        <p className="text-xs text-amber-200/80 font-medium mb-1 flex items-center gap-1.5">
          <Music className="w-3.5 h-3.5 text-amber-400" />
          {event.mandapName}
        </p>

        <p className="text-xs text-stone-400 flex items-center gap-1.5 mb-4">
          <MapPin className="w-3.5 h-3.5 text-stone-500" />
          {event.location} • {event.venue}
        </p>
      </div>

      <div className="pt-3 border-t border-stone-800/80 flex items-center justify-between text-xs text-stone-400">
        <span className="flex items-center gap-1 text-amber-300/80">
          <Calendar className="w-3.5 h-3.5" />
          {event.date}
        </span>
        <span className="text-amber-400 font-semibold text-[11px]">Free Admission</span>
      </div>
    </div>
  );
}
