import { Inter } from "next/font/google";
import "./globals.css";
import NavTop from "@/components/NavTop/NavTop";
import NavAside from "@/components/NavAside/NavAside";
import Settings from "@/components/Settings/Settings";

export const metadata = {
  title: "Dua Ruqyah",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-200 ">
        <div className="flex">
          <NavAside />
          <div className="mt-3">
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
  );
}
