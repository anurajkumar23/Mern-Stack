const home = async (req, res) => {
  try {
    res
      .status(200)
      .send("Welcome to Anuraj kumar server using router and controller");
  } catch (error) {
    console.log(error);
  }
};

const register = async (req, res) => {
  try {
    res
      .status(200)
      .send(
        "Welcome to register page of Anuraj kumar server using router and controller"
      );
  } catch (error) {
    res.status(400).send({ msg: "Page not found" });
  }
};

module.exports = { home, register };
