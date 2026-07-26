import Image from "next/image";
import { Battery, MapPin, Sun, Zap } from "lucide-react";
import { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">

      {/* Image */}
      <div className="relative h-72 overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition duration-700 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

        <span className="absolute left-5 top-5 rounded-full bg-green-600 px-4 py-2 text-xs font-bold uppercase tracking-wider text-white shadow-lg">
          {project.category}
        </span>

        <div className="absolute bottom-0 left-0 right-0 p-6">
          <h3 className="text-2xl font-bold text-white drop-shadow-lg">
            {project.title}
          </h3>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">

        <div className="mb-6 flex items-center gap-2 text-slate-500">
          <MapPin className="h-5 w-5" />
          <span>{project.location}</span>
        </div>

        <div className="space-y-4">

          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <div className="flex items-center gap-2">
              <Zap className="h-5 w-5 text-green-600" />
              <span className="text-slate-600">Capacity</span>
            </div>

            <span className="font-semibold text-slate-900">
              {project.capacity}
            </span>
          </div>

          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <div className="flex items-center gap-2">
              <Sun className="h-5 w-5 text-yellow-500" />
              <span className="text-slate-600">Solar Panels</span>
            </div>

            <span className="font-semibold text-slate-900">
              {project.panels}
            </span>
          </div>

          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <div className="flex items-center gap-2">
              <Zap className="h-5 w-5 text-blue-600" />
              <span className="text-slate-600">Inverter</span>
            </div>

            <span className="max-w-[180px] text-right font-semibold text-slate-900">
              {project.inverter}
            </span>
          </div>

          <div className="flex items-start justify-between">
            <div className="flex items-center gap-2">
              <Battery className="mt-1 h-5 w-5 text-emerald-600" />
              <span className="text-slate-600">Battery</span>
            </div>

            <span className="max-w-[180px] text-right font-semibold leading-6 text-slate-900 break-words">
              {project.battery}
            </span>
          </div>

        </div>

      </div>

    </div>
  );
}