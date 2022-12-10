import { ADD_CONTACT, DELETE_CONTACT } from "../actions/ActionFile";

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
    case DELETE_CONTACT:
      const filteredContact = state.filter(
        (contact) => contact.id !== action.payload
      );
      return filteredContact;
    default:
      return state;
  }
};
