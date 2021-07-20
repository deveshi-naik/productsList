export const successResponse = (req, res, data, code = 200) => res.send({
  code,
  data,
  success: true,
});

export const errorResponse = (
  req,
  res,
  errorMessage = 'Something went wrong',
  code = 500,
) => res.status(code).json({
  code,
  errorMessage,
  data: null,
  success: false,
});
