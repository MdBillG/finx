import Image from "next/image";
import SideBar from "./components/sideBar/sideBar";
import NavBar from "./components/navbar/navbar";

export default function Home() {
  return (
    <div className="flex">
      <SideBar />
      <div className="flex-1">
        <NavBar />
        {/* Add other components here */}
      </div>
    </div>
  );
}
