const router = require('express').Router();
const stripe = require('stripe')("sk_test_ezPPVMdM2Uhwy1ETBLL0lSwf00qMaBZLHx");
const uuid = require("uuid/v4");

router.route('/payment').post(async (req, res) => {
    console.log(req.body);

    const customer = await stripe.customers.create({
        email: tocken.email,
        source: tocken.id
    });

    const idempotency_key = uuid();
    const charge = await stripe.charges.create({
        amount: amount,

    });

    return res.json("This message was sent from the backend");
});

module.exports = router;