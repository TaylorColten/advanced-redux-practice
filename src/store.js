import React from "react";
import { creatStore } from "redux";
import state from "./state";
import reducers from "./reducers";

export default creatStore(state,reducer);
