import Image from "next/image"
import Header from "@/components/Header"
import React from "react"

function HomePage() {
  return
  <div className="h-screen"> 
    <Header/>
    <div></div>
    <div className="flex h-[10%]">
      <div className="w-1/1 flex flex-col justify-center item-start m-12"></div>
      <h1 className="height-189px width-496px text-[40px] font-bold">IMPECCABLE</h1>
      <h1 className="text-[40px] font-bold">CRAFTMANSHIP</h1>
      <h1 className="text[40px] font-bold">FITNESS</h1>
      <div>
        <p className="text[22px] w-[571px] ">An example of intricate workmanship and detail, elegant necklaces and long and short chains form a part of our desirable collection.</p>
     <div className="p-2 m-1 boeder-rgba(162, 152, 117, 1) border-4  rounded-md background: rgba(162, 152, 117, 1)">
      <button className="font-bold text-slate-50 ">Explore Now</button>
     </div>
      </div>
      <div className="w-1/2 flex justify-items-center">
      <Image src={"/slider-1-.jpg.jpg"} alt="slider-1-.jpg.jpg" width={55} height={73}/>
      </div>
    </div>
  </div>
}
export default HomePage