import ClientAuthProvider from "@/components/ClientAuthProvider";
import "./globals.css";
import Header from "@/components/Header";
import { ReactNode } from "react";


export default function RootLayout({ children }: {children: ReactNode}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <ClientAuthProvider>
          {children}
        </ClientAuthProvider>
      </body>
    </html>
  );
}

