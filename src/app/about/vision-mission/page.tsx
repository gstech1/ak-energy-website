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
        image="/images/about/vision-mission.png"
        title="Our Vision & Mission"
        description="Our vision is to become Myanmar's most trusted provider of electrical products, renewable energy solutions, and engineering services. Our mission is to deliver innovative technologies, genuine products, and exceptional customer service while creating sustainable value for our customers, partners, and communities through quality, integrity, and continuous innovation."
        features={[
  "Customer-Centric Excellence",
  "Innovation & Continuous Improvement",
  "Integrity & Professionalism",on
  "Commitment to Quality",
  "Technical Expertise & Reliable Service",
  "Sustainable Growth & Long-Term Partnerships",
]}
      />
    </main>
  );
}