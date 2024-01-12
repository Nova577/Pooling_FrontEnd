import { FC } from "react";
import MenuCard from "./MenuCard";
import DiscoveryContent from "./DiscoveryContent";
import useParticipatorStore, { ParticipatorMenuItemType } from "./store";
import ScheduleContent from "./ScheduleContent";
import HistoryContent from "./HistoryContent";
import BalanceContent from "./BalanceContent";
import ProfileEditContent from "./ProfileEditContent";
import { getParticipantUserApi } from "@/apis/user"
import useSignInStore from '@/views/SignIn/store'
import { useRequest } from 'ahooks'
import { IParticipantUserProps } from '@/types/user'

const Participator: FC = () => {
  const { currentMenu } = useParticipatorStore()
  const userInfo = useSignInStore(state => state.userInfo) || {}
  const setUserInfo = useSignInStore(state => state.setUserInfo)

  useRequest(() => getParticipantUserApi(userInfo.id!), {
    ready: !!userInfo.id,
    onSuccess: (res: IParticipantUserProps) => {
      setUserInfo(res)
    } 
  })

  return (
    <div className="py-24 px-6 flex justify-center">
      <div className="w-full max-w-[1920px] flex gap-[100px]">
        <div>
          <MenuCard />
        </div>

        <div className="flex-1">
          {
            currentMenu === ParticipatorMenuItemType.DISCOVERY && <DiscoveryContent />
          }

          {
            currentMenu === ParticipatorMenuItemType.SCHEDULE && <ScheduleContent />
          }

          {
            currentMenu === ParticipatorMenuItemType.HISTORY && <HistoryContent />
          }

          {
            currentMenu === ParticipatorMenuItemType.BALANCE && <BalanceContent />
          }

          {
            currentMenu === ParticipatorMenuItemType.PROFILE_EDIT && <ProfileEditContent />
          }
        </div>
      </div>
    </div>
  )
}

export default Participator
