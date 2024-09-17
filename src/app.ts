import cookieParser from 'cookie-parser';
import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import { ProductRoutes } from './app/modules/products/product.route';
import { cartRoutes } from './app/modules/cart/cart.route';

const app: Application = express();

//parsers
app.use(express.json());
app.use(cookieParser());
app.use(cors({ origin: ['http://localhost:5173','https://keyboard-master-client-side.vercel.app'], credentials: true }));
// application routes
//app.use('/api/v1', router);

app.get('/', (req: Request, res: Response) => {
  res.send('Hi , keyboard lovers');
});

app.use('/',ProductRoutes)
app.use('/',cartRoutes)

//Not Found
// app.use(notFound);

export default app;