export default {
  PASSWORD_VALIDATION_REGEX:
    '^(?=.*d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*s).{8,15}$',
  USER_NAME_LENGTH_ERROR: 'Username length should be more then 3 character',
  EMAIL_ERROR: 'Please enter valid email',
  PASSWORD_ERROR:
    'Password should contain alphanumeric characters with 1 capital letter and 1 special character',
  PASSWORD_LENGTH_ERROR:
    'Password should contain alphanumeric characters with 1 capital letter and 1 special character',
  IMAGE_ENDPOINT: 'https://image.tmdb.org/t/p/w300',
  EMAIL: 'EMAIL',
  PASSWORD: 'PASSWORD',
  LOGIN: 'LOGIN',
  POPULAR_MOVIES: 'Popular Movies',
};
