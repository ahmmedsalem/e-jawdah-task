import { createSlice } from '@reduxjs/toolkit';
import Arabic from '../lang/ar.json';
import English from '../lang/en.json';
import {IntlProvider} from 'react-intl';


export const languageSlice = createSlice({
  name: 'commercials',
  initialState: {
    local: navigator.language
  },
  reducers: {
    
  },
})

export const { addRecord, deleteRecord } = languageSlice.actions


export default languageSlice.reducer