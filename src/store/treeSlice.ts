import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    expanded: [] as string[],
};


const treeSlice = createSlice({
    name: 'tree',
    initialState,
    reducers: {
        toggleNode(state, action) {
            const id = action.payload;
            state.expanded = state.expanded.includes(id)
                ? state.expanded.filter(i => i !== id)
                : [...state.expanded, id];
        }
    }
});


export const {toggleNode} = treeSlice.actions;
export default treeSlice.reducer;