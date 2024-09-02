import Image from "next/image";
import dynamic from "next/dynamic";

const Scene = dynamic(() => import("@/components/Scene/index.jsx"), {
  ssr: false,
});
export default function Home() {
  return (
    <main className="flex min-h-screen">
      <Scene />
    </main>
  );
}
