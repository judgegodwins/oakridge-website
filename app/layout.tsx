import type { Metadata } from "next";
import { Barlow, Fraunces, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const barlow = Barlow({
  variable: "--font-barlow",
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

const fraunces = Fraunces(
  {variable: '--font-fraunces'}
);

export const metadata: Metadata = {
  title: "Florence Memorial College",
  description: "Florence Memorial College",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${barlow.variable} ${fraunces.variable} ${barlow.className} overflow-x-hidden antialiased bg-white`}
      >
        {children}
      </body>
    </html>
  );
}
