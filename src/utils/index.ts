import Strings from '../constants/Strings';
const isEmailValid = (email: string) => {
  const isValid = email.match(
    /^([\w\!\#$\%\&\'\*\+\-\/\=\?\^\`{\|\}\~]+\.)*[\w\!\#$\%\&\'\*\+\-\/\=\?\^\`{\|\}\~]+@((((([a-z0-9]{1}[a-z0-9\-]{0,62}[a-z0-9]{1})|[a-z])\.)+[a-z]{2,6})|(\d{1,3}\.){3}\d{1,3}(\:\d{1,5})?)$/i,
  );

  if (isValid === null) {
    return false;
  }
  return true;
};
const isPasswordValid = (password: string) => {
  const isValid = password.match(
    /^(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?=.*[!@#$&*]).{8,15}$/,
  );

  if (isValid === null) {
    return false;
  }
  return true;
};

export const validateEmail = (email: string) => {
  if (email?.length === 0) {
    return Strings.USER_NAME_LENGTH_ERROR;
  } else if (!isEmailValid(email)) {
    return Strings.EMAIL_ERROR;
  } else {
    return '';
  }
};
export const validatePassword = (password: string) => {
  if (password?.length < 8 || password?.length > 15) {
    return Strings.PASSWORD_LENGTH_ERROR;
  } else if (!isPasswordValid(password)) {
    return Strings.PASSWORD_ERROR;
  } else {
    return '';
  }
};
