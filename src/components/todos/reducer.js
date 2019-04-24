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
    default:
      throw new Error();
  }
};

export default reducer;
