export const getChaptersByBookIDRequest = (state: any, action: any) => ({
  ...state,
  loading: true,
});
export const getChaptersByBookIDSuccess = (state: any, action: any) => ({
  ...state,
  loading: false,
  bookChapters: action.chapters,
});

export const getChaptersByBookIDFailure = (state: any, action: any) => ({
  ...state,
  message: action.message,
  loading: false,
});
