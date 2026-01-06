import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import axios from 'axios'
import config from '../../config'

// const sleep = (t = Math.random() * 200 + 300) => new Promise(resolve => setTimeout(resolve, t))

interface InitialStateMain {
  loading: boolean
  error: string | null
  latest: any[]
}

export const initialStateMain: InitialStateMain = {
  loading: false,
  error: null,
  latest: []
}

// type InitialData = {
//   auditoriumEid: string
//   auditoriumId: number
// }
// const initialData = (window as any).__INITIAL_DATA__ as InitialData

export const fetchInitial = createAsyncThunk('latest/fetchInitial', async (page:number, {rejectWithValue}) => {
  // get sections info
  try {
    // For demo purpose let's say out value is the length
    // of the project name in manifest and the api call is slow
    // await sleep()
    // const auditoriumId = process.env.NODE_ENV === 'development' ? config.auditoriumId : initialData.auditoriumId
    const response = await axios.get(`${config.getLatest}${page}`)
    console.debug(response.data.items)
    return response.data.items
  } catch (err) {
    return rejectWithValue('Something went wrong.')
  }
})

export const mySlice = createSlice({
  name: 'latest',
  initialState: initialStateMain,
  reducers: {
    // getAuditoriumApi: (state, action) => {
    //   state.auditorium.info = action.payload
    // },
  },
  extraReducers: {
    [fetchInitial.pending.type]: state => {
      state.loading = true
    },
    [fetchInitial.fulfilled.type]: (state, action) => {
      state.latest = [...state.latest, ...action.payload]
      state.loading = false
    },
    [fetchInitial.rejected.type]: (state, action) => {
      state.error = action.payload
      state.loading = false
    },
  },
})

// export const {} = mySlice.actions

export default mySlice.reducer
