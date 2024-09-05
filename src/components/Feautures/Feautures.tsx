import { useEffect, useState } from "react";
// import "#/src/styles/globals.css";
import { cn } from "../../lib/utils";

const data = [
  {
    title: "Explore Our Laptop Collection",
    content:
      "Dive into a curated selection of high-performance laptops designed to meet your needs. Whether you’re looking for the latest models or reliable classics, our collection has something for everyone.",
    srcImage: "https://rog.asus.com/media/1672804078911.jpg",
  },
  {
    title: "Choose Your Perfect Laptop",
    content:
      "With our intuitive browsing experience, finding your ideal laptop is just a few clicks away. Filter by brand, specifications, and more to discover the perfect match for your needs.",
    srcImage:
      "https://i.rtings.com/assets/pages/ZRskDBBI/best-laptop-brands-20230420-3-medium.jpg?format=auto",
  },
  // {
  //   title: "Seamless Setup & Integration",
  //   content:
  //     "Setting up your new laptop has never been easier. Follow our simple, step-by-step guides to get started quickly, so you can focus on what matters most.",
  //   srcImage:
  //     "https://images.unsplash.com/photo-1717501218636-a390f9ac5957?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8Nnx8fGVufDB8fHx8fA%3D%3D",
  // },
  {
    title: "Get Started Instantly",
    content:
      "Once you've found the right laptop, complete your purchase and start working or playing immediately. Enjoy fast delivery and easy setup to get up and running in no time.",
    srcImage:
      "https://www.stuff.tv/wp-content/uploads/sites/2/2021/04/Stuff-Best-Laptop-Lead.png",
  },
];

export default function Feautures() {
  const [featureOpen, setFeatureOpen] = useState<number>(0);
  const [timer, setTimer] = useState<number>(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => prev + 10);
    }, 10);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (timer > 10000) {
      setFeatureOpen((prev) => (prev + 1) % data.length);
      setTimer(0);
    }
  }, [timer]);

  return (
    <div className="flex flex-col mx-10 mb-20">
      <div className="text-center mb-20">
        <p className=" uppercase text-neutral-500 mb-2 text-sm font-medium">
          Why Choose Our Laptops?
        </p>

        <h2 className="text-3xl font-semibold tracking-tighter dark:text-neutral-300 text-neutral-800 mb-4">
          Experience Top-Notch Performance, Seamless Shopping, and Unmatched
          Quality in Every Purchase{" "}
        </h2>
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-6 ">
          {data.map((item, index) => (
            <button
              type="button"
              className="w-full"
              key={item.title}
              onClick={() => {
                setFeatureOpen(index);
                setTimer(0);
              }}
            >
              <TextComponent
                number={index + 1}
                title={item.title}
                content={item.content}
                isOpen={featureOpen === index}
                loadingWidthPercent={featureOpen === index ? timer / 100 : 0}
              />
            </button>
          ))}
        </div>
        <div className="h-full">
          <div
            className={cn(
              "relative h-96 md:h-[500px] w-full rounded-lg overflow-hidden"
            )}
          >
            {data.map((item, index) => (
              <img
                key={item.title}
                src={item.srcImage}
                alt={item.title}
                className={cn(
                  "rounded-lg absolute w-full object-cover transition-all duration-300 h-[500px] transform-gpu",
                  featureOpen === index ? "scale-100" : "scale-70",
                  featureOpen > index ? "translate-y-full" : ""
                )}
                style={{ zIndex: data.length - index }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function TextComponent({
  number,
  title,
  content,
  isOpen,
  loadingWidthPercent,
}: Readonly<{
  number: number;
  title: string;
  content: string;
  isOpen: boolean;
  loadingWidthPercent?: number;
}>) {
  return (
    <div
      className={cn(
        "transition-all rounded-lg transform-gpu border",
        isOpen
          ? "bg-gradient-to-b from-neutral-200/15 to-neutral-200/5 dark:from-neutral-600/15 dark:to-neutral-600/5  dark:border-neutral-500/15 border-neutral-500/10 dark:shadow-[2px_4px_25px_0px_rgba(248,248,248,0.06)_inset] "
          : "saturate-0 opacity-50 border-transparent scale-90"
      )}
    >
      <div className="w-full p-4 flex gap-4 items-center">
        <p
          className={cn(
            "inline-flex size-8 rounded-md items-center justify-center text-neutral-600 bg-neutral-500/20 shrink-0"
          )}
        >
          {number}
        </p>
        <h2
          className={cn(
            "text-xl font-medium dark:text-neutral-200 text-neutral-800 text-left"
          )}
        >
          {title}
        </h2>
      </div>
      <div
        className={cn(
          "overflow-hidden transition-all duration-500 text-left dark:text-neutral-400 text-neutral-600 w-full transform-gpu",
          isOpen ? " max-h-64" : "max-h-0"
        )}
      >
        <p className="p-4 text-lg">{content}</p>
        <div className="w-full pb-4 px-4">
          <div className="h-1 relative rounded-full w-full overflow-hidden">
            <div
              className={cn("absolute top-0 left-0 h-1 bg-neutral-500")}
              style={{ width: `${loadingWidthPercent}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
