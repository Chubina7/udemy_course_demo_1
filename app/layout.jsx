import React from "react";
import "./globals.css";
import Header from "@/components/header/Header";
import MainBackground from "@/components/mainBackground/MainBackground";

export const metadata = {
  title: "NextLevel Food",
  description: "Delicious meals, shared by a food-loving community.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <MainBackground />
        <Header />
        {children}
      </body>
    </html>
  );
}
