import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";


const poppinsSans = Poppins ({
  variable: "--poppinsSans",
  weight: ['400', '700', '900'],
  subsets: ["latin"]
})


const interSans = Inter ({
  variable: "--interSans",
  weight: ['400', '700', '900'],
  subsets: ["latin"]
})


export const metadata: Metadata = {
  title: "Jovem Dev - Portfólio",
  icons: {
    icon: "/JD.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${poppinsSans.variable} ${interSans.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
