import http from 'http';
import { ApolloServer } from 'apollo-server-express';
import cors = require('cors');
import 'dotenv';
import express from 'express';
import 'reflect-metadata';

import { createSchema } from './utils/createSchema';
import * as config from './utils/config';
import { IContext } from './types/IContext';

export const main = async () => {
	const schema = await createSchema();
	const apolloServer = new ApolloServer({
		schema,
		context: ({ req, res }): IContext => ({ req, res }),
		playground: true
	});

	const app = express();
	const corsOptions: cors.CorsOptions = {
		origin: `${config.CORS_URL}`,
		credentials: true
	};
	const port = Number(config.PORT);

	apolloServer.applyMiddleware({ app, cors: corsOptions });

	const httpServer = http.createServer(app);

	apolloServer.installSubscriptionHandlers(httpServer);

	httpServer.listen(port, () => {
		console.log(`🚀 Server is ready on http://localhost:${port}${apolloServer.graphqlPath}`);
	});
};

main().catch((error) => console.error(error));
