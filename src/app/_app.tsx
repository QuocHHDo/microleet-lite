import type { AppProps } from 'next/app';
import '../styles/globals.css';
import RootLayout from './layout';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RootLayout>
      <Component {...pageProps} />
    </RootLayout>
  );
}

export default MyApp;
