import type { Metadata } from "next";
import "./globals.css";



export const metadata: Metadata = {
  title: "Zucol Assignment",
  description: "Zucol Assignment for Frontend Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="bg-white overflow-x-hidden"
      >
          {children}
      </body>
    </html>
  );
}
