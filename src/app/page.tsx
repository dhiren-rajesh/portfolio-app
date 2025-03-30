"use client";
import Introduction from "@/components/Introduction/Introduction";
import Banner from "../components/Banner/Banner";

export default function Home() {
  return (
    <div className="max-w-screen">
      <Banner />
      <Introduction />
    </div>
  );
}
