"use server";

import { Resend } from "resend";
import ContactFormEmail from "@/components/EmailTemplates/ContactFormEmail";

const resend = new Resend(process.env.RESEND_API_KEY);

function validateString(value, maxLength) {
  if (!value || value.length > maxLength) {
    return false;
  }
  return true;
}

function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export async function SendEmail(formData) {
  const message = formData.get("message");
  const senderEmail = formData.get("email");
  const name = formData.get("name");

  if (!validateString(senderEmail, 50) || !validateEmail(senderEmail)) {
    return {
      error: "Invalid Email"
    };
  }
  if (!validateString(name, 50)) {
    return {
      error: "Invalid Name"
    };
  }
  if (!validateString(message, 5000)) {
    return {
      error: "Invalid Message"
    };
  }

  try {
    const { data, error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: "oysturnxvas@gmail.com",
      subject: "Message from Portfolio Contact form",
      reply_to: senderEmail,
      react: <ContactFormEmail message={message} senderEmail={senderEmail} />
    });

    if (error) {
      return {
        error: error.message
      };
    }

    return data;
  } catch (error) {
    return {
      error: error.message
    };
  }
}
