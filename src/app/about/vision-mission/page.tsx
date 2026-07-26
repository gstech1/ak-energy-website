import AboutHero from "@/components/about/AboutHero";
import ProductOverview from "@/components/product/ProductOverview";

export const metadata = {
  title: "Vision & Mission | Arkar Min Thuka Electro Trading Co., Ltd.",
  description:
    "Vision, mission and core values of Arkar Min Thuka Electro Trading Co., Ltd.",
};

export default function VisionMissionPage() {
  return (
    <main>
      <AboutHero
        title="Vision & Mission"
        subtitle="Our vision, mission and core values."
      />

      <ProductOverview
        image="/images/about/vision-mission.jpg"
        title="Our Vision & Mission"
        description="Our vision is to become one of Myanmar's leading providers of electrical products and renewable energy solutions. Our mission is to deliver reliable products, excellent engineering services and long-term customer satisfaction while contributing to sustainable development."
        features={[
          "Customer First",
          "Innovation",
          "Integrity",
          "Quality Assurance",
          "Professional Service",
          "Sustainable Growth",
        ]}
      />
    </main>
  );
}