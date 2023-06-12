import express from 'express'
import morgan from 'morgan'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import routerAuth from './routes/auth.routes.js';
import routerTask from './routes/task.routes.js';

const app = express();

app.use(cors({
    origin: 'http://127.0.0.1:5173'
}))
app.use(morgan('dev'));
app.use(express.json())
app.use(cookieParser())

app.use("/api", routerAuth);
app.use("/api", routerTask);

export default app;