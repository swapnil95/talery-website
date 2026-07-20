import { Container } from "@/components/shared/Container";
import { ScrollReveal } from "@/components/shared/ScrollReveal";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  badge?: string;
}

export function PageHeader({
  title,
  subtitle,
  centered = true,
  badge,
}: PageHeaderProps) {
  return (
    <section className="pt-36 pb-16 md:pt-44 md:pb-24 relative overflow-hidden">
      <div className="absolute inset-0 mesh-gradient opacity-40" />
      <Container className="relative z-10">
        <ScrollReveal className={centered ? "text-center max-w-3xl mx-auto" : "max-w-3xl"}>
          {badge && (
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              {badge}
            </span>
          )}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            {title}
          </h1>
          {subtitle && (
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              {subtitle}
            </p>
          )}
        </ScrollReveal>
      </Container>
    </section>
  );
}
