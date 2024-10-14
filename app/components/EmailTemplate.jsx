import React from "react";
import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Text,
} from "@react-email/components";
export default function EmailTemplate({ message }) {
  return (
    <Html>
      <Head />
      <Preview>Thank you for joininig our news letter.</Preview>
      <Body>
        <Container className="m-auto-white">
          <Heading className="my-2 text-2xl">Beaula Newsletter</Heading>
          <Text className="mx-2 my-2 text-xl">{message}</Text>
        </Container>
      </Body>
    </Html>
  );
}
