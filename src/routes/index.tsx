import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Hero } from "@/components/garden/Hero";
import { StudioSection } from "@/components/garden/StudioSection";
import { PurposeSection } from "@/components/garden/PurposeSection";
import { ExperienceSection } from "@/components/garden/ExperienceSection";
import { IncludedSection } from "@/components/garden/IncludedSection";
import { ValueSection } from "@/components/garden/ValueSection";
import { ScarcitySection } from "@/components/garden/ScarcitySection";
import { AudienceSection } from "@/components/garden/AudienceSection";
import { FinalCTA } from "@/components/garden/FinalCTA";
import { ApplicationModal } from "@/components/garden/ApplicationModal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Garden Camp | Imersão Criativa no Garden Studio" },
      {
        name: "description",
        content:
          "Uma imersão presencial no Garden Studio para artistas, compositores, cantores e criativos da música cristã. Dia 6 de Junho em Vinhedo, São Paulo.",
      },
      { property: "og:title", content: "Garden Camp | Seleção Oficial" },
      {
        property: "og:description",
        content:
          "Viva um dia inteiro de composição, gravação, conexão e videoclipe no Garden Studio.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  const [open, setOpen] = useState(false);
  const apply = () => setOpen(true);

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Hero onApply={apply} />
      <StudioSection />
      <PurposeSection />
      <ExperienceSection />
      <IncludedSection />
      <ValueSection onApply={apply} />
      <ScarcitySection />
      <AudienceSection />
      <FinalCTA onApply={apply} />
      <ApplicationModal open={open} onOpenChange={setOpen} />
    </main>
  );
}
