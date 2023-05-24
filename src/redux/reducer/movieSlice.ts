import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {getPopularMovie} from './../../api';

type MovieType = {title: string; id: number; poster_path: string};
type ParamType = {language: string; page: number};

interface MoviesState {
  movies: MovieType[];
  loading: boolean;
  error: string | null;
}
export const fetchPopularMovie = createAsyncThunk<MovieType[], ParamType>(
  'movieSlice/fetchMovie',
  async (params: ParamType, thunkAPI) => {
    try {
      const response = getPopularMovie(params)
        .then(res => {
          return res?.data?.results;
        })
        .catch(err => {
          console.log(err);
          return thunkAPI.rejectWithValue('Failed to fetch popular movie.');
        });
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue('Failed to fetch popular movie.');
    }
  },
);

const initialState: MoviesState = {
  movies: [],
  loading: false,
  error: null,
};

export const movieSlice = createSlice({
  name: 'movieSlice',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchPopularMovie.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPopularMovie.fulfilled, (state, action) => {
        state.loading = false;
        state.movies = action.payload;
      })
      .addCase(fetchPopularMovie.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Something went wrong';
      });
  },
});

export default movieSlice.reducer;
