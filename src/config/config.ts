export default () => ({
  port: parseInt(process.env.PORT ?? '3000', 10) || 3000,
  mongoUri: process.env.MONGODB_URI,
  jwt: {
    secret: process.env.JWT_SECRET,
    expiresIn: process.env.JWT_EXPIRES_IN || '30d',
  },
  email: {
    host: process.env.EMAIL_HOST,
    port: 465,
    secure: true,
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
    from: process.env.EMAIL_FROM,
  },
});
