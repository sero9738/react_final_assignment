import React from "react";
import { GetStaticPropsContext } from "next";
import CreateRoomForm from "../components/CreateRoomForm/CreateRoomForm";

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      messages: (await import(`../messages/en.json`)).default,
    },
  };
}

export default function Create() {
  return <CreateRoomForm />;
}
