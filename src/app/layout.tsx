import { Metadata } from "next";
import { Inter } from "next/font/google";
import AppBar from "@/components/business/AppBar";
import { cx } from "class-variance-authority";
import "./globals.css";
import { CSSVariablesProvider } from "../components/abstract/CSSVariablesProvider";
import GoToTopButton from "../components/business/GoToTopButton";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Javier Balonga - Blog",
  description: "A blog about software development and other things.",
  openGraph: {
    title: "Javier Balonga - Blog",
    description: "A blog about software development and other things.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cx(
          inter.className,
          "!min-h-[100svh] min-h-screen flex flex-col items-center bg-black text-teal-50"
        )}
      >
        <div className="grow w-full flex flex-col max-w-7xl sm:px-8">
          <div className="grow w-full bg-zinc-900 border-x border-zinc-300/20 px-8 lg:px-16">
            <AppBar />
            <main className="grow w-full flex flex-col py-28">{children}</main>
            <GoToTopButton />
          </div>
        </div>
        <CSSVariablesProvider />
      </body>
    </html>
  );
}
