import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type InitStateType = {
  modalOpen: Boolean
}

const initialState: InitStateType = {
  modalOpen: false,
}

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    toggleModal: (state, action: PayloadAction<Boolean>) => {
      state.modalOpen = action.payload
    },
  },
})

export default modalSlice.reducer
export const { toggleModal } = modalSlice.actions
