import 'reflect-metadata';
import express from 'express';
import { InversifyExpressServer } from 'inversify-express-utils';
import { container } from './config/container';
import exchangeRoutes from './routes/exchangeRoutes';

const app = express();

app.use(express.json());
app.use('/', exchangeRoutes);

const server = new InversifyExpressServer(container, null, { rootPath: '/' });
const appRouter = server.build();
app.use(appRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

export default app;
