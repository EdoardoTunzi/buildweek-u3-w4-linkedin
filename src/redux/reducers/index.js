const initialState = {
  user: null,
  render: false
};
const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_USER":
      //azione da svolgere
      return {
        ...state,
        user: action.payload
      };
    case "MOD_USER":
      return {
        ...state,
        user: action.payload
      };
    case "RENDER_COMPONENTS":
      return {
        ...state,
        render: !state.render
      };

    default:
      return state;
  }
};

export default mainReducer;
