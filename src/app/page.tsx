"use client";
import Introduction from "../components/Introduction/Introduction";
import Banner from "../components/Banner/Banner";
import Header from "../components/Header/Header";

export default function Home() {
  return (
    <div className="max-w-screen">
      <Header />
      <Banner />
      <Introduction />
    </div>
  );
}
