const sql = require("../config/db");

const getAllRecord = async (req, res) => {
  const userId = req.user.id;
  try {
    const records = await sql`SELECT * FROM records WHERE uid=${userId}`;
    console.log("Data", records);
    res.status(200).json({ records });
  } catch (error) {
    res.status(400).json({ message: "Failed to get records", error });
  }
};

const getInfo = async (req, res) => {
  const userId = req.user.id;
  try {
    const [income, expense] =
      await sql`SELECT transaction_type, SUM(amount) FROM records WHERE uid=${userId} GROUP BY transaction_type`;
    res.status(200).json({ income, expense });
  } catch (error) {
    res.status(400).json({ message: "Failed to get info", error });
  }
};
const getCash = async (req, res) => {
  const userId = req.user.id;
  try {
    const [income, expense] =
      await sql`SELECT transaction_type, SUM(amount) FROM records GROUP BY transaction_type`;
    res.status(200).json({ income, expense });
  } catch (error) {
    res.status(400).json({ message: "Failed to get cash", error });
  }
};

const getChartData = async (req, res) => {
  const userId = req.user.id;
  try {
    const donutChartData =
      await sql`SELECT SUM(r.amount), c.name cat_name FROM records r INNER JOIN categories c ON r.cid=c.id WHERE r.transaction_type='EXP' AND uid=${userId} GROUP BY cat_name`;
    const barChartData = await sql`SELECT
      TO_CHAR(DATE_TRUNC('month', r.created_at), 'Mon') AS month,
      SUM(CASE WHEN r.transaction_type = 'INC' THEN r.amount ELSE 0 END) AS total_inc,
      SUM(CASE WHEN r.transaction_type = 'EXP' THEN r.amount ELSE 0 END) AS total_exp
      FROM records r
      GROUP BY DATE_TRUNC('month', r.created_at)
      ORDER BY DATE_TRUNC('month', r.created_at);`;
    res.status(200).json({
      message: "Getting chart data is success",
      donut: donutChartData,
      bar: barChartData,
    });
  } catch (error) {
    res.status(400).json({ message: "Failed to get chart datas", error });
  }
};

const createRecord = async (req, res) => {
  try {
    const { uid, cid, name, amount, transaction_type, description } = req.body;
    console.log("uid", uid);
    const data = await sql`
      INSERT INTO records (uid, cid, name, amount, transaction_type, description )
      VALUES(${uid}, ${cid}, ${name},${amount},${transaction_type},${description});
      `;
    console.log("DATA", data);
    res.status(201).json({ message: "New record created successfully" });
  } catch (error) {
    res.status(400).json({ message: "Failed to create new record", error });
  }
};

const updateRecord = async (req, res) => {
  try {
    const { uid, cid, name, amount, transaction_type, description } = req.body;
    const { id } = req.params;
    const data =
      await sql`UPDATE records SET uid=${uid},cid=${cid}, name=${name}, amount=${amount}, transaction_type=${transaction_type}, description=${description} WHERE id=${id}`;
    console.log("DATA", data);
    res.status(200).json({ message: "Update record success", Record: data });
  } catch (error) {
    res.status(400).json({ message: "Failed to update record", error });
  }
};

const deleteRecord = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await sql`DELETE FROM records WHERE id=${id}`;
    console.log("DATA", data);
    res.status(200).json({ message: "Delete record success", Record: data });
  } catch (error) {
    res.status(400).json({ message: "Failed to delete record", error });
  }
};

module.exports = {
  getAllRecord,
  createRecord,
  updateRecord,
  deleteRecord,
  getInfo,
  getChartData,
  getCash,
};
