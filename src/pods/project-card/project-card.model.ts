export interface Project {
  name: string;
  description: string;
  githubUrl: string;
}

export const projects: Project[] = [
  {
    name: "Mi primer proyecto",
    description: "Una app hecha en React con TypeScript y MUI.",
    githubUrl: "https://github.com/NoeliaMM/mi-primer-proyecto"
  },
  {
    name: "Otro proyecto",
    description: "Este está genial y usa buenas prácticas.",
    githubUrl: "https://github.com/NoeliaMM/otro-proyecto"
  }
];