import { cycleConstants } from "../cycle.constants";
import { endpoints, API } from "~/constants/api";
import { message } from "antd";

// Удаление цикла
export const deleteCycle = (cycle_id: number) => {
  const request = () => ({ type: cycleConstants.DELETE_CYCLE_REQUEST });
  const success = () => ({ type: cycleConstants.DELETE_CYCLE_SUCCESS });
  const failure = (message: string) => ({ type: cycleConstants.DELETE_CYCLE_FAILURE, message });

  return async function (dispatch: Function) {
    dispatch(request());
    try {
      const result: any = await API.delete(`${endpoints.cycle.delete}${cycle_id}`);
      result?.message && message.success(result?.message);
      dispatch(success());
    } catch (err) {
      message.error(`Ошибка ${err.message}`);
      dispatch(failure(err.message));
    }
  };
};
