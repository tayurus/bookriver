export const getBookLogRequest = (state: any, action: any) => ({
  ...state,
  loading: true,
});
export const getBookLogSuccess = (state: any, action: any) => ({
  ...state,
  currentBookLog: action["currentBookLog"],
  loading: false,
});

export const getBookLogFailure = (state: any, action: any) => ({
  ...state,
  message: action.message,
  loading: false,
});
