import express from 'express';
import morgan from 'morgan'
import paymentRoutes from '../src/routes/payment.routes.js';
import {PORT} from '../src/routes/config.js';


const app = express();

app.use(morgan('dev'));

app.use(paymentRoutes);

app.listen(PORT);
console.log('Server on port', PORT);