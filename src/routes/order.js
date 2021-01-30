import {Router} from "express";

import CRUD from "easy-express-crud-generator";
import {OrderModel} from "../repository/model";

const orderRouter = new CRUD(OrderModel).getRouter(Router());

export default orderRouter;
