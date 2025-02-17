import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Header from "@/app/components/header";
import Chatbot from "@/app/components/chatbot";

const robotoFont = Roboto({
  weight: ['400', '700'],
  subsets: ['latin']
});


export const metadata: Metadata = {
  title: {
    template: '%s | Ameen Khan',
    default: 'Ameen Khan'
  },
  description: "Ameen Khan's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={robotoFont.className}
      >
        <Header />
        <main className="mt-12">
          {children}
        </main>

        <Chatbot />
      </body>
    </html>
  );
}
