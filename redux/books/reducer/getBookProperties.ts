export const getBookPropertiesRequest = (state: any, action: any) => ({
  ...state,
  loading: true,
});
export const getBookPropertiesSuccess = (state: any, action: any) => ({
  ...state,
  currentBookProperties: action["currentBookProperties"],
  loading: false,
});

export const getBookPropertiesFailure = (state: any, action: any) => ({
  ...state,
  message: action.message,
  loading: false,
});
