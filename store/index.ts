import { configureStore, combineReducers } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
  // userReducer,
  // [userAPI.reducerPath]: userAPI.reducer
})

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat() // concat(userAPI.middleware)
  })
}

export const store = setupStore()


export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
