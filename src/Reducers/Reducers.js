export function TableReducer(state = { data: "" }, action) {
  switch (action.type) {
    case "TABLE_DATA":
      return {
        ...state,
        data: action.data,
      };
    default:
      return state;
  }
}
