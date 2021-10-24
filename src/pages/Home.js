import React from "react";
import { Announcements } from "../components/Announcements";
import { Navbar } from "../components/Navbar";

export const Home = () => {
  return (
    <div>
      <Announcements />
      <Navbar />
    </div>
  );
};
