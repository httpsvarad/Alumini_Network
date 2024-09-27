import Image from "next/image";
import FrontPage from "./Components/FrontPage";
import AutoSlidingSection from "./Components/AutoSlidingSection"
import Offer from "./Components/Offer"
import Scrollable from "@/app/Components/Scrollable"



export default function Home() {
  return (
    <main className=" flex flex-col w-full">
      <FrontPage />
      <AutoSlidingSection />
      <Offer />
      <Scrollable />
    </main>
  );
}
