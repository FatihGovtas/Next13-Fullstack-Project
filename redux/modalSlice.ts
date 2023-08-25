import { createSlice } from '@reduxjs/toolkit'

// Define a type for the slice state
interface ModalState {
  registerModal: boolean;
  loginModal: boolean;
  elementModal: boolean;
}

// Define the initial state using that type
const initialState: ModalState = {
  registerModal: false,
  loginModal: false,
  elementModal: false,
}

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    registerModalFunc: (state) => {
      state.registerModal = !state.registerModal;
    },
    loginModalFunc: (state) => {
        state.loginModal = !state.loginModal;
    },
    elementModalFunc: (state) => {
      state.elementModal = !state.elementModal;
    },
  },
})

export const { registerModalFunc, loginModalFunc, elementModalFunc } = modalSlice.actions

export default modalSlice.reducer