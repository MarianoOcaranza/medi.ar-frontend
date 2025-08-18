import ClientAuthProvider from "@/components/ClientAuthProvider";
import "./globals.css";
import Header from "@/components/Header";
import { ReactNode } from "react";
import { Toaster } from "react-hot-toast";


export default function RootLayout({ children }: {children: ReactNode}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <ClientAuthProvider>
          {children}
        </ClientAuthProvider>
        <Toaster />
      </body>
    </html>
  );
}

