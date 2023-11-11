const home = async (req, res) => {
  try {
    res
      .status(200)
      .json("Welcome to Anuraj kumar server using router and controller");
  } catch (error) {
    console.log(error);
  }
};

const register = async (req, res) => {
  try {
    console.log(req.body);
    res
      .status(200).json({msg: req.body});
  } catch (error) {
    res.status(500).json({ msg: "Internal server Error" });
  }
};

module.exports = { home, register };
