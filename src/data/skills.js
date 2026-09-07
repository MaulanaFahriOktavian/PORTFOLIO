import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiPhp,
  SiLaravel,
  SiMysql,
  SiFigma,
  SiGit,
} from "react-icons/si";
import { FaGithub } from "react-icons/fa6";
import { VscVscode } from "react-icons/vsc";
import CanvaIcon from "../components/ui/CanvaIcon";

export const skillGroups = [
  {
    category: "Frontend",
    description: "Semantic structures, accessible interactions, and modern UI engineering.",
    skills: [
      { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
      { name: "CSS3", icon: SiCss, color: "#1572B6" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" }
    ]
  },
  {
    category: "Backend",
    description: "Application logic, MVC patterns, routing, and server-side workflows.",
    skills: [
      { name: "PHP", icon: SiPhp, color: "#777BB4" },
      { name: "Laravel", icon: SiLaravel, color: "#FF2D20" }
    ]
  },
  {
    category: "Database",
    description: "Relational data modeling, schema design, and querying.",
    skills: [
      { name: "MySQL", icon: SiMysql, color: "#4479A1" }
    ]
  },
  {
    category: "Design",
    description: "Wireframing, design systems, visual composition, and prototypes.",
    skills: [
      { name: "Figma", icon: SiFigma, color: "#F24E1E" },
      { name: "Canva", icon: CanvaIcon, color: "#00C4CC" }
    ]
  },
  {
    category: "Development Tools",
    description: "Version control, collaboration, code editors, and development workflows.",
    skills: [
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "GitHub", icon: FaGithub, color: "#181717" },
      { name: "VS Code", icon: VscVscode, color: "#007ACC" }
    ]
  }
];
