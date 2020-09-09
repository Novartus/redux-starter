import configStore from "./Store/configStore";
import { addBug, loadBugs, resolveBug, assignBugToUser } from "./Store/bugs";

const store = configStore();
store.subscribe(() => {
  console.log("Store Changed");
});

store.dispatch(loadBugs());
// store.dispatch(addBug({ description: "123" }));
store.dispatch(resolveBug(4));
store.dispatch(assignBugToUser(3, 4));
