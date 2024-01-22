import PAvatar from "@/components/common/PAvatar"
import PCard from "@/components/common/PCard"
import { FC } from "react"
import PMenu from "@/components/common/PMenu"
import useParticipatorStore, { ParticipatorMenuItemType } from "./store"
import useSignInStore from '@/views/SignIn/store'

const menuItems = [
  { key: ParticipatorMenuItemType.DISCOVERY, label: 'Discovery' },
  { key: ParticipatorMenuItemType.SCHEDULE, label: 'Schedule' },
  { key: ParticipatorMenuItemType.HISTORY, label: 'History' },
  { key: ParticipatorMenuItemType.BALANCE, label: 'Balance' },
  { key: ParticipatorMenuItemType.PROFILE_EDIT, label: 'Profile Edit' },
]

const MenuCard: FC = () => {
  const { currentMenu, setCurrentMenu } = useParticipatorStore()
  const userInfo = useSignInStore(state=> state.userInfo) || {}

  const handleMenuItemClick = (menuKey: string) => {
    setCurrentMenu(menuKey as ParticipatorMenuItemType)
  }

  return (
    <PCard className="w-[350px] bg-[#E8DED7]" bodyClass="p-[40px]">
      <div className="mt-[20px]">
        <div className="flex items-center">
          <PAvatar imgSrc={userInfo.avatar} />

          <div className="ml-[34px] text-neutral-900 text-xl font-bold font-playfair leading-relaxed">
            {userInfo.firstName} {userInfo.lastName}
          </div>
        </div>

        <div className="mt-6">
          <PMenu className="box-content p-0" items={menuItems} activeItemKey={currentMenu} onItemClick={handleMenuItemClick} />
        </div>
      </div>
    </PCard>
  )
}

export default MenuCard
