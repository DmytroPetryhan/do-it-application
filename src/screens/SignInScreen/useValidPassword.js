import { passwordRegex } from "../../data/regularExpressions";

export const useValidPassword = (password) => {
  if (!passwordRegex.test(password)) {
    return false;
  } else {
    return true;
  }
};
