import type { AppProps } from 'next/app'
import { SessionProvider } from "next-auth/react"

import Principal from "./principal/page";
import Header from "@/components/header/page";

export default function Home({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session}>
      <Header />
      <Principal />
      <Component {...pageProps} />
    </SessionProvider>
  );
}
