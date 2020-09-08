//Currying
// Order is required Store, Next, Action
const logger = (params) => (store) => (next) => (action) => {
  console.log("Logging:", params);
  //   console.log("Store:", store);
  //   console.log("Next:", next);
  //   console.log("Action:", action);
  next(action);
  // required to call next otherwise middleware won't pass it
};

export default logger;
