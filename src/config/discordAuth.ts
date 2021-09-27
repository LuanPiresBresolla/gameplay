const REDIRECT_URI = process.env.REDIRECT_URI;
const SCOPE = process.env.SCOPE;
const RESPONSE_TYPE = process.env.RESPONSE_TYPE || 'token';
const CLIENT_ID = process.env.CLIENT_ID;
const CDN_IMAGE = process.env.CDN_IMAGE || 'https://cdn.discordapp.com';

export { CDN_IMAGE, CLIENT_ID, REDIRECT_URI, RESPONSE_TYPE, SCOPE };
