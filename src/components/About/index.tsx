import React, {useEffect, useCallback, useState, useRef, memo} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {LazyLoadImage} from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'

import aboutBg from '../../assets/img/about-bg.jpg'
// import Drawer from '@mui/material/Drawer'


// interface IProps {
//   data: any
//   // onClick(event: React.MouseEvent<HTMLButtonElement>): void
//   // ...
// }

const About: React.FC = memo(() => {

  return (
    <>
      <div className="col-span-8 lg:col-span-7 min-h-screen dark:text-slate-400">
        <div className="grid gap-x-4 md:gap-x-4 xl:gap-x-6 2xl:gap-x-10 gap-y-8 auto-rows-auto">
          <div className="relative aspect-[18/14]">
            <LazyLoadImage
              className="rounded absolute object-cover inset-0 w-full h-full"
              src={aboutBg}
              effect="blur"
            />
            {/* <img src="//live.staticflickr.com/65535/52183654588_280cfa8886_h.jpg" alt="" /> */}
          </div>
          <div className="relative grid md:grid-cols-[4fr_7fr] md:gap-x-6 xl:gap-x-6 2xl:gap-x-10 gap-y-8 auto-rows-auto mt-10 mb-40">
            <div>
              <header className="pb-8 text-[0.875rem]">About Me</header>
              <p className="text-[0.875rem] mb-10">
                {/* T. 845 421 2078 */}
                <br />
                {/* <a className="underline" href="mailto:pengtrym@gmail.com">
                  pengtrym@gmail.com
                </a> */}
              </p>
            </div>
            <div>
              <p className="pb-10 leading-relaxed text-[0.875rem]">
              From Canvas to Code. <br />Before my coding life, I was an artist. I’ve always been obsessed with design, details, and aesthetics.</p>
              <p className="pb-10 leading-relaxed text-[0.875rem]">
              I realized that to create truly perfect digital experiences—beautiful UI combined with seamless UX—I needed to master the technology behind them. That’s why I became a programmer.</p>
              <p className="pb-10 leading-relaxed text-[0.875rem]">
              Today, I leverage that artistic background to bridge the gap between design and engineering. I don’t just implement designs; I enhance them. I build systems that are not only robust and scalable under the hood but also visually stunning and intuitive on the surface.</p>
              <p className="pb-10 leading-relaxed text-[0.875rem]">
              Based in New York City, I’m a developer who bridges the gap between robust backend logic and polished frontend experiences.</p>
              <p className="pb-10 leading-relaxed text-[0.875rem]">
              My journey isn’t just about writing code—it’s about solving real-world problems. Whether it’s architecting an AI image generation platform from scratch or optimizing a complex checkout flow for higher conversion, I focus on delivering value through technology.</p>
              <p className="pb-10 leading-relaxed text-[0.875rem]">
              I specialize in the modern web stack (Next.js, React, TypeScript) and backend services (Python FastAPI, Supabase). I believe that great software is a combination of solid engineering, intuitive design, and a deep understanding of user needs.</p>
              <p className="pb-10 leading-relaxed text-[0.875rem]">
              When I’m not coding, I’m exploring new tech, optimizing workflows, and finding the best coffee in NYC.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
})

export default About
About.displayName = 'About'
