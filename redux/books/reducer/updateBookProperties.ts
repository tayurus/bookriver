export const updateBookPropertiesRequest = (state: any, action: any) => ({
  ...state,
  loading: true,
});
export const updateBookPropertiesSuccess = (state: any, action: any) => ({
  ...state,
  loading: false,
});

export const updateBookPropertiesFailure = (state: any, action: any) => ({
  ...state,
  message: action.message,
  loading: false,
});
