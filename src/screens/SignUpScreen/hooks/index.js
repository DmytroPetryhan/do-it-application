import { useMemo, useState } from "react";

const useSigUpScreenLogic = () => {
  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userEmail, setUserEmail] = useState("");

  const onChangeName = (value) => {};
  const onChangeEmail = (value) => {};
  const onChangePasswod = (value) => {};

  const validateName = () =>
    useMemo(() => {
      // валідація
    }, [userName]);

  const validateEmail = () =>
    useMemo(() => {
      // валідація
    }, [userEmail]);

  const validatePassword = () =>
    useMemo(() => {
      // валідація
    }, [userPassword]);

  const disabledSubmitButton = useMemo(() => {
    if (validateName) {
      // errorMessage
    }

    if (validateEmail) {
      // errorMessage
    }

    if (validatePassword) {
      // errorMessage
    }

    return validateName && validateEmail && validatePassword;
  }, [validateName, validateEmail, validatePassword]);

  return {
    data: { userName, userPassword, userEmail },
    onChangeName,
    onChangeEmail,
    onChangePasswod,
    disabledSubmitButton,
  };
};

export default useSigUpScreenLogic;
