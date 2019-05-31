import { Resolver, Query, Arg } from 'type-graphql';
import { testQueue } from '../bull/queues/test.queue';


@Resolver()
export class TestResolver {
	@Query(() => String, { nullable: true })
	async test() {
		return 'OK';
	}
	@Query(() => Number, { nullable: true })
	async addTask(@Arg('cost') cost: number) {
		const job = await testQueue.add('test-1', { cost });
		const final = await job.finished();
		return final.result;
	}
	@Query(() => Number, { nullable: true })
	async addTaskToSecondProcessor(@Arg('cost') cost: number) {
		const job = await testQueue.add('test-2', { cost });
		const final = await job.finished();
		return final.result;
	}
}
