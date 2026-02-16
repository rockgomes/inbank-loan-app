import type { HTMLAttributes, ReactNode } from "react";
import styles from "./Icon.module.css";
import * as icons from "./icons";

export type IconName =
  | "edit"
  | "arrow-left"
  | "file-text"
  | "download"
  | "x"
  | "help-circle"
  | "check";
export type IconSize = "sm" | "md" | "lg";

export interface IconProps extends Omit<
  HTMLAttributes<HTMLSpanElement>,
  "children"
> {
  name: IconName;
  size?: IconSize;
  color?: string;
}

const iconMap: Record<IconName, () => ReactNode> = {
  edit: icons.EditIcon,
  "arrow-left": icons.ArrowLeftIcon,
  "file-text": icons.FileTextIcon,
  download: icons.DownloadIcon,
  x: icons.XIcon,
  "help-circle": icons.HelpCircleIcon,
  check: icons.CheckIcon,
};

export function Icon({
  name,
  size = "md",
  color,
  className,
  style,
  ...props
}: IconProps) {
  const IconComponent = iconMap[name];

  if (!IconComponent) {
    console.warn(`Icon "${name}" not found`);
    return null;
  }

  const classNames = [styles.icon, styles[size], className]
    .filter(Boolean)
    .join(" ");

  const iconStyle = {
    ...style,
    ...(color && { color }),
  };

  return (
    <span className={classNames} style={iconStyle} {...props}>
      <IconComponent />
    </span>
  );
}
