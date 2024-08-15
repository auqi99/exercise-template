"use client";

import { useSession } from "next-auth/react";
import BlogList from "./components/BlogList";
import Jumbotron from "./components/Jumbotron";
import { AutoComplete } from "@/components/Autocomplete";

const Homepage = () => {
  const session = useSession();

  return (
    <main className="container mx-auto space-y-7 px-4">
      <Jumbotron />
      <AutoComplete />
      <BlogList />
    </main>
  );
};

export default Homepage;