import axios from "axios";
const baseUrl = "https://test-version-do-it-app-default-rtdb.firebaseio.com/";

export const signUpUser = async (user) => {
  const users = await allUsersList();
  const {
    userName,
    userEmail,
    userPassword,
    items: {},
  } = user;

  const checkValidUser = users.filter((item) => item.userEmail === userEmail);

  if (checkValidUser.length) {
    return {
      status: "fail",
      errorMessade: "The user with this email address is already registered",
    };
  }
  try {
    const newUser = axios.post(`${baseUrl}.json`, {
      userName,
      userEmail,
      userPassword,
      items: {},
    });

    return {
      status: "success",
      newUser: await newUser,
    };
  } catch (error) {
    return {
      status: "fail",
      errorMessade: error,
    };
  }
};

const allUsersList = async () => {
  const request = (await axios.get(`${baseUrl}.json`)).data || {};
  const users = Object.keys(request).map((k) => ({ ...request[k] })) || [];
  return users;
};
