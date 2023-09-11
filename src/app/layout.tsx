import "./globals.css";
import "../../styles/hamburger.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "RUNO | Home",
  description: "Home page",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700;800&family=League+Spartan:wght@300;400;500;600;700;800;900&family=Lora:wght@400;500;600;700&family=Poppins:wght@100;300;400;500;600;800&display=swap"
          rel="stylesheet"
        />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700;800&family=League+Spartan:wght@300;400;500;600;700;800;900&family=Lora:wght@400;500;600;700&family=Poppins:wght@100;300;400;500;600;800&family=Roboto:wght@100;300;400;500;700;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
