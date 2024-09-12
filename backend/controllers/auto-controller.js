const sql = require("../config/db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const signUp = async (req, res) => {
  try {
    const { email, name, password } = req.body;
    const hashedPassword = bcrypt.hashSync(password, 10);
    const data = await sql`
    INSERT INTO users (email, name, password, profile_img)
    VALUES(${email}, ${name}, ${hashedPassword},'url');
    `;
    console.log("DATA", data);
    res.status(201).json({ message: "Шинэ хэрэглэгч амжилттай бүртгэгдлээ" });
  } catch (error) {
    res.status(400).json({ message: "Шинэ хэрэглэгч бүртгэхэд алдаа гарлаа" });
  }
};

const signIn = async (req, res) => {
  try {
    const { email, password } = req.body;
    const [user] = await sql`
    SELECT * FROM users WHERE email=${email}
    `;

    if (!user) {
      res.status(404).json({ message: "Бүртгэлтэй хэрэглэгч олдсонгүй." });
    } else {
      const isCheck = bcrypt.compareSync(password, user.password);
      if (!isCheck) {
        res
          .status(400)
          .json({ message: "Хэрэглэгчийн и-мэйл эсвэл нууц үг буруу байна." });
      } else {
        const token = jwt.sign({ id: user.id }, "JWT_TOKEN_PASS@123", {
          expiresIn: "1h",
        });
        res
          .status(200)
          .json({ message: "Хэрэглэгч амжилттай нэвтэрлээ", token });
      }
    }
  } catch (error) {
    res.status(400).json({ message: "Хэрэглэгч нэвтрэхэд алдаа гарлаа" });
  }
};

module.exports = { signUp, signIn };
