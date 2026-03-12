import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { projects } from '../data/projects';

// Simple helper to render *italic* markdown in text
const renderInlineMarkdown = (text: string) => {
  const parts = text.split(/(\*[^*]+\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith('*') && part.endsWith('*')) {
      return <em key={i}>{part.slice(1, -1)}</em>;
    }
    return part;
  });
};

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
  // Check if project uses V2 structure (has sectionLabels)
  const isV2 = hasSections && project.sections!.some(s => s.sectionLabel);

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

          {/* Impact Section - shown first for recruiters (non-V2 projects only) */}
          {!isV2 && project.impact && project.impact.length > 0 && (
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

          {/* Testimonial - right after impact (non-V2 projects only) */}
          {!isV2 && project.testimonial && (
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
            const isHeaderOnly = section.title && !section.content && !section.image && !section.images && !section.gif && !section.gifs && !section.challenge && !section.cards;
            // Check if this section has no title (continuation of previous section)
            const hasNoTitle = !section.title;

            // If isDecisionBlock + no title, it's a continuation of the previous decision block
            const isDecisionContinuation = section.isDecisionBlock && hasNoTitle;
            // For the previous decision block, check if next section is a continuation
            const nextSection = project.sections![index + 1];
            const hasDecisionContinuation = section.isDecisionBlock && section.title && nextSection && nextSection.isDecisionBlock && !nextSection.title;

            const sectionContent = (
              <div key={index} className={`${section.isDecisionBlock && !isDecisionContinuation ? `bg-white p-8 md:p-10 ${hasDecisionContinuation ? 'rounded-t-2xl pb-2' : 'rounded-2xl'}` : ''} ${isDecisionContinuation ? 'bg-white rounded-b-2xl px-8 md:px-10 pb-8 md:pb-10 pt-2 -mt-16' : isHeaderOnly && !section.sectionLabel ? 'pt-8' : hasNoTitle && !isDecisionContinuation ? 'space-y-4 -mt-12' : 'space-y-4'}`}>
                {/* Section Label - small teal uppercase marker */}
                {section.sectionLabel && (
                  <div className="text-xs font-bold uppercase tracking-[0.15em] text-accent-teal mb-3">
                    {section.sectionLabel}
                  </div>
                )}

                {/* Section Title - only show if title exists */}
                {section.title && (
                  <h2 className={`font-bold text-gray-900 leading-tight ${
                    isHeaderOnly && !section.sectionLabel
                      ? 'text-3xl md:text-4xl border-b-2 border-gray-200 pb-4'
                      : section.sectionLabel
                        ? 'text-3xl md:text-4xl'
                        : section.isDecisionBlock
                          ? 'text-xl md:text-2xl'
                          : 'text-2xl md:text-3xl'
                  }`}>
                    {section.title}
                  </h2>
                )}

                {/* Challenge / Insight / Solution colored blocks */}
                {section.challenge && (
                  <div className="bg-red-50 border-l-[3px] border-red-500 rounded-r-lg px-5 py-4 mt-4">
                    <p className="text-red-700 text-[0.95rem] leading-[1.7] m-0">
                      <strong>Challenge:</strong> {section.challenge}
                    </p>
                  </div>
                )}
                {section.insight && (
                  <div className="bg-blue-50 border-l-[3px] border-blue-500 rounded-r-lg px-5 py-4">
                    <p className="text-blue-700 text-[0.95rem] leading-[1.7] m-0">
                      <strong>Insight:</strong> {section.insight}
                    </p>
                  </div>
                )}
                {section.solution && (
                  <div className="bg-green-50 border-l-[3px] border-green-500 rounded-r-lg px-5 py-4">
                    <p className="text-green-700 text-[0.95rem] leading-[1.7] m-0">
                      <strong>Solution:</strong> {section.solution}
                    </p>
                  </div>
                )}

                {/* Section Content */}
                {section.content && (
                  <div className="max-w-prose text-lg text-gray-700 leading-[1.8] whitespace-pre-line">
                    {renderInlineMarkdown(section.content)}
                  </div>
                )}

                {/* Cards */}
                {section.cards && section.cards.length > 0 && (
                  <div className={`mt-4 grid gap-4 grid-cols-1 ${section.cards.length <= 3 ? `md:grid-cols-${section.cards.length}` : 'md:grid-cols-3'}`}>
                    {section.cards.map((card, cardIndex) => (
                      <div key={cardIndex} className="bg-white p-6 rounded-xl">
                        <h4 className="text-base font-bold text-gray-900 mb-2">{card.title}</h4>
                        <div className="text-[0.95rem] text-gray-600 leading-[1.6]">
                          {card.content.split('\n\n').map((para, pIdx) => {
                            // Check if this paragraph is a persona tag (starts with →)
                            const isPersonaTag = para.trim().startsWith('→');
                            return (
                              <p key={pIdx} className={`${pIdx > 0 ? 'mt-2' : ''} ${isPersonaTag ? 'text-[0.8rem] text-accent-teal font-bold mt-2' : ''}`}>
                                {para.split('\n').map((line, lIdx) => (
                                  <span key={lIdx}>
                                    {lIdx > 0 && <br />}
                                    {line}
                                  </span>
                                ))}
                              </p>
                            );
                          })}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* After Cards Text (between cards and flow) */}
                {section.afterCards && (
                  <div className={`mt-4 leading-[1.8] ${
                    section.isDecisionBlock
                      ? 'text-center italic text-gray-500 text-base'
                      : 'max-w-prose text-lg text-gray-700'
                  }`}>
                    {section.afterCards.split('\n\n').map((para, pIdx) => (
                      <p key={pIdx} className={pIdx > 0 ? 'mt-4' : ''}>{para}</p>
                    ))}
                  </div>
                )}

                {/* Flow (after cards and afterCards) */}
                {section.flow && section.flow.length > 0 && (
                  <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
                    {section.flow.map((step, stepIndex) => (
                      <div key={stepIndex} className="flex items-center gap-2">
                        <span className={`px-5 py-2.5 rounded-lg text-[0.95rem] font-bold ${
                          stepIndex === section.flow!.length - 1
                            ? 'bg-red-50 text-red-600'
                            : 'bg-white text-gray-700'
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
                      <div className="hidden md:block absolute top-[68px] right-[160px] z-10 animate-tooltip-bounce">
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
                          <div className="absolute -top-[6px] right-14 w-3 h-3 bg-gray-900 rotate-45" />
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

            return (
              <div key={index}>
                {sectionContent}
                {/* Divider after section */}
                {section.dividerAfter && (
                  <div className="mt-12">
                    <hr className="border-t border-gray-200" />
                  </div>
                )}
              </div>
            );
          })}

          {/* V2: Impact Section - after sections */}
          {isV2 && project.impact && project.impact.length > 0 && (
            <div>
              <div className="text-xs font-bold uppercase tracking-[0.15em] text-accent-teal mb-3">
                Impact
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 leading-tight">
                Results & Feedback
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {project.impact.map((item, index) => (
                  <div key={index} className="bg-white p-6 rounded-xl text-center">
                    <div className="text-2xl font-black text-accent-teal mb-2">
                      {item.includes(':') ? item.split(':')[0] : `Impact ${index + 1}`}
                    </div>
                    <p className="text-sm text-gray-600 leading-[1.6]">
                      {item.includes(':') ? item.split(':')[1].trim() : item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* V2: All quotes (testimonial + stakeholder feedback) grouped in one container */}
          {isV2 && (project.testimonial || (project.stakeholderFeedback && project.stakeholderFeedback.length > 0)) && (
            <div className="space-y-6">
              {project.testimonial && (
                <div className="bg-white p-8 md:p-10 rounded-2xl">
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
              {project.stakeholderFeedback && project.stakeholderFeedback.map((feedback, index) => (
                <div key={index} className="bg-white p-8 md:p-10 rounded-2xl">
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
          )}

          {/* V2: Divider before What I Learned */}
          {isV2 && project.takeaways && project.takeaways.length > 0 && (
            <hr className="border-t border-gray-200" />
          )}

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

          {/* Stakeholder Feedback Section (non-V2 only) */}
          {!isV2 && project.stakeholderFeedback && project.stakeholderFeedback.length > 0 && (
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
              {isV2 && (
                <div className="text-xs font-bold uppercase tracking-[0.15em] text-accent-teal mb-3">
                  Reflection
                </div>
              )}
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 leading-tight">
                What I Learned
              </h2>
              <div className="space-y-6">
                {project.takeaways.map((takeaway, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-9 h-9 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-gray-900 font-black">{index + 1}</span>
                    </div>
                    <p className="text-[1.05rem] text-gray-600 leading-[1.7]">
                      {(() => {
                        // Bold the first sentence (up to first ": " or "." followed by space)
                        const colonIdx = takeaway.indexOf(': ');
                        if (colonIdx !== -1 && colonIdx < 80) {
                          return (
                            <>
                              <span className="font-bold text-gray-900">{takeaway.slice(0, colonIdx + 1)}</span>
                              {takeaway.slice(colonIdx + 1)}
                            </>
                          );
                        }
                        // Fallback: bold first sentence ending with period
                        const dotIdx = takeaway.indexOf('. ');
                        if (dotIdx !== -1 && dotIdx < 80) {
                          return (
                            <>
                              <span className="font-bold text-gray-900">{takeaway.slice(0, dotIdx + 1)}</span>
                              {takeaway.slice(dotIdx + 1)}
                            </>
                          );
                        }
                        return takeaway;
                      })()}
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
