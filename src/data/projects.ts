export type ProjectKey = "barber" | "restaurant" | "dentist" | "fitness" | "boutique";

export interface Project {
  key: ProjectKey;
  title: string;
  category: string;
  /** CSS background for thumbnail */
  thumb: string;
  accent: string;
  display: string;
}

export const projects: Project[] = [
  {
    key: "barber",
    title: "Barber Website Redesign",
    category: "Website Design",
    thumb: "linear-gradient(160deg, #1a1614 0%, #2a221c 60%, #c9a36a 200%)",
    accent: "#c9a36a",
    display: "Halfden & Co.",
  },
  {
    key: "restaurant",
    title: "Fine Dining Restaurant",
    category: "Brand & Web",
    thumb: "linear-gradient(160deg, #faf6ee 0%, #e9dcc4 100%)",
    accent: "#7a5c3d",
    display: "Maison Verre",
  },
  {
    key: "dentist",
    title: "Dental Clinic Rebuild",
    category: "Conversion + SEO",
    thumb: "linear-gradient(160deg, #f0f5fa 0%, #5e8fb3 180%)",
    accent: "#5e8fb3",
    display: "Northstar Dental",
  },
  {
    key: "fitness",
    title: "Boutique Fitness Studio",
    category: "Website Design",
    thumb: "linear-gradient(160deg, #0e0e0d 0%, #2a2620 60%, #a79c8e 220%)",
    accent: "#a79c8e",
    display: "FORM Studio",
  },
  {
    key: "boutique",
    title: "Luxury Fashion Boutique",
    category: "E-commerce",
    thumb: "linear-gradient(160deg, #fbfaf7 0%, #c9bca8 90%, #8a7a64 130%)",
    accent: "#9c8064",
    display: "Maren the Label",
  },
];
