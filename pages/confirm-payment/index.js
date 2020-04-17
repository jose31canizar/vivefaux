import { Component, useState } from "react";
import { Box, Text, CardSection, Spinner } from "~/components";
import { withSize } from "~/hocs";
import { withRouter } from "next/router";
import { Spring } from "react-spring/renderprops.cjs";
import { BREAKPOINTS } from "~/constants";
import styled from "styled-components";
import { compose } from "~/helpers";
import { observer } from "mobx-react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import AppStore from "~/stores/app";

const StyledBox = styled(Box)`
  width: 100%;
  height: 100vh;
`;

const StyledButton = styled.button`
  justify-content: center;
  align-items: center;
  display: flex;
`;

const CheckoutForm = observer((props) => {
  const stripe = useStripe();
  const elements = useElements();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event) => {
    // We don't want to let default form submission happen here,
    // which would refresh the page.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    setIsLoading(true);
    const result = await stripe.confirmCardPayment(AppStore.clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: "Jenny Rosen",
        },
      },
    });

    if (result.error) {
      // Show error to your customer (e.g., insufficient funds)
      console.log(result.error.message);
    } else {
      // The payment has been processed!
      if (result.paymentIntent.status === "succeeded") {
        setIsLoading(false);
        // Show a success message to your customer
        // There's a risk of the customer closing the window before callback
        // execution. Set up a webhook or plugin to listen for the
        // payment_intent.succeeded event that handles any business critical
        // post-payment actions.
        props.router.push("/payment-success");
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardSection />
      <StyledButton disabled={!stripe}>
        {isLoading ? <Spinner color="white" /> : "Confirm order"}
      </StyledButton>
    </form>
  );
});

class ConfirmPayment extends Component {
  render() {
    return (
      <Spring
        from={{ transform: `translate3d(-100vw,0,0)` }}
        to={{ transform: `translate3d(0vw,0,0)` }}
      >
        {(props) => (
          <StyledBox bg="#fff" style={props} flex jcenter acenter column>
            <Text color="#999">
              Enter your credit card details below to buy the album:
            </Text>
            <CheckoutForm {...this.props} />
          </StyledBox>
        )}
      </Spring>
    );
  }
}

export default compose(withSize, withRouter)(ConfirmPayment);
