export const sendProviderConnectCodeRequest = (state: Record<string, any>, action: any) => {
  return {
    ...state,
    loading: true,
    message: "",
  };
};

export const sendProviderConnectCodeSuccess = (state: Record<string, any>, action: any) => {
  return {
    ...state,
    loading: false,
    message: "",
  };
};

export const sendProviderConnectCodeFailure = (state: Record<string, any>, action: any) => {
  return { ...state, message: action.message, loading: false };
};
