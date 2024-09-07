import Content from "./Content";

export default function Footer() {
  return (
    <div
      className="relative h-[200px] bg-[#1b4377]"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="fixed bottom-0 xl:h-[100px] md:h-[100px] w-full">
        <Content />
      </div>
    </div>
  );
}
