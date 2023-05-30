import "./globals.css";
import { Inter } from "next/font/google";
import axios from "axios";
const inter = Inter({ subsets: ["latin"] });

axios.create({
  baseURL: process.env.NEXT_PUBLIC_PRODUCTION_URL,
});

export const metadata = {
  title: "Blogger",
  description: "blogger application made for documentory",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#000000] text-[#eaeaea]`}>
        <div>{children}</div>
      </body>
    </html>
  );
}
