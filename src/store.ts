import {Action, combineReducers, configureStore} from '@reduxjs/toolkit'
import {ThunkAction} from 'redux-thunk'
// import counterReducer from './features/counter/CounterSlice'
import mainReducer from './features/main/MainSlice'
import latestReducer from './components/Latest/LatestSlice'
import categoryReducer from './components/Category/CategorySlice'
import articleReducer from './components/Article/ArticleSlice'
import navigationReducer from './components/Navigation/NavigationSlice'

export const rootReducer = combineReducers({
  main: mainReducer,
  latest: latestReducer,
  category: categoryReducer,
  article: articleReducer,
  navigation: navigationReducer,
})

const store = configureStore({
  devTools: process.env.NODE_ENV !== 'production',
  reducer: rootReducer,
})

export type RootState = ReturnType<typeof rootReducer>
export type AppThunk = ThunkAction<void, RootState, null, Action<string>>
export type AppDispatch = typeof store.dispatch

export default store
