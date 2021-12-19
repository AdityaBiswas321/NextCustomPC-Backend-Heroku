import { createRequire } from "module";
const require = createRequire(import.meta.url);

const shippo = require("shippo")(
  "shippo_test_bc716c4f8378e077f4ea4ed1298625f878ccc558"
);

// import shippo from "shippo" "shippo_test_e5313757f80ae6c790b0f8b4133c5735c1cac6cc"

const shipping = async (req, res) => {
  try {
    const {
      user_name,
      user_address,
      user_city,
      user_province,
      user_postal,
      user_country,
      user_email,
    } = req.body;

    const addressFrom = await shippo.address.create({
      name: "Ms Hippo",
      company: "Shippo",
      street1: "215 Clayton St.",
      city: "San Francisco",
      state: "CA",
      zip: "94117",
      country: "US", //iso2 country code
      phone: "+1 555 341 9393",
      email: "support@goshippo.com",
      validate: "true",
    });

    const addressTo = await shippo.address.create({
      name: user_name,
      company: "Test",
      street1: user_address,
      city: user_city,
      state: user_province,
      zip: user_postal,
      country: user_country, //iso2 country code
      phone: "6048163994",
      email: user_email,
      validate: true,
    });
    // const addressTo = {
    //   name: user_name,
    //   company: "Test",
    //   street1: user_address,
    //   city: user_city,
    //   state: user_province,
    //   zip: user_postal,
    //   country: "CA", //iso2 country code
    //   phone: "test",
    //   email: user_email,
    // };
    console.log("ADDRESS TO");
    console.log(addressTo);
    const parcelOne = {
      length: "5",
      width: "5",
      height: "5",
      distance_unit: "in",
      weight: "2",
      mass_unit: "lb",
    };

    // const { addressFrom, addressTo, parcel } = req.body;
    const shipments = await shippo.shipment.create({
      address_from: addressFrom,
      address_to: addressTo,
      parcels: parcelOne,
      async: true,
    });
    console.log("start shipment");
    console.log(shipments);
    console.log("rates start");
    // const rates = await shippo.shipment.rates(shipment);
    console.log("rates start ENDS");

    res.status(200).send(shipments);
  } catch (error) {
    res.status(500).json({ statusCode: 500, message: error.message });
    console.log("it broke");
  }
};

const validate = async (req, res) => {
  try {
    console.log("Request Data");
    console.log(req.body);
    const { validate } = req.body;
    console.log("validation data");
    console.log(validate);

    const validated = await shippo.address.validate(
      validate,
      function (err, address) {
        console.log(address);
        console.log(err);
      }
    );

    console.log("validated");
    console.log(validated);

    res.status(200).send(validated);
  } catch (error) {
    res.status(500).json({ statusCode: 500, message: error.message });
    console.log("it broke");
  }
};

export { shipping, validate };
