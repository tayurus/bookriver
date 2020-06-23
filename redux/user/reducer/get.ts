export const getRequest = (state: Record<string, any>, action: any) => ({
  ...state,
  loading: true,
});

export const getSuccess = (state: Record<string, any>, action: any) => ({
  ...state,
  loading: false,
  currentUser: action.userInfo,
});

export const getFailure = (state: Record<string, any>, action: any) => ({
  ...state,
  loading: false,
  message: action.message,
});
