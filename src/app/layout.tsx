import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/app/context/ThemeContext";
import AuthProvider from "@/app/lib/AuthProvider/AuthProvider";
import Navbar from "../components/molecules/landing/navbar";
import Sidenav from "./Sidebar/Sidenav";
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
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer" />
      </head>
      <body className={inter.className}>
        <ContextProvider>
          {/* <ThemeProvider> */}
          {/* <AuthProvider> */}
          {/* <SessionProvider> */}
          {/* <Navbar /> */}
          <GlobalStyleProvider>
            <Sidenav />
            <div className="">
              {children}
            </div>
          </GlobalStyleProvider>
          {/* </SessionProvider> */}
          {/* </AuthProvider> */}
          {/* </ThemeProvider> */}
        </ContextProvider>
      </body>
    </html>
  );
}
