import { configureStore } from "@reduxjs/toolkit";
import { authReducers } from "./features/auth/authSlice";  // Import the correct reducer

export const makeStore = () => {
  return configureStore({
    reducer: {
      auth: authReducers,  // Use the reducer here, not the entire slice
    },
  });
};
