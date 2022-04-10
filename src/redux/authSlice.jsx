import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  createUserWithEmailAndPassword,
  updateCurrentUser,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "../config/firebase";

//first start with an empty object
const initialState = {
  name: "",
  email: "",
  password: "",
};
//create Thunk

export const register = createAsyncThunk(
  "auth/register",
  async ({ name, email, password }) => {
    await createUserWithEmailAndPassword(auth, email, password);
    updateCurrentUser(auth, { displayName: name });
  }
);
export const login = createAsyncThunk(
  "auth/login",
  async ({ email, password }) => {
    await signInWithEmailAndPassword(auth, email, password);
  }
);

export const singOut = createAsyncThunk("auth/singOut", async () => {
  await signOut(auth);
});

//create the slice

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    //reducer for signUp
    changeName: (state, action) => {
      state.name = action.payload;
    },
    changeEmail: (state, action) => {
      state.email = action.payload;
    },
    changePassword: (state, action) => {
      state.password = action.payload;
    },
  },
});

export const { changeName, changeEmail, changePassword } = authSlice.actions;

export default authSlice.reducer;
