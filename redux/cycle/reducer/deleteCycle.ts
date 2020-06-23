export const deleteCycleRequest = (state: any, action: any) => ({
  ...state,
  loading: true,
});
export const deleteCycleSuccess = (state: any, action: any) => ({
  ...state,
  loading: false,
});

export const deleteCycleFailure = (state: any, action: any) => ({
  ...state,
  loading: false,
});
