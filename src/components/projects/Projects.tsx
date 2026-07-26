"use client";

// ==========================================
// IMPORTS
// ==========================================

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  Zap,
  Sun,
  Battery,
} from "lucide-react";

import SectionTitle from "@/components/common/SectionTitle";
import { projects } from "@/data/projects";

// ==========================================
// COMPONENT
// ==========================================

export default function Projects() {

  // ==========================================
  // AUTO ROTATE
  // ==========================================

  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {

    const timer = setInterval(() => {

      setStartIndex((prev) => {

        const next = prev + 3;

        return next >= projects.length
          ? 0
          : next;

      });

    }, 8000);

    return () => clearInterval(timer);

  }, []);

  // ==========================================
  // SHOW ONLY 3 PROJECTS
  // ==========================================

  const displayProjects = useMemo(() => {

    const list = [];

    for (let i = 0; i < 3; i++) {

      list.push(
        projects[(startIndex + i) % projects.length]
      );

    }

    return list;

  }, [startIndex]);

  // ==========================================
  // RENDER
  // ==========================================

  return (

    <section
      id="projects"
      className="border-t border-slate-100 bg-white py-24"
    >

      <div className="container mx-auto px-6">

        <SectionTitle
          badge="OUR PROJECTS"
          title="Reliable Energy Solutions Across Myanmar"
          description="From residential rooftops to large-scale commercial and industrial installations, we deliver reliable, efficient, and sustainable energy solutions tailored to every customer's needs."
        />

        <div className="grid gap-8 lg:grid-cols-3">

          {displayProjects.map((project) => (

            <div
              key={project.id}
              className="group overflow-hidden rounded-3xl bg-white shadow-md transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl"
            >

              {/* IMAGE */}

              <div className="relative h-72 overflow-hidden">

                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-110"
                />

              </div>

              {/* CONTENT */}

              <div className="space-y-5 p-8">

  <h3 className="text-2xl font-bold text-slate-900">
    {project.title}
  </h3>

  {/* Location */}

  <div className="flex items-center justify-between border-b border-slate-200 pb-3">

    <div className="flex items-center gap-2 text-slate-600">
      <MapPin className="h-5 w-5 text-slate-500" />
      <span>Location</span>
    </div>

    <span className="font-medium text-slate-900">
      {project.location}
    </span>

  </div>

  {/* Capacity */}

  <div className="flex items-center justify-between border-b border-slate-200 pb-3">

    <div className="flex items-center gap-2 text-slate-600">
      <Zap className="h-5 w-5 text-green-600" />
      <span>Capacity</span>
    </div>

    <span className="font-semibold text-slate-900">
      {project.capacity}
    </span>

  </div>

  {/* Panels */}

  <div className="flex items-center justify-between border-b border-slate-200 pb-3">

    <div className="flex items-center gap-2 text-slate-600">
      <Sun className="h-5 w-5 text-amber-500" />
      <span>Solar Panels</span>
    </div>

    <span className="font-semibold text-slate-900">
      {project.panels}
    </span>

  </div>

  {/* Inverter */}

  <div className="flex items-center justify-between border-b border-slate-200 pb-3">

    <div className="flex items-center gap-2 text-slate-600">
      <Zap className="h-5 w-5 text-blue-500" />
      <span>Inverter</span>
    </div>

    <span className="font-semibold text-slate-900">
      {project.inverter}
    </span>

  </div>

  {/* Battery */}

  <div className="flex items-center justify-between">

    <div className="flex items-center gap-2 text-slate-600">
      <Battery className="h-5 w-5 text-emerald-500" />
      <span>Battery</span>
    </div>

    <span className="font-semibold text-slate-900">
      {project.battery}
    </span>

  </div>

</div>

            </div>

          ))}
                  </div>

        {/* ========================================== */}
        {/* VIEW ALL BUTTON */}
        {/* ========================================== */}

        <div className="mt-16 flex justify-center">

          <Link
            href="/projects"
            className="inline-flex items-center rounded-full bg-blue-900 px-8 py-4 text-lg font-semibold text-white transition-all duration-300 hover:bg-green-600 hover:shadow-xl"
          >
            View All Projects →
          </Link>

        </div>

      </div>

    </section>

  );

}