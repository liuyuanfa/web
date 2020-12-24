const devBaseUrl = 'https://httpbin.org';
const proBaseUrl = 'XXXX';
export const BaseUrl = process.env.NODE_ENV === 'development'?devBaseUrl:proBaseUrl;
export const TIMEOUT = 5000;