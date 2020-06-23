export const createChapterRequest = (state: any, action: any) => ({
  ...state,
  loading: true,
});
export const createChapterSuccess = (state: any, action: any) => ({
  ...state,
  loading: false,
});

export const createChapterFailure = (state: any, action: any) => ({
  ...state,
  message: action.message,
  loading: false,
});
