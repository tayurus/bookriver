export const resetRequest = (state: Record<string, any>, action: any) => ({
  ...state,
  loading: true,
});

export const resetSuccess = (state: Record<string, any>, action: any) => ({
  ...state,
  loading: false,
  user: {},
});

export const resetFailure = (state: Record<string, any>, action: any) => ({
  ...state,
  loading: false,
  message: action.message,
});
