import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
});

export const metadata: Metadata = {
  title: {
   default: "Arkar Min Thu Kha Electro Trading Co., Ltd.",
    template: "%s | Arkar Min Thu Kha"
  },

  description:
   "Official website of Arkar Min Thu Kha Electro Trading Co., Ltd. Authorized Suntree Myanmar distributor providing Solar Energy Systems, Battery Backup Systems, Electrical Protection Solutions and SWMS.",

  keywords: [
    "AK Energy",
    "Solar Myanmar",
    "Battery Backup",
    "Suntree Myanmar",
    "Solar System",
    "SWMS",
    "Circuit Breaker",
    "Energy Solution",
  ],

  authors: [
    {
      name: "AK Energy",
    },
  ],

  creator: "AK Energy",

  publisher: "AK Energy",

  applicationName: "AK Energy Website",

  metadataBase: new URL("https://www.arkarminthukha.com.mm"),

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "AK Energy Website",
    description:
      "Professional Solar Energy & Electrical Protection Solutions.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={geist.variable}>
      <body>{children}</body>
    </html>
  );
}