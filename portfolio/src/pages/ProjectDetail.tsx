import { useParams, Link } from 'react-router-dom';
import { useEffect } from 'react';
import { projects } from '../data/projects';

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const project = projects.find((p) => p.id === id);

  // Scroll to top when page loads or project changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

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

  // Check if project uses new sections structure
  const hasSections = project.sections && project.sections.length > 0;

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
              <p className="text-xl text-gray-700 leading-relaxed">
                {project.shortDescription}
              </p>
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

          {/* New Sections Structure */}
          {hasSections && project.sections!.map((section, index) => {
            // Check if this is a "header only" section (empty content, just a title divider)
            const isHeaderOnly = section.title && !section.content && !section.image && !section.images && !section.gif && !section.gifs;
            // Check if this section has no title (continuation of previous section)
            const hasNoTitle = !section.title;

            return (
              <div key={index} className={isHeaderOnly ? 'pt-8' : hasNoTitle ? 'space-y-4 -mt-12' : 'space-y-4'}>
                {/* Section Title - only show if title exists */}
                {section.title && (
                  <h2 className={`font-bold text-gray-900 leading-tight ${
                    isHeaderOnly
                      ? 'text-3xl md:text-4xl border-b-2 border-gray-200 pb-4'
                      : 'text-2xl md:text-3xl'
                  }`}>
                    {section.title}
                  </h2>
                )}

                {/* Section Content */}
                {section.content && (
                  <div className="text-lg text-gray-700 leading-relaxed whitespace-pre-line">
                    {section.content}
                  </div>
                )}

                {/* Single Image */}
                {section.image && (
                  <div className="rounded-xl overflow-hidden mt-8">
                    <img
                      src={section.image}
                      alt={section.title}
                      className="w-full h-auto"
                    />
                  </div>
                )}

                {/* Multiple Images */}
                {section.images && section.images.length > 0 && (
                  <div className={`mt-8 grid gap-6 ${section.images.length === 2 ? 'grid-cols-2' : 'grid-cols-1 md:grid-cols-2'}`}>
                    {section.images.map((image, imgIndex) => (
                      <div key={imgIndex} className="rounded-xl overflow-hidden">
                        <img
                          src={image}
                          alt={`${section.title} ${imgIndex + 1}`}
                          className="w-full h-auto"
                        />
                      </div>
                    ))}
                  </div>
                )}

                {/* Single GIF */}
                {section.gif && (
                  <div className="rounded-xl overflow-hidden mt-8">
                    <img
                      src={section.gif}
                      alt={`${section.title} demo`}
                      className="w-full h-auto"
                    />
                  </div>
                )}

                {/* Multiple GIFs */}
                {section.gifs && section.gifs.length > 0 && (
                  <div className={`mt-8 ${section.gifs.length >= 2 ? 'grid grid-cols-1 md:grid-cols-2 gap-6' : ''}`}>
                    {section.gifs.map((gif, gifIndex) => (
                      <div key={gifIndex} className="rounded-xl overflow-hidden">
                        <img
                          src={gif}
                          alt={`${section.title} demo ${gifIndex + 1}`}
                          className="w-full h-auto"
                        />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}

          {/* Legacy Structure - Challenge */}
          {!hasSections && project.challenge && (
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                The Challenge
              </h2>
              <p className="text-xl text-gray-700 leading-relaxed">
                {project.challenge}
              </p>
            </div>
          )}

          {/* Legacy Structure - Solution */}
          {!hasSections && project.solution && (
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                The Solution
              </h2>
              <p className="text-xl text-gray-700 leading-relaxed">
                {project.solution}
              </p>
            </div>
          )}

          {/* Legacy Structure - Images */}
          {!hasSections && project.images && project.images.length > 0 && (
            <div className="space-y-8">
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

          {/* Legacy Structure - GIFs */}
          {!hasSections && project.gifs && project.gifs.length > 0 && (
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

          {/* Impact Section */}
          {project.impact && project.impact.length > 0 && (
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 leading-tight">
                Impact
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {project.impact.map((item, index) => (
                  <div key={index} className="bg-white p-8 rounded-xl">
                    <h4 className="text-xl font-bold text-gray-900 mb-3">
                      {item.includes(':') ? item.split(':')[0] : `Impact ${index + 1}`}
                    </h4>
                    <p className="text-gray-700 leading-relaxed">
                      {item.includes(':') ? item.split(':')[1].trim() : item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* User Feedback / Testimonial Section */}
          {project.testimonial && (
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 leading-tight">
                User feedback
              </h2>
              <div className="bg-white p-10 rounded-2xl">
                <blockquote className="text-2xl text-gray-800 italic leading-relaxed mb-6">
                  "{project.testimonial.quote}"
                </blockquote>
                <div className="text-gray-600">
                  <span className="font-bold text-gray-900">— {project.testimonial.author}</span>
                  {project.testimonial.role && (
                    <span className="ml-2">({project.testimonial.role})</span>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Stakeholder Feedback Section */}
          {project.stakeholderFeedback && project.stakeholderFeedback.length > 0 && (
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 leading-tight">
                Stakeholder's Feedback
              </h2>
              <div className="space-y-6">
                {project.stakeholderFeedback.map((feedback, index) => (
                  <div key={index} className="bg-white p-8 rounded-2xl">
                    <blockquote className="text-xl text-gray-800 italic leading-relaxed mb-4">
                      "{feedback.quote}"
                    </blockquote>
                    <div className="text-gray-600">
                      <span className="font-bold text-gray-900">— {feedback.author}</span>
                      {feedback.role && (
                        <span className="ml-2">({feedback.role})</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Takeaways Section */}
          {project.takeaways && project.takeaways.length > 0 && (
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 leading-tight">
                Key Takeaways
              </h2>
              <div className="space-y-6">
                {project.takeaways.map((takeaway, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-gray-900 font-bold">{index + 1}</span>
                    </div>
                    <p className="text-xl text-gray-700 leading-relaxed">
                      {takeaway}
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
