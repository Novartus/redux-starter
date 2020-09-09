import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import reducer from "./reducer";
import logger from "./middleware/logger";
import toast from "./middleware/toast";
import api from "./middleware/api";
// import func from "./middleware/func";

export default function configStore() {
  return configureStore({
    reducer: reducer,
    middleware: [
      ...getDefaultMiddleware(),
      logger({ testing: "Console" }),
      toast,
      api,
    ],
  });
}
