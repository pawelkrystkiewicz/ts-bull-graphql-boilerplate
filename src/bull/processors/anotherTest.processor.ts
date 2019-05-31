import { Job } from 'bull';

module.exports = async (_: Job): Promise<any> => {
	const result = _.data.cost * 2000 ;

	return Promise.resolve({ result });
};
