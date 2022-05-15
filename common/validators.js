import * as yup from "yup";

const loginSchema = yup.object({
  body: yup.object({
    email: yup.string().required("Email is required!").email("Invalid email!"),
    password: yup.string().required("Password is required!"),
  }),
});

const loginValidator = (schema) => async (req, res, next) => {
  try {
    await schema.validate({
      body: req.body,
      query: req.query,
      params: req.params,
    });
    return next();
  } catch (err) {
    return res.status(500).json({ type: err.name, message: err.message });
  }
};

export { loginSchema, loginValidator };
