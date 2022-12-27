import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { ThemeProvider } from "@emotion/react";
import appTheme from "../src/theming";
import { Footer } from "../src/sections/Footer";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="app">
      <ThemeProvider theme={appTheme}>
        <Component {...pageProps} />
        <Footer />
      </ThemeProvider>
    </div>
  );
}
