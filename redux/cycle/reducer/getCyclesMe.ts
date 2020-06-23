export const getCyclesMeRequest = (state: any, action: any) => {
  return {
    ...state,
    loading: true,
  };
};
export const getCyclesMeSuccess = (state: any, action: any) => {
  return {
    ...state,
    cycles: action.cycles,
    message: "",
    loading: false,
  };
};

export const getCyclesMeFailure = (state: any, action: any) => {
  return {
    ...state,
    message: action.message,
    loading: false,
  };
};
