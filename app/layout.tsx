import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./Components/Helper/Home/Navbar/Navbar";
import Footer from "./Components/Helper/Home/Footer/Footer";



const font = Poppins({
  weight: ["100","200","300","400", "500", "600", "700", "800","900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NFT Next App",
  description: "NFT Next App Generated by  nextJS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${font.className} antialiased`}>
        <Navbar/>
          {children}
        <Footer/>
      </body>
    </html>
  );
}
