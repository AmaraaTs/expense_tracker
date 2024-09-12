const sql = require("../config/db");

const getAllUser = async (req, res) => {
  try {
    const data = await sql`SELECT * FROM users`;
    res
      .status(200)
      .json({ message: "Getting all users is success", user: data });
  } catch (error) {
    res.status(400).json({ message: "Failed to get users", error });
  }
};

const getCurrentUser = async (req, res) => {
  try {
    const [data] = await sql`SELECT * FROM users WHERE id=${req.user.id}`;
    console.log("Data", data);
    res
      .status(200)
      .json({ message: "Getting current user is success", user: data });
  } catch (error) {
    res.status(400).json({ message: "Failed to get current user", error });
  }
};

const createUser = async (req, res) => {
  try {
    const { email, name, password, profile_img } = req.body;
    const data = await sql`
    INSERT INTO users (email, name, password, profile_img)
    VALUES(${email}, ${name}, ${password},${profile_img});
    `;
    res.status(201).json({ message: "New user created successfully" });
  } catch (error) {
    res.status(400).json({ message: "Failed to create user", error });
  }
};

const updateUser = async (req, res) => {
  try {
    const { email, name, password, profile_img } = req.body;
    const { id } = req.params;
    const data =
      await sql`UPDATE users SET email=${email}, name=${name}, password=${password}, profile_img=${profile_img} WHERE id=${id}`;
    res.status(200).json({ message: "Update user success", user: data });
  } catch (error) {
    res.status(400).json({ message: "Failed to update user", error });
  }
};

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await sql`DELETE FROM users WHERE id=${id}`;
    res.status(200).json({ message: "Delete user success", user: data });
  } catch (error) {
    res.status(400).json({ message: "Failed to delete user", error });
  }
};

module.exports = {
  getAllUser,
  createUser,
  updateUser,
  deleteUser,
  getCurrentUser,
};
