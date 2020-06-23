export const disconnectProviderRequest = (state: Record<string, any>, action: any) => ({
  ...state,
  loading: true,
});

export const disconnectProviderSuccess = (state: Record<string, any>, action: any) => ({
  ...state,
  loading: false,
});

export const disconnectProviderFailure = (state: Record<string, any>, action: any) => ({
  ...state,
  loading: false,
  message: action.message,
});
