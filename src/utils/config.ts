import * as dotenv from 'dotenv';

dotenv.config();
let path;
switch (process.env.NODE_ENV) {
	case 'test':
		path = `${__dirname}/../../.env.test`;
		break;
	case 'production':
		path = `${__dirname}/../../.env.production`;
		break;
	default:
		path = `${__dirname}/../../.env.development`;
}

dotenv.config({
	path: path
});
export const PROD = process.env.NODE_ENV === 'production';
export const {
	PORT,
	CORS_URL,
	REDIS_HOST,
	REDIS_PASS,
	REDIS_PORT,
	REDIS_HOST2,
	REDIS_PASS2,
	REDIS_PORT2
} = process.env;
