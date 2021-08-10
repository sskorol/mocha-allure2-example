import * as dotenv from 'dotenv'
dotenv.config()

const defaultHost = 'localhost'
const defaultTrackerAddress = `http://${defaultHost}`
export const TMS_URL = process.env.TMS_URL || defaultTrackerAddress
export const PMS_URL = process.env.PMS || defaultTrackerAddress
export const USERNAME = process.env.USERNAME || ''
export const PASSWORD = process.env.PASSWORD || ''

const HOST = process.env.HOST || defaultHost
const PORT = process.env.PORT || ''
export const URL = `${HOST}${PORT ? `:${PORT}` : ''}`
