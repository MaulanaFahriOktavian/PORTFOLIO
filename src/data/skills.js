import {
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiPhp,
  SiLaravel,
  SiMysql,
  SiFigma,
  SiGit,
  SiMongodb,
  SiPostman,
} from "react-icons/si";
import { FaGithub } from "react-icons/fa6";
import { VscVscode } from "react-icons/vsc";
import CanvaIcon from "../components/ui/CanvaIcon";

export const skillGroups = [
  {
    category: "Frontend",
    description: "Component architecture, interactive state management, and modern responsive UI engineering.",
    skills: [
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
    description: "Relational and document data modeling, schema design, and querying.",
    skills: [
      { name: "MySQL", icon: SiMysql, color: "#4479A1" },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" }
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
    description: "Version control, API testing, code editors, and development workflows.",
    skills: [
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "GitHub", icon: FaGithub, color: "#181717" },
      { name: "VS Code", icon: VscVscode, color: "#007ACC" },
      { name: "Postman", icon: SiPostman, color: "#FF6C37" }
    ]
  }
];
