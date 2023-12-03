import { FC } from "react"
import PGiganticButton from "../../components/common/PGiganticButton"
import SiteFooter from "../../components/SiteFooter"
import PCard from "../../components/common/PCard"

const Home: FC = ()  => {
  return (
    <>
      <div className="flex-auto pb-8">
        <div className="w-full h-[700px] flex flex-col justify-center items-center bg-[url('src/assets/bg_circles.svg')] bg-cover">
          <div className="font-playfair text-[86px] font-bold leading-[114.64px] text-center">
            Simplify your sampling process.
          </div>

          <div className="mt-[59.32px] font-playfair font-normal text-[28px] leading-[37.32px] text-center">
            Your go-to research and sampling platform. Reach your ideal participants in one click.
          </div>

          <div className="w-[800px] mt-[56.52px] flex justify-between">
            <PGiganticButton>Live 2024</PGiganticButton>
            <PGiganticButton>Contact Sales</PGiganticButton>
          </div>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className=" w-full pt-[82px] flex justify-center">
            <div className="h-[72px] w-[905px] bg-[url('src/assets/powered_by_bar.png')]" />
          </div>

          <div className="pt-[164px] flex justify-center">
            <div className="pt-[16px] h-[160px] w-[1060px] flex flex-col justify-center items-center bg-[url('src/assets/bg_circles2.svg')]">
              <div className="font-playfair text-[52px] font-bold leading-[69.32px]">
                Pooling Research & Sampling Platform
              </div>

              <div className="font-playfair text-[40px] font-bold leading-[53.32px]">
                Live 2024
              </div>
            </div>
          </div>

          <div className="pt-[150px] flex">
            <PCard className="flex-1 h-[444px]"></PCard>
            {/* <div className="h-[444px] flex-1 bg-[#DBC6B9]" /> */}

            <div className="relative -top-2 flex-1">
              <div className="pl-24">
                <div className="w-[423px] text-[45px] font-bold font-playfair leading-[53px]">Describe your target group to distribute. We do the rest.</div>
                <div className="w-[375px] mt-[31px] text-black text-[22px] font-normal font-playfair leading-[25px]">We help you reduce sampling bias that damages your research accuracy.</div>
              </div>
            </div>
          </div>

          {/* <div className="pt-[75px] flex gap-[100px]">
            <div className="flex-1 flex flex-col items-center">
              <div className="w-[423px] my-[32px] text-[45px] font-bold font-playfair leading-[53px]">Your ideal participants are one click away.</div>
              
              <div className="w-[423px] text-[22px] font-normal font-playfair leading-[25px]"> Our algorithm pushes your research to the correct persons.<br></br>Get instant answers with real-time follow.No third-party involved.</div>
            </div>
            <div className="flex-1 bg-[#DBC6B9]"> </div>
          </div>

          <div className="pt-[75px] flex">
              <div className="flex-1 bg-[#DBC6B9]"> </div>
                <div className="flex-1 pl-[100px]">
                  <div className="w-[423px] my-[32px] text-[45px] font-bold font-playfair leading-[53px]">Monitor your research progress closely with your team.</div>
              
                  <div className="w-[378px] text-[22px] font-normal font-playfair leading-[25px]">Under teamwork mode.you and your teammates can check interview bookings and surveys collected anywhere anytime.</div>  
                </div>
          </div>
          <div className="pt-[75px] flex ">
            <div className="flex-1 flex flex-col items-center">
              <div className="w-[423px] my-[32px] text-[45px] font-bold font-playfair leading-[53px]">You and your participants' data are safe with us.</div>
            
              <div className="w-[423px] text-[22px] font-normal font-playfair leading-[25px]"> Our data security algorithm safeguards your and your participants privacy.</div>
            </div>
            <div className="flex-1 bg-[#DBC6B9]"> </div>
          </div> */}
        </div>
      </div>

      <SiteFooter />
    </>
  )
}

export default Home
