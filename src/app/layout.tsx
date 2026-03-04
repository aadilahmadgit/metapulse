import type { Metadata } from "next";
import { Navbar } from "../components/Navbar";
import "./globals.css";

export const metadata: Metadata = {
  title: "Metapulse",
  description: "Metapulse application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="pt-20">{children}</main>
      </body>
    </html>
  );
}
