import React, {useEffect, useCallback, useState, useRef} from 'react'
import {useDispatch, useSelector} from 'react-redux'

import {RootState} from 'store'
import VideoJS from '../VideoJs'

// import axios from 'axios'
// import config from 'config'
// import {cleanArticle, fetchArticle} from './ArticleSlice'

// interface IProps {
//   item: any
//   // onClick(event: React.MouseEvent<HTMLButtonElement>): void
//   // ...
// }

const Video: React.FC = () => {
  // const [pushedSeatsDom, setPushedSeatsDom] = useState(false)
  // const {originalLink, linkHighlighted, nameDisplay, length, id} = item
  // const {articleId} = useSelector((state: RootState) => state.main)
  // const {articleData, loading} = useSelector((state: RootState) => state.article)
  // const {breadcrumb, item, itemsRelated, title, mediaLink} = articleData
  // const dispatch = useDispatch()

  const playerRef = useRef(null)

  const videoJsOptions = useCallback(
    path => ({
      autoplay: true,
      controls: true,
      responsive: true,
      fluid: true,
      // aspectRatio: '16:9',
      sources: [
        {
          src: path,
          type: 'video/mp4',
        },
      ],
    }),
    []
  )

  const handlePlayerReady = player => {
    playerRef.current = player
    // you can handle player events here
    player.on('waiting', () => {
      console.log('player is waiting')
    })

    player.on('dispose', () => {
      console.log('player will dispose')
    })
  }

  return (
    <>
      <div className="w-full 2xl:px-12">
        <div className="aspect-video">
          <VideoJS options={videoJsOptions('')} onReady={handlePlayerReady} />
        </div>
      </div>
    </>
  )
}

export default Video
