import {CustomerModel} from "../repository/model";
import {Router} from "express";

import CRUD from "easy-express-crud-generator";

const customerRouter = new CRUD(CustomerModel).getRouter(Router());

export default customerRouter;
