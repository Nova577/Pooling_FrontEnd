import { FC } from "react"
import PCard from "../../components/common/PCard"
import PButton from "@/components/common/PButton"

const Home: FC = ()  => {
  return (
    <div className="flex-auto pb-8">
      <div className="w-full h-[700px] flex flex-col justify-center items-center bg-[url('src/assets/bg_circles.svg')] bg-cover">
        <div className="font-playfair text-[86px] font-bold leading-[114.64px] text-center">
          Simplify your sampling process.
        </div>

        <div className="mt-[59.32px] font-playfair font-normal text-[28px] leading-[37.32px] text-center">
          Your go-to research and sampling platform. Reach your ideal participants in one click.
        </div>

        <div className="w-[800px] mt-[56.52px] flex justify-between">
          <PButton size="xl" round>Live 2024</PButton>
          <PButton size="xl" round>Contact Sales</PButton>
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

        {/* Note that all the cards need to be replaced with images */}
        <div className="pt-[150px] flex">
          <PCard className="flex-1 h-[444px]"></PCard>
          <div className="relative -top-2 flex-1">
            <div className="pl-24">
              <div className="w-[423px] text-[45px] font-bold font-playfair leading-[53px]">Describe your target group to distribute. We do the rest.</div>
              <div className="w-[375px] mt-[31px] text-black text-[22px] font-normal font-playfair leading-[25px]">We help you reduce sampling bias that damages your research accuracy.</div>
            </div>
          </div>
        </div>

        <div className="pt-[75px] flex">
          <div className="flex-1 flex flex-col items-center">
            <div className="w-[423px] my-[32px] text-[45px] font-bold font-playfair leading-[53px]">Your ideal participants are one click away.</div>
            <div className="w-[423px] text-[22px] font-normal font-playfair leading-[25px]"> Our algorithm pushes your research to the correct persons.<br></br>Get instant answers with real-time follow.No third-party involved.</div>
          </div>
          <PCard className="flex-1 h-[444px] w-[666px]"></PCard>
        </div>

        <div className="pt-[75px] flex">
            <PCard className="flex-1 h-[444px]"></PCard>
            <div className="relative -top-2 flex-1">
              <div className="pl-24">
                <div className="w-[465px] my-[32px] text-[45px] font-bold font-playfair leading-[53px]">Monitor your research progress closely with your team.</div>
                <div className="w-[453px] text-[22px] font-normal font-playfair leading-[25px]">Under teamwork mode, you and your teammates can check interview bookings and surveys collected anywhere anytime.</div>  
              </div>
            </div>
        </div>

        <div className="pt-[75px] flex pb-[164px]">
          <div className="flex-1 flex flex-col items-center">
            <div className="w-[423px] my-[32px] text-[45px] font-bold font-playfair leading-[53px]">You and your participants' data are safe with us.</div>
            <div className="w-[423px] text-[22px] font-normal font-playfair leading-[25px]"> Our data security algorithm safeguards your and your participants privacy.</div>
          </div>
          <PCard className="flex-1 h-[444px]"></PCard>
        </div> 
      </div>


      <div className="bg-[#302929]">
        <div className="max-w-7xl mx-auto text-white">

          <div className="pt-[48px] flex justify-center">
            {/* Bubble background image needs to be changed */}
            <div className="pt-[16px] h-[160px] w-[940px] flex flex-col justify-center items-start bg-[url('src/assets/bg_circles2.svg')]">
              <div className="font-playfair text-[52px] font-bold leading-[69.32px]">
                Our offering
              </div>
              <div className="pl-[20px] font-playfair text-[40px] font-bold leading-[53.32px]">
                Streamline your insight-gaining process.
              </div>
            </div>
          </div>

          <div className="pt-[150px] flex">
            <PCard className="flex-1 h-[444px]"></PCard>
            <div className="relative -top-2 flex-1">
              <div className="pl-24">
                <div className="w-[423px] text-[45px] font-bold font-playfair leading-[53px]">AI Assistant</div>
                <div className="w-[442px] mt-[31px] text-[22px] font-normal font-playfair leading-[25px]">
                  Unleash your research potential: AI-powered precision at every step.
                </div>
              </div>
            </div>
          </div>

          <div className="pt-[75px] flex">
            <div className="flex-1 flex flex-col items-center">
              <div className="w-[423px] my-[32px] text-[45px] font-bold font-playfair leading-[53px]">AR Interview</div>
              <div className="w-[423px] text-[22px] font-normal font-playfair leading-[25px]"> Real and private dialogues.</div>
            </div>
            <PCard className="flex-1 h-[444px] w-[666px]"></PCard>
          </div>

          <div className="pt-[75px] flex pb-[164px]">
              <PCard className="flex-1 h-[444px]"></PCard>
              <div className="relative -top-2 flex-1">
                <div className="pl-24">
                  <div className="w-[465px] my-[32px] text-[45px] font-bold font-playfair leading-[53px]">Data Analytics</div>
                  <div className="w-[437px] text-[22px] font-normal font-playfair leading-[25px]">From raw data to invaluable insights: data analytics elevates your research game.</div>  
                </div>
              </div>
          </div>

        </div>
      </div>

      <div className="max-w-7xl mx-auto h-[680px] pt-[48px] flex justify-center items-center">
        <div className="w-[1096px] text-[115px] font-bold font-playfair">Book a Beta product Now.</div>
        {/* Arrow logo */}
      </div>
    </div>
  )
}

export default Home
