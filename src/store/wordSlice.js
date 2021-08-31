import { createSlice } from '@reduxjs/toolkit'


const initialState = { value: "", allWords: [], favwords: []  }

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
    updateFavWords(state, action){
      state.favwords = action.payload;
    },
  },
})

export const { updateWords, updateValue } = wordSlice.actions
export default wordSlice;