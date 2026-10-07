"use client";

import { useState } from "react";
import { PlusCircle, ShieldAlert, CheckCircle2, MapPin, Building, Globe } from "lucide-react";

export default function SubmitMandapPage() {
  const [formData, setFormData] = useState({
    name: "",
    country: "India",
    cityOrDistrict: "",
    areaOrLocality: "",
    addressLine1: "",
    lat: "22.5726",
    lng: "88.3639",
    contactPhone: "",
    description: "",
    coverImageUrl: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [potentialDuplicateWarning, setPotentialDuplicateWarning] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Interactive duplicate check preview (Layer 1 & 2)
    if (name === "name" && value.toLowerCase().includes("bagbazar")) {
      setPotentialDuplicateWarning(
        "⚠️ Warning: A mandap named 'Bagbazar Sarbojanin Durgotsav' already exists nearby. Please check if you should claim the existing mandap instead of creating a duplicate."
      );
    } else if (name === "name") {
      setPotentialDuplicateWarning("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-20 text-center">
        <div className="w-16 h-16 rounded-full bg-emerald-950 border border-emerald-500/50 flex items-center justify-center mx-auto mb-6 text-emerald-400">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h2 className="text-3xl font-extrabold text-stone-100 mb-3">
          Mandap Submitted Successfully!
        </h2>
        <p className="text-sm text-stone-400 leading-relaxed mb-8">
          Thank you for contributing to Durga Puja Dairy. Your mandap proposal has been received and queued for administrative verification. Once approved, it will be listed in the global directory and map.
        </p>
        <button
          onClick={() => {
            setSubmitted(false);
            setFormData({
              name: "",
              country: "India",
              cityOrDistrict: "",
              areaOrLocality: "",
              addressLine1: "",
              lat: "22.5726",
              lng: "88.3639",
              contactPhone: "",
              description: "",
              coverImageUrl: "",
            });
          }}
          className="px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-xs"
        >
          Submit Another Mandap
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full">
      <div className="mb-8">
        <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-400 uppercase tracking-wider mb-2">
          <PlusCircle className="w-4 h-4" />
          <span>Community Contribution</span>
        </div>
        <h1 className="text-3xl font-extrabold text-stone-100">
          Submit an Unlisted Mandap
        </h1>
        <p className="text-xs sm:text-sm text-stone-400 mt-1">
          Help devotees discover your neighborhood celebration. Enter accurate location details to prevent duplicate listings.
        </p>
      </div>

      {potentialDuplicateWarning && (
        <div className="mb-6 p-4 rounded-2xl bg-amber-950/80 border border-amber-600/60 text-xs text-amber-200 flex items-start gap-3">
          <ShieldAlert className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold text-amber-300">Possible Duplicate Detected</p>
            <p className="mt-1 leading-relaxed">{potentialDuplicateWarning}</p>
          </div>
        </div>
      )}

      <form
        onSubmit={handleSubmit}
        className="bg-stone-900 border border-stone-800 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6"
      >
        {/* Name */}
        <div>
          <label className="block text-xs font-bold text-stone-300 uppercase tracking-wider mb-2">
            Mandap / Committee Name *
          </label>
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="e.g., Central Park Sarbojanin Durgotsav"
            className="w-full bg-stone-950 border border-stone-800 rounded-xl px-4 py-3 text-sm text-stone-100 focus:outline-none focus:border-amber-500"
          />
        </div>

        {/* Global Location Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-stone-300 uppercase tracking-wider mb-2">
              Country *
            </label>
            <select
              name="country"
              value={formData.country}
              onChange={handleChange}
              className="w-full bg-stone-950 border border-stone-800 rounded-xl px-4 py-3 text-sm text-stone-100 focus:outline-none focus:border-amber-500 cursor-pointer"
            >
              <option value="India">India (ভারত)</option>
              <option value="Bangladesh">Bangladesh (বাংলাদেশ)</option>
              <option value="United States">United States</option>
              <option value="United Kingdom">United Kingdom</option>
              <option value="Australia">Australia</option>
              <option value="Canada">Canada</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold text-stone-300 uppercase tracking-wider mb-2">
              City or District *
            </label>
            <input
              type="text"
              name="cityOrDistrict"
              required
              value={formData.cityOrDistrict}
              onChange={handleChange}
              placeholder="e.g., Kolkata, Dhaka, Thakurgaon, London"
              className="w-full bg-stone-950 border border-stone-800 rounded-xl px-4 py-3 text-sm text-stone-100 focus:outline-none focus:border-amber-500"
            />
          </div>
        </div>

        {/* Area & Address Line */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-stone-300 uppercase tracking-wider mb-2">
              Area or Neighborhood *
            </label>
            <input
              type="text"
              name="areaOrLocality"
              required
              value={formData.areaOrLocality}
              onChange={handleChange}
              placeholder="e.g., Salt Lake, Lalbagh, Camden"
              className="w-full bg-stone-950 border border-stone-800 rounded-xl px-4 py-3 text-sm text-stone-100 focus:outline-none focus:border-amber-500"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-stone-300 uppercase tracking-wider mb-2">
              Street / Landmark Address *
            </label>
            <input
              type="text"
              name="addressLine1"
              required
              value={formData.addressLine1}
              onChange={handleChange}
              placeholder="e.g., Near Community Ground, 12 Park Ave"
              className="w-full bg-stone-950 border border-stone-800 rounded-xl px-4 py-3 text-sm text-stone-100 focus:outline-none focus:border-amber-500"
            />
          </div>
        </div>

        {/* GPS Coordinates */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-stone-300 uppercase tracking-wider mb-2">
              Latitude
            </label>
            <input
              type="text"
              name="lat"
              value={formData.lat}
              onChange={handleChange}
              placeholder="e.g., 22.5726"
              className="w-full bg-stone-950 border border-stone-800 rounded-xl px-4 py-3 text-sm text-stone-100 focus:outline-none focus:border-amber-500"
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-stone-300 uppercase tracking-wider mb-2">
              Longitude
            </label>
            <input
              type="text"
              name="lng"
              value={formData.lng}
              onChange={handleChange}
              placeholder="e.g., 88.3639"
              className="w-full bg-stone-950 border border-stone-800 rounded-xl px-4 py-3 text-sm text-stone-100 focus:outline-none focus:border-amber-500"
            />
          </div>
        </div>

        {/* Contact Phone & Cover Image */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-stone-300 uppercase tracking-wider mb-2">
              Committee Contact Phone
            </label>
            <input
              type="text"
              name="contactPhone"
              value={formData.contactPhone}
              onChange={handleChange}
              placeholder="+91 / +880 / +1 phone"
              className="w-full bg-stone-950 border border-stone-800 rounded-xl px-4 py-3 text-sm text-stone-100 focus:outline-none focus:border-amber-500"
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-stone-300 uppercase tracking-wider mb-2">
              Cover Image URL (optional)
            </label>
            <input
              type="url"
              name="coverImageUrl"
              value={formData.coverImageUrl}
              onChange={handleChange}
              placeholder="https://..."
              className="w-full bg-stone-950 border border-stone-800 rounded-xl px-4 py-3 text-sm text-stone-100 focus:outline-none focus:border-amber-500"
            />
          </div>
        </div>

        {/* Description */}
        <div>
          <label className="block text-xs font-bold text-stone-300 uppercase tracking-wider mb-2">
            Description & Heritage Background
          </label>
          <textarea
            rows="3"
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Tell devotees about the pandal architecture, idol theme, or history..."
            className="w-full bg-stone-950 border border-stone-800 rounded-xl px-4 py-3 text-sm text-stone-100 focus:outline-none focus:border-amber-500"
          />
        </div>

        <button
          type="submit"
          className="w-full py-4 rounded-xl font-bold text-sm text-stone-950 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-400 hover:from-amber-300 hover:to-amber-400 transition-all shadow-xl shadow-amber-950/50"
        >
          Submit Mandap Proposal
        </button>
      </form>
    </div>
  );
}
