import React, {memo} from 'react'
import {useDispatch} from 'react-redux'
import {LazyLoadImage} from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'
import {setFocusArea} from '../Navigation/NavigationSlice'

import aboutBg from '../../assets/img/about-bg.jpg'
// import Drawer from '@mui/material/Drawer'


// interface IProps {
//   data: any
//   // onClick(event: React.MouseEvent<HTMLButtonElement>): void
//   // ...
// }

const About: React.FC = memo(() => {
  const dispatch = useDispatch()

  return (
    <>
      <div className="col-span-8 lg:col-span-7 min-h-screen dark:text-slate-400">
        <div className="grid gap-x-4 md:gap-x-4 xl:gap-x-6 2xl:gap-x-10 gap-y-8 auto-rows-auto">
          <div className="relative aspect-[18/7]">
            <LazyLoadImage
              className="rounded absolute object-cover inset-0 w-full h-full"
              src={aboutBg}
              effect="blur"
            />
            {/* <img src="//live.staticflickr.com/65535/52183654588_280cfa8886_h.jpg" alt="" /> */}
          </div>
          <div className="relative grid md:grid-cols-[4fr_7fr] md:gap-x-6 xl:gap-x-6 2xl:gap-x-10 gap-y-8 auto-rows-auto mt-10 mb-40">
            <div>
              <header className="pb-8 text-[0.875rem]">About the Studio</header>
              <p className="text-[0.875rem] mb-10">
                {/* T. 845 421 2078 */}
                <br />
                {/* <a className="underline" href="mailto:pengtrym@gmail.com">
                  pengtrym@gmail.com
                </a> */}
              </p>
            </div>
            <div>
              <div className="space-y-16">
                {/* Hero Section */}
                <section>
                  <h1 className="text-4xl font-bold mb-6 leading-tight !mt-0">
                    Crafted in NYC. <br />Engineered for Growth.
                  </h1>
                  <h2 className="text-xl font-medium text-gray-800 dark:text-gray-200 mb-6">
                    We build production-ready SaaS platforms, scalable web applications, and pixel-perfect interfaces.
                  </h2>
                  <p className="mb-8 leading-relaxed text-[0.95rem] text-gray-600 dark:text-gray-400">
                    We are a creative development studio bridging the gap between artistic design and robust engineering. From AI-powered MVPs to complex e-commerce systems, we turn ambitious ideas into digital reality.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <button
                      onClick={() => dispatch(setFocusArea('works'))}
                      className="px-6 py-3 bg-black dark:bg-white text-white dark:text-black font-semibold rounded hover:opacity-90 transition-opacity"
                    >
                      See Our Work
                    </button>
                    <a
                      href="mailto:felix.wang.1026@gmail.com"
                      className="px-6 py-3 border border-black dark:border-white font-semibold rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                    >
                      Start Your Project
                    </a>
                  </div>
                </section>

                {/* About Us */}
                <section>
                  <h3 className="text-2xl font-bold mb-6">From Canvas to Code.</h3>
                  <div className="space-y-4 text-[0.95rem] leading-relaxed text-gray-600 dark:text-gray-400">
                    <p>
                      Our studio was born from a simple belief: Great software is an art form.
                    </p>
                    <p>
                      Founded by an artist-turned-engineer and a tech visionary, W&Y Studio is not your typical dev shop. We don’t just write code; we obsess over details, user experience, and visual aesthetics.
                    </p>
                    <p>
                      We realized that the best digital products happen when design sensibility meets engineering rigor. That’s why we exist. We build systems that are powerful under the hood and beautiful on the surface—delivering the perfect balance of form and function.
                    </p>
                    <p>
                      Based in New York City, we serve startups and businesses who refuse to compromise on quality.
                    </p>
                  </div>
                </section>

                {/* What We Do */}
                <section>
                  <h3 className="text-2xl font-bold mb-8">What We Do</h3>
                  <div className="space-y-8">
                    <div>
                      <h4 className="text-lg font-bold mb-2">🎨 UI/UX & Frontend Development</h4>
                      <p className="mb-2 text-gray-600 dark:text-gray-400">We don’t just implement designs; we elevate them. Our frontend solutions are responsive, accessible, and interactive.</p>
                      <p className="text-sm font-medium text-gray-500">Expertise: Next.js, React, Vue.js, Tailwind CSS, Complex Animations</p>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold mb-2">⚙️ Backend Architecture & AI Integration</h4>
                      <p className="mb-2 text-gray-600 dark:text-gray-400">We build the engines that power your business. From secure databases to custom AI workflows, we ensure your platform is fast, scalable, and smart.</p>
                      <p className="text-sm font-medium text-gray-500">Expertise: Python FastAPI, Node.js, Supabase, OpenAI/LLM Integration</p>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold mb-2">🚀 SaaS & E-commerce Solutions</h4>
                      <p className="mb-2 text-gray-600 dark:text-gray-400">We specialize in turning ideas into revenue-generating products. We handle the hard stuff: subscription billing, payment gateways, and user authentication.</p>
                      <p className="text-sm font-medium text-gray-500">Expertise: Stripe Connect, PayPal, Multi-step Checkout Flows, MVP Development</p>
                    </div>
                  </div>
                </section>

                {/* Why Work With Us */}
                <section>
                  <h3 className="text-2xl font-bold mb-8">Why Work With Us</h3>
                  <div className="grid gap-6">
                    <div className="py-4 pr-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                      <h4 className="font-bold mb-2">✅ Design-Driven Engineering</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">With our background in art and design, we catch the visual details that pure developers often miss. We speak the language of designers.</p>
                    </div>
                    <div className="py-4 pr-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                      <h4 className="font-bold mb-2">✅ Full-Stack Ownership</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">You don’t need to hire a separate frontend dev, backend dev, and DevOps engineer. We handle the entire lifecycle—from Figma files to live deployment.</p>
                    </div>
                    <div className="py-4 pr-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                      <h4 className="font-bold mb-2">✅ NYC-Based Communication</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">We are local, reliable, and speak your language. No timezone headaches, just seamless collaboration.</p>
                    </div>
                  </div>
                </section>

                {/* Contact */}
                {/* <section className="pt-8 border-t border-gray-200 dark:border-gray-800">
                  <h3 className="text-2xl font-bold mb-4">Ready to build something beautiful?</h3>
                  <p className="mb-6 text-gray-600 dark:text-gray-400">Whether you need an MVP in weeks or a scalable platform for years, we are ready to partner with you.</p>
                  <a
                    href="mailto:pengtrym@gmail.com"
                    className="inline-block px-8 py-4 bg-black dark:bg-white text-white dark:text-black font-bold text-lg rounded hover:opacity-90 transition-opacity"
                  >
                    Let’s Chat
                  </a>
                </section> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
})

export default About
About.displayName = 'About'
