import React, {useEffect, useCallback, useState, useRef, memo} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import Button from '@mui/material/Button'
// import Drawer from '@mui/material/Drawer'

import {RootState} from 'store'

// import axios from 'axios'
// import config from 'config'
import {fetchInitial} from './LatestSlice'
import ItemCard from '../ItemCard'
// import useIntersect from '../../hooks/useIntersect'
import Loading from '../Loading'

// interface IProps {
//   data: any
//   // onClick(event: React.MouseEvent<HTMLButtonElement>): void
//   // ...
// }

const Latest: React.FC = memo(() => {
  // const [pushedSeatsDom, setPushedSeatsDom] = useState(false)
  // const [page, setPage] = useState(1)
  const {latest, loading} = useSelector((state: RootState) => state.latest)
  const {translation} = useSelector((state: RootState) => state.main)
  const page = useRef(1)

  const dispatch = useDispatch()

  const handleLoadMore = useCallback(() => {
    // setTimeout(() => {
      page.current += 1
      // @ts-ignore
      dispatch(fetchInitial(page.current))
    // }, 500)
  }, [dispatch])

  useEffect(() => {
    if (latest.length === 0) {
      // @ts-ignore
      dispatch(fetchInitial(page.current))
    }
    return () => {}
  }, [dispatch, latest, page])

  // const handleObserver = useCallback(
  //   entries => {
  //     const target = entries[0]
  //     if (target.intersectionRatio <= 0) return
  //     if (target.isIntersecting || target.intersectionRatio > 0.4) {
  //       setTimeout(() => {
  //         page.current += 1
  //         // @ts-ignore
  //         dispatch(fetchInitial(page.current))
  //       }, 500)
  //     }
  //   },
  //   [dispatch]
  // )

  // const [ref] = useIntersect({
  //   threshold: 0,
  //   ho: handleObserver,
  // })

  return (
    <>
      <div className="mx-auto px-4 md:px-6 xl:px-8 2xl:px-8 py-20 bg-white md:w-11/12 xl:w-9/12 2xl:w-8/12 min-h-screen">
        <div className="grid grid-cols-2 gap-x-4 md:gap-x-4 xl:gap-x-6 2xl:gap-x-10 gap-y-8 md:grid-cols-3 xl:grid-cols-4 auto-rows-auto">
          {latest &&
            latest.map(item => {
              const {id} = item
              return <ItemCard key={id} item={item} showCategoryTag />
            })}
        </div>
        <div className="mx-auto px-2 md:px-8 py-20 text-center">
          {loading ? (
            <Loading height="5rem" width="100%" color="#1976d2" />
          ) : (
            <>
              <button
                onClick={handleLoadMore}
                className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-lg font-medium text-sky-800 rounded group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
                <span className="relative px-16 py-4 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded group-hover:bg-opacity-0">
                  {translation['View More']}
                </span>
              </button>
            </>
          )}
        </div>
      </div>
    </>
  )
})

export default Latest
Latest.displayName = 'Latest'
