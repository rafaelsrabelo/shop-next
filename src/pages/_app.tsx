import { globalStyles } from '@/styles/global'
import { Container, Header } from '@/styles/pages/app';
import type { AppProps } from 'next/app'
import logo from './../assets/Logo.svg';
import Image from 'next/image';

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        <Image src={logo} alt='Image' />      
      </Header>
      <Component {...pageProps} />
    </Container>
  )
}
