import { configureStore } from '@reduxjs/toolkit'
import todoReducer from './features/todoList'
import textReducer from './features/textForm'
import{ saveToLocalStorage, loadFromLocalStorage} from './helpers/helpers'



export const store = configureStore({
  reducer: {
    todoList: todoReducer,
    textForm: textReducer
  },
  preloadedState: loadFromLocalStorage()
})

store.subscribe(() => saveToLocalStorage(store.getState()))

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch