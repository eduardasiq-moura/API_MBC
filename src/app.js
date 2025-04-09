import express from 'express';
import routes from './routes.js'; // ou './app/routes.js', dependendo de onde estão

const app = express();

app.use(express.json());
app.use(routes);

export default app;
