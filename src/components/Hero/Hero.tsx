import { Cover } from "../../components/ui/cover";

export function Hero() {
  return (
    <div>
      <h1 className="text-4xl space-y-2 md:text-4xl lg:text-6xl font-semibold max-w-7xl mx-auto text-center relative z-20 py-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white">
        Unbeatable Deals, Delivered
        <br /> at <Cover>the Speed of Light</Cover>
      </h1>
    </div>
  );
}
