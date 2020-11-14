const functions = require('firebase-functions');
const express = require("express")
const cors = require("cors")
const stripe = require("stripe")('sk_test_51HksCAHZXnWZzP1euUqCBnVKx9zKflc5DF1MZTnnrdqjtd4eL0QOxfT9pN17manAuMVOEyyebvF8CpzoUmZ1XNlt00Xk0l9b6L')

const app = express();

app.use(cors({origin: true}));

app.use(express.json());

app.post('/payments/create', async (request, response) => {
    const total = request.query.total;

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total, // subunits of the currency
        currency: "usd",
    });

    response.status(201).send({
        clientSecret : paymentIntent.client_secret,
    })
})

exports.api = functions.https.onRequest(app)