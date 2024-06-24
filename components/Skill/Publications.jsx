import HoverImageText from "../Skill/HoverImageText";
import { FaFileContract } from "react-icons/fa";

export default function Publications() {
  return (
    <div className="col-span-2 md:row-start-4 bg-pearl-500 rounded-lg flex flex-col px-4">
      <div>
        <HoverImageText
          heading={"Publications"}
          imgSrc={"./Skill_Logos/Publications.jpg"}
          icon={<FaFileContract className="text-3xl text-royalBlue-400" />}
        />
      </div>
      <div className="p-4">
        <ul className="list-disc">
          <li>Hyperlocal Marketplace</li>
        </ul>
      </div>
    </div>
  );
}
