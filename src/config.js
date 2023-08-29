import { config } from 'dotenv'

config()

export const PORT = process.env.PORT || 4000
export const MONGODB_URI = process.env.MONGODB_URI || 'he';
export const SECRET = process.env.SECRET
export const CLIENT_PORT = process.env.CLIENT_PORT || 'http://localhost:5173'
