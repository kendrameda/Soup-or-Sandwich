const withAuth = (req, res, next) => {
  // if there is a req.user, it means the user is logged in
  if (!req.user) {
    // if the user is not logged in, redirect the user to the login page
    res.redirect('/auth/login');
  } else {
    // if logged in, continue
    next();
  }
};

module.exports = withAuth;