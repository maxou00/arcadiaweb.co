import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { ThemeProvider } from "@emotion/react";
import appTheme from "../src/theming";
import { Footer } from "../src/sections/Footer";
import { MouseTracker } from "../src/components/MouseTracker";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="app">
      <ThemeProvider theme={appTheme}>
        <Component {...pageProps} />
        <MouseTracker/>
        <Footer />
      </ThemeProvider>
    </div>
  );
}
