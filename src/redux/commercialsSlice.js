import { createSlice } from '@reduxjs/toolkit';
import commercialRecords from '../assets/json/commercialRecords.json'



export const commercialsSlice = createSlice({
  name: 'commercials',
  initialState: {
    items: commercialRecords.records
  },
  reducers: {
    addRecord: function(state, action) {
        state.items.push(action.payload)
    }
  },
})

export const { addRecord } = commercialsSlice.actions


export default commercialsSlice.reducer