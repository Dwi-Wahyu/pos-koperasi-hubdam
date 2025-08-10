import { type Icon as TablerIcon } from "@tabler/icons-react";
import { LucideIcon } from "lucide-react";

// 1. Definisikan antarmuka untuk properti kustom Anda
export interface CustomIconProps extends React.SVGProps<SVGSVGElement> {
  isBreadcrumbLogo?: boolean;
}

// 2. Gunakan antarmuka baru ini untuk CustomIconComponent Anda
type CustomIconComponent = React.ComponentType<CustomIconProps>;

export type IconType = TablerIcon | LucideIcon | CustomIconComponent;
