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
      <section className="pb-20 px-8 md:px-16 lg:px-24 animated-gradient" style={{ paddingTop: '160px', marginTop: '-88px' }}>
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Hi, I'm Wendy
            <br />
            Product Design in Bay Area
          </h1>
          <p className="text-lg text-gray-700 mb-10 max-w-2xl leading-relaxed">
            8+ years shaping Enterprise & Big Data SaaS at LinkedIn. These days, I don't stop at the mockup — I vibe code my designs into reality.
          </p>
          <div className="flex flex-wrap gap-3 items-center">
            <div className="relative">
              <button
                onClick={handleCopyEmail}
                className="inline-block px-6 py-2 border border-gray-600 rounded-full text-gray-600 text-sm cursor-pointer hover:text-gray-900 hover:border-gray-900 transition-colors duration-200"
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
              className="inline-block px-6 py-2 border border-gray-600 rounded-full text-gray-600 text-sm hover:text-gray-900 hover:border-gray-900 transition-colors duration-200"
            >
              Résumé
            </a>
          </div>
        </div>
      </section>

      {/* Projects Section - Alternating Layout */}
      <section className="py-20 px-8 md:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto space-y-32">
          {projects.map((project) => (
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
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 leading-tight">
                  {project.title}
                </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  {project.shortDescription}
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

      {/* Experience Section */}
      <section className="py-20 px-8 md:px-16 lg:px-24 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <div className="w-20 h-1 bg-black mb-6"></div>
            <h2 className="text-5xl font-bold text-gray-900">Experience</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* LinkedIn */}
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">LinkedIn</h3>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Product Designer</h4>
              <p className="text-gray-600">8 yr, May 2016–Nov 2024</p>
            </div>

            {/* Tencent */}
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">Tencent</h3>
              <h4 className="text-xl font-bold text-gray-900 mb-3">User Interface Designer</h4>
              <p className="text-gray-600">2 yr, Jun 2012–Apr 2014</p>
            </div>

            {/* Startup */}
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">Startup company</h3>
              <h4 className="text-xl font-bold text-gray-900 mb-3">First UI and UX Designer</h4>
              <p className="text-gray-600">1 yr, Aug 2010–May 2012</p>
            </div>
          </div>

          {/* CV Button */}
          <div className="mt-16 flex justify-center md:justify-end">
            <a
              href="https://docs.google.com/document/d/15staG_wP1O0-HSl8O4V44kzVNShqZBRnl9PKEHaAwcM/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-12 py-4 bg-black hover:bg-gray-800 transition-colors duration-200 rounded-full text-white text-lg font-medium"
            >
              SEE FULL CV →
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
