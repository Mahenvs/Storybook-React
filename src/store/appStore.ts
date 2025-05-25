export const initialState = {
  data: [],
  error: false,
  loading: false,
};
type Action<T = any> = {
  type: string;
  payload?: T;
};
export function reducer(state: typeof initialState, action: Action) {
  switch (action.type) {
    case "FETCH_START":
      return { ...state, loading: true };
      break;
    case "FETCH_SUCCESS":
      return { data: action.payload, loading: false };
      break;
    case "FETCH_ERROR":
      return { ...state, loading: false };
      break;
    default:
      return state;
  }
}
