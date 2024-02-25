import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ChatBot IO | Project Showing",
  description: "Made by Raphaël and Benoît",
  keywords: "ChatBot, ChatBotIO, ChatBot.io",
  icons: ["/robot.png"]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#0a0a0a]`}>{children}</body>
    </html>
  );
}
