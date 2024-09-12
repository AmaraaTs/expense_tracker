const sql = require("../config/db");

const getAllCategory = async (req, res) => {
  try {
    const data = await sql`SELECT * FROM categories`;
    // const data = await sql`SELECT * FROM categories WHERE uid=${req.user.id}`;
    console.log("Data", data);
    res
      .status(200)
      .json({ message: "Getting categories is successfully", category: data });
  } catch (error) {
    res.status(400).json({ message: "Failed to get categories", error });
  }
};

const createCategory = async (req, res) => {
  try {
    const { name, description, category_img } = req.body;
    const data = await sql`
    INSERT INTO categories (name, description, category_img)
    VALUES(${name}, ${description},${category_img});
    `;
    console.log("DATA", data);
    res.status(201).json({ message: "New category created successfully" });
  } catch (error) {
    res.status(400).json({ message: "Failed to create category", error });
  }
};

const updateCategory = async (req, res) => {
  try {
    const { name, description, category_img } = req.body;
    const { id } = req.params;
    const data =
      await sql`UPDATE categories SET name=${name}, description=${description}, category_img=${category_img} WHERE id=${id}`;
    console.log("DATA", data);
    res
      .status(200)
      .json({ message: "Update category success", category: data });
  } catch (error) {
    res.status(400).json({ message: "Failed to update category", error });
  }
};

const deleteCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await sql`DELETE FROM categories WHERE id=${id}`;
    console.log("DATA", data);
    res
      .status(200)
      .json({ message: "Delete category success", category: data });
  } catch (error) {
    res.status(400).json({ message: "Failed to delete category", error });
  }
};

module.exports = {
  getAllCategory,
  createCategory,
  updateCategory,
  deleteCategory,
};
