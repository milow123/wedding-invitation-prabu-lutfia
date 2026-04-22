import type { Metadata } from "next";
import { Inter } from "next/font/google";
//import PageTransition from "./components/PageTransition";
//import Audio from "./components/Audio";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Prabu & Lutfia Wedding",
  description: "The Wedding of Prabu & Lutfia",
  icons: {
    icon: "/logo2.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body
        className={`${inter.className} antialiased`}
      >
        {/* <Audio />
        <PageTransition> */}
        {children}
        {/* </PageTransition> */}
      </body>
    </html>
  );

}


