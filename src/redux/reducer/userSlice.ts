import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  user: {isLoggedIn: false},
};

const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    signIn: (state, action) => {
      state.user = {...state.user, ...action.payload, isLoggedIn: true};
    },
  },
});

export const {signIn} = userSlice.actions;
export default userSlice.reducer;
