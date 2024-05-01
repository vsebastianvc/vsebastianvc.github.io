import type { Metadata } from "next";
import "./globals.css";
import { Flowbite } from "flowbite-react";

export const metadata: Metadata = {
  title: "Sebastian Valencia",
  description: "Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="flex flex-col min-h-screen">
        <Flowbite>
          <main className=" w-full-screen grow">{children}</main>
        </Flowbite>
      </body>
    </html>
  );
}
