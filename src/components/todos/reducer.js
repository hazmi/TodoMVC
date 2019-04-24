export const reducer = (state, action) => {
  switch (action.type) {
    case 'add':
      return [
        ...state,
        {
          id: action.id,
          value: action.value,
          completed: false,
        }
      ];

    case 'remove':
      return state.filter(item => item.id !== action.id);

    case 'toggleCompleted':
      return state.map((item) => {
        if (item.id !== action.id) return item;

        return {
          ...item,
          completed: action.completed
        };
      });

    default:
      throw new Error();
  }
};

export default reducer;
