import { createSlice, } from "@reduxjs/toolkit";

interface TreeState {
  expanded: Record<number, string | null>;
}

const initialState: TreeState = {
  expanded: {}
};

const treeSlice = createSlice({
  name: "tree",
  initialState,
  reducers: {
    toggleNode: (
      state,
    //   action: PayloadAction<{ level: number; id: string }>
    ) => {
    //   const { level, id } = action.payload;

    //   state.expanded[level] =
    //     state.expanded[level] === id ? null : id;

    //   Object.keys(state.expanded).forEach(lvl => {
    //     if (Number(lvl) > level) delete state.expanded[Number(lvl)];
    //   });
    }
  }
});

export const { toggleNode } = treeSlice.actions;
export default treeSlice.reducer;
