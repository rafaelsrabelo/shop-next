import { globalStyles } from '@/styles/global'
import { Container, Header } from '@/styles/pages/app';
import type { AppProps } from 'next/app'
import logo from './../assets/Logo.svg';

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        <img src={logo.src} alt="" />        
      </Header>
      <Component {...pageProps} />
    </Container>
  )
}
