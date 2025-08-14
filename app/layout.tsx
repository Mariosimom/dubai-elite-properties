import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "Dubai Elite Properties – Reliable Real Estate Agency in UAE",
  description: "Luxury properties and new developer projects in Dubai.",
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (<html lang="en"><body>{children}</body></html>);
}
