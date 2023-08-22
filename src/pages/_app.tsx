/*
 *
 * Title: Ps Solanki Portoflio Website
 * Description: --
 * Author: Redwan Ahmed
 * Date: 22 August 2023 (Tuesday)
 *
 */

import Layout from "@/components/Layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
