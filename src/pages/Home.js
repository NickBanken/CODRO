import React from "react";
import { Announcements } from "../components/Announcements";
import { Navbar } from "../components/Navbar";
import { Slider } from "../components/Slider";

export const Home = () => {
  return (
    <div>
      <Announcements />
      <Navbar />
      <Slider />
    </div>
  );
};
