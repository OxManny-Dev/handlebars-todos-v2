const router = require('express').Router();
const { User } = require('../../../model');
// everything in here has /api/users prepended before it

router.post('/signup', async (req,res) => {
  try {
    const newUser = await User.create({
      email: req.body.email,
      password: req.body.password
    });

    // req.session
    req.session.save(() => {
      req.session.isLoggedIn = true;
      req.session.user = newUser.get({ plain: true });

      res.json(newUser);
    });
  } catch (error) {
    res.status(500).json({ error });
  }
});

module.exports = router;