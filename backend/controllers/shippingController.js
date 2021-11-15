import { createRequire } from "module";
const require = createRequire(import.meta.url);

const shippo = require("shippo")(
  "shippo_test_bc716c4f8378e077f4ea4ed1298625f878ccc558"
);

// import shippo from "shippo" "shippo_test_e5313757f80ae6c790b0f8b4133c5735c1cac6cc"

const shipping = async (req, res) => {
  try {
    const addressFrom = {
      name: "Ms Hippo",
      company: "Shippo",
      street1: "215 Clayton St.",
      city: "San Francisco",
      state: "CA",
      zip: "94117",
      country: "US", //iso2 country code
      phone: "+1 555 341 9393",
      email: "support@goshippo.com",
    };
    const addressTo = {
      name: "Ms Hippo",
      company: "Shippo",
      street1: "6242 Inverness St.",
      city: "Vancouver",
      state: "BC",
      zip: "V5W3P9",
      country: "CA", //iso2 country code
      phone: "+1 555 341 9393",
      email: "support@goshippo.com",
    };
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
    console.log("it broke btich");
  }
};

export { shipping };
