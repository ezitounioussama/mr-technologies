// import { Carousel } from "../components/Carousel/Carousel";
import Feautures from "../components/Feautures/Feautures";
import Section from "../components/ProductsFeautureSection/Section";
import MrTechnologiesLaptop from "../components/Slider/MrTechnologiesLaptop";

export default function Home() {
  return (
    <div className="relative z-30 dark:bg-background bg-white">
      <MrTechnologiesLaptop />
      <Feautures />
      <Section />
    </div>
  );
}
