import { configureStore } from '@reduxjs/toolkit'
import usuario from "../modules/home/reducers/index"

export const store = configureStore({
    reducer: {
        usuario
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch