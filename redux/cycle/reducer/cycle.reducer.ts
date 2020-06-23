import { createReducer } from "@reduxjs/toolkit";
import { cycleConstants } from "../cycle.constants";
import { createCycleRequest, createCycleSuccess, createCycleFailure } from "./createCycle";
import { getCyclesMeRequest, getCyclesMeSuccess, getCyclesMeFailure } from "./getCyclesMe";
import { deleteCycleRequest, deleteCycleSuccess, deleteCycleFailure } from "./deleteCycle";
import {
  getCyclesByAuthorIdRequest,
  getCyclesByAuthorIdSuccess,
  getCyclesByAuthorIdFailure,
} from "./getCyclesByAuthorId";

const initialState = {
  cycles: [],
  loading: false,
  message: "",
};

export const cycleReducer = createReducer(initialState, {
  [cycleConstants.CREATE_CYCLE_REQUEST]: createCycleRequest,
  [cycleConstants.CREATE_CYCLE_SUCCESS]: createCycleSuccess,
  [cycleConstants.CREATE_CYCLE_FAILURE]: createCycleFailure,

  [cycleConstants.GET_CYCLES_REQUEST]: getCyclesMeRequest,
  [cycleConstants.GET_CYCLES_SUCCESS]: getCyclesMeSuccess,
  [cycleConstants.GET_CYCLES_FAILURE]: getCyclesMeFailure,

  [cycleConstants.DELETE_CYCLE_REQUEST]: deleteCycleRequest,
  [cycleConstants.DELETE_CYCLE_SUCCESS]: deleteCycleSuccess,
  [cycleConstants.DELETE_CYCLE_FAILURE]: deleteCycleFailure,

  [cycleConstants.GET_CYCLES_BY_AUTHOR_ID_REQUEST]: getCyclesByAuthorIdRequest,
  [cycleConstants.GET_CYCLES_BY_AUTHOR_ID_SUCCESS]: getCyclesByAuthorIdSuccess,
  [cycleConstants.GET_CYCLES_BY_AUTHOR_ID_FAILURE]: getCyclesByAuthorIdFailure,
});
