import { FC } from "react"
import MenuCard from "./MenuCard"
import useResearcherStore, { ResearcherMenuItemType } from "./store";
import ResearchProfileEdit from "@/components/ResearchProfileEdit";
import DashBoardContent from "./DashBoardContent";
import FreePaymentContent from "./FreePaymentContent";

const Researcher: FC = () => {
  const { currentMenu } = useResearcherStore()

  return (
    <div className="py-24 px-6 flex justify-center">
    <div className="w-full max-w-[1920px] flex gap-[100px]">
      <div>
        <MenuCard />
      </div>

      <div className="flex-1">
        {
          currentMenu === ResearcherMenuItemType.DASHBOARD && <DashBoardContent />
        }

        {
          currentMenu === ResearcherMenuItemType.FEE_PAYMENT && <FreePaymentContent />
        }

        {
          currentMenu === ResearcherMenuItemType.PROFILE_EDIT && <ResearchProfileEdit />
        }
      </div>
    </div>
  </div>
  )
}

export default Researcher
