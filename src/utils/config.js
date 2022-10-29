function validateEnv(key, defaultValue, warnDefault) {
  const value = process.env[key]

  return value
}

export const config = {
  cookieName: 'token',
  clientId: validateEnv('CLIENT_ID'),
  clientSecret: validateEnv('CLIENT_SECRET'),
  appUri: validateEnv('APP_URI', 'http://localhost:3000', true),
  jwtSecret: validateEnv(
    'JWT_SECRET',
    'this is a development value that should be changed in production!!!!!',
    true
  ),
}
const dev = process.env.NODE_ENV !== 'production'

export const server = dev
  ? 'http://localhost:3000'
  : 'https://www.tachyonrobotics.com'
