export const createBookRequest = (state: any, action: any) => ({
  ...state,
  loading: true,
});
export const createBookSuccess = (state: any, action: any) => ({
  ...state,
  loading: false,
});

export const createBookFailure = (state: any, action: any) => ({
  ...state,
  message: action.message,
  loading: false,
});
