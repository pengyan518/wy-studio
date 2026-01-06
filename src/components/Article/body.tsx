import React, {useMemo, useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'

import {RootState} from 'store'
import Video from './Video'
import Close from '../SvgIcons/Close'
import {getDrawerStatus} from '../../features/main/MainSlice'
import Slash from '../SvgIcons/Slash'
import Loading from '../Loading'
import {theaters} from '../../assets/media'

// import axios from 'axios'
// import config from 'config'
// import {cleanArticle, fetchArticle} from './ArticleSlice'

// interface IProps {
//   item: any
//   // onClick(event: React.MouseEvent<HTMLButtonElement>): void
//   // ...
// }

const Body: React.FC = () => {
  const [load, setLoading] = useState(true)
  // const {originalLink, linkHighlighted, nameDisplay, length, id} = item
  const {translation} = useSelector((state: RootState) => state.main)
  const {articleId, loading} = useSelector((state: RootState) => state.article)
  // const {breadcrumb, item, itemsRelated, title, mediaLink} = articleData
  const dispatch = useDispatch()

  const handelClose = () => dispatch(getDrawerStatus(false))

  const getContent = useMemo(() => {
    const index = theaters.findIndex(item => item.id === articleId)
    return theaters[index]
  }, [articleId])

  const loadingHeight = useMemo(()=>window.innerWidth>=768?'50vw':'40vh', [])
  console.debug(loadingHeight)

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000)
    // return () => {
    // };
  }, [])

  return (
    <>
      <div className="bg-white dark:bg-slate-900">
        <header className="flex px-12 py-12 md:py-16 text-slate-500">
          <div className="!absolute h-9 w-9 right-4 md:right-10 top-4 md:top-10 cursor-pointer" onClick={handelClose}>
            {/*  @ts-ignore */}
            <Close className="h-9 w-9 text-slate-700 ml-2 mt-1 dark:text-slate-400" viewBox="0 0 16 16" />
          </div>
        </header>
        {getContent.videoEmbed && (
          <div className="videoWrapper">
            <div className="mx-auto md:w-11/12" dangerouslySetInnerHTML={{__html: getContent.videoEmbed}} />
            {/* @ts-ignore */}
            {load && <Loading height={loadingHeight} width="100%" color="#1976d2" className="top-0" />}
          </div>
        )}
        <div className="mx-auto md:w-9/12 pt-14 md:p-14 text-center">
          <header className="font-black text-sm uppercase text-gray-600 dark:text-gray-300">{getContent.label || 'Framework'}:</header>
          <div className="font-medium uppercase text-sm my-4 text-slate-700 dark:text-slate-300" dangerouslySetInnerHTML={{__html: getContent.description}} />
          <div className="mx-auto w-7/12">
            {getContent.url && (
              <a
                href={getContent.url}
                target="_blank"
                className="my-12 font-medium rounded-lg text-sm px-16 py-4 text-center inline-flex items-center Button"
                rel="noreferrer">
                Go to Production
                <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"></path>
                </svg>
              </a>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default Body
