import { ADD_CONTACT } from "../actions/ActionFile";

const initialState = [
  { id: 1, name: "Joy Mohanta", email: "joy@gmail.com" },
  { id: 2, name: "Roy Raju", email: "roy@gmail.com" },
  { id: 3, name: "Anu Sing", email: "anu@yahoo.com" },
  { id: 4, name: "Rifat Roy", email: "rifat@gmail.com" },
];

export const operationsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CONTACT:
      return [...state, action.payload];
    default:
      return state;
  }
};
