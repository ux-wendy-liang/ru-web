import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { projects } from '../data/projects';

// Simple helper to render **bold** and *italic* markdown in text
const renderInlineMarkdown = (text: string) => {
  const parts = text.split(/(\*\*[^*]+\*\*|\*[^*]+\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={i} className="text-gray-900">{part.slice(2, -2)}</strong>;
    }
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
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);
  const [quotePageIndex, setQuotePageIndex] = useState(0);

  const openLightbox = (src: string) => setLightboxSrc(src);
  const closeLightbox = () => setLightboxSrc(null);

  // Scroll to top when page loads or project changes
  useEffect(() => {
    window.scrollTo(0, 0);
    setEnTooltipDismissed(false);
  }, [id]);

  if (!project) {
    return (
      <div className="min-h-screen bg-white pt-24 pb-20 px-6 md:px-16 lg:px-24">
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
    <div className="min-h-screen bg-white">
      {/* Lightbox Modal */}
      {lightboxSrc && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 cursor-zoom-out"
          onClick={closeLightbox}
        >
          <button
            className="absolute top-4 right-4 text-white bg-black/50 rounded-full w-10 h-10 flex items-center justify-center text-xl hover:bg-black/80 transition-colors"
            onClick={closeLightbox}
          >
            ✕
          </button>
          <img
            src={lightboxSrc}
            alt="Full size"
            className="max-w-[90vw] max-h-[90vh] object-contain rounded-lg shadow-2xl"
            onClick={e => e.stopPropagation()}
          />
        </div>
      )}
      {/* Hero Section */}
      <section className="pt-32 pb-12 px-6 md:px-16 lg:px-24">
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
          {!project.hideCoverOnDetail && (
            <div className="mb-12 rounded-2xl overflow-hidden bg-white p-4">
              <img
                src={project.cover}
                alt={project.title}
                className="w-full h-auto rounded-lg"
              />
            </div>
          )}

          {/* Title */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
              {project.title}
            </h1>
            {project.subtitle && (
              <p className="text-lg md:text-xl text-gray-500 leading-relaxed max-w-3xl">
                {project.subtitle}
              </p>
            )}
          </div>

          {/* Project Overview */}
          {!project.hideOverview && (
            <>
              <div className="mb-8">
                <h2 className="text-sm font-bold text-gray-400 uppercase tracking-wide mb-4">
                  PROJECT OVERVIEW
                </h2>
                <p className="text-lg text-gray-600 leading-[1.8] max-w-3xl">
                  {project.shortDescription}
                </p>
              </div>

              {/* Meta Info - horizontal layout below overview */}
              <div className="grid grid-cols-3 gap-8 mb-16">
                <div>
                  <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wide mb-2">
                    ROLE
                  </h3>
                  <p className="text-gray-900 whitespace-pre-line">{project.role}</p>
                </div>
                <div>
                  <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wide mb-2">
                    TIMELINE
                  </h3>
                  <p className="text-gray-900">{project.duration}</p>
                </div>
                <div>
                  <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wide mb-2">
                    TEAM
                  </h3>
                  <p className="text-gray-900 whitespace-pre-line">{project.team}</p>
                </div>
              </div>
            </>
          )}
        </div>
      </section>

      {/* Content Sections */}
      <section className="pb-20 px-6 md:px-16 lg:px-24">
        <div className="max-w-5xl mx-auto space-y-16">

          {/* Impact Section - shown first for recruiters (non-V2 projects only) */}
          {!isV2 && project.impact && project.impact.length > 0 && (
            <div className="bg-[#F6FAF9] -mx-6 md:-mx-16 lg:-mx-24 px-6 md:px-16 lg:px-24 py-16">
              <div className="max-w-5xl mx-auto">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 leading-tight">
                  Impact
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {project.impact.map((item, index) => (
                    <div key={index} className="bg-white/70 p-8 rounded-xl">
                      <h4 className="text-xl font-bold text-gray-900 mb-3">
                        {item.includes(':') ? item.split(':')[0] : `Impact ${index + 1}`}
                      </h4>
                      <p className="text-gray-600 leading-[1.7]">
                        {item.includes(':') ? item.split(':')[1].trim() : item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Testimonial - right after impact (non-V2 projects only) */}
          {!isV2 && project.testimonial && (
            <div className="bg-[#FAF9F7] p-8 md:p-10 rounded-2xl">
              <blockquote className="max-w-prose text-lg text-gray-900 italic leading-[1.8] mb-4">
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
            // Check if this section has no title AND is a text continuation (not a standalone media section)
            const hasNoTitle = !section.title;
            const isStandaloneMedia = hasNoTitle && !section.content && (section.images || section.image || section.gif || section.gifs || section.embed);

            // If isDecisionBlock + no title, it's a continuation of the previous decision block
            const isDecisionContinuation = section.isDecisionBlock && hasNoTitle;
            // For the previous decision block, check if next section is a continuation
            const nextSection = project.sections![index + 1];
            const hasDecisionContinuation = section.isDecisionBlock && section.title && nextSection && nextSection.isDecisionBlock && !nextSection.title;

            const sectionContent = (
              <div key={index} className={`${section.isDecisionBlock && !isDecisionContinuation ? `bg-gray-50 p-8 md:p-10 ${hasDecisionContinuation ? 'rounded-t-2xl pb-2' : 'rounded-2xl'}` : ''} ${isDecisionContinuation ? 'bg-gray-50 rounded-b-2xl px-8 md:px-10 pb-8 md:pb-10 pt-2 -mt-16' : isHeaderOnly && !section.sectionLabel ? 'pt-8' : hasNoTitle && !isDecisionContinuation && !isStandaloneMedia ? 'space-y-4 -mt-12' : 'space-y-4'}`}>
                {/* Section Label - small teal uppercase marker */}
                {section.sectionLabel && (
                  <div className="text-xs font-bold uppercase tracking-[0.15em] text-accent-teal mb-3 pt-8">
                    {section.sectionLabel}
                  </div>
                )}

                {/* Section Title - only show if title exists */}
                {section.title && (
                  <h2 className={`font-bold text-gray-900 leading-tight ${
                    isHeaderOnly && !section.sectionLabel
                      ? 'text-2xl md:text-3xl border-b-2 border-gray-200 pb-4'
                      : section.sectionLabel
                        ? 'text-2xl md:text-3xl'
                        : section.isDecisionBlock
                          ? 'text-xl md:text-2xl'
                          : 'text-2xl md:text-3xl'
                  }`}>
                    {section.title}
                  </h2>
                )}

                {/* Challenge / Insight / Solution colored blocks */}
                {section.challenge && (() => {
                  const colonIdx = section.challenge.indexOf(':');
                  const hasOwnLabel = colonIdx > 0 && colonIdx < 40;
                  return (
                    <div className="bg-[#FBF3F2] border-l-[3px] border-[#C2807A] rounded-r-lg px-5 py-4 mt-4 max-w-3xl">
                      <p className="text-[#8B554E] text-[0.95rem] leading-[1.7] m-0">
                        {hasOwnLabel ? (
                          <><strong>{section.challenge.slice(0, colonIdx + 1)}</strong>{section.challenge.slice(colonIdx + 1)}</>
                        ) : (
                          <><strong>Challenge:</strong> {section.challenge}</>
                        )}
                      </p>
                    </div>
                  );
                })()}
                {section.insight && (() => {
                  const colonIdx = section.insight.indexOf(':');
                  const hasOwnLabel = colonIdx > 0 && colonIdx < 40;
                  // Golden/amber style for quoted insights (starts with ")
                  const isGoldenQuote = section.insight.trim().startsWith('"');

                  if (isGoldenQuote) {
                    // Split quote and attribution (look for " — " pattern)
                    const dashIdx = section.insight.indexOf('— ');
                    const quoteText = dashIdx > 0 ? section.insight.slice(0, dashIdx).trim() : section.insight;
                    const attribution = dashIdx > 0 ? section.insight.slice(dashIdx) : '';
                    // Remove surrounding quotes
                    const cleanQuote = quoteText.replace(/^[""]|[""]$/g, '');

                    return (
                      <div className="bg-[#F7F5F2] border-l-[3px] border-[#B09A82] rounded-r-lg px-6 py-5 max-w-3xl">
                        <div className="text-[#B09A82] text-3xl font-serif leading-none mb-2">"</div>
                        <p className="text-[#6B5C48] text-lg italic leading-[1.7] m-0">
                          {cleanQuote}
                        </p>
                        {attribution && (
                          <p className="text-[#6B5C48] text-sm mt-3 m-0">{attribution}</p>
                        )}
                      </div>
                    );
                  }

                  return (
                    <div className="bg-[#F2F5F8] border-l-[3px] border-[#7E97AD] rounded-r-lg px-5 py-4 max-w-3xl">
                      <p className="text-[#4E6577] text-[0.95rem] leading-[1.7] m-0">
                        {hasOwnLabel ? (
                          <><strong>{section.insight.slice(0, colonIdx + 1)}</strong>{section.insight.slice(colonIdx + 1)}</>
                        ) : (
                          <><strong>Insight:</strong> {section.insight}</>
                        )}
                      </p>
                    </div>
                  );
                })()}
                {section.solution && (() => {
                  const colonIdx = section.solution.indexOf(':');
                  const hasOwnLabel = colonIdx > 0 && colonIdx < 40;
                  return (
                    <div className="bg-[#F0F6F5] border-l-[3px] border-[#5B9B8E] rounded-r-lg px-5 py-4 max-w-3xl">
                      <p className="text-[#3E6B61] text-[0.95rem] leading-[1.7] m-0">
                        {hasOwnLabel ? (
                          <><strong>{section.solution.slice(0, colonIdx + 1)}</strong>{section.solution.slice(colonIdx + 1)}</>
                        ) : (
                          <><strong>Solution:</strong> {section.solution}</>
                        )}
                      </p>
                    </div>
                  );
                })()}

                {/* Section Content */}
                {section.content && (
                  <div className="max-w-prose text-lg text-gray-600 leading-[1.8] whitespace-pre-line">
                    {renderInlineMarkdown(section.content)}
                  </div>
                )}

                {/* Quotes (speech bubbles) */}
                {section.quotes && section.quotes.length > 0 && (
                  <div className="flex flex-col md:flex-row gap-5 my-2">
                    {section.quotes.map((quote, qIdx) => (
                      <div key={qIdx} className="flex-1 relative bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                        <div className="text-accent-teal text-4xl font-serif leading-none mb-1">"</div>
                        <p className="text-gray-900 text-lg font-medium leading-[1.6] mb-4">
                          {quote.text}
                        </p>
                        <div className="flex items-center gap-2">
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold ${
                            qIdx === 0 ? 'bg-gray-400' : 'bg-accent-teal'
                          }`}>
                            {quote.author.charAt(0)}
                          </div>
                          <div>
                            <div className="text-sm font-bold text-gray-900">{quote.author}</div>
                            <div className="text-xs text-gray-400">{quote.role}</div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Cards */}
                {section.cards && section.cards.length > 0 && (() => {
                  // Detect if cards use "Consumers:" / "Creators:" prefix pattern for styled badges
                  const hasUserTypeTags = section.cards.every(c =>
                    c.title.startsWith('Consumers:') || c.title.startsWith('Creators:')
                  );

                  return (
                    <div className={`mt-4 grid gap-4 grid-cols-1 ${
                      hasUserTypeTags && section.cards.length === 4
                        ? 'md:grid-cols-2'
                        : section.cards.length <= 3
                          ? `md:grid-cols-${section.cards.length}`
                          : 'md:grid-cols-3'
                    }`}>
                      {section.cards.map((card, cardIndex) => {
                        if (hasUserTypeTags) {
                          const isConsumer = card.title.startsWith('Consumers:');
                          const cleanTitle = card.title.replace(/^(Consumers|Creators):\s*/, '');
                          const tagText = isConsumer ? 'DATA CONSUMER' : 'DATA CREATOR';
                          const tagSubtext = isConsumer ? '(PM, LEADERSHIP)' : '(DATA SCIENTIST)';

                          return (
                            <div key={cardIndex} className="bg-white p-6 rounded-xl border border-gray-100">
                              <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[0.7rem] font-bold tracking-wide mb-3 ${
                                isConsumer
                                  ? 'bg-[#F2F5F8] text-[#4E6577]'
                                  : 'bg-[#F0F6F5] text-[#3E6B61]'
                              }`}>
                                {tagText} <span className="font-normal opacity-75">{tagSubtext}</span>
                              </div>
                              <h4 className="text-base font-bold text-gray-900 mb-2">{cleanTitle}</h4>
                              <div className="text-[0.95rem] text-gray-600 leading-[1.6]">
                                {card.content.split('\n\n').map((para, pIdx) => (
                                  <p key={pIdx} className={pIdx > 0 ? 'mt-2' : ''}>
                                    {para.split('\n').map((line, lIdx) => (
                                      <span key={lIdx}>{lIdx > 0 && <br />}{line}</span>
                                    ))}
                                  </p>
                                ))}
                              </div>
                            </div>
                          );
                        }

                        return (
                          <div key={cardIndex} className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                            {card.avatar && (
                              <div className="w-16 h-16 mb-3">
                                <img src={card.avatar} alt={card.title} className="w-full h-full rounded-full" />
                              </div>
                            )}
                            <h4 className="text-base font-bold text-gray-900 mb-2">{card.title}</h4>
                            <div className="text-[0.95rem] text-gray-600 leading-[1.6]">
                              {card.content.split('\n\n').map((para, pIdx) => {
                                const isPersonaTag = para.trim().startsWith('→');
                                return (
                                  <p key={pIdx} className={`${pIdx > 0 ? 'mt-2' : ''} ${isPersonaTag ? 'text-[0.8rem] text-accent-teal font-bold mt-2' : ''}`}>
                                    {para.split('\n').map((line, lIdx) => (
                                      <span key={lIdx}>{lIdx > 0 && <br />}{line}</span>
                                    ))}
                                  </p>
                                );
                              })}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  );
                })()}

                {/* After Cards Text (between cards and flow) */}
                {section.afterCards && (
                  <div className={`mt-4 leading-[1.8] ${
                    section.isDecisionBlock
                      ? 'text-center italic text-gray-400 text-base'
                      : 'max-w-prose text-lg text-gray-600'
                  }`}>
                    {section.afterCards.split('\n\n').map((para, pIdx) => (
                      <p key={pIdx} className={pIdx > 0 ? 'mt-4' : ''}>{renderInlineMarkdown(para)}</p>
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
                            ? 'bg-[#FBF3F2] text-[#8B554E]'
                            : 'bg-white text-gray-600'
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
                  <div className={`rounded-xl overflow-hidden mt-8 flex justify-center bg-gray-50 relative ${
                    section.imageSize === 'small' ? 'max-w-[400px]' :
                    section.imageSize === 'medium' ? 'max-w-[600px]' : ''
                  }`}>
                    <img
                      src={section.image}
                      alt={section.title}
                      className="w-full max-h-[600px] object-contain cursor-zoom-in"
                      onClick={() => openLightbox(section.image!)}
                    />
                    {section.imageHighlight && (
                      <div
                        className="absolute border-2 border-accent-teal rounded-lg pointer-events-none"
                        style={{
                          top: section.imageHighlight.top,
                          left: section.imageHighlight.left,
                          width: section.imageHighlight.width,
                          height: section.imageHighlight.height,
                        }}
                      >
                        {section.imageHighlight.label && (
                          <span className="absolute -top-6 left-2 text-xs font-bold text-accent-teal bg-white px-2 py-0.5 rounded">
                            {section.imageHighlight.label}
                          </span>
                        )}
                      </div>
                    )}
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
                      <div key={imgIndex} className="space-y-2">
                        {section.imageLabels && section.imageLabels[imgIndex] && (
                          <span className="text-xs font-bold uppercase tracking-wider text-accent-teal">{section.imageLabels[imgIndex]}</span>
                        )}
                        <div className="rounded-xl overflow-hidden flex justify-center bg-gray-100 relative shadow-md">
                          <img
                            src={image}
                            alt={`${section.title} ${imgIndex + 1}`}
                            className="w-full max-h-[500px] object-contain cursor-zoom-in"
                            onClick={() => openLightbox(image)}
                          />
                          {section.imageHighlights && section.imageHighlights[imgIndex] && (
                            <div
                              className="absolute border-2 border-accent-teal rounded-lg pointer-events-none"
                              style={{
                                top: section.imageHighlights[imgIndex]!.top,
                                left: section.imageHighlights[imgIndex]!.left,
                                width: section.imageHighlights[imgIndex]!.width,
                                height: section.imageHighlights[imgIndex]!.height,
                              }}
                            />
                          )}
                        </div>
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
            <div className="bg-[#F6FAF9] -mx-6 md:-mx-16 lg:-mx-24 px-6 md:px-16 lg:px-24 py-16">
              <div className="max-w-5xl mx-auto">
                <div className="text-xs font-bold uppercase tracking-[0.15em] text-accent-teal mb-3">
                  Impact
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 leading-tight">
                  Results & Feedback
                </h2>
                <div className={`grid grid-cols-1 gap-6 ${project.impact.length === 2 ? 'md:grid-cols-2' : 'md:grid-cols-3'}`}>
                  {project.impact.map((item, index) => (
                    <div key={index} className="bg-white/70 p-8 rounded-xl text-center">
                      <div className="text-4xl md:text-5xl font-black text-accent-teal mb-3">
                        {item.includes(':') ? item.split(':')[0] : `Impact ${index + 1}`}
                      </div>
                      <p className="text-base text-gray-600 leading-[1.6]">
                        {item.includes(':') ? item.split(':')[1].trim() : item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* V2: All quotes (testimonial + stakeholder feedback) - carousel */}
          {isV2 && (project.testimonial || (project.stakeholderFeedback && project.stakeholderFeedback.length > 0)) && (() => {
            const allQuotes = [
              ...(project.testimonial ? [{ quote: project.testimonial.quote, author: project.testimonial.author, role: project.testimonial.role }] : []),
              ...(project.stakeholderFeedback || [])
            ];
            const totalPages = Math.ceil(allQuotes.length / 2);
            const visibleQuotes = allQuotes.slice(quotePageIndex * 2, quotePageIndex * 2 + 2);
            return (
              <div className="bg-[#FAF9F7] -mx-6 md:-mx-16 lg:-mx-24 px-6 md:px-16 lg:px-24 py-16">
                <div className="max-w-5xl mx-auto">
                  <div className="flex items-center justify-between mb-8">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
                      Stakeholder Feedback
                    </h2>
                    {totalPages > 1 && (
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => setQuotePageIndex(i => Math.max(0, i - 1))}
                          disabled={quotePageIndex === 0}
                          className="w-9 h-9 rounded-full border-2 border-gray-300 flex items-center justify-center text-gray-600 hover:border-gray-900 hover:text-gray-900 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                        </button>
                        <span className="text-sm text-gray-400">{quotePageIndex + 1} / {totalPages}</span>
                        <button
                          onClick={() => setQuotePageIndex(i => Math.min(totalPages - 1, i + 1))}
                          disabled={quotePageIndex === totalPages - 1}
                          className="w-9 h-9 rounded-full border-2 border-gray-300 flex items-center justify-center text-gray-600 hover:border-gray-900 hover:text-gray-900 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                        </button>
                      </div>
                    )}
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {visibleQuotes.map((q, i) => (
                      <div key={quotePageIndex * 2 + i} className="bg-white/70 p-6 md:p-8 rounded-2xl">
                        <blockquote className="text-base text-gray-900 italic leading-[1.8] mb-4">
                          "{q.quote}"
                        </blockquote>
                        <div className="text-gray-600 text-sm">
                          <span className="font-bold text-gray-900">— {q.author}</span>
                          {q.role && <span className="ml-2">({q.role})</span>}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })()}

          {/* V2: Impact summary paragraph */}
          {isV2 && project.impactSummary && (
            <div className="max-w-prose text-lg text-gray-600 leading-[1.8]">
              {project.impactSummary}
            </div>
          )}

          {/* V2: Next Steps */}
          {isV2 && project.nextSteps && (
            <div className="bg-[#F8F9FA] -mx-6 md:-mx-16 lg:-mx-24 px-6 md:px-16 lg:px-24 py-16">
              <div className="max-w-5xl mx-auto">
                <div className="text-xs font-bold uppercase tracking-[0.15em] text-accent-teal mb-3">
                  Product Vision
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 leading-tight">
                  {project.nextSteps.title}
                </h2>
                <p className="max-w-prose text-lg text-gray-600 leading-[1.8] mb-8">
                  {renderInlineMarkdown(project.nextSteps.content)}
                </p>
                <div className="space-y-4">
                  {project.nextSteps.items.map((item, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="w-9 h-9 bg-white rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 border border-gray-200">
                        <span className="text-accent-teal font-black text-sm">P{index}</span>
                      </div>
                      <p className="text-[1.05rem] text-gray-600 leading-[1.7]">
                        {(() => {
                          const colonIdx = item.indexOf(': ');
                          if (colonIdx !== -1 && colonIdx < 80) {
                            return (
                              <>
                                <span className="font-bold text-gray-900">{item.slice(0, colonIdx + 1)}</span>
                                {item.slice(colonIdx + 1)}
                              </>
                            );
                          }
                          return item;
                        })()}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* V2: Divider before What I Learned */}
          {isV2 && project.takeaways && project.takeaways.length > 0 && (
            <hr className="border-t border-gray-200" />
          )}

          {/* Legacy Structure - Challenge */}
          {!hasSections && project.challenge && (
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 leading-tight">
                The Challenge
              </h2>
              <p className="max-w-prose text-lg text-gray-600 leading-[1.8]">
                {project.challenge}
              </p>
            </div>
          )}

          {/* Legacy Structure - Solution */}
          {!hasSections && project.solution && (
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 leading-tight">
                The Solution
              </h2>
              <p className="max-w-prose text-lg text-gray-600 leading-[1.8]">
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
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 leading-tight">
                Stakeholder's Feedback
              </h2>
              <div className="space-y-6">
                {project.stakeholderFeedback.map((feedback, index) => (
                  <div key={index} className="bg-[#FAF9F7] p-8 md:p-10 rounded-2xl">
                    <blockquote className="max-w-prose text-lg text-gray-900 italic leading-[1.8] mb-4">
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
            <div className="bg-[#FAF9F7] -mx-6 md:-mx-16 lg:-mx-24 px-6 md:px-16 lg:px-24 py-16">
              <div className="max-w-5xl mx-auto">
                {isV2 && (
                  <div className="text-xs font-bold uppercase tracking-[0.15em] text-accent-teal mb-3">
                    Reflection
                  </div>
                )}
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 leading-tight">
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
            </div>
          )}

          {/* Reflection Section */}
          {isV2 && project.reflection && (
            <div className="bg-[#F8F9FA] -mx-6 md:-mx-16 lg:-mx-24 px-6 md:px-16 lg:px-24 py-16">
              <div className="max-w-5xl mx-auto">
                <div className="text-xs font-bold uppercase tracking-[0.15em] text-accent-teal mb-3">
                  Reflection
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 leading-tight">
                  {project.reflection.title}
                </h2>
                <div className="space-y-6">
                  {project.reflection.items.map((item, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="w-9 h-9 bg-white rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 border border-gray-200">
                        <span className="text-gray-900 font-black">{index + 1}</span>
                      </div>
                      <p className="text-[1.05rem] text-gray-600 leading-[1.7]">
                        {(() => {
                          const colonIdx = item.indexOf(': ');
                          if (colonIdx !== -1 && colonIdx < 80) {
                            return (
                              <>
                                <span className="font-bold text-gray-900">{item.slice(0, colonIdx + 1)}</span>
                                {item.slice(colonIdx + 1)}
                              </>
                            );
                          }
                          return item;
                        })()}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Bottom Navigation */}
      <section className="pb-20 px-6 md:px-16 lg:px-24">
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
