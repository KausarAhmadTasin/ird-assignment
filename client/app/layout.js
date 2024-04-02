import { Inter } from "next/font/google";
import "./globals.css";
import NavTop from "@/components/NavTop/NavTop";
import NavAside from "@/components/NavAside/NavAside";
import Settings from "@/components/Settings/Settings";

export const metadata = {
  title: "Dua & Ruqyah",
  description: "Generated by create next app",
};

export default function RootLayout({ children, duas }) {
  return (
    <>
      <html lang="en">
        <head>
          {" "}
          <link
            rel="icon"
            href="https://i.ibb.co/W6HsS9n/f49d5cb63d9a02588cddba5d7357d8ab.png"
            sizes="any"
          />
        </head>
        <body className="bg-gray-200 ">
          <div className="flex">
            <NavAside />
            <div className="mt-2">
              <NavTop />
              <div className="flex justify-between">
                {" "}
                {children}
                <Settings />
              </div>
            </div>
          </div>
        </body>
      </html>
    </>
  );
}
