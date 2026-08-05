import React from 'react'
import { ThreeDModel } from './HeroModel/ThreeDModel'

const ThreeDSection = () => {
  return (
    <section id="3d" className="relative overflow-hidden">
      {/* 3D MODEL */}
      <div className="flex flex-col md:px-20 px-5 justify-center md:w-full w-screen mb-2 bg-slate-950">

        <figure>
          <div className=" mb-5 mt-5 .Thehero-3d-layout border-pink-300 border-2 w-[600px] h-[400px] ml-auto flex items-center justify-center">
            {/* smp 3D model */}
            <ThreeDModel/>
          </div>
        </figure>
      </div>
    </section>
  )
}

export default ThreeDSection
