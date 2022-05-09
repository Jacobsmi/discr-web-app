const getUser = async (token: string) => {
  const result = await fetch("http://localhost:5000/user", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const resultJSON = await result.json();
  return { response: result, data: resultJSON };
};
export default getUser;
