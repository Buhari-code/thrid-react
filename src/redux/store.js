import {configureStore} from '@reduxjs/toolkit'
import FormSlice from './slice'

export const store = configureStore ({
    reducer: {
        userData : FormSlice
    }
})