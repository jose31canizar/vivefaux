import React from "react";
import Layout from "../components/layout";
import App, { Container } from "next/app";
import { PageTransition } from "next-page-transitions";
import withReduxStore from "../lib/with-redux-store";
import { Provider } from "react-redux";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faCrown,
  faImage,
  faBullhorn,
  faThLarge,
  faStickyNote,
  faPaperclip,
  faUsers,
  faCog,
  faCamera,
  faTh,
  faSpinner,
  faCheck,
  faTimes,
  faHeadphones,
  faMobile,
  faMusic,
  faVideo,
  faUser
} from "@fortawesome/fontawesome-free-solid";
library.add(
  faCrown,
  faImage,
  faBullhorn,
  faThLarge,
  faStickyNote,
  faPaperclip,
  faUsers,
  faCog,
  faCamera,
  faTh,
  faSpinner,
  faCheck,
  faTimes,
  faUser
);

class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps, reduxStore } = this.props;
    return (
      <Container>
        <Provider store={reduxStore}>
          <Layout>
            <PageTransition timeout={500} classNames="page-transition">
              <Component {...pageProps} />
            </PageTransition>
            <style jsx global>{`
              .page-transition-enter {
                transform: translate3d(-100vw, 0, 0);
              }
              .page-transition-enter-active {
                transform: translate3d(0, 0, 0);
                transition: all 500ms;
              }
              .page-transition-exit {
                transform: translate3d(0, 0, 0);
              }
              .page-transition-exit-active {
                transform: translate3d(-100vw, 0, 0);
                transition: all 500ms;
              }
            `}</style>
          </Layout>
        </Provider>
      </Container>
    );
  }
}

export default withReduxStore(MyApp);
