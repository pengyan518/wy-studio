import React, {useEffect, useCallback, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'

import {RootState} from 'store'

import axios from 'axios'
import config from 'config'
import {cleanArticle, fetchArticle} from './ArticleSlice'
import Body from "./body";
import Loading from "../Loading";

// interface IProps {
//   item: any
//   // onClick(event: React.MouseEvent<HTMLButtonElement>): void
//   // ...
// }

const Article: React.FC = () => {
  // const [pushedSeatsDom, setPushedSeatsDom] = useState(false)
  // const {originalLink, linkHighlighted, nameDisplay, length, id} = item
  // const {articleId} = useSelector((state: RootState) => state.main)
  const {loading} = useSelector((state: RootState) => state.article)

  // const dispatch = useDispatch()


  return <div>{loading ? <Loading height="100vh" width="100%" color="#1976d2" /> : <Body />}</div>
}

export default Article
