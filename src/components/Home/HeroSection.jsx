import Color from "../Reusables/Colors"
import GirlPng from "../../assets/girl.png"

const HeroSection = () => {
  return (
    <>
      <div className="w-full min-h-[350px] bg-secondary rounded-3xl p-12 relative">
        <div className="absolute w-full h-full flex justify-center items-center top-0 left-0">
          <div>
            <h1 className="text-[250px] font-bold text-white/15">2024</h1>
          </div>
          <div className="absolute bottom-0 left-0 rounded-bl-3xl overflow-hidden flex justify-start">
            <div className="px-8 py-2 bg-[#921116] rounded-tr-3xl text-white font-bold relative z-10">
              NEW
            </div>
            <div className="px-8 py-2 bg-[#F4E9E8] rounded-tr-3xl font-bold transform -translate-x-5">
              HOT
            </div>
          </div>
        </div>

        <div className="flex flex-cols">
          <div className="flex-[50%] flex gap-4 flex-col">
            <div>
              <h1 className="font-bold text-white text-5xl">Explore New</h1>
            </div>
            <div className="max-w-72 min-h-36 bg-white rounded-2xl p-8 flex flex-col gap-1 shadow-lg">
              <div>
                <h2 className="font-bold text-xl">ThreadHarbor</h2>
              </div>
              <div className="flex gap-4">
                <p>$150.00</p>
                <p className="text-[#F54840] line-through">$170.00</p>
              </div>
              <div className="flex justify-between">
                <div className="bg-[#D5BFC0] px-4 rounded-full text-xs mt-1">
                  colors
                </div>
                <div className="flex gap-2">
                  <Color className="bg-[#ffffff] first:border first:border-black" />
                  <Color className="bg-[#6B1D20]" />
                  <Color className="bg-[#FFE713]" />
                  <Color className="bg-[#A69F95]" />
                </div>
              </div>
            </div>
          </div>
          <div className="flex-grow flex-[50%]">
            <img
              src={GirlPng}
              alt="girlPng"
              className="max-w-96 w-full absolute bottom-0"
            />
          </div>
        </div>
      </div>
    </>
  )
}
export default HeroSection
