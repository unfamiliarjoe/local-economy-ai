import "./globals.css";
import type { ReactNode } from "react";

export const metadata = {
  title: "LOCAL ECONOMY AI",
  description: "The AI Operating System for Cities, Counties, Municipal Agencies, and Local Economies."
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
