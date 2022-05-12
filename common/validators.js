import * as yup from "yup";

const loginSchema = yup.object({
  body: yup.object({
    email: yup.string().required("Email is required!").email("Invalid email!"),
    password: yup
      .string()
      .required("Password is required!")
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character",
      ),
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
