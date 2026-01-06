import React, {useEffect, useCallback, useState, useRef, memo} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import Button from '@mui/material/Button'
// import Drawer from '@mui/material/Drawer'

import {RootState} from 'store'

// import axios from 'axios'
// import config from 'config'
import ItemCard from '../ItemCard'
// import useIntersect from '../../hooks/useIntersect'
import Loading from '../Loading'
import {theaters} from "../../assets/media";

// interface IProps {
//   data: any
//   // onClick(event: React.MouseEvent<HTMLButtonElement>): void
//   // ...
// }

const WorksGrid: React.FC = memo(() => {
  return (
    <>
      <div className="col-span-8 lg:col-span-7">
        <div className="grid grid-cols-2 gap-x-4 md:gap-x-4 xl:gap-x-6 2xl:gap-x-10 gap-y-14 md:grid-cols-2 xl:grid-cols-3 auto-rows-auto mb-40 md:mb-20">
           {theaters &&
            theaters.map(item => {
              const {id} = item
              return <ItemCard key={id} item={item} />
            })}
        </div>

      </div>
    </>
  )
})

export default WorksGrid
WorksGrid.displayName = 'WorksGrid'
