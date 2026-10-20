const indexController = {
  getHomepage: (req, res) => {
    res.render('homepage');
  },

  getLoginPage: (req, res) => {
    res.render('login');
  },

  getRegisterPage: (req, res) => {
    res.render('register');
  },
};

export default indexController;
