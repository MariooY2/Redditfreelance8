import type { Metadata } from "next";
import "./globals.css";
import Header from "@/Components/Header";
import Footer from "@/Components/Footer";
export const metadata: Metadata = {
  title: "Daniel Oliveira",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen">
          <div className="flex justify-center items-center py-6 z-50 fixed w-full bg-white">
            <h1 className=" font-bold text-xl text-center w-full mr-52">
              Daniel Oliveria
            </h1>
          </div>
          <div className="flex justify-center items-center">
            <div className="max-w-screen-sm flex">
              <Header />
              {children}
            </div>
          </div>
        </div>
        <Footer />
      </body>
    </html>
  );
}
