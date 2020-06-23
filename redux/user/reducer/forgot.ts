export const forgotRequest = (state: Record<string, any>, action: any) => ({
  ...state,
  loading: true,
  message: "",
});

export const forgotSuccess = (state: Record<string, any>, action: any) => ({
  ...state,
  loading: false,
  message: "",
});

export const forgotFailure = (state: Record<string, any>, action: any) => ({
  ...state,
  message: action.message,
  loading: false,
});
