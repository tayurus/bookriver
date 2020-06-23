export const changeCompleteStatusBookRequest = (state: any, action: any) => ({
  ...state,
  loading: true,
});
export const changeCompleteStatusBookSuccess = (state: any, action: any) => ({
  ...state,
  loading: false,
});

export const changeCompleteStatusBookFailure = (state: any, action: any) => ({
  ...state,
  message: action.message,
  loading: false,
});
