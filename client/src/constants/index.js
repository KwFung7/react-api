// Route
export const ROOT = '/';
export const API_ROUTE = '/api/v1';
export const HOME_ROUTE = '/dashboard';
export const USER_ROUTE = '/user';
export const LOGIN_ROUTE = '/login';
export const SETTING_ROUTE = '/setting';
export const PORTFOLIO_ROUTE = '/portfolio';
export const SERVER_LOG_ROUTE = '/log';
export const PORTFOLIO_SUBROUTE = [
  'header',
  'intro',
  'projects',
  'contact'
];

// NoMatch
export const NO_MATCH_STATUS = '404.';
export const NOT_FOUND = 'Not Found';
export const NO_MATCH_FOR = 'No match for ';

// Locale
export const DEFAULT_LOCALE = 'en';
export const EN = 'en';
export const TW = 'tw';

// Responsive
export const BREAKPOINT_MOBILE = 768;

// API
export const API_HOST_URL = process.env.NODE_ENV === 'production'
  ? 'https://admin.kwfxng.com'
  : 'http://localhost:5000';
export const X_AUTH = 'x-auth';
export const ADMIN_ROLE = 'admin';
export const GUEST_ROLE = 'guest';

// Local Storage
export const TOKEN = 'token';
export const EXPIRE_AT = 'expireAt';
export const USER_NAME = 'userName';
export const USER_ROLE = 'userRole';
export const USER_ID = 'userID';

// Validation
export const WORD_LIMIT = {
  userName: 30,
  position: 50,
  email: 30,
  github_link: 50,
  linkedin_link: 50,
  phone: 15,
  pageTitle: 30,
  name: 30,
  gender: 10,
  birth: 10,
};