import { configureStore } from '@reduxjs/toolkit';
import { createStore } from 'redux';
import wordSlice from './wordSlice';

export const store = configureStore({
    reducer: wordSlice.reducer 
});

export const wordActions = wordSlice.actions