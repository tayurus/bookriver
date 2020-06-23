export const addCommentRequest = (state: any, action: any) => ({
  ...state,
  loading: true,
});
export const addCommentSuccess = (state: any, action: any) => ({
  ...state,
  loading: false,
});

export const addCommentFailure = (state: any, action: any) => ({
  ...state,
  message: action.message,
  loading: false,
});
