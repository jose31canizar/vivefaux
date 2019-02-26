import React from "react";
import Layout from "../components/layout";
import App, { Container } from "next/app";
import { PageTransition } from "next-page-transitions";
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
  faVideo
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
  faTimes
);

export default class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <Layout>
          <PageTransition timeout={300} classNames="page-transition">
            <Component {...pageProps} />
          </PageTransition>
          <style jsx global>{`
            .page-transition-enter {
              opacity: 0;
            }
            .page-transition-enter-active {
              opacity: 1;
              transition: opacity 300ms;
            }
            .page-transition-exit {
              opacity: 1;
            }
            .page-transition-exit-active {
              opacity: 0;
              transition: opacity 300ms;
            }
          `}</style>
        </Layout>
      </Container>
    );
  }
}
