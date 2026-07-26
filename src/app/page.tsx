import Header from "@/components/layout/Header";
import Hero from "@/components/hero/Hero";
import FeaturedProducts from "@/components/products/FeaturedProducts";
import Projects from "@/components/projects/Projects";
import About from "@/components/about/About";
import WhyChooseUs from "@/components/about/WhyChooseUs";
import WarrantyCenter from "@/components/warranty/WarrantyCenter";
import CTA from "@/components/contact/CTA";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />

      <FeaturedProducts />

      <Projects />

      <About />

      <WhyChooseUs />

      <CTA />

      <WarrantyCenter />

      {/* Footer Credit */}
      <footer className="border-t border-slate-200 bg-white py-6">
        <div className="container mx-auto px-6 text-center">
          <p className="text-sm text-slate-500">
            © 2026 Arkar Min Thu Kha Electro Trading Co., Ltd. All Rights Reserved.
          </p>

          <p className="mt-2 text-sm text-slate-500">
            Website Designed & Developed by
          </p>

          <p className="text-sm font-semibold text-emerald-600">
            GS Creative - Art & Management
          </p>

          <p className="text-xs text-slate-500">
            Software Development Team
          </p>
        </div>
      </footer>
    </>
  );
}