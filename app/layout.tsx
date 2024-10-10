import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import { ThemeProvider } from "next-themes";

export const metadata: Metadata = {
  title: "Min Portfolio",
  description: "Min Portfolio webside",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider attribute="class">
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
