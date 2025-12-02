"use client";
import "./globals.css";
import { useState, useEffect } from "react";
import Navbar from "./navbar/page";
import Loader from "./loader/page";
import { Geist, Geist_Mono } from "next/font/google";
import { Inter, Roboto } from "next/font/google";
import { usePathname } from "next/navigation";

const inter = Inter({ subsets: ["latin"], weight: ["400", "700"] });
const roboto = Roboto({ subsets: ["latin"], weight: ["400", "700"] });

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState(false);
  const pathname = usePathname(); // current route

  useEffect(() => {
    // Loader sirf tab chale jab path change ya click ho
    setLoading(true);

    const timer = setTimeout(() => setLoading(false), 1000); // 1 second loader
    return () => clearTimeout(timer);
  }, [pathname]); // dependency me path daal diya

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Navbar />
          {children}
        </>
      )}
    </>
  );
}
