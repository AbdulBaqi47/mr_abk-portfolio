import "./globals.css";
import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import BackToTop from "@/components/back-to-top";
import { ThemeProvider } from "@/components/theme-provider";
import Footer from "@/components/Footer";

const outfit = Outfit({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Abdul Baqi | Portfolio",
  metadataBase: new URL("https://abdulbaqi-port.vercel.app"),
  alternates: {
    canonical: "/",
  },
  authors: [
    { name: "Abdul Baqi", url: "https://github.com/AbdulBaqi47" },
    { name: "Abdul Baqi", url: "https://github.com/AbdulBaqi47" },
  ],
  description: "Abdul Baqi's personal portfolio website",
  openGraph: {
    title: "Abdul Baqi | Personal",
    description: "Abdul Baqi's personal portfolio website",
    images: [
      {
        url: "/abdulbaqi.png",
        alt: "Abdul Baqi's Portrait",
        width: 640,
        height: 800,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={outfit.className}>
        <main className="container  border-b-2 border-b-purple-500 selection:bg-purple-500/30 lg:px-28">
          <ThemeProvider attribute="class" defaultTheme="dark">
            {children}
          </ThemeProvider>
        </main>
        <BackToTop />
        <Footer />
      </body>
    </html>
  );
}
