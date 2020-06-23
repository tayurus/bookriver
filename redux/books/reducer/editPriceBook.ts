export const editPriceBookRequest = (state: any, action: any) => {
  return {
    ...state,
    loading: true
  };
};
export const editPriceBookSuccess = (state: any, action: any) => {
  return {
    ...state,
    loading: false
  };
};

export const editPriceBookFailure = (state: any, action: any) => {
  return {
    ...state,
    message: action.message,
    loading: false
  };
};
