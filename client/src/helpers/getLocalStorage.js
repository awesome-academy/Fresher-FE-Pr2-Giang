export const getDataFromLocalStorage = (key, defaultValue = '') => {
  return localStorage.getItem(key) || defaultValue;
};
