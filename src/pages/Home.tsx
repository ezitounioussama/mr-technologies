import Feautures from "../components/Feautures/Feautures";
import MrTechnologiesLaptop from "../components/Slider/MrTechnologiesLaptop";

export default function Home() {
  return (
    <div className="relative z-30 dark:bg-background bg-white">
      <MrTechnologiesLaptop />
      <Feautures />
    </div>
  );
}
