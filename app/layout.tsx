import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/shared/ThemeProvider";
import { Navbar } from "@/components/shared/Navbar";
import { Footer } from "@/components/shared/Footer";
import { Toaster } from "@/components/ui/sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://talery.co"),
  title: {
    default: "Talery — AI-Powered Social Travel Platform",
    template: "%s | Talery",
  },
  description:
    "Discover, create, and share unforgettable travel experiences powered by AI and a global community of creators. Every journey has a story. Tell yours with Talery.",
  keywords: [
    "AI travel planner",
    "social travel",
    "travel itineraries",
    "creator economy",
    "trip planning",
    "group travel",
    "travel community",
    "budget travel",
    "travel stories",
  ],
  authors: [{ name: "Talery" }],
  creator: "Talery",
  publisher: "Talery",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://talery.co",
    siteName: "Talery",
    title: "Talery — AI-Powered Social Travel Platform",
    description:
      "Discover, create, and share unforgettable travel experiences powered by AI and a global community of creators.",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Talery - AI Travel Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Talery — AI-Powered Social Travel Platform",
    description:
      "Discover, create, and share unforgettable travel experiences powered by AI and a global community of creators.",
    images: ["/og-image.svg"],
    creator: "@talery",
  },
  alternates: {
    canonical: "https://talery.co",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider>
          <Navbar />
          <div className="flex-1">{children}</div>
          <Footer />
          <Toaster position="bottom-right" />
        </ThemeProvider>
      </body>
    </html>
  );
}
