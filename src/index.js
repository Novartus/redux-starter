import configStore from "./Store/configStore";
// import {
//   bugAdded,
//   bugRemoved,
//   bugResolved,
//   getUnresolvedBugs,
//   bugAssignedToUser,
//   getBugsByUser,
// } from "./Store/bugs";
// import { projectAdded } from "./Store/projects";
// import { userAdded } from "./Store/users";

const store = configStore();
store.subscribe(() => {
  console.log("Store Changed");
});

store.dispatch((dispatch, getState) => {
  dispatch({ type: "bugsReceived", bugs: [1, 2, 3] });
});

store.dispatch({
  type: "error",
  payload: {
    message: "Error Testing",
  },
});
// store.dispatch(userAdded({ name: "User 2" }));

// store.dispatch(bugAdded({ description: "Bug One" }));
// store.dispatch(bugAdded({ description: "Bug Two" }));
// store.dispatch(bugAdded({ description: "Bug Three" }));
// store.dispatch(bugResolved({ id: 2 }));
// store.dispatch(bugRemoved({ id: 3 }));

// store.dispatch(bugAssignedToUser({ bugId: 1, userId: 1 }));

// store.dispatch(projectAdded({ name: "Project One" }));
// store.dispatch(projectAdded({ name: "Project Two" }));

// console.log("getUnresolvedBugs:", getUnresolvedBugs(store.getState()));
// const bugs = getBugsByUser(1)(store.getState());
// console.log(bugs);
