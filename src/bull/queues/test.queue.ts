import Queue from 'bull';

const testProcessor = require('../processors/test.processor');
const test2Processor = require('../processors/anotherTest.processor');

import { opts } from '../redis';

export const testQueue = new Queue('loadbalancer', { ...opts, prefix: '{test}' });

testQueue.process('test-1', 7, testProcessor);
testQueue.process('test-2', 5, test2Processor);
