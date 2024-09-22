import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./Components/Header";
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  // weight: ['400', '500', '700']
  weight:["400"],
  subsets: ['latin'], // Specify language subsets
});

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Parvati-Path",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
      <div>
        <Header />
      {children}
      </div>
      </body>
    </html>
  );
}
