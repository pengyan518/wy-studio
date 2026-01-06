import React, {useEffect, useCallback, useState, useRef} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import Button from '@mui/material/Button'
import Drawer from '@mui/material/Drawer'

import {RootState} from 'store'

import axios from 'axios'
import config from 'config'
import {fetchCategory} from './CategorySlice'
import ItemCard from '../ItemCard'
import Swipe, {SwipeRef} from '../Swipe/Swipe'
import SwipeItem from '../Swipe/SwipeItem'
import Loading from "../Loading";

interface IProps {
  data: any
  // onClick(event: React.MouseEvent<HTMLButtonElement>): void
  // ...
}

const Category: React.FC = () => {
  // const [pushedSeatsDom, setPushedSeatsDom] = useState(false)
  const {category, loading} = useSelector((state: RootState) => state.category)
  const {translation} = useSelector((state: RootState) => state.main)

  const swipeRef = useRef<SwipeRef>(null)

  const dispatch = useDispatch()

  useEffect(() => {
    if (!category) {
      // @ts-ignore
      dispatch(fetchCategory())
    }
    return () => {}
  }, [category, dispatch])

  return (
    <>
      {loading ? (
        <Loading height="60vh" width="100%" color="#1976d2" />
      ) : (
        <div className="md:w-11/12 xl:w-9/12 2xl:w-8/12 mx-auto pt-6 pb-36 bg-white">
          {category &&
            Object.values(category).map((curCategory: {items}, index) => {
              const {items} = curCategory
              return (
                <div key={config.categoryTerm[index][0]} className="py-2">
                  <a href={config.categoryTerm[index][2]} className="block text-base font-bold pl-2 md:pl-1 mx-2 md:ml-14 md:mr-12 my-4 text-sky-700">{translation[config.categoryTerm[index][1]]}</a>
                  <div>
                    <Swipe ref={swipeRef} autoplay={0}>
                      {items.map(item => (
                        <SwipeItem key={item.id}>
                          <ItemCard item={item} />
                        </SwipeItem>
                      ))}
                    </Swipe>
                  </div>
                </div>
              )
            })}
        </div>
      )}
    </>
  )
}

export default Category
