import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/ui/header";
import { AuthProvider } from "@/providers/auth";
import Footer from "@/components/ui/footer";
import { CartProvider } from "@/providers/cart";
import storeInfo from "../../public/data/store.json";
import { Toaster } from "@/components/ui/toaster";

const poppins = Poppins({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

export async function generateMetadata() {
  return {
    title: storeInfo.name,
  };
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className={poppins.className}>
        <div className="flex h-screen max-h-screen flex-col overflow-x-hidden">
          <AuthProvider>
            <CartProvider>
              <Header />
              <div className="flex flex-1 flex-grow">{children}</div>
              <Toaster />
              <Footer />
            </CartProvider>
          </AuthProvider>
        </div>
      </body>
    </html>
  );
}
