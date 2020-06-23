export const meRequest = (state: Record<string, any>, action: any) => ({
  ...state,
  loading: true,
  message: "",
});

export const meSuccess = (state: Record<string, any>, action: any) => ({
  ...state,
  loading: false,
  user: action.userInfo,
  message: "",
});

export const meFailure = (state: Record<string, any>, action: any) => ({
  ...state,
  message: action.message,
  loading: false,
});
