import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
// import { ToDo } from '../models/todo-item'

export interface textState {
  text: string
}

const initialState: textState = {
  text: ''
}

export const textSlice = createSlice({
  name: 'textForm',
  initialState,
  reducers: {
    updateAction: (state, action: PayloadAction<string>) => {

        state.text = action.payload
        console.log(action.payload)
    },
  },
})


export const { updateAction} = textSlice.actions

export default textSlice.reducer


