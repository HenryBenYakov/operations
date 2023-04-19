export const config = {
  mongoUser: process.env.MONGO_USER || 'user',
  mongoPass: process.env.MONGO_PASS || 'password',
  port: process.env.PORT || 3001,
};
