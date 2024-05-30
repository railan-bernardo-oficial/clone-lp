import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Terra Santa - LP",
  description: "Sua concessionária BYD",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-lt-installed="true">
      <body className={inter.className} 
      data-new-gr-c-s-check-loaded="14.1115.0"
      data-gr-ext-installed cz-shortcut-listen="true"
      >
        <Header />
        {children}
        <Footer />
        </body>
    </html>
  );
}
