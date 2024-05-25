import { createSlice } from "@reduxjs/toolkit";

const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState: {
    benefitAmtTotal: 0,
    citizensApprovedCount: 0,
    citizensDeniedCount: 0,
    plansCount: 0,
  },
  reducers: {
    addBenefitAmtTotal: (state, action) => {
      console.log("action.payload - " + action.payload);
      state.benefitAmtTotal = action.payload;
    },
    addCitizensApprovedCount: (state, action) => {
      state.citizensApprovedCount = action.payload;
    },
    addCitizensDeniedCount: (state, action) => {
      state.citizensDeniedCount = action.payload;
    },
    addPlansCount: (state, action) => {
      state.plansCount = action.payload;
    },
  }
});


export const { addBenefitAmtTotal, addCitizensApprovedCount, addCitizensDeniedCount, addPlansCount } = dashboardSlice.actions;
export default dashboardSlice.reducer;