import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import axios from 'axios'
import config from '../../config'

// const sleep = (t = Math.random() * 200 + 300) => new Promise(resolve => setTimeout(resolve, t))

interface InitialState {
  loading: boolean
  error: string | null
  category: any
}

export const initialState: InitialState = {
  loading: false,
  error: null,
  category: null,
  // category: {
  //   cterm1211: {},
  //   cterm1210: {},
  //   cterm630: {},
  //   cterm631: {},
  //   cterm1125: {},
  //   cterm1126: {},
  // },
}

// type InitialData = {
//   auditoriumEid: string
//   auditoriumId: number
// }
// const initialData = (window as any).__INITIAL_DATA__ as InitialData

export const fetchCategory = createAsyncThunk('category/fetchCategory', async (_, {rejectWithValue}) => {
  // get sections info
  try {
    const category = {}
    // eslint-disable-next-line no-restricted-syntax
    for (const [term] of config.categoryTerm) {
      // eslint-disable-next-line no-await-in-loop
      const response = await axios.get(`${config.search}${term}/useApi/1`)
      category[term] = response.data
    }
    return category
  } catch (err) {
    return rejectWithValue('Something went wrong.')
  }
})

export const mySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchCategory.pending.type]: state => {
      state.loading = true
    },
    [fetchCategory.fulfilled.type]: (state, action) => {
      state.category = action.payload
      state.loading = false
    },
    [fetchCategory.rejected.type]: (state, action) => {
      state.error = action.payload
      state.loading = false
    },
  },
})

// export const {} = mySlice.actions

export default mySlice.reducer
