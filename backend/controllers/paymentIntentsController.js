import Stripe from "stripe";

const stripe = new Stripe(
  "sk_test_51JYnmdLGF4kichPF2cEiHEXVu1y7LeWfuAA1f8XW2vuNhFAQ7zJ1ECGnIPn9aywRsrfQzU5f0ZEQok32WELpNdgl00h6YnFCkh"
);

const paymentIntents = async (req, res) => {
  if (req.method === "POST") {
    try {
      const { amount } = req.body;
      console.log(amount);
      const paymentIntent = await stripe.paymentIntents.create({
        amount,
        currency: "cad",
      });
      console.log(paymentIntent);
      res.status(200).send(paymentIntent.client_secret);
    } catch (error) {
      res.status(500).json({ statusCode: 500, message: error.message });
    }
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
};

export { paymentIntents };
