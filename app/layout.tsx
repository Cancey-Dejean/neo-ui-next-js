import "./globals.css";
import type { Metadata } from "next";
import { topBarMenuList } from "@/constants";
import { Footer, Header, TopBar } from "@/components";

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
        <div className="relative" id="main">
          <TopBar topBarMenuList={topBarMenuList} />
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
