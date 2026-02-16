import Banner from "@/Components/Banner";
import Beauty from "@/Components/Beauty";
import Inspiration from "@/Components/Inspiration"; 
import Range from "@/Components/Range";
import Support from "@/Components/Support";
import Work from "../../Components/Work";
import Mailing from "@/Components/Mailing";

export default function Home() {
  return (
    <>
      <Banner />
      <Support/>
      <Inspiration/>
      <Beauty/> 
      <Range/>
      <Work/>
      <Mailing/>
    </>
  );
}
