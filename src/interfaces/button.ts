import { IconProps } from "phosphor-react";
import { ButtonHTMLAttributes } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  Icon?: React.ForwardRefExoticComponent<IconProps & React.RefAttributes<SVGSVGElement>>;
  text: string;
  typeClass: "primary" | "secondary" | "terciary";
  onClick?: () => void; 
}
