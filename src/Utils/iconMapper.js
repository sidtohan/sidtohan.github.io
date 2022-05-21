import { Icon } from "@iconify/react";

const mapIcon = (name, type) => {
  // Maps icon name to icon name in the iconify
  name = name.toLowerCase();
  name = name.split(".").join("");
  return `${type}:${name}`;
};

const getIcon = (name, color = "#121226", type) => {
  if (name === "helsinki") name = "react";
  const iconName = mapIcon(name, type);
  return <Icon color={color} icon={iconName} />;
};

export default getIcon;
