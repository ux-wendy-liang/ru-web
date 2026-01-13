import { Link } from 'react-router-dom';
import type { Project } from '../data/projects';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <Link
      to={`/project/${project.id}`}
      className="group block overflow-hidden rounded-lg transition-transform duration-300 hover:-translate-y-1"
    >
      {/* Project Image */}
      <div className="relative overflow-hidden rounded-lg bg-gray-100 aspect-[4/3]">
        <img
          src={project.cover}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* Year Badge */}
        <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm font-medium text-gray-900">
          {project.year}
        </div>
      </div>

      {/* Project Info */}
      <div className="mt-4">
        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-gray-600 transition-colors">
          {project.title}
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed">
          {project.shortDescription}
        </p>
        <div className="mt-3 inline-flex items-center text-sm font-medium text-gray-900">
          VIEW MORE
          <svg
            className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
