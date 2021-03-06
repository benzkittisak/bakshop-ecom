const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require('path');
const compression = require("compression");

require("dotenv").config();

const PORT = process.env.PORT || 6000;
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(compression());
app.use(express.static("public"));

app.listen(PORT, () => {
  console.log("Connected to port 6000");
});

if(process.env.NODE_ENV === 'production'){
  app.use(express.static(path.join(__dirname , 'client/build')))
  app.get('*' , function(req,res){
    res.sendFile(path.join(__dirname , 'client/build' , 'index.html'))
  })
}

app.post("/create-checkout-session", async (req, res) => {
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items: req.body.map((item) => {
        return {
          price_data: {
            currency: "thb",
            product_data: {
              images: [item.imageUrl],
              name: item.name,
            },
            unit_amount: item.price * 100,
          },
          quantity: item.quantity,
        };
      }),
      success_url: `${process.env.SERVER_URL}/success`,
      cancel_url: `${process.env.SERVER_URL}/cancel`,
    });

    res.json({ url: session.url });
  } catch (err) {}
});