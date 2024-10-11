import Image from "next/image";
import FrontPage from "./Components/FrontPage";
import AutoSlidingSection from "./Components/AutoSlidingSection"
import Offer from "./Components/Offer"
import Scrollable from "@/app/Components/Scrollable"
import Features from "@/app/Components/Features"
import HorizontalSlider from "@/app/Components/HorizontalSlider"
import Stories from "@/app/Components/Stories"
import AskQuestion from "@/app/Components/AskQutestion"



export default function Home() {
  return (
    <main className=" flex flex-col w-full">
      <FrontPage />
      <AutoSlidingSection />
      <Offer />
      <Scrollable />
      <Features />
      <HorizontalSlider />
      <Stories />
      <AskQuestion />
      
    </main>
  );
}
