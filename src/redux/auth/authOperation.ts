import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://magazine-app-backend.vercel.app/";

interface Credentials {
  email: string;
  password: string;
}

export const register = createAsyncThunk(
  "auth/register",
  async (credentials: Credentials, thunkAPI) => {
    try {
      const response = await axios.post("/users/register", credentials);
      console.log(response);

      return response.data;
    } catch (error) {
      alert("Signup failed try again.");
      return thunkAPI.rejectWithValue((error as Error).message);
    }
  }
);

export const login = createAsyncThunk(
  "auth/login",
  async (credentials: Credentials, thunkAPI) => {
    try {
      const response = await axios.post("/users/login", credentials, {
        withCredentials: true,
      });
      console.log(response.data);

      return response.data.data;
    } catch (error) {
      alert("Login failed try again.");
      return thunkAPI.rejectWithValue((error as Error).message);
    }
  }
);

export const logout = createAsyncThunk("auth/logout", async (id, thunkAPI) => {
  try {
    await axios.get(`/users/logout/${id}`, { withCredentials: true });
  } catch (error) {
    return thunkAPI.rejectWithValue((error as Error).message);
  }
});

export const refreshUser = createAsyncThunk(
  "auth/refresh",
  async (id, thunkAPI) => {
    try {
      const response = await axios.get(`/users/current/${id}`, {
        withCredentials: true,
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue((error as Error).message);
    }
  }
);
