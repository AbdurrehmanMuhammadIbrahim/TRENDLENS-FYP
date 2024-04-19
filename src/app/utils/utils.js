import Cookies from 'js-cookie';



export const storeUser = (data) => {
  // localStorage.setItem(
  //   "user",
  //   JSON.stringify({
  //     username: data.user.username,
  //     jwt: data.jwt,
  //   })
  // );
  const token = data.jwt;
  Cookies.set('token', token, { expires: 2, secure: true });

};
export const removeUser = () => {
  // localStorage.removeItem(
  //   "user"
  // );
  Cookies.remove("token")
};
