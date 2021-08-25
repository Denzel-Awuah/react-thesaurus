import { createSlice } from '@reduxjs/toolkit'


const initialState = { value: "", allWords: []  }

const wordSlice = createSlice({
  name: 'word',
  initialState,
  reducers: {
    updateWords(state, action) {
      state.allWords = action.payload
    },
    updateValue(state, action){
      state.value = action.payload
    },
  },
})

export const { updateWords, updateValue } = wordSlice.actions
export default wordSlice;