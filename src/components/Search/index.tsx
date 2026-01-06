import React, {useEffect, useCallback, useState, useRef, memo} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import Button from '@mui/material/Button'

import {RootState} from 'store'

import axios from 'axios'
import config from 'config'
import SearchIcon from '../SvgIcons/SearchIcon'
import { Input } from "./styles";



interface IProps {
  data: any
  // onClick(event: React.MouseEvent<HTMLButtonElement>): void
  // ...
}

const Search: React.FC = memo(() => {
  // const [pushedSeatsDom, setPushedSeatsDom] = useState(false)
  const [data, setData] = useState('')
  const {latest, loading} = useSelector((state: RootState) => state.latest)
  const {translation} = useSelector((state: RootState) => state.main)
  const page = useRef(1)

  const dispatch = useDispatch()

  const onChange = useCallback(({target}) => {
    setData(target.value)
  }, [])

  const handleSubmit = useCallback(
    e => {
      e.preventDefault()
      window.location.href = `/media/search?q=${data}`
    },
    [data]
  )


  return (
    <div className="w-full lg:w-1/2 text-center">
      <form className="mx-auto px-2 md:px-8 pb-12 grid grid-cols-12 md:grid-cols-16 w-full" onSubmit={handleSubmit}>

        <Input type="text"
          placeholder={translation['Search for videos, music, or documents']}
          className="topSearch__bar col-span-10 block p-4 text-gray-900 border border-white rounded-l-sm bg-white sm:text-md focus:ring-blue-500 focus:border-cyan-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          onChange={onChange}
          value={data}
        />
        <button
          type="button" onClick={handleSubmit}
          className="col-span-2 md:col-span-2 flex justify-center items-center text-white bg-cyan-600 hover:bg-cyan-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-l-none rounded-r-sm text-sm px-5 py-4 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
           {/*  @ts-ignore */}
          <SearchIcon className="w-7 h-7 md:h-5 md:w-5 text-white" viewBox="0 0 16 16" />
        </button>
      </form>
    </div>
  )
})

export default Search
Search.displayName = 'Search'
