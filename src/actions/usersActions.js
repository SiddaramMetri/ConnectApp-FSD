export const addUsers = (data) => {
  return {
    type: "USERS_ADD",
    payload: data,
  };
};
