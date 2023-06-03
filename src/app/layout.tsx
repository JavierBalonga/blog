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
      <body className={cx(inter.className, "min-h-screen flex flex-col")}>
        <AppBar />
        <main className="grow flex flex-col items-center pt-16">
          <div className="grow w-full max-w-4xl">{children}</div>
        </main>
      </body>
    </html>
  );
}
