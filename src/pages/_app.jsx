import React from 'react';
import App from 'next/app';
import store from '@/redux/store';

const defaultSEO = {
  title: "Title page",
  description: "Description page",
  openGraph: {},
  twitter: {}
}

class MyApp extends App {
  static getInitialProps = async ({Component, ctx}) => {
    return {
      pageProps: {
        // Call page-level getInitialProps
        ...(Component.getInitialProps ? await Component.getInitialProps(ctx) : {}),
        // Some custom thing for all pages
        pathname: ctx.pathname
      },
    };
  };

  render() {
    const {Component, pageProps} = this.props;

    return (
      <Component {...pageProps} SEO={defaultSEO} />
    );
  }
}

export default store.withRedux(MyApp)