export const registerRequest = (state: Record<string, any>, action: any) => ({
  ...state,
  loading: true,
  message: "",
});

export const registerSuccess = (state: Record<string, any>, action: any) => ({
  ...state,
  loading: false,
  message: "",
});

export const registerFailure = (state: Record<string, any>, action: any) => ({
  ...state,
  message: action.message,
  loading: false,
});
