export interface WhyChooseItem {
  id: number;
  title: string;
  description: string;
  image: string;
}

export const whyChooseItems: WhyChooseItem[] = [
  {
    id: 1,
    title: "Authorized Distributor",
    description:
      "Official Suntree distributor providing genuine electrical protection products.",
    image: "/images/why-choose/1.png",
  },

  {
    id: 2,
    title: "Warranty Policy",
    description:
      "Learn about warranty coverage, terms, conditions and claim procedures for all genuine Suntree products.",
    image: "/images/why-choose/2.png",
  },

  {
    id: 3,
    title: "Professional Team",
    description:
      "Experienced engineers and technical specialists ready to support your projects.",
    image: "/images/why-choose/3.png",
  },

  {
    id: 4,
    title: "Technical Support",
    description:
      "Fast after-sales service and nationwide customer support.",
    image: "/images/why-choose/4.png",
  },
];