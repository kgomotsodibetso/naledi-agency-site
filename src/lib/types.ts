import type { LucideIcon } from "lucide-react";

export type NavItem = {
  label: string;
  href: string;
};

export type Service = {
  icon: LucideIcon;
  title: string;
  description: string;
  benefits: string[];
  process: string;
};

export type PortfolioItem = {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  imageHint: string;
};
