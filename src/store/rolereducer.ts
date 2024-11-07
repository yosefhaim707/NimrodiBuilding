//FILL HERE 3.2 V


import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import roles from '../data/roles.json';


interface RoleState {
    role: string;
}

const initialState: RoleState = {
    role: roles[0]
};

const roleReducer = createSlice({
    name: 'role',
    initialState,
    reducers: {
        setRole: (state, actions: PayloadAction<string>): void => {
            state.role = actions.payload;
        }
    }
});

export const { setRole } = roleReducer.actions;
export default roleReducer;