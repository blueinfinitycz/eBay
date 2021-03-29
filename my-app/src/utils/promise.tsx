export const getJson = async (url: string) => {
  const res = await fetch(url);
  return res;
};
