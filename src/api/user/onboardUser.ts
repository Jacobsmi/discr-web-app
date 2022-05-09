const onboardUser = async (token: string) => {
  const result = await fetch("http://localhost:5000/user", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const resultJSON = await result.json();
  console.log(resultJSON);
};
export default onboardUser;
