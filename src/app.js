import express from "express";
import cookieParser from "cookie-parser";
import logger from "morgan";
import indexRouter from "./routes";
import cors from "cors";
import {createServer} from "http";

import {port} from "./env";
import {initializeMongoose} from "./repository/connection";
import customerRouter from "./routes/customer";
import animalRouter from "./routes/animal";
import serviceRouter from "./routes/service";
import orderRouter from "./routes/order";

const app = express();
app.use(cors());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());

initializeMongoose();

app.use('/', indexRouter);
app.use('/customer', customerRouter);
app.use('/animal', animalRouter);
app.use('/service', serviceRouter);
app.use('/order', orderRouter);

const server = createServer(app);

server.listen(port, '0.0.0.0');
server.on('listening', () => {
    console.log('Express src started on port %s at %s', server.address().port, server.address().address);
});
