export const editChapterRequest = (state: any, action: any) => ({
  ...state,
  loading: true,
});
export const editChapterSuccess = (state: any, action: any) => ({
  ...state,
  loading: false,
});

export const editChapterFailure = (state: any, action: any) => ({
  ...state,
  message: action.message,
  loading: false,
});
