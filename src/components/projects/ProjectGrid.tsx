import { getWebsiteProjects } from "@/lib/website-cms-api";
import ProjectCard from "./ProjectCard";

const API_URL =
  process.env.NEXT_PUBLIC_API_URL ||
  "http://localhost:5001";

function getImageUrl(
  image: string | null | undefined,
) {
  if (!image) return "";

  if (
    image.startsWith("http://") ||
    image.startsWith("https://")
  ) {
    return image;
  }

  if (image.startsWith("/website-cms/uploads/")) {
    return `${API_URL}${image}`;
  }

  return image;
}

export default async function ProjectGrid() {
  const cmsProjects = await getWebsiteProjects();

  const projects = cmsProjects
    .filter((project: any) => project.isPublished)
    .map((project: any) => ({
      id: project.id,
      category: project.category,
      title: project.title,
      location: project.location,
      capacity: project.capacity,
      panels: project.panels,
      inverter: project.inverter,
      battery: project.battery,
      image: getImageUrl(project.image),
    }));

  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-16 text-center">
          <h2 className="text-5xl font-black text-slate-900">
            Completed Projects
          </h2>

          <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-green-500" />

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            Explore our completed solar energy, electrical and backup power
            projects across Myanmar.
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project: any) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}
        </div>

      </div>
    </section>
  );
}