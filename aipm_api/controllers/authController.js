const Admin = require("../models/Admin");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const response = require("../utils/responses");
const sucessMessage = require("../utils/success_messages");
const errorMessage = require("../utils/error_messages");

exports.login = async (req, res) => {
  if (!req.body.email || !req.body.password) {
    return res.status(400).json({ message: 'email and password are required' });
  }

  const admin = await Admin.findAll({
    where: {
      email: req.body.email,
    }
  });

  if (admin.length <= 0) {
    return res.status(403).send("the password or email is incorrect");
  }
  try {
    if(await bcrypt.compare(req.body.password, admin[0].password)) {
      const { password, ...adminWithoutPassword } = admin[0].toJSON();
      jwt.sign(
        { admin: adminWithoutPassword },
        process.env.ACCESS_TOKEN_SECRET,
        { algorithm: 'HS256', expiresIn: '1h' },
        (err, token) => {
          if (err) {
            res.status(500).json({ message: 'something went wrong' });
          } else {
            res.status(200).json({
              admin: adminWithoutPassword,
              token
            })
          }
        }
      )
    } else {
      res.sendStatus(403)
    }
  } catch(err) {
    console.error(err);
    res.status(500).json({
      message: 'something went wrong'
    })
  }
};

exports.sign_up = async (req, res) => {
  try {
    if (!req.body.email || !req.body.password || !req.body.fullName) {
      return res.status(400).json({ message: 'fullName, email and password are required' });
    }
    if (req.body.password.length < 8) {
      return res.status(400).json({ message: 'password must be at least 8 characters' });
    }

    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    const admin = { fullName: req.body.fullName, phone: req.body.phone, email: req.body.email, role: req.body.role, gender: req.body.gender, staffLocation: req.body.staffLocation, aipmService: req.body.aipmService, password: hashedPassword };
    const checkEmailExist = await Admin.findAll({
      where: {
        email: req.body.email
      }
    })
    if (checkEmailExist.length > 0) {
      // 409 code for conflict
      res.status(409).json({
        message: `Email already exists, ${checkEmailExist[0].fullName} registered with ${checkEmailExist[0].email}`
      })

    } else {

      const newAdmin = await Admin.create({
        fullName: admin.fullName,
        phone: admin.phone,
        email: admin.email,
        role: admin.role,
        gender: admin.gender,
        staffLocation: admin.staffLocation,
        aipmService: admin.aipmService,
        password: admin.password,
      });

      if (newAdmin) {
        const { password, ...newAdminWithoutPassword } = newAdmin.toJSON();
        res
          .status(201)
          .json(
            response.success_response(
              sucessMessage.updated_message("New Admin"),
              201,
              newAdminWithoutPassword
            )
          );
      } else {
        res
          .status(500)
          .json(
            response.failure_response(
              errorMessage.added_error("New Admin"),
              500,
              null
            )
          );
      }
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'something went wrong' });
  }
};
