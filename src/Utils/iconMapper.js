import { Icon } from "@iconify/react";

const mapIcon = (name) => {
  // Maps icon name to icon name in the iconify
  name = name.toLowerCase();
  name = name.split(".").join("");
  return `bxl:${name}`;
};

const getIcon = (name, color = "#121226") => {
  const iconName = mapIcon(name);
  return <Icon color={color} icon={iconName} />;
};

export default getIcon;
