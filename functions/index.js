const functions = require('firebase-functions');
const express = require("express");
const cors = require("cors");

const stripe = require("stripe")
('sk_test_51HPvXaGnxD8M48ZsTlUaekyWhrWDEQFaPn2bpVRtXjNHMnIimFfubls73AcRmt5MDfh4Evmtt0gYBrCH025cLgav00Az7YWSdh')

// API

// - App config
const app = express();

// - Middlewares
 app.use(cors({origin:true}));
 app.use(express.json());
// - API routes
app.get('/', (request, response) => response.status(200).send('hello world'))

app.post('/payments/create', async (request, response) => {
 const total = request.query.total;
 console.log('Payment Request Received BOOM!!! for this amount >>> ', total)

 const paymentIntent = await stripe.paymentIntent.create({
  amount: total, // subunits of the currency
  currency: "usd",
 });

 // OK - Created
 response.status(201).send({
  clientSecret: paymentIntent.client_secret
 })
})
// - Listen command
exports.api = functions.https.onRequest(app);

// Example endpoint
// http://localhost:5001/clone-b2521/us-central1/api
