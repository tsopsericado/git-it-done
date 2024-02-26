import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/app/context/ThemeContext";
import AuthProvider from "@/app/lib/AuthProvider/AuthProvider";
import Navbar from "../components/molecules/landing/navbar";
import Sidenav from "./sidebar/sidenav";
import ContextProvider from "./providers/ContextProvider";
import GlobalStyleProvider from "./providers/GlobalStyleProvider";
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
        <ContextProvider>
          <ThemeProvider>
            <AuthProvider>
              {/* <SessionProvider> */}
              {/* <Navbar /> */}
              <GlobalStyleProvider>
                <Sidenav />
                <div className="">
                  {children}
                </div>
              </GlobalStyleProvider>
              {/* </SessionProvider> */}
            </AuthProvider>
          </ThemeProvider>
        </ContextProvider>
      </body>
    </html>
  );
}
