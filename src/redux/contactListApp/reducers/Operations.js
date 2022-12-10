import {
  ADD_CONTACT,
  DELETE_CONTACT,
  UPDATE_CONTACT,
} from "../actions/ActionFile";

const initialState = [
  { id: 1, name: "Joy Mohanta", email: "joy@gmail.com" },
  { id: 2, name: "Roy Raju", email: "roy@gmail.com" },
  { id: 3, name: "Anu Sing", email: "anu@yahoo.com" },
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
    case UPDATE_CONTACT:
      let data = action.payload;
      const updatedArray = [];
      state.map((item) => {
        if (item.id === data.id) {
          item.id = data.id;
          item.name = data.name;
          item.email = data.email;
        }
        updatedArray.push(item);
      });
      return updatedArray;
    default:
      return state;
  }
};
