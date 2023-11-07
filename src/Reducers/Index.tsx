import { ADD_TASK, DELETE_TASK } from "../Actions/Index";

const initialState = {
  items: [],
};

const Index = (state = initialState, action: any) => {
  switch (action.type) {
    case "ADDTASK":
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    case "DELETETASK":
      const updatedList = state.items.filter((_, i) => i !== action.payload);
      return {
        ...state,
        items: updatedList,
      };
    default:
      return state;
  }
};

export default Index;
