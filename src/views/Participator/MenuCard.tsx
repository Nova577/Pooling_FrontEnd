import PAvatar from "@/components/common/PAvatar"
import PCard from "@/components/common/PCard"
import { FC } from "react"
import maleAvatarSrc from '@/assets/male_avatar.png'
import PMenu from "@/components/common/PMenu"

const menuItems = [
  { key: 'Discovery', label: 'Discovery' },
  { key: 'Schedule', label: 'Schedule' },
  { key: 'History', label: 'History' },
  { key: 'Balance', label: 'Balance' },
  { key: 'Profile Edit', label: 'Profile Edit' },
]

const MenuCard: FC = () => {
  return (
    <PCard className="w-[350px]" bodyClass="p-[40px]">
      <div className="mt-[20px]">
        <div className="flex justify-between items-center">
          <PAvatar imgSrc={maleAvatarSrc} />

          <div className="text-neutral-900 text-xl font-bold font-playfair leading-relaxed">Will Edison</div>
        </div>

        <div className="mt-6">
          <PMenu className="box-content p-0" items={menuItems} activeItemKey="Discovery" />
        </div>
      </div>
    </PCard>
  )
}

export default MenuCard
