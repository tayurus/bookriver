import { cycleConstants } from "../cycle.constants";
import { endpoints, API } from "~/constants/api";
import { message } from "antd";

// СОЗДАНИЕ ЦИКЛА
export const createCycle = (name: string) => {
  const request = () => ({ type: cycleConstants.CREATE_CYCLE_REQUEST });
  const success = () => ({ type: cycleConstants.CREATE_CYCLE_SUCCESS });
  const failure = (message: string) => ({ type: cycleConstants.CREATE_CYCLE_FAILURE, message });

  return async function (dispatch: Function) {
    dispatch(request());
    try {
      const result: any = await API.post(`${endpoints.cycle.create}`, { name });
      result?.message && message.success(result?.message);
      dispatch(success());
    } catch (err) {
      message.error(`Ошибка ${err.message}`);
      dispatch(failure(err.message));
    }
  };
};
