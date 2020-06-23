export const changeChapterIndexRequest = (state: any, action: any) => ({
  ...state,
  loading: true,
});
export const changeChapterIndexSuccess = (state: any, action: any) => ({
  ...state,
  loading: false,
});

export const changeChapterIndexFailure = (state: any, action: any) => ({
  ...state,
  message: action.message,
  loading: false,
});
