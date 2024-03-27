import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import theme from "@/theme";
import { ThemeProvider } from "@mui/material";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NagaB Port Folio",
  description: "Full stack / native mobile app developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider theme={theme}>
          {children}
        </ThemeProvider></body>
    </html>
  );
}
