import PAvatar from "@/components/common/PAvatar"
import PCard from "@/components/common/PCard"
import { FC } from "react"
import maleAvatarSrc from '@/assets/male_avatar.png'
import PMenu from "@/components/common/PMenu"

const menuItems = [
  { label: 'Discovery' },
  { label: 'Schedule' },
  { label: 'History' },
  { label: 'Balance' },
  { label: 'Profile Edit' },
]

const MenuCard: FC = () => {
  return (
    <PCard className="w-[350px]" bodyClass="p-[40px]">
      <div className="mt-[20px]">
        <div className="flex justify-between items-center">
          <PAvatar imgSrc={maleAvatarSrc} />

          <div className="text-neutral-900 text-xl font-bold font-playfair leading-relaxed">Will Edison</div>
        </div>

        <div>
          <PMenu items={menuItems} />
        </div>
      </div>
    </PCard>
  )
}

export default MenuCard
