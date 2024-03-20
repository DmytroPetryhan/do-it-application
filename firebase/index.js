import { api } from "../API";

export const signUpUser = async (user) => {
  const {
    userName,
    userEmail,
    userPassword,
    items: {},
  } = user;

  const users = await allUsersList();

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

export const signInUser = async (userData) => {
  const { userEmail, userPassword } = userData;
  const users = await allUsersList();

  const user = users.filter(
    (user) => user.userEmail === userEmail && user.userPassword === userPassword
  );
  if (user.length) {
    return {
      status: "success",
      newUser: user,
    };
  } else {
    return {
      status: "fail",
      errorMessade: "Incorrect email or password",
    };
  }
};

const allUsersList = async () => {
  try {
    const request = (await api.get(".json")).data;
    const users = Object.keys(request).map((key) => ({
      ...request[key],
      id: key,
    }));
    return users;
  } catch (error) {
    return [];
  }
};
