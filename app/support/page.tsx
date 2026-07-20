import type { Metadata } from "next";
import { Container } from "@/components/shared/Container";
import { PageHeader } from "@/components/shared/PageHeader";
import { SupportClient } from "./SupportClient";

export const metadata: Metadata = {
  title: "Help Center",
  description:
    "Find answers to your Talery questions. Search help articles, browse support categories, and get assistance with your account.",
};

export default function SupportPage() {
  return (
    <main className="min-h-screen">
      <PageHeader
        badge="Support"
        title="How Can We Help?"
        subtitle="Search our knowledge base, browse help categories, and find answers to common questions about Talery."
      />
      <Container>
        <SupportClient />
      </Container>
    </main>
  );
}
