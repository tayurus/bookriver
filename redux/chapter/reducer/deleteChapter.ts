export const deleteChapterRequest = (state: any, action: any) => {
  return {
    ...state,
    loading: true,
  };
};
export const deleteChapterSuccess = (state: any, action: any) => {
  return {
    ...state,
    loading: false,
  };
};

export const deleteChapterFailure = (state: any, action: any) => {
  return {
    ...state,
    message: action.message,
    loading: false,
  };
};
