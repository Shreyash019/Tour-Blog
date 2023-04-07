const mongoose  = require('mongoose');


const orderSchema = new mongoose.Schema({
    orderByUserInfo: {
        address: {
            type: String,
            required: true
        },
        city:{
            type: String,
            required: true
        },
        state: {
            type: String,
            required: true
        },
        country:{
            type: String,
            required: true,
            default: 'India',
        },
        pinCode:{
            type: Number,
            required: true,

        },
        phoneNo: {
            type: Number,
            required:true
        }
    },
    orderItems:[
        {
            name: {
                type: String,
                required: true,
            },
            price:{
                type: Number,
                required: true,
            },
            quantity:{
                type: Number,
                required: true,
            },
            image:{
                type: String,
                required: true,
            },
            tour:{
                type: mongoose.Schema.ObjectId,
                ref: "Tour",
                required: true,
            },
        }
    ],
    user:{
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: true
    },
    paymentInfo:{
        id:{
            type: String,
            required: true
        },
        status:{
            type: String,
            required: true,
        }
    },
    paidAt: {
        type: Date,
        required: true,
    },
    itemsPrice: {
        type: Number,
        required: true,
        default: 0,
    },
    taxPrice: {
        type: Number,
        required: true,
        default: 0,
    },
    totalPrice: {
        type: Number,
        required: true,
        default: 0,
    },
    orderStatus:{
        type: String,
        required: true,
        default: "Processing",
    },
    orderedAt: Date,
    createdAt: {
        type: Date,
        default: Date.now()
    }
});



const OrderModel = mongoose.model('OrderModel', orderSchema);
module.exports = OrderModel;