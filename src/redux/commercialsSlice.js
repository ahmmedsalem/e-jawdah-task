import { createSlice } from '@reduxjs/toolkit';


export const commercialsSlice = createSlice({
  name: 'commercials',
  initialState: {
    items: []
  },
  reducers: {
    addRecord: function(state, action) {
        state.items.push(action.payload)
    },
    deleteRecord: function(state, action) {
        state.items = state.items.filter(item => item.id !== action.payload.id)
    }
  },
})

export const { addRecord, deleteRecord } = commercialsSlice.actions


export default commercialsSlice.reducer