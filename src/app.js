import express from "express";
import path from "path";
import cookieParser from "cookie-parser";
import logger from "morgan";
import indexRouter from "./routes";
import cors from "cors";
import {createServer} from "http";

import {port} from "./env";

const app = express();
app.use(cors());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);

const server = createServer(app);

server.listen(port, '0.0.0.0');
server.on('listening', () => {
    console.log('Express src started on port %s at %s', server.address().port, server.address().address);
});
