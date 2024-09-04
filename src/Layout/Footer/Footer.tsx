import Content from "./Content";

export default function Footer() {
  return (
    <div
      className="relative h-[300px]"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="fixed bottom-0 h-[300px] w-full">
        <Content />
      </div>
    </div>
  );
}
