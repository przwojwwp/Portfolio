import { nanoid } from "nanoid";
import { Projects } from "src/types/projects";
import { projectsIcons } from "src/assets/index";

export const projects: Projects[] = [
  {
    id: nanoid(),
    image: projectsIcons._2048,
    description: "2048 Game Icon, click to visit the game",
  },
  {
    id: nanoid(),
    image: projectsIcons.bosko,
    description: "Bosko Website Icon, click to visit the site",
  },
  {
    id: nanoid(),
    image: projectsIcons.futurum,
    description:
      "Futurum Campaign Builder Icon, click to visit the campaign builder",
  },
  {
    id: nanoid(),
    image: projectsIcons.gwent,
    description: "Gwent Game Icon, click to visit the game",
  },
  {
    id: nanoid(),
    image: projectsIcons.katVR,
    description: "KatVR Website Icon, click to visit the site",
  },
  {
    id: nanoid(),
    image: projectsIcons.myBike,
    description: "MyBike Website Icon, click to visit the site",
  },
];
