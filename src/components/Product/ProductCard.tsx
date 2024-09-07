import { BackgroundGradient } from "../ui/background-gradient";

interface ProductCardProps {
  image: string;
  name: string;
  description: string;
  price: number;
}

export function ProductCard({
  image,
  name,
  description,
  price,
}: ProductCardProps) {
  return (
    <div>
      <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
        <img src={image} alt={name} className="object-contain aspect-video" />
        <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
          {name}
        </p>

        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          {description}
        </p>
        <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
          <span>Buy now </span>
          <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
            ${price}
          </span>
        </button>
      </BackgroundGradient>
    </div>
  );
}
