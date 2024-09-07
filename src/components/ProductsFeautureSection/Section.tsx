import ProductsFeautureSection from ".";

const products = [
  {
    Mark: "MSI",
    title: "Katana GF63",
    src: "https://asset.msi.com/resize/image/global/product/product_16190861921ff3e69f935cd3753b174a21f123c26f.png62405b38c58fe0f07fcef2367d8a9ba1/1024.png",
  },
  {
    Mark: "HP",
    title: "OMEN 16",
    src: "https://www.omen.com/content/dam/sites/omen/worldwide/laptops/2022-omen-16-amd/Hero%20Image%201@2x.png",
  },
  {
    Mark: "HP",
    title: "EliteBook 845 G8",
    src: "https://www.techpro.ma/7042-medium_default/pc-portable-hp-elitebook-840-g8-intel-i5-1135g7-14-8go-256go-ssd-win-11-pro-4l0k8ea.jpg",
  },
  {
    Mark: "Lenovo",
    title: "ThinkPad L14 Gen 1",
    src: "https://p1-ofp.static.pub/medias/bWFzdGVyfHJvb3R8MzEyMDA2fGltYWdlL3BuZ3xoNmEvaDU5LzE0NDA4MDI3NTM3NDM4LnBuZ3w0OGNlYjI0YzkwNzRiNjhlYjFjYzhmMmUzZWJmMzVjOGRhNzM1M2JkZTBiYTVkNzhiOWNjNWI0M2U2NzJlYTYz/lenovo-laptop-thinkpad-l14-intel-hero-1-.png",
  },
  {
    Mark: "HUAWEI",
    title: "MateBook D15",
    src: "https://consumer.huawei.com/content/dam/huawei-cbg-site/common/mkt/pdp/pc/matebook-d-15-amd-2021/Silver.png",
  },
];

export default function Section() {
  return (
    <>
      <div className="text-center my-20">
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
