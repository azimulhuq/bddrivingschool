import LayoutWrapper from "@/components/LayoutWrapper";
import ScrollToTop from "@/components/ScrollToTop";
import ThemeProvider from "@/components/ThemeProvider";
import "@/styles/globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "BD Driving School",
    template: "%s | BD Driving School",
  },
  description: "Safe, reliable, and professional driving lessons in Manitoba.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className="min-h-screen bg-gray-50 text-gray-900 dark:bg-gray-950 dark:text-white">
        <ThemeProvider>
          <ScrollToTop />
          <LayoutWrapper>{children}</LayoutWrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}
