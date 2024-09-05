import ProductsFeautureSection from ".";

const products = [
  {
    title1: "Dell",
    title2: "XPS 13",
    src: "dell_xps_13.jpg",
  },
  {
    title1: "Apple",
    title2: "MacBook Pro",
    src: "apple_macbook_pro.jpg",
  },
  {
    title1: "HP",
    title2: "Spectre x360",
    src: "hp_spectre_x360.jpg",
  },
  {
    title1: "Lenovo",
    title2: "ThinkPad X1 Carbon",
    src: "lenovo_thinkpad_x1_carbon.jpg",
  },
  {
    title1: "ASUS",
    title2: "ROG Zephyrus",
    src: "asus_rog_zephyrus.jpg",
  },
];

export default function Section() {
  return (
    <>
      <div className="text-center mb-20">
        <p className=" uppercase text-neutral-500 mb-2 text-sm font-medium">
          Discover the Future of Computing
        </p>

        <h2 className="text-3xl font-semibold tracking-tighter dark:text-neutral-300 text-neutral-800 mb-4">
          Unleash Powerful Performance, Sleek Design, and Superior Durability in
          Every Laptop – Built to Elevate Your Experience
        </h2>
      </div>
      {products.map((project) => {
        return <ProductsFeautureSection products={project} />;
      })}
    </>
  );
}
