const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/;
const nameRegex = /^[A-Z][a-z]{1,10}(\s[A-Z][a-z]{0,10})?$/;
const hasSpaces = /\s/;

export const emailRules = {
  //Вираз перевіряє, чи електронна пошта містить не менше одного символа перед символом "@", потім містить символ "@", далі не менше одного символа перед символом ".", символ ".", і, нарешті, не менше одного символа після символу ".".
  required: "Required email",
  pattern: { value: emailRegex, message: "Invalid email" },
};

export const passwordRules = {
  //Вираз перевіряє, чи пароль містить принаймні одну цифру (\d), принаймні одну маленьку літеру ([a-z]), принаймні одну велику літеру ([A-Z]), та має довжину не менше 6 символів.
  required: "Required password",
  minLength: {
    value: 6,
    message: "Password should be minimum 6 charecters long",
  },
  pattern: {
    value: passwordRegex,
    message:
      "Password must contain at least one number, one lowercase and one uppercase letter",
  },
  validate: (value) => {
    if (hasSpaces.test(value)) {
      return "Password cannot contain spaces.";
    }
    return true;
  },
};

export const nameRules = {
  //Вираз дозволяє вводити імена, які починаються з великої літери (A-Z) і мають довжину від 2 до 20 символів. Також він дозволяє вводити прізвища, якщо вони присутні, також починаються з великої літери (A-Z) і мають довжину від 2 до 20 символів."
  required: "Required name",
  minLength: {
    value: 2,
    message: "Name should be minimum 2 charecters long",
  },
  pattern: { value: nameRegex, message: "Invalid name" },
};
