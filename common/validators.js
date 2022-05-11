import * as yup from "yup";

const loginSchema = yup.object({
  body: yup.object({
    username: yup.string().required(),
    password: yup.string().required(),
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
