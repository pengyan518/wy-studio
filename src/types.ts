// import {Action, combineReducers, configureStore} from '@reduxjs/toolkit'
// import {ThunkAction} from 'redux-thunk'

import config from './config'
import getUrlParameter from './utils/getUrlParameter'

type InitialData = {
  auditoriumEid: string
  auditoriumId: number
}

const initialData = (window as any).__INITIAL_DATA__ as InitialData
const initial = {
  auditoriumId: getUrlParameter('auditoriumId'),
}

// export const auditoriumId = process.env.NODE_ENV === 'development' ? config.auditoriumId : initialData.auditoriumId
// export const auditoriumId = process.env.NODE_ENV === 'development' ? config.auditoriumId : initial.auditoriumId


export default initialData

// export type RootState = ReturnType<typeof rootReducer>
// export type AppThunk = ThunkAction<void, RootState, null, Action<string>>
// export type AppDispatch = typeof store.dispatch
