import * as config from '../utils/config';
import Redis from 'ioredis';

const testParams = {
	host: String(config.REDIS_HOST),
	password: String(config.REDIS_PASS),
	port: Number(config.REDIS_PORT),
	family: 4
};

const defaultParams = {
	host: String(config.REDIS_HOST2),
	password: String(config.REDIS_PASS2),
	port: Number(config.REDIS_PORT2),
	family: 4
};

export const opts = {
	createClient: function(type: any) {
		switch (type) {
			case 'test-2':
				return new Redis(testParams);
			case 'test-1':
				return new Redis(defaultParams);
			default:
				return new Redis(testParams);
		}
	}
};
