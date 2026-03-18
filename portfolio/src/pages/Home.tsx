import { useState } from 'react';
import { Link } from 'react-router-dom';
import { projects } from '../data/projects';

const Home = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('uiwendyliang@outlook.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section - starts from top to include nav area */}
      <section className="pb-20 px-6 md:px-16 lg:px-24 animated-gradient" style={{ paddingTop: '160px', marginTop: '-88px' }}>
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Hi, I'm Wendy
            <br />
            Product Design in Bay Area
          </h1>
          <p className="text-lg text-gray-600 mb-10 max-w-2xl leading-loose">
            <span className="font-semibold text-gray-900">8+ years</span> turning <span className="font-semibold text-gray-900">complex products</span> into <span className="font-semibold text-gray-900">intuitive experiences</span> — specializing in <span className="font-semibold text-gray-900">enterprise ads & data tools</span> at <span className="font-semibold text-gray-900">LinkedIn</span>.
          </p>
          <p className="text-lg text-gray-600 mb-10 max-w-2xl leading-loose" style={{ marginTop: '-1.25rem' }}>
            I dig deep into <span className="font-semibold text-gray-900">user needs</span>, collaborate across teams, and deliver designs that drive <span className="font-semibold text-gray-900">real business outcomes</span>.
          </p>
          <div className="flex flex-wrap gap-3 items-center">
            <div className="relative">
              <button
                onClick={handleCopyEmail}
                className="inline-block px-6 py-2 border-2 border-gray-400 rounded-full text-gray-600 text-sm cursor-pointer hover:text-gray-900 hover:border-gray-900 transition-colors duration-200"
              >
                <span className={copied ? 'bg-gray-900/10 rounded px-1 -mx-1' : ''}>
                  uiwendyliang@outlook.com
                </span>
              </button>
              {copied && (
                <span className="absolute -top-9 left-1/2 -translate-x-1/2 px-3 py-1 bg-gray-900 text-white text-xs rounded-md whitespace-nowrap after:content-[''] after:absolute after:top-full after:left-1/2 after:-translate-x-1/2 after:border-4 after:border-transparent after:border-t-gray-900">
                  Copied!
                </span>
              )}
            </div>
            <a
              href="https://docs.google.com/document/d/15staG_wP1O0-HSl8O4V44kzVNShqZBRnl9PKEHaAwcM/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-2 border-2 border-gray-400 rounded-full text-gray-600 text-sm hover:text-gray-900 hover:border-gray-900 transition-colors duration-200"
            >
              Résumé
            </a>
          </div>
        </div>
      </section>

      {/* Projects Section - Alternating Layout */}
      <section className="py-20 px-6 md:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto space-y-32">
          {projects.filter(p => !p.hidden).map((project) => (
            <div
              key={project.id}
              className="flex flex-col md:flex-row gap-12 items-center"
            >
              {/* Project Image */}
              <div className="w-full md:w-3/5">
                <div className="relative overflow-hidden rounded-2xl bg-white p-4">
                  <img
                    src={project.cover}
                    alt={project.title}
                    className="w-full h-auto rounded-lg"
                  />
                </div>
              </div>

              {/* Project Info */}
              <div className="w-full md:w-2/5">
                <p className="text-sm text-gray-400 mb-2">{project.year}</p>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 leading-tight">
                  {project.title}
                </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  {(project as any).subtitle || project.shortDescription}
                </p>
                <Link
                  to={`/project/${project.id}`}
                  className="inline-block px-8 py-3 border-2 border-accent-teal text-accent-teal hover:bg-accent-teal hover:text-white transition-all duration-200 rounded-full text-lg font-medium"
                >
                  VIEW MORE
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Resume Strip */}
      <section className="py-12 px-6 md:px-16 lg:px-24 border-t border-gray-100">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-wrap items-center gap-2 text-sm text-gray-500">
            <span className="text-gray-400 uppercase tracking-widest text-xs font-medium">Previously at</span>
            <span className="font-semibold text-gray-700">LinkedIn</span>
            <span className="text-gray-300">·</span>
            <span className="font-semibold text-gray-700">Tencent</span>
            <span className="text-gray-300">·</span>
            <span className="font-semibold text-gray-700">Startup</span>
          </div>
          <a
            href="https://docs.google.com/document/d/15staG_wP1O0-HSl8O4V44kzVNShqZBRnl9PKEHaAwcM/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 border-2 border-accent-teal text-accent-teal hover:bg-accent-teal hover:text-white transition-all duration-200 rounded-full text-sm font-medium"
          >
            VIEW RÉSUMÉ →
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;
