import AboutHero from "@/components/about/AboutHero";
import ProductOverview from "@/components/product/ProductOverview";

export const metadata = {
  title: "Authorized Distributor | Arkar Min Thuka Electro Trading Co., Ltd.",
};

export default function AuthorizedDistributorPage() {
  return (
    <main>
      <AboutHero
        title="Authorized Distributor"
        subtitle="Official distributor and trusted business partner."
      />

      <ProductOverview
        image="/images/about/authorized.jpg"
        title="Official Authorized Distributor"
        description="Arkar Min Thuka Electro Trading Co., Ltd. is an authorized distributor committed to supplying genuine products, reliable technical support and professional after-sales service throughout Myanmar."
        features={[
          "100% Genuine Products",
          "Official Warranty Support",
          "Professional Technical Team",
          "Nationwide Distribution",
          "After-Sales Service",
          "Trusted Business Partner",
        ]}
      />
    </main>
  );
}