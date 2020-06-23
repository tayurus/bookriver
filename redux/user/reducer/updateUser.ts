export const updateUserRequest = (state: Record<string, any>, action: any) => ({
  ...state,
  loading: true,
});

export const updateUserSuccess = (state: Record<string, any>, action: any) => ({
  ...state,
  loading: false,
  user: {},
});

export const updateUserFailure = (state: Record<string, any>, action: any) => ({
  ...state,
  loading: false,
  message: action.message,
});
