import React, { useMemo, useEffect } from "react";
import Layout from "~/components/layout";
// import App from "next/app";
import AppStore from "~/stores/app";
import { Provider, useStaticRendering } from "mobx-react";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const ELEMENTS_OPTIONS = {
  fonts: [
    {
      cssSrc: "https://fonts.googleapis.com/css?family=Roboto",
    },
  ],
};

const stripePromise = loadStripe("pk_test_TVYvKRSko3HzQGaRlIwmiNKQ00lLbSWxNj");

const theme = {
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64],
  colors: {
    blue: "#000",
  },
  space: [0, 4, 8, 16, 32, 64, 128, 256],
  fonts: {
    sans: "SF-Pro",
  },
  shadows: {
    small: "0 0 4px rgba(0, 0, 0, .125)",
    large: "0 0 24px rgba(0, 0, 0, .125)",
  },
};

const GlobalStyle = createGlobalStyle`
        @font-face {
          font-family: '${({ fontName }) => fontName}';
          src: url("https://applesocial.s3.amazonaws.com/assets/styles/fonts/sanfrancisco/sanfranciscodisplay-regular-webfont.woff");
          // src: url('static/fonts/SF-Pro-Display-Regular.otf') format('otf');
          font-weight: normal;
          font-style: normal;
        }
        @font-face {
          font-family: '${({ fontName }) => fontName}';
          src: url("https://applesocial.s3.amazonaws.com/assets/styles/fonts/sanfrancisco/sanfranciscodisplay-medium-webfont.woff");
          // src: url('static/fonts/SF-Pro-Display-Regular.otf') format('otf');
          font-weight: 300;
        }
        @font-face {
          font-family: '${({ fontName }) => fontName}';
          // src: url('static/fonts/SF-Pro-Display-Regular.otf') format('otf');
          font-weight: 500;
        }
        @font-face {
          font-family: '${({ fontName }) => fontName}';
          src: url("https://applesocial.s3.amazonaws.com/assets/styles/fonts/sanfrancisco/sanfranciscodisplay-semibold-webfont.woff");
          // src: url('static/fonts/SF-Pro-Display-Regular.otf') format('otf');
          font-weight: 700;
        }
        @font-face {
          font-family: '${({ fontName }) => fontName}';
          src: url("https://applesocial.s3.amazonaws.com/assets/styles/fonts/sanfrancisco/sanfranciscodisplay-bold-webfont.woff");
          // src: url('static/fonts/SF-Pro-Display-Regular.otf') format('otf');
          font-weight: 900;
        }
        ${
          "" /* body {
          margin: 0;
          overflow-y: scroll;
          background-color: #000;
        } */
        }
        ${
          "" /* html {
          width: 100%;
          position: absolute;
          overflow-x: hidden;
          -webkit-overflow-scrolling: touch;
          -webkit-tap-highlight-color: transparent;
        } */
        }
        h1,
        h2,
        h3,
        h4,
        h5,
        h6,
        p,
        li,
        ul,
        a {
          font-family: "SF-Pro";
          font-weight: 100;
          letter-spacing: 0.02rem;
          margin: 0;
          padding: 0;
          user-select: none;
          color: #555056;
        }

        *,
        *:before,
        *:after {
          box-sizing: border-box;
        }

        input,
        button {
          -webkit-appearance: none;
          -moz-appearance: none;
          appearance: none;
          outline: none;
          border-style: none;
        }

        html {
          background-color: #6772e5;
          font-size: 16px;
          font-family: Roboto, Open Sans, Segoe UI, sans-serif;
          font-weight: 500;
          font-style: normal;
          text-rendering: optimizeLegibility;
          height: 100%;
        }

        body {
          height: 100%;
          margin: 0;
        }

        #root {
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }




form {
  max-width: 800px;
  margin: 80px auto;
  display: flex;
  width: 100%;
  flex-direction: column;
}

label {
  color: #6b7c93;
  font-weight: 300;
  letter-spacing: 0.025em;
  margin-top: 16px;
  display: block;
}

button {
  white-space: nowrap;
  border: 0;
  outline: 0;
  display: inline-block;
  height: 40px;
  line-height: 40px;
  padding: 0 14px;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  color: #fff;
  border-radius: 4px;
  font-size: 15px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.025em;
  background-color: #d44d44;
  text-decoration: none;
  -webkit-transition: all 150ms ease;
  transition: all 150ms ease;
  margin-top: 10px;
}

button:hover {
  color: #fff;
  cursor: pointer;
  background-color: #b35f59;
  transform: translateY(-1px);
  box-shadow: 0 7px 14px rgba(50, 50, 93, 0.1), 0 3px 6px rgba(0, 0, 0, 0.08);
}

button[disabled] {
  opacity: 0.6;
}

input {
  display: block;
  border: none;
  font-size: 18px;
  margin: 10px 0 20px 0;
  max-width: 100%;
  padding: 10px 14px;
  box-shadow: rgba(50, 50, 93, 0.14902) 0px 1px 3px,
    rgba(0, 0, 0, 0.0196078) 0px 1px 0px;
  border-radius: 4px;
  background: white;
  color: #424770;
  letter-spacing: 0.025em;
  width: 500px;
}

input::placeholder {
  color: #aab7c4;
}

.result,
.error {
  font-size: 16px;
  font-weight: bold;
  margin-top: 10px;
  margin-bottom: 20px;
}

.error {
  color: #e4584c;
}

.result {
  color: #666ee8;
}

.StripeElement {
  height: 40px;
  padding: 10px 12px;
  width: 100%;
  color: #32325d;
  background-color: white;
  border: 1px solid transparent;
  border-radius: 4px;

  box-shadow: 0 1px 3px 0 #e6ebf1;
  -webkit-transition: box-shadow 150ms ease;
  transition: box-shadow 150ms ease;
}

.StripeElement--focus {
  box-shadow: 0 1px 3px 0 #cfd7df;
}

.StripeElement--invalid {
  border-color: #fa755a;
}

.StripeElement--webkit-autofill {
  background-color: #fefde5 !important;
}
      `;

const isServer = typeof window === "undefined";
useStaticRendering(isServer);

export default function MyMobxApp({ Component, pageProps }) {
  const store = useMemo(() => {
    return AppStore;
  }, []);

  useEffect(() => {
    // If your page has Next.js data fetching methods returning a state for the Mobx store,
    // then you can hydrate it here.
    const { initialState } = pageProps;
    if (initialState) {
      store.hydrate(initialState);
    }
  }, [store, pageProps]);

  return (
    <Provider store={store}>
      <GlobalStyle fontName="SF-Pro" />
      <ThemeProvider theme={theme}>
        <Elements stripe={stripePromise} options={ELEMENTS_OPTIONS}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </Elements>
      </ThemeProvider>
    </Provider>
  );
}
