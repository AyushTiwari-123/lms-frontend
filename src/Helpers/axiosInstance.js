import axios from 'axios'

const BASE_URL="http://localhost:5002/api/v1"
// This creates a new Axios instance separate from the global axios instance.
// It allows us to configure default settings without affecting other Axios requests in the app.

const axiosInstance = axios.create()
// This sets the base URL for all requests made using axiosInstance.
// Instead of writing the full API URL each time, requests automatically prepend BASE_URL.
axiosInstance.defaults.baseURL=BASE_URL
// This allows sending cookies & authentication headers with requests to a different domain (CORS requests).
// Useful when making requests to a backend that requires authentication via cookies, sessions, or tokens.
// Without this, requests won’t include session cookies or HTTP authentication credentials.
// Example Scenario:

// If your frontend (http://localhost:3000) calls a backend (http://localhost:5000) that requires cookies for authentication, this ensures cookies are sent.
// Needed for APIs that use JWT, session-based auth, or third-party authentication (Google OAuth, etc.).
axiosInstance.defaults.withCredentials=true

export default axiosInstance