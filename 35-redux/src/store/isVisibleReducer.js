const initialState = { boolean: true };

const isVisibleReducer = (state = initialState, action) => {
  // 나중에 구분 해주기 위해서 헷갈리지 않게
  if (action.type === 'isVisible/change') {
    return { boolean: !state.boolean };
  }
  return state.boolean;
};

export default isVisibleReducer;
