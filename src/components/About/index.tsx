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
              <header className="pb-8 text-[0.875rem]">Contact</header>
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
                Before my coding life, I was an artist. I love design and details. I wanted to make a perfect website with a beautiful UI and smooth UX. That&apos;s why I became a programmer.
              </p>
              <p className="pb-10 leading-relaxed text-[0.875rem]">
                {/* Seasoned and independent Front End Developer with 10 years of experience in blending the art of design with skill of programming to deliver an immersive and engaging user experience through efficient website development, proactive feature optimization, and relentless debugging. */}

                I have fourteen years of front-end work experience, from the earliest table-based layout to the most popular CSS grid layout, from jQuery to React, Vue, from Gulp to Webpack, Vite, the growth of front-end technology has also accompanied my growth. I really want to give full play to my expertise in the front-end field because I have a pair of discerning eyes and a heart that likes to learn new technologies.

              </p>
              {/* <p className="pb-10 leading-relaxed text-base"><a target="_blank" href="https://Shenyun.com" rel="noreferrer">Shenyun.com</a> is my proudest project. The designer only gave me a very rough design. But out of my love, I expanded the details and most of the UX design, adding animations to improve the details. </p> */}

            </div>
          </div>
        </div>
      </div>
    </>
  )
})

export default About
About.displayName = 'About'
