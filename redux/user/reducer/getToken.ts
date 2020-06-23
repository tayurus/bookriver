export const getTokenRequest = (state: Record<string, any>, action: any) => ({
  ...state,
  loading: true,
  message: "",
});

export const getTokenSuccess = (state: Record<string, any>, action: any) => ({
  ...state,
  loading: false,
  message: "",
});

export const getTokenFailure = (state: Record<string, any>, action: any) => ({
  ...state,
  message: action.message,
  loading: false,
});
