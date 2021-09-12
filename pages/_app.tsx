import type { AppProps } from 'next/app';
import Head from 'next/head';
import Footer from '../components/footer';
import Nav from '../components/nav';
import { DefaultSeo } from 'next-seo';
import { appWithTranslation } from 'next-i18next';

import '../styles/global.scss';

function MyApp({ Component, pageProps, router }: AppProps) {
  const url = `https://cn.pycon.org/2021${router.route}`;
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/2021/logo.png" />
      </Head>

      <DefaultSeo
        titleTemplate="%s - PyCon China 2021"
        openGraph={{
          type: 'website',
          url,
          images: [],
        }}
        canonical={url}
      />
      <header>
        <Nav />
      </header>
      <Component {...pageProps} />
      <footer className="footer">
        <Footer />
      </footer>
    </>
  );
}
export default appWithTranslation(MyApp);
