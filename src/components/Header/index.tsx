import React, {useEffect, useCallback, useState, useRef, memo} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import Button from '@mui/material/Button'

import {RootState} from 'store'

import axios from 'axios'
import config from 'config'
import SearchIcon from '../SvgIcons/SearchIcon'
import LogoBrand from '../SvgIcons/Logo'
import Navigation from "./Navigation";

interface IProps {
  data: any
  // onClick(event: React.MouseEvent<HTMLButtonElement>): void
  // ...
}

const Header: React.FC = memo(() => {
  // const [pushedSeatsDom, setPushedSeatsDom] = useState(false)
  // const [data, setData] = useState('')
  // const {latest, loading} = useSelector((state: RootState) => state.latest)

  const page = useRef(1)

  const dispatch = useDispatch()

  return (
    <header className="relative w-full flex md:justify-between">
      <div className="w-1/2 md:w-1/4 xl:w-1/5 pb-10 pt-14 mx-auto">
        {/*  @ts-ignore */}
        <LogoBrand className="w-full" viewBox="0 0 714.7 53.6" />
      </div>
      <Navigation />
    </header>
  )
})

export default Header
Header.displayName = 'Header'
