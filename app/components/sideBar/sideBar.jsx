import { CircleChevronRight } from "lucide-react";

const SideBar = () => {
  return (
    <div className="h-screen bg-fuchsia-300 w-[25%]  relative">
      <div>
        <h1>SideBar</h1>
      </div>
      <div className="relative  flex justify-end left-[5%]">
        <button className = 'bg-red-100  rounded-full'>
            <CircleChevronRight  size={30} color="red" />
        </button>
      </div>
    </div>
  );
};

export default SideBar;
