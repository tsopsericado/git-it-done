import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";
import AuthProvider from "@/app/lib/AuthProvider/AuthProvider";
import Navbar from "../components/molecules/landing/navbar";
// import { SessionProvider } from "next-auth/react";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Get it done",
  description: "This is the description",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
          <AuthProvider>
            {/* <SessionProvider> */}
            <Navbar />
            <div className="">
              {children}
            </div>
            {/* </SessionProvider> */}
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
