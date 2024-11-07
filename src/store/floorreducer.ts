//FILL HERE 3.1 V

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import data from '../data/building.json'
import Floor from '../types/Floor'


interface FloorState {
    floors: Floor[];
    isAllowed: boolean[];
}

const initialState: FloorState = {
    floors: data as Floor[],
    isAllowed: [false, false, false, false, false]
};

const floorReducer = createSlice({
    name: 'floors',
    initialState,
    reducers: {
        changeAccess: (state, actions: PayloadAction<number>): void => {
            const currentFloor = state.isAllowed[actions.payload -1]
            if (currentFloor) {
                state.isAllowed[actions.payload -1] = false;
                return;
            }
            state.isAllowed[actions.payload -1] = true;
            return;
        }
    }
})

export const { changeAccess } = floorReducer.actions;
export default floorReducer;
