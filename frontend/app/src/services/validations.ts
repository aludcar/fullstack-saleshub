const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const isValidEmail = (email: string): boolean => {
  return regex.test(email);
};

export const isNonEmpty = (value: string): boolean => {
  return value?.trim()?.length > 0;
};
