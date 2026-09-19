import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/shared/ThemeProvider";
import { Navbar } from "@/components/shared/Navbar";
import { Toaster } from "@/components/ui/sonner";
import Link from "next/link";

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
    "Talery Private Limited is developing a social travel planning app. Explore planned features and contact us about future early access.",
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
      "Explore the travel planning app being developed by Talery Private Limited. Not yet available to users.",
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
      "Explore the travel planning app being developed by Talery Private Limited. Not yet available to users.",
    images: ["/og-image.svg"],
    creator: "@talery",
  },
  alternates: {
    canonical: "https://talery.co",
  },
  icons: {
    icon: "/favicon.ico",
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
          <footer className="border-t border-border py-6">
            <div className="container-padding">
              <div className="mx-auto max-w-7xl flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-muted-foreground">
                <div className="space-y-2 text-center sm:text-left">
                  <p>© {new Date().getFullYear()} Talery Private Limited. All rights reserved.</p>
                  <p>CIN: U52290DL2026PTC466558</p>
                  <address className="max-w-xl not-italic leading-relaxed">
                    Registered office: FL. NO. A3 U/G/F BACK SIDE, Property no. 220 KHNO 603,
                    Sangam Vihar, Delhi 110080, India
                  </address>
                  <p>Telephone: <a href="tel:+917008065412" className="hover:text-foreground transition-colors">+91 70080 65412</a></p>
                  <a href="mailto:hr@talery.co" className="inline-block hover:text-foreground transition-colors">hr@talery.co</a>
                </div>
                <div className="flex flex-wrap items-center justify-center gap-4">
                  <Link href="/legal/privacy" className="hover:text-foreground transition-colors">Privacy Policy</Link>
                  <Link href="/legal/terms" className="hover:text-foreground transition-colors">Terms and Conditions</Link>
                  <a href="mailto:hr@talery.co" className="hover:text-foreground transition-colors">Support</a>
                </div>
              </div>
            </div>
          </footer>
          <Toaster position="bottom-right" />
        </ThemeProvider>
      </body>
    </html>
  );
}
