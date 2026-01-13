import { useParams, Link } from 'react-router-dom';
import { projects } from '../data/projects';

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen bg-cream pt-24 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Project not found
          </h1>
          <Link
            to="/"
            className="text-gray-600 hover:text-gray-900 underline"
          >
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-cream">
      {/* Hero Section */}
      <section className="pt-32 pb-12 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Back Button */}
          <Link
            to="/"
            className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors mb-8"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to Home
          </Link>

          {/* Cover Image */}
          <div className="mb-12 rounded-2xl overflow-hidden bg-white p-4">
            <img
              src={project.cover}
              alt={project.title}
              className="w-full h-auto rounded-lg"
            />
          </div>

          {/* Title */}
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-12 leading-tight">
            {project.title}
          </h1>

          {/* Project Overview & Meta Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
            {/* Left Column - Overview */}
            <div className="md:col-span-2">
              <h2 className="text-sm font-bold text-gray-500 uppercase tracking-wide mb-4">
                PROJECT OVERVIEW
              </h2>
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                {project.shortDescription}
              </p>
              {project.challenge && (
                <p className="text-xl text-gray-700 leading-relaxed">
                  {project.challenge.split('.')[0]}.
                </p>
              )}
            </div>

            {/* Right Column - Meta Info */}
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wide mb-2">
                  ROLE
                </h3>
                <p className="text-gray-900 whitespace-pre-line">{project.role}</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wide mb-2">
                  TIMELINE
                </h3>
                <p className="text-gray-900">{project.duration}</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wide mb-2">
                  TEAM
                </h3>
                <p className="text-gray-900 whitespace-pre-line">{project.team}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="pb-20 px-6">
        <div className="max-w-5xl mx-auto space-y-16">
          {/* Challenge */}
          {project.challenge && (
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Challenge: {project.challenge.split(':')[1] || project.challenge.split('.')[0]}
              </h2>
              <p className="text-xl text-gray-700 leading-relaxed">
                {project.challenge}
              </p>
            </div>
          )}

          {/* Solution */}
          {project.solution && (
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                My process
              </h2>
              <p className="text-xl text-gray-700 leading-relaxed">
                {project.solution}
              </p>
            </div>
          )}

          {/* Design Process Images */}
          {project.images && project.images.length > 0 && (
            <div className="space-y-12">
              {project.images.map((image, index) => (
                <div key={index} className="rounded-xl overflow-hidden">
                  <img
                    src={image}
                    alt={`Design process ${index + 1}`}
                    className="w-full h-auto"
                  />
                </div>
              ))}
            </div>
          )}

          {/* Interactive Demos - GIFs */}
          {project.gifs && project.gifs.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {project.gifs.map((gif, index) => (
                <div key={index} className="rounded-xl overflow-hidden">
                  <img
                    src={gif}
                    alt={`Demo ${index + 1}`}
                    className="w-full h-auto"
                  />
                </div>
              ))}
            </div>
          )}

          {/* Impact */}
          {project.impact && project.impact.length > 0 && (
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
                Impact
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {project.impact.map((item, index) => (
                  <div key={index} className="bg-white p-8 rounded-xl">
                    <h4 className="text-2xl font-bold text-gray-900 mb-3">
                      {item.split(':')[0] || `Impact ${index + 1}`}
                    </h4>
                    <p className="text-gray-700 leading-relaxed">
                      {item.includes(':') ? item.split(':')[1].trim() : item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Bottom Navigation */}
      <section className="pb-20 px-6">
        <div className="max-w-5xl mx-auto">
          <Link
            to="/"
            className="inline-flex items-center text-xl text-gray-900 hover:text-gray-600 transition-colors font-medium"
          >
            <svg
              className="w-6 h-6 mr-3"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to all projects
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetail;
