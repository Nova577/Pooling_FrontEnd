import { FC } from "react";
import MenuCard from "./MenuCard";
import DiscoveryContent from "./DiscoveryContent";

const Participator: FC = () => {
  return (
    <div className="pt-24 flex justify-center">
      <div className="w-full max-w-5xl flex gap-[100px]">
        <MenuCard />

        <div className="flex-1">
          <DiscoveryContent />
        </div>
      </div>
    </div>
  )
}

export default Participator
