export const httpConfig = {
  userServiceUrl: process.env.USER_SERVICE_URL || 'http://localhost:3002/user',
  authServiceUrl: process.env.AUTH_SERVICE_URL || 'http://localhost:3003/auth',
}
