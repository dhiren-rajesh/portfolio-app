"use client";
import { useEffect } from "react";
import Introduction from "../components/Introduction/Introduction";
import Banner from "../components/Banner/Banner";
import Header from "../components/Header/Header";

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="max-w-screen">
      <Header />
      <Banner />
      <Introduction />
    </div>
  );
}
