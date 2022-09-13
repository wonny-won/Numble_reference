import { AppProps } from "next/app";
import Layout from "../src/components/commons/layout";
import "../styles/globals.css";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import Head from "next/head";

const cache = new InMemoryCache();

function MyApp({ Component, pageProps }: AppProps) {
  const client = new ApolloClient({
    uri: "http://practice.codebootcamp.co.kr/graphql",
    cache,
  });

  return (
    <>
      <Head>
        <title>딩코 :: NO.1 부트캠프에서 만든 코딩 클래스</title>
        <meta property="og:title" content="코드캠프 x 넘블 코딩 Challenge!!" />
        <meta
          property="og:description"
          content="No.1 부트캠프에서 만든 실전 취업용 포트폴리오 챌린지"
        />
        <meta property="og:image" content="/images/codecamp.webp" />
      </Head>
      <ApolloProvider client={client}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ApolloProvider>
    </>
  );
}

export default MyApp;
