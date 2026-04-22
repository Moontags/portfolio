import { ThemeProvider } from "next-themes";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mediasata – Verkkosivut jotka toimivat",
  icons: {
    icon: "/media.png", // Use a valid PNG from public/
    apple: "/media.png", // Use a valid PNG from public/
  },
};
// import Header from "@/components/Header";
import "./globals.css";
import { LanguageProvider } from "@/contexts/LanguageContext";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen flex flex-col transition-colors duration-300">
        
        <LanguageProvider>
          <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
            {/* <Header /> */}
            <main className="flex-grow">{children}</main>
          </ThemeProvider>
        </LanguageProvider>
        
      </body>
    </html>
  );
}