import type { Metadata } from "next";
import { Space_Grotesk, Lora, Poppins, Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/header";
import Footer from "../components/footer";
import AllStoreInitializer from "@/components/initializeres/allstoreInitializer";
import { getAllStores } from "@/lib/strapi";
import { AllStores } from "@/lib/types/storeTypes";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TTWire Coupons | Verified Promo Codes & Daily Deals",
  description:
    "Save money on your favorite online stores with TTWire Coupons. Access 100% verified promo codes, discount vouchers, and daily shopping deals instantly.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const data: AllStores = await getAllStores();

  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${lora.variable} ${poppins.variable} ${inter.variable} h-full antialiased overflow-x-hidden`}>
      <body className="min-h-full flex flex-col relative bg-base text-content overflow-x-hidden selection:bg-primary/20 selection:text-primary">
        <AllStoreInitializer data={data} />
        <Header />
        <main className="flex-1 flex flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
