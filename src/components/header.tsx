"use client";
import Link from "next/link";
import localFont from "next/font/local";
import { cn } from "@/lib/utils";
import { ThemeSwitcher } from "@/components/theme-switcher";
const goldenSignature = localFont({
  src: "../assets/GoldenSignature.otf",
  display: "swap",
});

export default function Header() {
  return (
    <>
      <nav className="flex w-full select-none justify-center py-20 pt-6 font-light md:px-28 md:pb-2">
        <div className="container flex items-center justify-center">
          <div
            className={cn(
              "text-5xl drop-shadow-2xl",
              goldenSignature.className,
            )}
          >
            <Link href="/">Abdul Baqi</Link>
          </div>
          <ThemeSwitcher />
        </div>
      </nav>
    </>
  );
}
