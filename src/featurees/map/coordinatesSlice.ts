import {createSlice} from '@reduxjs/toolkit';
import {RootState} from '../../app/store';
import {register} from './coordinatesThunks';

interface UsersState {
  coordinates: number[][]
}

const initialState: UsersState = {
  coordinates: [],
};

export const coordinatesSlice = createSlice({
  name: 'coordinates',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(register.pending, (state) => {

    });
    builder.addCase(register.fulfilled, (state, {payload: user}) => {

    });
    builder.addCase(register.rejected, (state, {payload: error}) => {

    });

  }
});

export const coordinatesReducer = coordinatesSlice.reducer;
export const selectCoordinates = (state: RootState) => state.coordinates.coordinates;