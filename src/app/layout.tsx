import { Metadata } from "next";
import "./globals.css";
import Home from "./page";

export const metadata: Metadata = {
  title: "Dhiren's Protfolio",
  description: "Somethings about me hopefully",
};

export default function RootLayout() {
  return (
    <html lang="en">
      <body>
        <Home />
      </body>
    </html>
  );
}
