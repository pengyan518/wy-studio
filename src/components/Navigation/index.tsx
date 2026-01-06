import React, {useEffect, useCallback, useState, useRef, memo} from 'react'
import {useDispatch, useSelector} from 'react-redux'
// import {DarkThemeToggle} from "flowbite-react";

import {RootState} from 'store'

// import axios from 'axios'
// import config from 'config'
import {fetchInitial, setFocusArea} from './NavigationSlice'
import {Box} from './styles'
// import useIntersect from '../../hooks/useIntersect'
// import Loading from '../Loading'
// import {DarkThemeToggle} from "flowbite-react";
import ThemeToggle from '../ThemeToggle'
import Footer from './Footer'

// interface IProps {
//   data: any
//   // onClick(event: React.MouseEvent<HTMLButtonElement>): void
//   // ...
// }

const Navigation: React.FC = memo(() => {
  // const [pushedSeatsDom, setPushedSeatsDom] = useState(false)
  const [openMenu, setOpenMenu] = useState(false)
  const {active} = useSelector((state: RootState) => state.navigation)
  const {translation} = useSelector((state: RootState) => state.main)
  const page = useRef(1)

  const dispatch = useDispatch()
  const handleClick = useCallback(area => () => dispatch(setFocusArea(area)), [dispatch])
  const handleOpenMenu = useCallback(() => setOpenMenu(!openMenu), [openMenu])

  return (
    <>
      <Box className="col-span-3 lg:col-san-4 md:px-6 relative block dark:text-white">
        <div className="flex justify-between items-center pb-4">
          <header className={`text-lg font-black`}>PENG YAN</header>

          <div className="flex md:hidden">
            <button
              onClick={handleOpenMenu}
              data-collapse-toggle="mobile-menu-4"
              type="button"
              className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-300 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="mobile-menu-4"
              aria-expanded={openMenu}>
              <span className="sr-only">Open main menu</span>
              <div className="ac-gn-menuicon-label" aria-hidden="true">
                <span className="ac-gn-menuicon-bread ac-gn-menuicon-bread-top">
                  <span className="ac-gn-menuicon-bread-crust ac-gn-menuicon-bread-crust-top"></span>
                </span>
                <span className="ac-gn-menuicon-bread ac-gn-menuicon-bread-bottom">
                  <span className="ac-gn-menuicon-bread-crust ac-gn-menuicon-bread-crust-bottom"></span>
                </span>
              </div>
            </button>
          </div>
        </div>

        <ul className="hidden md:block">
          <li className={active === 'works' ? 'active' : 'opacity-70'}>
            <a className="cursor-pointer pt-4 pb-2 block font-medium" onClick={handleClick('works')}>
              Works
            </a>
          </li>
          <li className={active === 'about' ? 'active' : 'opacity-70'}>
            <a className="cursor-pointer py-2 block font-medium" onClick={handleClick('about')}>
              About
            </a>
          </li>
        </ul>
        {openMenu && (
          <div className="z-100 md:hidden justify-between items-center w-full flex md:w-auto md:order-1 pb-4" id="mobile-menu-4">
            <ul className="w-full flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
              {/* <li> */}
              {/*  <a */}
              {/*    onClick={handleClick('me')} */}
              {/*    href="#" */}
              {/*    className="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white text-center" */}
              {/*    aria-current="page"> */}
              {/*    Home */}
              {/*  </a> */}
              {/* </li> */}
              <li>
                <a
                  onClick={handleClick('works')}
                  href="#"
                  className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 text-center">
                  Works
                </a>
              </li>
              <li>
                <a
                  onClick={handleClick('about')}
                  href="#"
                  className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 text-center">
                  About
                </a>
              </li>
            </ul>
          </div>
        )}

        <div className="fixed bottom-5 hidden md:block">
          <Footer />
        </div>
      </Box>
    </>
  )
})

export default Navigation
Navigation.displayName = 'Navigation'
