const generateAccessToken = (user) => {
  console.log(user, "from generate access token");
  try {
    return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {
      expiresIn: "40s",
    });
  } catch (err) {
    console.log(err.message);
  }
};

module.exports = generateAccessToken;
