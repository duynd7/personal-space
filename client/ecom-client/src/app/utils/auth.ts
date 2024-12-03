import { jwtDecode } from 'jwt-decode';

const COGNITO_DOMAIN = process.env.NEXT_PUBLIC_COGNITO_DOMAIN;
const CLIENT_ID = process.env.NEXT_PUBLIC_COGNITO_CLIENT_ID;
const REDIRECT_URI = process.env.NEXT_PUBLIC_REDIRECT_URI;

export const getLoginUrl = () => {
  return `${COGNITO_DOMAIN}/login?response_type=code&client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}`;
};

export const getLogoutUrl = () => {
  return `${COGNITO_DOMAIN}/logout?client_id=${CLIENT_ID}&logout_uri=${REDIRECT_URI}`;
};

export const getTokenUrl = () => {
  return `${COGNITO_DOMAIN}/oauth2/token`;
};

export interface JwtUserPayload {
  email?: string;
  "cognito:username"?: string;
  [key: string]: any;
}

export const getUserInfo = (id_token: any): JwtUserPayload | null => {
  const idToken = localStorage.getItem('id_token');
  if (!idToken) return null;

  try {
    const decoded = jwtDecode<JwtUserPayload>(idToken);
    return decoded;
  } catch (error) {
    console.error('Failed to decode ID token', error);
    return null;
  }
};