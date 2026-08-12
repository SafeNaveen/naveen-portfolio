import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Naveen Kumar | Information Security & IT Compliance",
  description:
    "Professional portfolio of Naveen Kumar, specializing in Information Security, Cybersecurity, ISMS, GRC, ISO/IEC 27001:2022, VAPT, Secure SDLC, Endpoint Security, and IT Compliance.",
  keywords: [
    "Naveen Kumar",
    "Information Security",
    "Cybersecurity",
    "IT Compliance",
    "ISMS",
    "ISO 27001",
    "GRC",
    "VAPT",
    "Secure SDLC",
    "Endpoint Security",
    "Cybersecurity Professional",
    "Information Security Professional",
  ],
  authors: [
    {
      name: "Naveen Kumar",
    },
  ],
  creator: "Naveen Kumar",
  publisher: "Naveen Kumar",

  openGraph: {
    title: "Naveen Kumar | Information Security & IT Compliance",
    description:
      "Information Security and IT Compliance professional specializing in Cybersecurity, ISMS, GRC, ISO/IEC 27001:2022, VAPT, and Enterprise Security.",
    type: "website",
    locale: "en_IN",
    siteName: "Naveen Kumar Portfolio",
  },

  twitter: {
    card: "summary",
    title: "Naveen Kumar | Information Security & IT Compliance",
    description:
      "Information Security, Cybersecurity, ISMS, GRC, VAPT, and IT Compliance professional.",
  },

  robots: {
    index: true,
    follow: true,
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}