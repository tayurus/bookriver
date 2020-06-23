export const getCommentsRequest = (state: any, action: any) => ({
  ...state,
  loading: true,
});
export const getCommentsSuccess = (state: any, action: any) => ({
  ...state,
  loading: false,
  comments: action.comments,
});

export const getCommentsFailure = (state: any, action: any) => ({
  ...state,
  message: action.message,
  loading: false,
});
