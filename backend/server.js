const cors = require("cors");
const express = require("express");
const uuid = require("uuid/v4");
const dotenv = require("dotenv");

dotenv.config();

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    res.send("Add your Stripe Secret Key to the .require('stripe') statement!");
  });

app.post("/payment", async (req, res) => {

  let error;
  let status;
  try {
    const { amount, token, phone, description, credits } = req.body;

    console.log("amount: " + amount);
    console.log("phone: " + phone);
    console.log("description: " + description);
    console.log("credits: " + credits);
    console.log("Email: " + token.email);

    const customer = await stripe.customers.create({
      email: token.email,
      source: token.id
    });

    const idempotency_key = uuid();
    const charge = await stripe.charges.create(
      {
        amount: amount,
        currency: "usd",
        customer: customer.id,
        receipt_email: token.email,
        description: description,
        receipt_email: token.email
      },
      {
        idempotency_key
      }
    );
    status = "success";
  } catch (error) {
    console.error("Error:", error);
    status = "failure";
  }

  res.json({ error, status });
});

app.listen(8080, () => console.log("Listening on port 8080"));