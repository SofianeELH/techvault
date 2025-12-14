import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap"
});

export const metadata: Metadata = {
  title: "TechVault - Premium Electronics Store",
  description: "Discover the future of technology with our curated collection of premium electronic products. From cutting-edge smartphones to innovative smart home devices.",
  keywords: "electronics, technology, smartphones, laptops, gaming, smart home, premium tech",
  authors: [{ name: "TechVault" }],
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  openGraph: {
    title: "TechVault - Premium Electronics Store",
    description: "Discover the future of technology with our curated collection of premium electronic products.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="#0a0a0a" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange={false}
        >
          <div className="relative min-h-screen bg-background text-foreground">
            <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-background/95" />
            <div className="relative z-10">
              {children}
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}