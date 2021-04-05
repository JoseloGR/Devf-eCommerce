import { Fragment } from "react";
import Head from "next/head";
import Navigation from "./navigation";

export default function Container(props) {
  return (
    <Fragment>
      <Head>
        <title>Devf - eCommerce</title>
        <link href="https://fonts.googleapis.com/css2?family=Rajdhani:wght@700&display=swap"
          rel="stylesheet"
          key="font" />
      </Head>
      <Navigation profile={props.profile}/>
      <div className="container mx-auto mt-10">
        {props.children}
      </div>
    </Fragment>
  );
}