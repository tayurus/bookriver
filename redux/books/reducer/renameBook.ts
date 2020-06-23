export const renameBookRequest = (state: any, action: any) => ({
  ...state,
  loading: true,
});
export const renameBookSuccess = (state: any, action: any) => ({
  ...state,
  loading: false,
});

export const renameBookFailure = (state: any, action: any) => ({
  ...state,
  message: action.message,
  loading: false,
});
