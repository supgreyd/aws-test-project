export const accessTooken = () => {
  let user = JSON.parse(localStorage.getItem("user"));
  return user ? user.api_token : null;
};
