import { cycleConstants } from "./../cycle.constants";
import { endpoints, API } from "~/constants/api";
import { message } from "antd";

//////////////////// ПОЛУЧЕНИЕ СВОИХ ЦИКЛОВ //////////////////////
export const getCyclesMe = () => {
  const request = () => ({ type: cycleConstants.GET_CYCLES_REQUEST });
  const success = (cycles) => ({ type: cycleConstants.GET_CYCLES_SUCCESS, cycles });
  const failure = (message: string) => ({ type: cycleConstants.GET_CYCLES_FAILURE, message });

  return async function (dispatch: Function) {
    dispatch(request());
    try {
      const cycles = await API.get(endpoints.cycle.getMy);
      dispatch(success(cycles));
    } catch (err) {
      message.error(err.message);
      dispatch(failure(err.message));
    }
  };
};
