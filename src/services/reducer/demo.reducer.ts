"use client";
import demoState from "../states/demo.state";

interface Action {
  type: String;
}

function demoReducer(state = demoState, action: Action) {
  switch (action.type) {
    case "CONNECTED":
      return {
        ...state,
        connected: true,
      };
    default:
      return state;
  }
}

export default demoReducer;
