import Header from "@/components/Header";
import "./globals.css";
import type { Metadata } from "next";
import Footer from "@/components/Footer";
import TopBar from "@/components/TopBar";
import { topBarMenuList } from "@/constants";

export const metadata: Metadata = {
  title: "Home",
  description: "This is for the people",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div>
          <TopBar topBarMenuList={topBarMenuList} />
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
