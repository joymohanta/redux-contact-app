export const ADD_CONTACT = "ADD_CONTACT";
export const DELETE_CONTACT = "DELETE_CONTACT";
export const UPDATE_CONTACT = "UPDATE_CONTACT";

export const addContact = (payload) => {
  return {
    type: ADD_CONTACT,
    payload,
  };
};

export const deleteContact = (payload) => {
  return {
    type: DELETE_CONTACT,
    payload,
  };
};

export const handleUpdateSubmit = (payload) => {
  return {
    type: UPDATE_CONTACT,
    payload,
  };
};
