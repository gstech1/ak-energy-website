import type { Metadata } from "next";
import ProjectsHero from "@/components/projects/ProjectsHero";
import ProjectGrid from "@/components/projects/ProjectGrid";

export const metadata: Metadata = {
  title: "Projects | Arkar Min Thukha Electro Trading Co., Ltd.",
  description:
    "Explore our completed solar, electrical and backup power projects across Myanmar.",
};

export default function ProjectsPage() {
  return (
    <main>
      <ProjectsHero />
      <ProjectGrid />
    </main>
  );
}