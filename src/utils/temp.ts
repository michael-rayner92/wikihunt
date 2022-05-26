export const isExpired = (time?: number): boolean => {
  if (!time) return false;
  return time < Date.now();
};
