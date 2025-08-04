import { Metadata } from "next";
import HomeClient from "./home";

export const metadata: Metadata = {
  title: "Welcome to zappy",
  description: "Your new social network that connects you with people from all around the world.",
};

export default function Home() {
  return (
    <HomeClient/>
  );
}
