import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text
} from "@react-email/components";
import * as React from "react";
import { Tailwind } from "@react-email/components";

export default function ContactFormEmail({ message, senderEmail }) {
  return (
    <Html>
      <Head />
      <Preview>New Message from your portfolio site</Preview>
      <Tailwind>
        <Body className="bg-gray-100 text-black">
          <Container>
            <Section className="bg-white my-10 px-10 py-4 rounded-lg">
              <Heading className="leading-tight">
                You received the following message from the contact form
              </Heading>
              <Hr />
              <Text>{message}</Text>
              <Hr />
              <Text>The Sender's Email is {senderEmail}</Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
