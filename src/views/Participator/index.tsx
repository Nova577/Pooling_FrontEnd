import { FC } from "react";
import MenuCard from "./MenuCard";
import DiscoveryContent from "./DiscoveryContent";

const Participator: FC = () => {
  return (
    <div className="py-24 px-6 flex justify-center">
      <div className="w-full max-w-[1920px] flex gap-[100px]">
        <div>
          <MenuCard />
        </div>

        <div className="flex-1">
          <DiscoveryContent />
        </div>
      </div>
    </div>
  )
}

export default Participator
