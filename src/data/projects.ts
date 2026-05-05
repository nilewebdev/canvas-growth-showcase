import barber from "@/assets/preview-barber.jpg";
import restaurant from "@/assets/preview-restaurant.jpg";
import dentist from "@/assets/preview-dentist.jpg";
import fitness from "@/assets/preview-fitness.jpg";
import boutique from "@/assets/preview-boutique.jpg";

export type ProjectKey = "barber" | "restaurant" | "dentist" | "fitness" | "boutique";

export interface Project {
  key: ProjectKey;
  title: string;
  category: string;
  image: string;
}

export const projects: Project[] = [
  { key: "barber", title: "Barber Website Redesign", category: "Website Design", image: barber },
  { key: "restaurant", title: "Fine Dining Restaurant", category: "Brand & Web", image: restaurant },
  { key: "dentist", title: "Dental Clinic Rebuild", category: "Conversion + SEO", image: dentist },
  { key: "fitness", title: "Boutique Fitness Studio", category: "Website Design", image: fitness },
  { key: "boutique", title: "Luxury Fashion Boutique", category: "E-commerce", image: boutique },
];
