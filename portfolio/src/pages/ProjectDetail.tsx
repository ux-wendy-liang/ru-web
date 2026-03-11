import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { projects } from '../data/projects';

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const project = projects.find((p) => p.id === id);

  const [enTooltipDismissed, setEnTooltipDismissed] = useState(false);

  // Scroll to top when page loads or project changes
  useEffect(() => {
    window.scrollTo(0, 0);
    setEnTooltipDismissed(false);
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
        <div className="max-w-5xl mx-auto">
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
              <p className="text-lg text-gray-700 leading-[1.8]">
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

          {/* Impact Section - shown first for recruiters */}
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
                    <p className="text-gray-700 leading-[1.7]">
                      {item.includes(':') ? item.split(':')[1].trim() : item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Testimonial - right after impact */}
          {project.testimonial && (
            <div className="bg-white p-10 rounded-2xl">
              <blockquote className="max-w-prose text-lg text-gray-800 italic leading-[1.8] mb-4">
                "{project.testimonial.quote}"
              </blockquote>
              <div className="text-gray-600">
                <span className="font-bold text-gray-900">— {project.testimonial.author}</span>
                {project.testimonial.role && (
                  <span className="ml-2">({project.testimonial.role})</span>
                )}
              </div>
            </div>
          )}

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
                  <div className="max-w-prose text-lg text-gray-700 leading-[1.8] whitespace-pre-line">
                    {section.content}
                  </div>
                )}

                {/* Flow */}
                {section.flow && section.flow.length > 0 && (
                  <div className="mt-4 flex flex-wrap items-center gap-3">
                    {section.flow.map((step, stepIndex) => (
                      <div key={stepIndex} className="flex items-center gap-3">
                        <span className={`px-5 py-2.5 rounded-full text-sm font-medium ${
                          stepIndex === section.flow!.length - 1
                            ? 'bg-gray-900 text-white'
                            : 'bg-white text-gray-700 border border-gray-200'
                        }`}>
                          {step}
                        </span>
                        {stepIndex < section.flow!.length - 1 && (
                          <span className="text-gray-400 text-lg">→</span>
                        )}
                      </div>
                    ))}
                  </div>
                )}

                {/* Cards */}
                {section.cards && section.cards.length > 0 && (
                  <div className={`mt-4 grid gap-6 grid-cols-1 ${section.cards.length <= 3 ? `md:grid-cols-${section.cards.length}` : 'md:grid-cols-3'}`}>
                    {section.cards.map((card, cardIndex) => (
                      <div key={cardIndex} className="bg-white p-6 rounded-xl">
                        <h4 className="text-lg font-bold text-gray-900 mb-2">{card.title}</h4>
                        <div className="text-gray-700 leading-[1.7]">
                          {card.content.split('\n\n').map((para, pIdx) => (
                            <p key={pIdx} className={pIdx > 0 ? 'mt-3' : ''}>
                              {para.split('\n').map((line, lIdx) => (
                                <span key={lIdx}>
                                  {lIdx > 0 && <br />}
                                  {line}
                                </span>
                              ))}
                            </p>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Single Image */}
                {section.image && (
                  <div className={`rounded-xl overflow-hidden mt-8 flex justify-center bg-gray-50 ${
                    section.imageSize === 'small' ? 'max-w-[400px]' :
                    section.imageSize === 'medium' ? 'max-w-[600px]' : ''
                  }`}>
                    <img
                      src={section.image}
                      alt={section.title}
                      className="w-full max-h-[600px] object-contain"
                    />
                  </div>
                )}

                {/* After Cards Text */}
                {section.afterCards && (
                  <div className="mt-6 max-w-prose text-lg leading-[1.8] text-gray-800">
                    {section.afterCards.split('\n\n').map((para, pIdx) => (
                      <p key={pIdx} className={pIdx > 0 ? 'mt-4' : ''}>{para}</p>
                    ))}
                  </div>
                )}

                {/* Phone Before/After */}
                {(section.phoneBefore || section.phoneAfter) && (
                  <div className="mt-8">
                    <div className="flex items-start justify-center gap-0">
                      {/* Before */}
                      {section.phoneBefore && section.phoneBefore.length > 0 && (
                        <div className="flex flex-col items-center px-6">
                          <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">Before</h4>
                          <div className="flex gap-4">
                            {section.phoneBefore.map((image, imgIndex) => (
                              <div key={imgIndex} className="relative bg-gray-900 rounded-[1.75rem] p-1.5 shadow-xl" style={{ width: '220px' }}>
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-4 bg-gray-900 rounded-b-lg z-10" />
                                <div className="rounded-[1.25rem] overflow-hidden bg-white">
                                  <img src={image} alt={`Before ${imgIndex + 1}`} className="w-full object-cover object-top" style={{ height: '440px' }} />
                                </div>
                                <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-20 h-1 bg-gray-600 rounded-full" />
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                      {/* Divider */}
                      {section.phoneBefore && section.phoneAfter && (
                        <div className="hidden md:flex flex-col items-center self-stretch py-8">
                          <div className="w-px bg-gray-300 flex-1" />
                        </div>
                      )}
                      {/* After */}
                      {section.phoneAfter && section.phoneAfter.length > 0 && (
                        <div className="flex flex-col items-center px-6">
                          <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">After</h4>
                          <div className="flex gap-4">
                            {section.phoneAfter.map((phone, imgIndex) => (
                              <div key={imgIndex} className="flex flex-col items-center" style={{ width: '220px' }}>
                                <div className="relative bg-gray-900 rounded-[1.75rem] p-1.5 shadow-xl w-full">
                                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-4 bg-gray-900 rounded-b-lg z-10" />
                                  <div className="rounded-[1.25rem] overflow-hidden bg-white">
                                    <img src={typeof phone === 'string' ? phone : phone.image} alt={`After ${imgIndex + 1}`} className="w-full object-cover object-top" style={{ height: '440px' }} />
                                  </div>
                                  <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-20 h-1 bg-gray-600 rounded-full" />
                                </div>
                                {typeof phone !== 'string' && phone.caption && (
                                  <p className="text-sm text-gray-600 text-center mt-3 leading-relaxed px-1">
                                    {phone.caption}
                                  </p>
                                )}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                )}
                {/* Multiple Images */}
                {section.images && section.images.length > 0 && (
                  <div className={`mt-8 grid gap-6 ${section.images.length === 2 ? 'grid-cols-2' : 'grid-cols-1 md:grid-cols-2'}`}>
                    {section.images.map((image, imgIndex) => (
                      <div key={imgIndex} className="rounded-xl overflow-hidden flex justify-center bg-gray-50">
                        <img
                          src={image}
                          alt={`${section.title} ${imgIndex + 1}`}
                          className="w-full max-h-[500px] object-contain"
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

                {/* Interactive Prototype Embed */}
                {section.embed && (
                  <div className="mt-8 rounded-xl overflow-hidden bg-gray-100 border border-gray-200 relative">
                    {/* EN tooltip for Jingxin project */}
                    {section.embed.includes('jingxin') && !enTooltipDismissed && (
                      <div className="hidden md:block absolute top-[68px] right-[230px] z-10 animate-tooltip-bounce">
                        <div className="relative bg-gray-900 text-white text-sm px-4 py-2.5 rounded-lg shadow-lg whitespace-nowrap flex items-center gap-2">
                          <span className="inline-block w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                          Click "EN" to view English version
                          <button
                            onClick={() => setEnTooltipDismissed(true)}
                            className="ml-1 text-gray-400 hover:text-white transition-colors"
                            aria-label="Dismiss tooltip"
                          >
                            ✕
                          </button>
                          {/* Arrow pointing up toward EN button */}
                          <div className="absolute -top-[6px] right-[calc(50%+80px)] w-3 h-3 bg-gray-900 rotate-45" />
                        </div>
                      </div>
                    )}
                    <iframe
                      src={section.embed}
                      title={section.title || 'Interactive Prototype'}
                      className="w-full h-[600px] border-0"
                      allow="fullscreen"
                      sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
                    />
                    <div className="bg-gray-50 px-4 py-3 border-t border-gray-200 flex items-center justify-between">
                      <span className="text-sm text-gray-600">Interactive Prototype - Click to explore</span>
                      <a
                        href={section.embed}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-blue-600 hover:text-blue-800 flex items-center gap-1"
                      >
                        Open in new tab
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    </div>
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
              <p className="max-w-prose text-lg text-gray-700 leading-[1.8]">
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
              <p className="max-w-prose text-lg text-gray-700 leading-[1.8]">
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

          {/* Impact Section - moved to after sections */}

          {/* User Feedback / Testimonial Section - moved up near impact */}

          {/* Stakeholder Feedback Section */}
          {project.stakeholderFeedback && project.stakeholderFeedback.length > 0 && (
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 leading-tight">
                Stakeholder's Feedback
              </h2>
              <div className="space-y-6">
                {project.stakeholderFeedback.map((feedback, index) => (
                  <div key={index} className="bg-white p-8 rounded-2xl">
                    <blockquote className="max-w-prose text-lg text-gray-800 italic leading-[1.8] mb-4">
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
                What I Learned
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
