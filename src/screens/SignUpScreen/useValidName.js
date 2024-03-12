import { nameRegex } from "../../data/regularExpressions";

export const useValidName = (name) => {
  if (!nameRegex.test(name)) {
    return false;
  } else {
    return true;
  }
};
