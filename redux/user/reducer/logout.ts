export const logoutRequest = (state: Record<string, any>, action: any) => ({
  ...state,
  loading: true,
});

export const logoutSuccess = (state: Record<string, any>, action: any) => ({
  ...state,
  loading: false,
  user: {},
});

export const logoutFailure = (state: Record<string, any>, action: any) => ({
  ...state,
  loading: false,
  message: action.message,
});
