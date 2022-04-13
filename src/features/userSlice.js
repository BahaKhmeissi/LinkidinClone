import {  createSlice } from '@reduxjs/toolkit';


export const userSlice = createSlice({
  name: "user",
  initialState:{
    user:null,
  },
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    login: (state,action) => {
    
      state.user=action.payload;
    },
  
    // Use the PayloadAction type to declare the contents of `action.payload`
    logout: (state) => {
      state.user = null;
    },
  },
  // The `extraReducers` field lets the slice handle actions defined elsewhere,
  // including actions generated by createAsyncThunk or in other slices.
 
});

export const { login,logout } = userSlice.actions;


export const selectUser = (state) => state.user.user;

export default userSlice.reducer;
