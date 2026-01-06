import React, {useEffect, useCallback, useState, useRef, memo} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import Button from '@mui/material/Button'

import {RootState} from 'store'

import axios from 'axios'
import config from 'config'
import SearchIcon from '../SvgIcons/SearchIcon'
import LogoBrand from '../SvgIcons/Logo'

interface IProps {
  data: any
  // onClick(event: React.MouseEvent<HTMLButtonElement>): void
  // ...
}

const Navigation: React.FC = memo(() => {
  // const [pushedSeatsDom, setPushedSeatsDom] = useState(false)
  // const [data, setData] = useState('')
  const {loadingInitial, loginInfo} = useSelector((state: RootState) => state.main)
  // const page = useRef(1)
  //
  // const dispatch = useDispatch()

  return (
    <div className="relative lg:absolute right-12 top-4 hidden md:block text-gray-600">
      <div>
        <a href="/disk">Web Drive</a>
        &nbsp;&nbsp;|&nbsp;&nbsp;
        <a href="/contact/form" className="user-menu-item">
          Feedback{' '}
        </a>
        &nbsp;&nbsp;|&nbsp;&nbsp;
        {loginInfo._system.authStatus === 0 ? (
          <a href="/user/do/login?next=/">Login</a>
        ) : (
          <>
            <a href="/global/object-admin">Welcome, {loginInfo._system.user.firstName}</a>
            &nbsp;&nbsp;|&nbsp;&nbsp;
            <a href="/user/do/logout">Log Out</a>
          </>
        )}
      </div>

      <div className="text-right">
        Language: &nbsp;<a href="/index/set-lang/lang/en-us">English</a>
        &nbsp;<a href="/index/set-lang/lang/zh-tw">繁體</a>
        &nbsp;<a href="/index/set-lang/lang/zh-cn">简体</a>
      </div>
    </div>
  )
})

export default Navigation
Navigation.displayName = 'Navigation'
