// authSlice.js

import { loadState, saveState } from "@/utils/localStorage";
import { createSlice } from "@reduxjs/toolkit";

const savedState = loadState();

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuthenticated: savedState?.token ? true : false,
    user: savedState?.user || null,
    token: savedState?.token || null,
    error: null,
  },
  reducers: {
    login: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.error = null;
      saveState(action.payload.user, action.payload.token); // Save user and token to localStorage
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      state.token = null;
      state.error = null;
      localStorage.removeItem("auth"); // Clear data from localStorage on logout
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { login, logout, setError } = authSlice.actions;
export const authReducers = authSlice.reducer;
