import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    gptSuggestions: null,
    showGptSearch: false,
  },
  reducers: {
    addGPTSuggestions: (state, action) => {
      state.gptSuggestions = action.payload;
    },
    toggleGptSearch: (state) => {
      state.showGptSearch = !state.showGptSearch;
    },
  },
});

export const { addGPTSuggestions, toggleGptSearch } = gptSlice.actions;
export default gptSlice.reducer;
