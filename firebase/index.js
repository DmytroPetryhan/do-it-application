import { api } from "../API";

export const signUpUser = async (user) => {
  const { userName, userEmail, userPassword, items } = user;

  const users = await allUsersList();

  const checkValidUser = users.filter((u) => u.user.userEmail === userEmail);

  if (checkValidUser.length) {
    return {
      status: "fail",
      errorMessade: "The user with this email address is already registered",
    };
  }
  try {
    const newUser = api.post(".json", {
      user,
    });
    return {
      status: (await newUser).status,
      userId: (await newUser).data.name,
    };
  } catch (error) {
    return {
      status: (await newUser).status,
      errorMessade: error,
    };
  }
};

export const signInUser = async (userData) => {
  const { userEmail, userPassword } = userData;
  const users = await allUsersList();

  const user = users.find(
    (u) =>
      u.user.userEmail === userEmail && u.user.userPassword === userPassword
  );
  if (user !== undefined) {
    return {
      status: 200,
      userId: user.id,
    };
  } else {
    return {
      status: "fail",
      errorMessade: "No user found with this email address or password",
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

export const addNewItem = async (data) => {
  const { userId, title, description, date, time, completed } = data;
  try {
    const newItem = api.post(`${userId}/items.json`, {
      title,
      description,
      date,
      time,
      completed,
    });
    return {
      status: (await newItem).status,
      itemId: (await newItem).data.name,
    };
  } catch (error) {
    return {
      status: (await newItem).status,
      errorMessade: error,
    };
  }
};

export const fetchUser = async (id) => {
  try {
    const request = api.get(`${id}.json`);
    return {
      user: (await request).data.user,
      items: (await request).data.items || {},
      status: (await request).status,
    };
  } catch (error) {
    return {
      status: (await request).status,
      errorMessade: error,
    };
  }
};

export const deleteItem = async (userId, itemId) => {
  try {
    const request = api.delete(`${userId}/items/${itemId}.json`);
    return {
      status: (await request).status,
    };
  } catch (error) {
    return {
      status: (await request).status,
      errorMessade: error,
    };
  }
};

export const toggleItemIsDone = async (userId, itemId, completed) => {
  try {
    const request = api.patch(`${userId}/items/${itemId}.json`, {
      completed: completed,
    });
    return {
      status: (await request).status,
    };
  } catch (error) {
    return {
      status: (await request).status,
      errorMessade: error,
    };
  }
};

export const changeItemDescription = async (userId, itemId, descripton) => {
  try {
    const request = api.patch(`${userId}/items/${itemId}.json`, {
      descripton: descripton,
    });
    return {
      status: (await request).status,
    };
  } catch (error) {
    return {
      status: (await request).status,
      errorMessade: error,
    };
  }
};
