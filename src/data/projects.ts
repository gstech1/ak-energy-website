export interface Project {
  id: number;
  category: string;
  title: string;
  location: string;
  capacity: string;
  panels: string;
  inverter: string;
  battery: string;
  image: string;
}

export const projects: Project[] = [
  {
    id: 1,
    category: "Residential",
    title: "Private House Solar System",
    location: "Yangon, Myanmar",
    capacity: "10kW",
    panels: "18 Panels",
    inverter: "Deye 10kW",
    battery: "Sunness 51.2V 280Ah",
    image: "/images/projects/1.png",
  },

  {
    id: 2,
    category: "Commercial",
    title: "Hotel Backup Power System",
    location: "Mandalay, Myanmar",
    capacity: "30kW",
    panels: "54 Panels",
    inverter: "Growatt 30kW",
    battery: "Sunness 51.2V 315Ah",
    image: "/images/projects/2.png",
  },

  {
    id: 3,
    category: "Industrial",
    title: "Factory Solar System",
    location: "Bago, Myanmar",
    capacity: "50kW",
    panels: "90 Panels",
    inverter: "Deye 50kW",
    battery: "360Ah 24V",
    image: "/images/projects/3.png",
  },

  {
    id: 4,
    category: "Government",
    title: "Township Office Solar Project",
    location: "Nay Pyi Taw",
    capacity: "20kW",
    panels: "36 Panels",
    inverter: "Sungrow 20kW",
    battery: "300Ah",
    image: "/images/projects/4.png",
  },

  {
    id: 5,
    category: "Hotel Process",
    title: "Hight Voltage Solar Project",
    location: "Meiktila",
    capacity: "50kW",
    panels: "90 Panels",
    inverter: "Sungrow 20kW",
    battery: "Sunness 51.2V 314 Ah x6 pcs ",
    image: "/images/projects/5.png",
  },
  {
    id: 6,
    category: "Industrial",
    title: "Factory Solar System",
    location: "Bago, Myanmar",
    capacity: "50kW",
    panels: "45 Panels",
    inverter: "Deye 50kW",
    battery: "360Ah 24V",
    image: "/images/projects/6.png",
  },

];