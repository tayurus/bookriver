export const sendProviderLoginCodeRequest = (state: Record<string, any>, action: any) => {
  return {
    ...state,
    loading: true,
    message: ""
  };
};

export const sendProviderLoginCodeSuccess = (state: Record<string, any>, action: any) => {
  return {
    ...state,
    loading: false,
    message: ""
  };
};

export const sendProviderLoginCodeFailure = (state: Record<string, any>, action: any) => {
  return { ...state, message: action.message, loading: false };
};
