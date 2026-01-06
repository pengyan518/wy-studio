import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import axios from 'axios'
import config from '../../config'

// const sleep = (t = Math.random() * 200 + 300) => new Promise(resolve => setTimeout(resolve, t))

interface InitialStateMain {
  loading: boolean
  loadingInitial: boolean
  error: string | null
  errorInitial: string | null
  isDrawerOpened: boolean
  articleId: string | null
  translation: any
  loginInfo: any
  loginDialogStatus: boolean
}

export const initialStateMain: InitialStateMain = {
  loading: false,
  loadingInitial: false,
  error: null,
  errorInitial: null,
  isDrawerOpened: false,
  articleId: null,
  translation: null,
  loginInfo: null,
  loginDialogStatus: false,
}

// type InitialData = {
//   auditoriumEid: string
//   auditoriumId: number
// }
// const initialData = (window as any).__INITIAL_DATA__ as InitialData

export const fetchTranslation = createAsyncThunk('main/fetchTranslation', async (_, {rejectWithValue}) => {
  // get sections info
  try {
    // For demo purpose let's say out value is the length
    // of the project name in manifest and the api call is slow
    // await sleep()
    // const auditoriumId = process.env.NODE_ENV === 'development' ? config.auditoriumId : initialData.auditoriumId
    const response = await axios.get(`${config.translation}`)
    // return response.data
    if (response.data.status === 1) {
      return response.data.data
    }
    return null
  } catch (err) {
    return rejectWithValue('Something went wrong.')
  }
})

export const fetchInitial = createAsyncThunk('main/fetchInitial', async (_, {rejectWithValue}) => {
  // get sections info
  try {
    const response = await axios.get(`${config.login}`)
    // return response.data
    if (response.data.status === 1) {
      return response.data
    }
    return null
  } catch (err) {
    return rejectWithValue('Something went wrong.')
  }
})
export const mySlice = createSlice({
  name: 'main',
  initialState: initialStateMain,
  reducers: {
    getDrawerStatus: (state, action) => {
      state.isDrawerOpened = action.payload
    },
    setArticleId: (state, action) => {
      state.articleId = action.payload
    },
    setDialogStatus: (state, action) => {
      state.loginDialogStatus = action.payload
    },
    setLoginInfo: (state,action) => {
      state.loginInfo = action.payload
    }
  },
  extraReducers: {
    [fetchTranslation.pending.type]: state => {
      state.loading = true
    },
    [fetchTranslation.fulfilled.type]: (state, action) => {
      state.translation = action.payload
      state.loading = false
    },
    [fetchTranslation.rejected.type]: (state, action) => {
      state.error = action.payload
      state.loading = false
    },
    [fetchInitial.pending.type]: state => {
      state.loadingInitial = true
    },
    [fetchInitial.fulfilled.type]: (state, action) => {
      state.loginInfo = action.payload
      state.loadingInitial = false
    },
    [fetchInitial.rejected.type]: (state, action) => {
      state.errorInitial = action.payload
      state.loadingInitial = false
    },
  },
})

export const {getDrawerStatus, setArticleId, setDialogStatus, setLoginInfo} = mySlice.actions

export default mySlice.reducer
