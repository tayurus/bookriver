export const getProviderLoginURLRequest = (state: Record<string, any>, action: any) => {
  return {
    ...state,
    loading: true
  };
};

export const getProviderLoginURLSuccess = (state: Record<string, any>, action: any) => {
  return {
    ...state,
    loading: false,
    providerUrl: action.url
  };
};

export const getProviderLoginURLFailure = (state: Record<string, any>, action: any) => {
  return { ...state, loading: false, message: action.message };
};
