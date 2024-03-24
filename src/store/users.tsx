import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface User {
  _id: Number;
  username: string;
  fullname: string;
  age: Number;
}

interface UsersState {
  listUser: User[];
}

const initialState: UsersState = {
  listUser: [],
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addUser(state, action: PayloadAction<User>) {
      state.listUser.push(action.payload);
    },
  },
});

export const {addUser} = usersSlice.actions;

export default usersSlice.reducer;
