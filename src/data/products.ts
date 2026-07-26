import { Product } from "@/types/product";

export const products: Product[] = [
  {
    id: "1",
    slug: "inverter",
    title: "Inverter",
    shortDescription: "Hybrid, On-Grid & Off-Grid Inverters",
    description:
      "Professional inverter solutions for residential, commercial and industrial solar systems.",
    image: "/images/products/inverter.jpg",
    category: "Energy",
  },

  {
    id: "2",
    slug: "battery",
    title: "Battery System",
    shortDescription: "Lithium Energy Storage Solutions",
    description:
      "Reliable battery backup systems for uninterrupted power supply.",
    image: "/images/products/battery.jpg",
    category: "Energy",
  },

  {
    id: "3",
    slug: "solar",
    title: "Solar System",
    shortDescription: "Complete Solar Energy Solutions",
    description:
      "Residential, commercial and industrial solar power systems.",
    image: "/images/products/jsolar.jpg",
    category: "Energy",
  },

  {
    id: "4",
    slug: "circuit-protection",
    title: "Circuit Protection",
    shortDescription: "MCB, MCCB, RCCB, RCBO, SPD & Isolators",
    description:
      "Complete electrical protection solutions from Suntree for residential, commercial and industrial applications.",
    image: "/images/products/circuit-protection.png",
    category: "Protection",
  },

  {
    id: "5",
    slug: "cable-wire",
    title: "Cable & Wire",
    shortDescription: "Power, Control & Solar Cables",
    description:
      "High-quality electrical cables and wires for residential, commercial, industrial and solar installations.",
    image: "/images/products/cable-wire.png",
    category: "Electrical",
  },

  {
    id: "6",
    slug: "ev-charger",
    title: "EV Charger",
    shortDescription: "Smart AC & DC Charging Solutions",
    description:
      "Reliable electric vehicle charging solutions for homes, businesses and public charging stations.",
    image: "/images/products/ev-charger.png",
    category: "EV",
  },
];