import React from "react";
import { createStore } from "redux";
import state from "./state";
import reducers from "./reducers";

const store = createStore ( state,reducer );

export default store;
