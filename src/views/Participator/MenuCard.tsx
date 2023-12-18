import PAvatar from "@/components/common/PAvatar"
import PCard from "@/components/common/PCard"
import { FC } from "react"
import maleAvatarSrc from '@/assets/male_avatar.png'
import PMenu from "@/components/common/PMenu"
import useParticipatorStore, { ParticipatorMenuItemType } from "./store"


const menuItems = [
  { key: ParticipatorMenuItemType.DISCOVERY, label: 'Discovery' },
  { key: ParticipatorMenuItemType.SCHEDULE, label: 'Schedule' },
  { key: ParticipatorMenuItemType.HISTORY, label: 'History' },
  { key: ParticipatorMenuItemType.BALANCE, label: 'Balance' },
  { key: ParticipatorMenuItemType.PROFILE_EDIT, label: 'Profile Edit' },
]

const MenuCard: FC = () => {
  const { currentMenu, setCurrentMenu } = useParticipatorStore()

  const handleMenuItemClick = (menuKey: string) => {
    setCurrentMenu(menuKey as ParticipatorMenuItemType)
  }

  return (
    <PCard className="w-[350px]" bodyClass="p-[40px]">
      <div className="mt-[20px]">
        <div className="flex justify-between items-center">
          <PAvatar imgSrc={maleAvatarSrc} />

          <div className="text-neutral-900 text-xl font-bold font-playfair leading-relaxed">Will Edison</div>
        </div>

        <div className="mt-6">
          <PMenu className="box-content p-0" items={menuItems} activeItemKey={currentMenu} onItemClick={handleMenuItemClick} />
        </div>
      </div>
    </PCard>
  )
}

export default MenuCard
