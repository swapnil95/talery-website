import type { Metadata } from "next";
import { Container } from "@/components/shared/Container";
import { PageHeader } from "@/components/shared/PageHeader";
import { ContactForm } from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with the Talery team. Whether you have a question, partnership idea, or just want to say hello, we would love to hear from you.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <PageHeader
        badge="Contact"
        title="Let Us Connect"
        subtitle="Have a question, idea, or partnership opportunity? Our team is ready to help you explore the world with Talery."
      />
      <Container>
        <ContactForm />
      </Container>
    </main>
  );
}
