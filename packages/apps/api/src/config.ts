export const port = process.env.PORT ? parseInt(process.env.PORT) : 3001;

export const mongodbUri =
  process.env.MONGODB_URI ?? "mongodb://localhost:27017";

export const isDevelopment = process.env.NODE_ENV === "development";

export const jwtExpiresIn = process.env.JWT_EXPIRES_IN ?? "2w";

export const jwtSecret = process.env.JWT_SECRET ?? "secret";

export const defaultNewsSearchPhrase =
  process.env.DEFAULT_NEWS_SARCH_PHRASE ?? "global";

export const sendgridApiKey = process.env.SENDGRID_API_KEY ?? "";

export const guardianApiKey = process.env.GUARDIAN_API_KEY ?? "";

export const newYorkTimesApiKey = process.env.NEW_YORK_TIMES_API_KEY ?? "";

export const newsApiApiKey = process.env.NEWSAPI_API_KEY ?? "";
