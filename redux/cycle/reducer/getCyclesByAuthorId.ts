export const getCyclesByAuthorIdRequest = (state: any, action: any) => {
  return {
    ...state,
    loading: true,
  };
};
export const getCyclesByAuthorIdSuccess = (state: any, action: any) => {
  return {
    ...state,
    cycles: action.cycles,
    message: "",
    loading: false,
  };
};

export const getCyclesByAuthorIdFailure = (state: any, action: any) => {
  return {
    ...state,
    message: action.message,
    loading: false,
  };
};
