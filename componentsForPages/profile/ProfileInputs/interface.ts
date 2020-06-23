export const defaultProps = {
  data: {},
};

export const getInitialValues = (data) => ({
  name: data["name"] || "",
  gender: data["gender"],
  about_me: data["about_me"],
  birthday: data["birthday"]?.date.slice(0, 10),
  status: data["status"] || "",
  username: data["username"] || data["id"] || "",
});
