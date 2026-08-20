import { FeaturedProject } from "./FeaturedProject";

const projects = [
  {
    id: "01",
    category: "Video Production",
    title: "Video Editing",
    description:
      "Cinematic edits, motion graphics, and storytelling-focused content designed to capture attention and keep audiences engaged.",
    image: "/video.png",
    tags: [
      "Premiere Pro",
      "DaVinci Resolve",
      "After Effects",
      "Motion Design",
    ],
    href: "/video-editing",
    layout: "left" as const,
  },

  {
    id: "02",
    category: "Visual Identity",
    title: "Graphics Design",
    description:
      "Logos, social media creatives, thumbnails, and brand assets designed to create memorable visual identities.",
    image: "/graphics-project/graphics.jpg",
    tags: [
      "Adobe Illustrator",
      "Adobe Photoshop",
      "Branding",
      "Logo Design",
      "Social Media",
    ],
    href: "/graphics-design",
    layout: "right" as const,
  },

  {
    id: "03",
    category: "Digital Experience",
    title: "Web Development",
    description:
      "Modern websites built for speed, SEO, usability, and conversion — combining strong design with reliable technology.",
    image: "/web/web.png",
    tags: [
      "React",
      "Next.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "PostgreSQL",
      "REST API",
      "SEO",
    ],
    href: "/web-development",
    layout: "left" as const,
  },
];

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
          image={project.image}
          tags={project.tags}
          href={project.href}
          layout={project.layout}
        />
      ))}
    </div>
  );
}