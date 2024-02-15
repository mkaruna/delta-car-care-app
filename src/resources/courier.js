/*
      1) Install Courier SDK: npm install @trycourier/courier
      2) Make sure you allow ES module imports: Add "type": "module" to package.json file
      */
      import { CourierClient } from "@trycourier/courier";

      const courier = CourierClient(
        { authorizationToken: "pk_prod_MJ0C4XKSXK4XJSK2QCQY31F1DS3Y"});

      const { requestId } = await courier.send({
        message: {
          content: {
            title: "Welcome to Courier!",
            body: "Want to hear a joke? {{joke}}"
          },
          data: {
            joke: "Why was the JavaScript developer sad? Because they didn't Node how to Express themselves"
          },
          to: {
            email: "emaildeltacarcare@gmail.com"
          }
        }
      });