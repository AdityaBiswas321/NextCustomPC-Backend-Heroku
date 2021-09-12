import Stripe from "stripe";

const stripe = new Stripe(process.env.SECRET_KEY);

const paymentIntents = (req, res) => {
  if (req.method === "POST") {
    try {
      const { amount } = req.body;

      const paymentIntent = await stripe.paymentIntent.create({
        amount,
        currency: "cad",
      });
      res.status(200).send(paymentIntent.client_secret);
    } catch (error) {
      res.status(500).json({ statusCode: 500, message: error.message });
    }
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
};
