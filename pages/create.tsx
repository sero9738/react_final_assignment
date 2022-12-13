import React from "react";
import Head from "next/head";
import CreateRoomForm from "../components/CreateRoomForm/CreateRoomForm";
import { GetStaticPropsContext } from "next";

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      messages: (await import(`../messages/en.json`)).default,
    },
  };
}

export default function Create() {
  return (
    <div>
      <Head>
        <title>Room Rentals - Create</title>
      </Head>
      <CreateRoomForm />
    </div>
  );
}
