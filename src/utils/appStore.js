import { configureStore } from "@reduxjs/toolkit";
import userReducer from './userSlice.js';
import dashboardReducer from './dashboardSlice.js';

const appStore = configureStore({
  reducer: {
    user: userReducer,
    dashboard: dashboardReducer
  }
});

export default appStore;