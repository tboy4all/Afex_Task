import { legacy_createStore as createStore } from '@reduxjs/toolkit'
import AppReducer from '../store/redux/reducer/appReducer'

export const reduxStore = createStore(AppReducer)
