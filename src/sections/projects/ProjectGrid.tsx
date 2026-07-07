import { projects } from "../../data/projects";
import { FeaturedProject } from "./FeaturedProject";

export function ProjectGrid() {
  return (
    <div className="mt-24">
      {projects.map((project) => (
        <FeaturedProject
          key={project.id}
          id={project.id}
          category={project.category}
          title={project.title}
          description={project.description}
          layout={project.layout as "left" | "right"}
        />
      ))}
    </div>
  );
}