import type { Metadata } from "next";
import "./globals.css";
import { KEYWORDS } from "@/data/gameData";

export const metadata: Metadata = {
  title: {
    default: "Hell Or Heaven Roblox Guide — Game Passes, Calculator & Tips",
    template: "%s | Hell Or Heaven Roblox Guide",
  },
  description: "Complete guide for Roblox Hell Or Heaven by L0L GAMES. Game pass tier list, value calculator, badge guide, codes, beginner tips, and more.",
  keywords: KEYWORDS.primary.concat(KEYWORDS.secondary),
  robots: "index, follow",
  verification: {
    google: "site-verification-token",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>⚖️</text></svg>" />
      </head>
      <body>{children}</body>
    </html>
  );
}
