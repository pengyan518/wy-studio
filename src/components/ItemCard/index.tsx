import React, {useEffect, useCallback, useState, memo} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {LazyLoadImage} from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'
// import Drawer from '@mui/material/Drawer'
// import Box from '@mui/material/Box'

import {RootState} from 'store'

import axios from 'axios'
import config from 'config'
import {getDrawerStatus} from '../../features/main/MainSlice'
import {setArticle} from '../Article/ArticleSlice'
import SearchIcon from "../SvgIcons/SearchIcon";
// import Image from '../Image'

interface IProps {
  item: any
  index?: any
  showCategoryTag?: boolean
  // onClick(event: React.MouseEvent<HTMLButtonElement>): void
  // ...
}

const ItemCard: React.FC<IProps> = memo(({item}) => {

  const {isDrawerOpened, translation} = useSelector((state: RootState) => state.main)
  const {caption, src, id, url} = item
  // const {name, termId} = categoryDisplay


  const dispatch = useDispatch()

  const openArticle = useCallback(() => {
    if (!isDrawerOpened) dispatch(getDrawerStatus(true))
    dispatch(setArticle(id))
  }, [dispatch, id, isDrawerOpened])


  // @ts-ignore
  return (
    <a className="w-full relative cursor-pointer" onClick={openArticle}>
      <div className="w-full shadow-md rounded aspect-[18/16] relative cursor-pointer transition-opacity asset asset-image">
        {/*  @ts-ignore */}
        <LazyLoadImage className="rounded absolute object-cover inset-0 shadow-inner w-full h-full" src={src} effect="blur" />
        <div className="overlay" />
        {/*  @ts-ignore */}
        <div className="icon"><SearchIcon className="text-white" viewBox="0 0 16 16" /></div>
      </div>
      <div className="text-sm line-clamp-3 mt-4 leading-5 hover:text-sky-700 dark:text-white" onClick={openArticle}>{caption}</div>
    </a>

  )
})

export default ItemCard
ItemCard.displayName = 'ItemCard'
