export const createCycleRequest = (state: any, action: any) => ({
  ...state,
  loading: true,
});
export const createCycleSuccess = (state: any, action: any) => ({
  ...state,
  loading: false,
});

export const createCycleFailure = (state: any, action: any) => ({
  ...state,
  loading: false,
});
