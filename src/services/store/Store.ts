"use client";
import { createStore, combineReducers } from "redux";
import demoReducer from "../reducer/demo.reducer";

const combinedReducer = combineReducers({
  demoReducer: demoReducer,
});

const Store = () => {
  let initialState = {};
  //some code to modify intialState

  return createStore(combinedReducer, initialState);
};

export default Store;
