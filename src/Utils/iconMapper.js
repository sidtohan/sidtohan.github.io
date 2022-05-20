import { Icon } from "@iconify/react";

const mapSkillIcon = (name) => {
  // Maps icon name to icon name in the iconify
  name = name.toLowerCase();
  name = name.split(".").join("");
  return `bxl:${name}`;
};

const mapTimeLineIcon = (name) => {
  // Maps skill icon to icon in iconify
  return `akar-icons:${name}-fill`;
};

const getIcon = (name, color = "#121226", type) => {
  let iconName;
  if (name === "helsinki") name = "react";

  if (type === "skill") iconName = mapSkillIcon(name);
  else iconName = mapTimeLineIcon(name);
  return <Icon color={color} icon={iconName} />;
};

export default getIcon;
