export const reducer = (state, action) => {
  switch (action.type) {
    case 'add':
      return [
        ...state,
        {
          id: action.id,
          value: action.value,
        }
      ];
    case 'remove':
      return state.filter((item) => item.id !== action.id);
    default:
      throw new Error();
  }
};

export default reducer;
