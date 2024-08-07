import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Userstate {
  id: number;
  name: string;
  email: string;
  provider: Provider | null;
  token: string;
}

enum Provider {
  CREDENTIALS,
  GOOGLE,
}

const initialState: Userstate = {
  id: 0,
  name: '',
  email: '',
  provider: null,
  token: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginAction: (state, action: PayloadAction<Userstate>) => {
      state.id = action.payload.id;
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.provider = action.payload.provider;
      state.token = action.payload.token;
    },

    logoutAction: (state) => {
      state.id = 0;
      state.name = '';
      state.email = '';
      state.provider = null;
    },
  },
});

export const { loginAction, logoutAction } = userSlice.actions;
export default userSlice.reducer;
