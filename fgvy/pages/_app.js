import '../styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import '../styles/sidebar.css';
import 'focus-visible/dist/focus-visible';
import { Global, css } from '@emotion/react'

const GlobalStyles = css`
  .js-focus-visible :focus:not([data-focus-visible-added]) {
    outline: none;
    box-shadow: none;
  }
`;

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Global styles={GlobalStyles} />
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
