import AppBar from "@/components/business/AppBar";
import "./globals.css";
import { cx } from "class-variance-authority";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Metalit0 - Blog",
  description: "A blog about software development and other things.",
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
          "min-h-screen flex flex-col items-center bg-black text-teal-50"
        )}
      >
        <div className="grow w-full flex flex-col max-w-7xl sm:px-8">
          <div className="grow w-full bg-zinc-900 border-x border-zinc-300/20 px-8 lg:px-16">
            <AppBar />
            <main className="grow w-full flex flex-col">{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}
