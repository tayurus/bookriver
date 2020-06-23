export const confirmRequest = (state: Record<string, any>, action: any) => ({
  ...state,
  loading: true,
});

export const confirmSuccess = (state: Record<string, any>, action: any) => ({
  ...state,
  loading: false,
  user: {},
});

export const confirmFailure = (state: Record<string, any>, action: any) => ({
  ...state,
  loading: false,
  message: action.message,
});
