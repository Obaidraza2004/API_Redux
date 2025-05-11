import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUsers = createAsyncThunk(
  "users/fetchUsers",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get("https://dummyjson.com/products");
      console.log("response----", response);
      return response.data;
    } catch (error) {
      console.log("error----", error);
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);

const usersSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
    loader: false,
    status: "idle",
    errorMsg: null,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.status = "api calling";
      state.loader = true;
      state.errorMsg = null;
    });
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.status = "fulfilled";
      state.loader = false;
      state.users = action.payload;
      state.errorMsg = null;
    });
    builder.addCase(fetchUsers.rejected, (state) => {
      state.loader = false;
      state.errorMsg = "Api Is Not Working!";
    });
  },
});

export default usersSlice.reducer;
