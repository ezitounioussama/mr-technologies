// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import Scene from "../AboutMockup/Scene";
import "../AboutMockup/css/base.css";
import { Hero } from "../components/Hero/Hero";

export default function About() {
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <Scene />
      </div>
      <div className="flex flex-col justify-start items-center min-h-screen bg-black relative z-10">
        <Hero />
      </div>
    </>
  );
}
