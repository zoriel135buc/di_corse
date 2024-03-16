const getPublic = async (req, res) => {
  try {
    const user = await fetch(`https://jsonplaceholder.typicode.com/users`).then(
      (res) => res.json()
    );
    res.json(user);
  } catch (error) {
    console.log(error);
    res.status(404).json({ massage: "not found" });
  }
};

module.exports = {
  getPublic,
};
