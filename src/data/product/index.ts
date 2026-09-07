import { dcCircuitBreaker } from "./dc-circuit-breaker";
import { acCircuitBreaker } from "./ac-circuit-breaker";
import { dcSpd } from "./dc-spd";
import { dcIsolator } from "./dc-isolator";
import { ats } from "./ats";
import { acVoltageProtector } from "./ac-voltage-protector";
import { cable } from "./cable";
import { evCharger } from "./ev-charger";
import { inverterProducts, batteryProducts } from "./energy-products";

export const productCategories = {
  "DC Circuit Breaker": dcCircuitBreaker,
  "AC Circuit Breaker": acCircuitBreaker,
  "DC SPD": dcSpd,
  "DC Isolator": dcIsolator,
  ATS: ats,
  "AC Voltage Protector": acVoltageProtector,
  "Cable & Wire": cable,
  "EV Charger": evCharger,
};

export const websiteProductCategories = {
  inverter: {
    id: "inverter",
    title: "Inverter",
    type: "specification",
    products: inverterProducts,
  },

  battery: {
    id: "battery",
    title: "Battery System",
    type: "specification",
    products: batteryProducts,
  },

  solar: {
  id: "solar",
  title: "Solar System",
  type: "overview",

  overview: {
    image: "/images/products/solar/solar1.jpg",
    title: "Complete Solar Energy Solutions",
    description:
      "Arkar Min Thukha Electro Trading Co., Ltd. provides complete solar power solutions including system design, quality equipment supply, professional installation and after-sales support. Our solutions help customers reduce electricity costs while ensuring reliable long-term performance.",
  },

  features: [
    "Residential Solar Systems",
    "Commercial Solar Solutions",
    "Industrial Solar Projects",
    "On-Grid & Off-Grid Systems",
    "Hybrid Solar Systems",
    "Professional Installation & Support",
  ],

  applications: [
    "Homes & Villas",
    "Commercial Buildings",
    "Factories & Warehouses",
    "Hotels & Hospitals",
  ],

  products: [],
},

  ...Object.fromEntries(
    Object.entries(productCategories).map(([key, category]) => [
      category.id,
      {
        ...category,
        type: "gallery",
      },
    ])
  ),
};