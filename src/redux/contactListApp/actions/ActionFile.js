export const ADD_CONTACT = "ADD_CONTACT";

export const addContact = (payload) => {
  return {
    type: ADD_CONTACT,
    payload,
  };
};
