import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://suntreechargermyanmar.com"),
  title: "Arkar Min Thuka | Suntree Charger Myanmar",
  description:
    "Discover Suntree electric vehicle charging solutions for homes, workplaces, and destinations in Myanmar.",
  alternates: { canonical: "https://suntreechargermyanmar.com" },
  icons: {
    icon: "/images/logo/suntree-charger-myanmar.png",
    shortcut: "/images/logo/suntree-charger-myanmar.png",
    apple: "/images/logo/suntree-charger-myanmar.png",
  },
  openGraph: {
    title: "Arkar Min Thuka | Suntree Charger Myanmar",
    description:
      "Smart, dependable electric vehicle charging for homes, workplaces, and shared destinations.",
    url: "https://suntreechargermyanmar.com",
    siteName: "Suntree Charger Myanmar",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
