import { emailRegex } from "../../data/regularExpressions";

export const useValidEmail = (email) => {
  if (!emailRegex.test(email)) {
    return false;
  } else {
    return true;
  }
};
