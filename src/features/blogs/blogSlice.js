import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const blogSlice = createSlice({
  name: 'blogs',
  initialState,
  reducers: {
    addblog: (state, action) => {
      state.push(action.payload);
    },
    showblog:(state,action)=>{
      const { id } = action.payload;
      return state.find(blog => blog.id === id);
    },
    editblog: (state, action) => {
      const { id, title, category,content } = action.payload;
      const existingblog = state.find(blog => blog.id === id);
      if(existingblog) {
        existingblog.title = title;
        existingblog.category = category;

        existingblog.content = content;
      }
    },
    deleteblog: (state, action) => {
      const { id } = action.payload;
      const existingblog = state.find(blog => blog.id === id);
      if(existingblog) {
        return state.filter(blog => blog.id !== id);
      }
    }
  }
});

export const { addblog, editblog, deleteblog,showblog } = blogSlice.actions;
export default blogSlice.reducer;