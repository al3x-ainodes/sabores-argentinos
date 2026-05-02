import type { Metadata } from "next";
import { Big_Shoulders } from "next/font/google";
import { Instrument_Serif } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { LanguageProvider } from "@/contexts/LanguageContext";

const bigShoulders = Big_Shoulders({
  subsets: ["latin"],
  variable: "--font-big-shoulders",
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-instrument-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sabores Argentinos - Authentic Argentine Restaurant in Miami",
  description: "Experience authentic Argentine cuisine in Miami. Famous empanadas, premium grilled meats, and traditional dishes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${bigShoulders.variable} ${instrumentSerif.variable} antialiased`}>
        <LanguageProvider>
          <Navbar />
          <main className="pt-24">
            {children}
          </main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
