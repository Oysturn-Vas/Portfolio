import Link from "next/link";
import { FaAngleLeft } from "react-icons/fa";
import { ParallaxContent } from "../../components/ProjectsPage/ParallaxContent";

export default function ProjectsPage() {
  return (
    <div className="w-full h-full flex flex-col">
      <Link href={"/"}>
        <div className="absolute z-10 top-6 left-6 flex flex-row items-center text-white text-xl font-light">
          <FaAngleLeft className="text-3xl" />
          Home
        </div>
      </Link>
      <ParallaxContent />
    </div>
  );
}
