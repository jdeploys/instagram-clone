const localStorageTokenKey = 'i-lt';

export const loadToken = () => {
  return localStorage.getItem(localStorageTokenKey);
};

export const saveToken = (token: string) => {
  localStorage.setItem(localStorageTokenKey, token);
};
