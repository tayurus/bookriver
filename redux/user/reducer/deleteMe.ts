export const deleteMeRequest = (state: Record<string, any>, action: any) => ({
  ...state,
  loading: true,
  message: "",
});

export const deleteMeSuccess = (state: Record<string, any>, action: any) => ({
  ...state,
  loading: false,
  message: "",
  user: {},
});

export const deleteMeFailure = (state: Record<string, any>, action: any) => ({
  ...state,
  message: action.message,
  loading: false,
});
