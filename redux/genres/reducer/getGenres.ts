export const getGenresRequest = (state: any, action: any) => ({
  ...state,
  loading: true,
});
export const getGenresSuccess = (state: any, action: any) => ({
  ...state,
  genres: action.genres,
  message: "",
  loading: false,
});

export const getGenresFailure = (state: any, action: any) => ({
  ...state,
  message: action.message,
  loading: false,
});
