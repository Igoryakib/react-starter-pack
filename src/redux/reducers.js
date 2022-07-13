import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";


const items = createReducer([], {
    ['action/type']: (_, action) => action.payload,
});

export default items;