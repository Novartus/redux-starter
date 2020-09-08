import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";

// Export all individual creators
let lastId = 0;

const slice = createSlice({
  name: "bugs",
  initialState: [],
  reducers: {
    bugAdded: (bugs, action) => {
      bugs.push({
        id: ++lastId,
        description: action.payload.description,
        resolved: false,
      });
    },

    bugRemoved: (bugs, action) => {
      bugs.map((bug) =>
        bug.id !== action.payload.id ? bug : { ...bug, resolved: true }
      );
    },

    bugResolved: (bugs, action) => {
      const index = bugs.findIndex((bug) => bug.id === action.payload.id);
      bugs[index].resolved = true;
    },

    bugAssignedToUser: (bugs, action) => {
      const { bugId, userId } = action.payload;
      const index = bugs.findIndex((bug) => bug.id === bugId);
      bugs[index].userId = userId;
    },
  },
});

export const {
  bugAdded,
  bugRemoved,
  bugResolved,
  bugAssignedToUser,
} = slice.actions;
export default slice.reducer;

// Selector Function
// Memorization
export const getUnresolvedBugs = createSelector(
  // if state is changed that it is not going to be executed
  (state) => state.entities.bugs,
  (state) => state.entities.projects, //another state
  (bugs, projects) => bugs.filter((bug) => !bug.resolved)
);

export const getBugsByUser = (userId) =>
  createSelector(
    (state) => state.entities.bugs,
    (bugs) => bugs.filter((bug) => bug.userId === userId)
  );

// // Actions
// export const bugAdded = createAction("bugAdded");
// export const bugRemoved = createAction("bugRemoved");
// export const bugResolved = createAction("bugResolved");
// export const bugUpdated = createAction("bugUpdated");

// //Reducer
// let lastId = 0;

// export default createReducer([], {
//   [bugAdded.type]: (bugs, action) => {
//     //   bugAdded: (bugs, action) => {
//     bugs.push({
//       id: ++lastId,
//       description: action.payload.description,
//       resolved: false,
//     });
//   },

//   [bugResolved.type]: (bugs, action) => {
//     const index = bugs.findIndex((bug) => bug.id === action.payload.id);
//     bugs[index].resolved = true;
//   },

//   [bugRemoved.type]: (state, action) => {
//     state.map((bug) =>
//       bug.id !== action.payload.id ? bug : { ...bug, resolved: true }
//     );
//   },
// });
