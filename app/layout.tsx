import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import { ThemeProvider } from "./components/THemeProvider";


export const revalidate = 10

export const metadata: Metadata = {
  title: "Pixco Gallery",
  description: "High quality images right from the camera's mouth",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
        <Navbar/>
        <main className="max-w-6xl mx-auto">
          {children}
        </main>
        </ThemeProvider>
        </body>
    </html>
  );
}
