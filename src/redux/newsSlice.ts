import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";
import axios from "axios";

export enum Status {
  LOADING = "loading",
  SUCCESS = "completed",
  ERROR = "error",
}

export type Comment = {
  id?: number;
  name: string;
  email: string;
  body: string;
};

export type News = {
  id: number;
  title: string;
  urlToImage: string;
  publishedAt: string;
  desciprtion: string;
  tag: string;
};

export interface NewsSliceState {
  items: News[];
  status: Status;
  currentPage: number;
}

const initialState: NewsSliceState = {
  items: [],
  status: Status.LOADING,
  currentPage: 0,
};

const API_KEY = "4aad02491df642609493fcfdd0d1593a";

export const fetchNews = createAsyncThunk<News[]>(
  "news/fetchNewsStatus",
  async (currentPage) => {
    const { data } = await axios.get<News[]>(
      `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${API_KEY}?limit=${10}`
    );
    return data;
  }
);

export const fetchComments = async (id: string) => {
  const { data } = await axios.get(
    `https://jsonplaceholder.typicode.com/comments?postId=${id}`
  );
  return data;
};

export const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    setItems(state, action: PayloadAction<News[]>) {
      state.items = action.payload;
    },
    setCurrentPage(state, action: PayloadAction<number>) {
      state.currentPage = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchNews.pending, (state, action) => {
      state.status = Status.LOADING;
      state.items = [];
    });

    builder.addCase(fetchNews.fulfilled, (state, action) => {
      state.items = action.payload;
      state.status = Status.SUCCESS;
    });

    builder.addCase(fetchNews.rejected, (state, action) => {
      state.status = Status.ERROR;
      state.items = [];
    });
  },
});

export const selectNewsData = (state: RootState) => state.newsSlice;

export const { setItems, setCurrentPage } = newsSlice.actions;

export default newsSlice.reducer;
