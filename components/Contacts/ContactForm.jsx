import { SendEmail } from "@/actions/ServerContactForm";
import { motion } from "framer-motion";
import { useRef } from "react";
import toast from "react-hot-toast";
import GlitchButton from "../Other/GlitchButton";

export default function ContactForm() {
  const formRef = useRef(null);
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{
        duration: 0.5
      }}
      className="p-2 rounded-xl w-full h-full flex flex-col items-center"
    >
      <p className="text-sm font-medium text-center mb-4">
        Contact me directly at{" "}
        <a className="underline" href="mailto:contact@oysturnxvas.com">
          contact@oysturnxvas.com
        </a>{" "}
        or through this form.
      </p>
      <form
        ref={formRef}
        className="flex flex-col gap-2 w-full items-center h-full"
        action={async (formData) => {
          const { data, error } = await SendEmail(formData);
          if (error) {
            toast.error(error);
            return;
          }

          toast.success("Email Sent Successfully");
          formRef.current?.reset();
        }}
      >
        <input
          className="w-full h-14 rounded-lg border border-black/10 p-4 placeholder:text-black/70"
          type="email"
          placeholder="Your Email"
          name="email"
          maxLength={50}
          required
        />
        <input
          className="w-full h-14 rounded-lg border border-black/10 p-4 placeholder:text-black/70"
          type="text"
          placeholder="Your Name"
          name="name"
          maxLength={50}
          required
        />
        <textarea
          className="w-full h-full rounded-lg border border-black/10 p-4 placeholder:text-black/70"
          placeholder="Your Message"
          name="message"
          maxLength={5000}
          required
        />
        <div>
          <GlitchButton />
        </div>
      </form>
    </motion.div>
  );
}
