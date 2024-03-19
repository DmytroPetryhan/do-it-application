import { api } from "../API";

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
    const newUser = api.post(".json", {
      userName,
      userEmail,
      userPassword,
      onBoarding: true,
      items: [1, 2],
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
  try {
    const request = (await api.get(".json")).data;
    const users = Object.keys(request).map((k) => ({ ...request[k] }));
    return users;
  } catch (error) {
    return [];
  }
};
