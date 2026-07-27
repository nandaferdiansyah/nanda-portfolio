import type { Metadata } from "next";
import { JetBrains_Mono, Sora } from "next/font/google";

import Layouts from "@/common/components/layouts";
import ThemeProvider from "@/common/components/providers/ThemeProvider";
import { METADATA } from "@/common/constants/profile";

import "./globals.css";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(METADATA.url),
  title: {
    default: METADATA.title,
    template: `%s — ${METADATA.site_name}`,
  },
  description: METADATA.description,
  keywords: [...METADATA.keywords],
  authors: [{ name: METADATA.site_name }],
  creator: METADATA.site_name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: METADATA.url,
    siteName: METADATA.site_name,
    title: METADATA.title,
    description: METADATA.description,
  },
  twitter: {
    card: "summary_large_image",
    title: METADATA.title,
    description: METADATA.description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      data-scroll-behavior="smooth"
      className={`${sora.variable} ${jetbrains.variable} antialiased`}
    >
      <body className="font-sans">
        <ThemeProvider>
          <Layouts>{children}</Layouts>
        </ThemeProvider>
      </body>
    </html>
  );
}
