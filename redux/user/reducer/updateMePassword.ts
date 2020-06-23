export const updateMePasswordRequest = (state: Record<string, any>, action: any) => ({
  ...state,
  loading: true,
});

export const updateMePasswordSuccess = (state: Record<string, any>, action: any) => ({
  ...state,
  loading: false,
});

export const updateMePasswordFailure = (state: Record<string, any>, action: any) => ({
  ...state,
  loading: false,
  message: action.message,
});
