export const changePublishStatusBookRequest = (state: any, action: any) => ({
  ...state,
  loading: true,
});
export const changePublishStatusBookSuccess = (state: any, action: any) => ({
  ...state,
  loading: false,
});

export const changePublishStatusBookFailure = (state: any, action: any) => ({
  ...state,
  message: action.message,
  loading: false,
});
