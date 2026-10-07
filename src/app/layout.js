import { Hind_Siliguri, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const hindSiliguri = Hind_Siliguri({
  subsets: ["bengali", "latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-hind-siliguri",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: "Durga Puja Dairy — বিশ্বব্যাপী দুর্গাপূজা নির্দেশিকা ও ভ্রমণ ম্যাপ",
  description:
    "বিশ্বজুড়ে দুর্গাপূজা মণ্ডপ, আরতি ও পুষ্পাঞ্জলি সময়সূচি, সাংস্কৃতিক অনুষ্ঠান এবং মণ্ডপ ভ্রমণ গাইড। ঠাকুরগাঁও, ঢাকা, কলকাতা থেকে লন্ডন ও নিউ ইয়র্ক।",
  keywords: [
    "Durga Puja",
    "Durga Puja Diary",
    "Durga Puja Dairy",
    "দুর্গাপূজা",
    "মণ্ডপ ডিরেক্টরি",
    "পূজা পরিক্রমা",
    "ঠাকুরগাঁও দুর্গাপূজা",
    "কলকাতা দুর্গাপূজা",
    "ঢাকা দুর্গাপূজা",
    "কুমারী পূজা",
    "সন্ধিপূজা",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="bn"
      className={`${hindSiliguri.variable} ${inter.variable} h-full bg-stone-950 text-stone-100 antialiased selection:bg-amber-500 selection:text-stone-950`}
    >
      <body className="min-h-full flex flex-col font-sans bg-stone-950 text-stone-100">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
