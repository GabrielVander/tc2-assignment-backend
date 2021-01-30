import {model} from "mongoose";
import {AnimalSchema, CustomerSchema, OrderSchema, ServiceSchema} from "../schema";

export const CustomerModel = model('Customer', CustomerSchema);
export const AnimalModel = model('Animal', AnimalSchema);
export const ServiceModel = model('Service', ServiceSchema);
export const OrderModel = model('Order', OrderSchema);
    
