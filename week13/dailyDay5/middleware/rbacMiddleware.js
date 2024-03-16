function rbacMiddleware(req, res, next) {
  if (!req.user) {
    return next();
  }

  const { role } = req.user;
  const { originalUrl } = req;

  if (role === "admin") {
    return next();
  } else if (role === "user") {
    if (originalUrl === "/public" || originalUrl === "/user-profile") {
      return next();
      routes;
    } else {
      return res.status(403).send("Forbidden");
    }
  }
}

module.exports = rbacMiddleware;
