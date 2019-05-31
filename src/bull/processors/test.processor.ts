import { Job } from 'bull';

module.exports = async (_: Job): Promise<any> => {
	const result = _.data.cost * 100 ;

	return Promise.resolve({ result });
};
