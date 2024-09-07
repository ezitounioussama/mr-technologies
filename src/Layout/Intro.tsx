import { Outlet } from "react-router-dom";
export default function Intro() {
  return (
    <div className="min-h-screen flex flex-col pt-28 xl:pt-36 md:pt-36 bg-white dark:bg-black">
      <Outlet />
    </div>
  );
}
