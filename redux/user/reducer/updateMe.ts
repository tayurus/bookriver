export const updateMeRequest = (state: Record<string, any>, action: any) => ({
  ...state,
  loading: true,
});

export const updateMeSuccess = (state: Record<string, any>, action: any) => ({
  ...state,
  loading: false,
  user: {},
});

export const updateMeFailure = (state: Record<string, any>, action: any) => ({
  ...state,
  loading: false,
  message: action.message,
});
