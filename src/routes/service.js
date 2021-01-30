import {Router} from "express";

import CRUD from "easy-express-crud-generator";
import {ServiceModel} from "../repository/model";

const serviceRouter = new CRUD(ServiceModel).getRouter(Router());

export default serviceRouter;
