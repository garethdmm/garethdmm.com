import { FaLaptop } from "react-icons/fa6";

export default function Dashboard() {
  return (
    <div className="relative pt-14">
      <div className="mx-auto py-32">
        <div className="flex items-center justify-center">
          <div className="bg-blue-500 text-white p-2 rounded-full hover:bg-white hover:text-blue-500 transition ease-in-out duration-1000">
            <FaLaptop className="w-6 h-6" />
          </div>
        </div>
      </div>
    </div>
  );
}
