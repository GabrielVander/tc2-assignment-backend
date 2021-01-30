import {Schema} from "mongoose";

export const CustomerSchema = new Schema(
    {
        name: String,
        cpf: String,
        _animals: [{type: Schema.Types.ObjectId, ref: 'Animal'}]
    },
    {
        timestamps: true,
    });

export const AnimalSchema = new Schema(
    {
        name: String,
        age: Number,
        weight: Number,
        race: String,
        type: String,
    },
    {
        timestamps: true,
    });

export const ServiceSchema = new Schema(
    {
        name: String,
        totalPrice: Number,
    },
    {
        timestamps: true,
    });

export const OrderSchema = new Schema(
    {
        _customer: { type: Schema.Types.ObjectId, ref: 'Customer' },
        _animals: [{type: Schema.Types.ObjectId, ref: 'Animal'}],
        _services: [{type: Schema.Types.ObjectId, ref: 'Service'}],
        totalPrice: Number,
    },
    {
        timestamps: true,
    });
