import { cycleConstants } from "./../cycle.constants";
import { endpoints, API } from "~/constants/api";
import { ICycle } from "~/types";

// ПОЛУЧЕНИЕ ЦИКЛОВ ПО ID АВТОРА
export const getCyclesByAuthorId = (id: number) => {
  const request = () => ({ type: cycleConstants.GET_CYCLES_REQUEST });
  const success = (cycles: ICycle[]) => ({ type: cycleConstants.GET_CYCLES_SUCCESS, cycles });
  const failure = (message: string) => ({ type: cycleConstants.GET_CYCLES_FAILURE, message });

  return async function (dispatch: Function) {
    dispatch(request());
    try {
      const cycles: any = await API.get(`${endpoints.cycle.getByAuthorId}${id}`);
      dispatch(success(cycles));
    } catch (err) {
      dispatch(failure(err.message));
    }
  };
};
