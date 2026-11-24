// The API address is public (every visitor's browser calls it), so it is safe
// to keep in code. REACT_APP_API_URL can still override it, e.g. in
// .env.development for local work.
const PRODUCTION_API_URL = "https://aipm-app-g9qfi.ondigitalocean.app";
const LOCAL_API_URL = "http://localhost:4000";

export const baseUrl =
  process.env.REACT_APP_API_URL ||
  (process.env.NODE_ENV === "production" ? PRODUCTION_API_URL : LOCAL_API_URL);
