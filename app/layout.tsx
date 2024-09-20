import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import Image from 'next/image'
import Link from 'next/link'
import Menu from '@/components/Menu'

const nunito = Nunito({ 
  subsets: ['cyrillic'],
  variable: '--font-nunito',
  weight: ['400', '500', '600', '700', '800', '900'],
 });

export const metadata: Metadata = {
  title: "Моя практика",
  description: "Найти практику для студентов и найти студентов для компании",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body
        className={`${nunito.className} antialiased`}
      >
        <div className="h-screen flex">
      {/* LEFT */}
      <div className="w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%] p-4">
        <Link
          href="/"
          className="flex items-center justify-center lg:justify-start gap-2"
        >
          <Image src="/logo.png" alt="logo" width={32} height={32} />
          <span className="hidden lg:block font-bold">Logo</span>
        </Link>
        <Menu/>
      </div>
      {/* RIGHT */}
      <div className="w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%] bg-[#F7F8FA] flex flex-col">
        {children}
      </div>
    </div>
      </body>
    </html>
  );
}
