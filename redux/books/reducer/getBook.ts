export const getBookRequest = (state: any, action: any) => ({
  ...state,
  loading: true,
});
export const getBookSuccess = (state: any, action: any) => ({
  ...state,
  currentBook: action["currentBook"],
  loading: false,
});

export const getBookFailure = (state: any, action: any) => ({
  ...state,
  message: action.message,
  loading: false,
});
