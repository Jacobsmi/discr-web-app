interface NewUserData {
  firstName: string;
  lastName: string;
}
const onboardUser = async (token: string, newUserData: NewUserData) => {
  const result = await fetch("http://localhost:5000/user", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      firstName: newUserData.firstName,
      lastName: newUserData.lastName,
    }),
  });
  const resultJSON = await result.json();
  return { response: result, data: resultJSON };
};
export default onboardUser;
