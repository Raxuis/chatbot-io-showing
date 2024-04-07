import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { getServerUrl } from "@/get-server-url";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ChatBot IO | Project Showing",
  description: "Made by Raphaël and Benoît",
  keywords: "ChatBot, ChatBotIO, ChatBot.io",
  metadataBase: new URL(getServerUrl()),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" href="/robot.png" />
      <body className={`${inter.className} bg-[#0a0a0a]`}>{children}</body>
    </html>
  );
}
