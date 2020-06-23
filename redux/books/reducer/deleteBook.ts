export const deleteBookRequest = (state: any, action: any) => ({
  ...state,
  loading: true,
});
export const deleteBookSuccess = (state: any, action: any) => ({
  ...state,
  loading: false,
});

export const deleteBookFailure = (state: any, action: any) => ({
  ...state,
  message: action.message,
  loading: false,
});
