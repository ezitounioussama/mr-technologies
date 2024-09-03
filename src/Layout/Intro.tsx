import { Outlet } from "react-router-dom";
export default function Intro() {
  return (
    <div className="h-screen flex text-[2vw] items-center justify-center">
      <Outlet />
    </div>
  );
}
