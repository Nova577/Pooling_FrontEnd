import { FC } from "react"
import PInput from "../common/PInput"
import PButton from "../common/PButton"

const SiteFooter: FC = () => {
  return (
    <div className="w-full h-[400px] flex justify-center bg-[#DBC6B9]">
      <div className="w-full max-w-7xl flex justify-between">
        <div className="mt-[78px]">
          <div className="text-2xl font-bold font-playfair leading-loose">Get freshest pooling News</div>
          <div className="flex  mt-[21px]">
            <PInput className="!h-[50px]" placeholder="Your email here"/>
            <PButton className="ml-[20px] h-[50px] bg-zinc-800 text-white text-lg font-bold rounded-[1.25rem]">Subscribe</PButton>
          </div>

          <div className="mt-2">
            <span className="text-neutral-900 text-[15px] font-normal font-playfair leading-tight">Contact  Sales</span>
            <span className="ml-[9px] text-neutral-900 text-[15px] font-normal font-playfair leading-tight">Sales</span>
            <span className="ml-[9px] text-neutral-900 text-[15px] font-normal font-playfair leading-tight">About Us</span>
            <span className="ml-[9px] text-neutral-900 text-[15px] font-normal font-playfair leading-tight">Careers</span>
            <span className="ml-[9px] text-neutral-900 text-[15px] font-normal font-playfair leading-tight">Legal Info</span>
          </div>

          <div className="mt-[50px] text-black text-sm font-bold font-playfair leading-[18.66px]">© Pooling 2023 All Rights Reserved</div>
        </div>

        {/* <div className="flex flex-col" >
          <div className="flex">
            <div className="flex flex-col">
              <div>Pooling</div>
              <div>See the Unseen.</div>
            </div>
            <div>
              <img src="" alt="" />
            </div>
          </div>
        <div className="flex flex-1}">
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
        </div>
        </div> */}
      </div>
    </div>
  )
}

export default SiteFooter
