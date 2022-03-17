const connect = require('../config/config');

exports.POST = (req, res) => {
  const { name, email, password } = req.body;

  const post = 'insert into user (name,email,password) values (?,?,?)';
  connect.query(post, [name, email, password], (e) =>
    e
      ? res.status(400).json(e)
      : res.status(200).json({
          message: 'Created',
        }),
  );
};
