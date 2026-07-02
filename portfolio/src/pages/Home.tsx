import { useState } from 'react';
import { Link } from 'react-router-dom';
import { projects } from '../data/projects';

// Visual / illustration work from Dribbble — shows visual design range
const otherWork = [
  { title: 'Nest', image: '/images/otherwork/nest.png', href: 'https://dribbble.com/shots/3306675-Nest' },
  { title: 'Mid Autumn Festival', image: '/images/otherwork/mid-autumn.png', href: 'https://dribbble.com/shots/3002160-Mid-Autumn-Festival' },
  { title: 'Monster', image: '/images/otherwork/monster.gif', href: 'https://dribbble.com/shots/2078547-Monster' },
  { title: 'I Promise', image: '/images/otherwork/i-promise.png', href: 'https://dribbble.com/shots/2076117-I-promise' },
  { title: 'Hawaiian', image: '/images/otherwork/hawaiian.png', href: 'https://dribbble.com/shots/1930867-Hawaiian' },
  { title: 'Happy', image: '/images/otherwork/happy02.gif', href: 'https://dribbble.com/shots/2068903-Happy02' },
  { title: 'Whale Logo', image: '/images/otherwork/logo-whale.png', href: 'https://dribbble.com/shots/1504445-Logo-whale' },
  { title: 'iPhone Chat', image: '/images/dribbble-iphone-app-chat.jpg', href: 'https://dribbble.com/shots/726089-Iphone-App-Chat' },
  { title: 'Chat', image: '/images/dribbble-chat-new.jpg', href: 'https://dribbble.com/shots/659024-Chat-New' },
  { title: 'Windows 8 UI', image: '/images/dribbble-win8.png', href: 'https://dribbble.com/shots/1062850-Win8' },
  { title: 'Profile', image: '/images/dribbble-profile.png', href: 'https://dribbble.com/shots/1332599-Profile' },
  { title: 'Shopping', image: '/images/dribbble-profile-shopping.png', href: 'https://dribbble.com/shots/1858464-Profile-Shopping' },
];

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
      <section className="pb-10 px-6 md:px-16 lg:px-24 animated-gradient" style={{ paddingTop: '180px', marginTop: '-88px' }}>
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Hi, I'm Wendy —
            <br />
            a product designer who doesn't stop at mockups.
          </h1>
          <p className="text-lg text-gray-600 mb-10 max-w-2xl leading-loose">
            <span className="font-semibold text-gray-900">8 years</span> designing enterprise & data products at <span className="font-semibold text-gray-900">LinkedIn</span> — with a <span className="font-semibold text-gray-900">visual designer's craft</span> and a <span className="font-semibold text-gray-900">strategist's product sense</span>.
          </p>
          <p className="text-lg text-gray-600 mb-10 max-w-2xl leading-loose" style={{ marginTop: '-1.25rem' }}>
            Lately I've gone further: using <span className="font-semibold text-gray-900">AI</span>, I build and ship <span className="font-semibold text-gray-900">my own products</span> — from <span className="font-semibold text-gray-900">idea to live</span>, end to end.
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
      <section className="pt-10 pb-20 px-6 md:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto space-y-24">
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
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 leading-tight">
                  {project.title}
                </h2>
                <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                  {(project as any).subtitle || project.shortDescription}
                </p>
                {project.tags && project.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-block px-3 py-1 rounded-full bg-[#F0F6F5] text-accent-teal text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
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

      {/* QQ for Android - Project Card (links to detail page) */}
      <section className="pb-20 px-6 md:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            {/* Project Image */}
            <div className="w-full md:w-3/5">
              <div className="relative overflow-hidden rounded-2xl bg-white p-4">
                <img
                  src="/images/qq/qq-01.png"
                  alt="QQ for Android"
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>

            {/* Project Info */}
            <div className="w-full md:w-2/5">
              <p className="text-sm text-gray-400 mb-2">2013</p>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 leading-tight">
                QQ for Android
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                A redesign of Tencent's QQ mobile app, in collaboration with Frog Design — user interviews, prototyping, visual design, and usability testing to solve the problem of user churn.
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                {['Visual Design'].map((tag) => (
                  <span
                    key={tag}
                    className="inline-block px-3 py-1 rounded-full bg-[#F0F6F5] text-accent-teal text-xs font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <Link
                to="/project/qq-android"
                className="inline-block px-8 py-3 border-2 border-accent-teal text-accent-teal hover:bg-accent-teal hover:text-white transition-all duration-200 rounded-full text-lg font-medium"
              >
                VIEW MORE
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* V Camera - Project Card (links to detail page) */}
      <section className="pb-20 px-6 md:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            {/* Project Image */}
            <div className="w-full md:w-3/5">
              <div className="relative overflow-hidden rounded-2xl bg-white p-4">
                <img
                  src="/images/vcamera/vcamera-cover.png"
                  alt="V Camera: Bringing Fun Back to Qzone"
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>

            {/* Project Info */}
            <div className="w-full md:w-2/5">
              <p className="text-sm text-gray-400 mb-2">2014</p>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 leading-tight">
                V Camera: Bringing Fun Back to Qzone
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                A Tencent team project — a camera tool that lets users edit photos and share them instantly to their social network. My role covered visual design and interaction flow.
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                {['Visual Design'].map((tag) => (
                  <span
                    key={tag}
                    className="inline-block px-3 py-1 rounded-full bg-[#F0F6F5] text-accent-teal text-xs font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <Link
                to="/project/v-camera"
                className="inline-block px-8 py-3 border-2 border-accent-teal text-accent-teal hover:bg-accent-teal hover:text-white transition-all duration-200 rounded-full text-lg font-medium"
              >
                VIEW MORE
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Other Work - Visual Design Gallery */}
      <section className="py-20 px-6 md:px-16 lg:px-24 bg-[#FAF9F7]">
        <div className="max-w-7xl mx-auto">
          <p className="text-accent-teal uppercase tracking-widest text-xs font-medium mb-3">Beyond Product Design</p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 leading-tight">
                Other Work
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl leading-relaxed">
                Illustration, branding, and icon design — a look at the visual craft behind my product work.
              </p>
            </div>
            <a
              href="https://dribbble.com/Wendy"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block whitespace-nowrap px-6 py-2 border-2 border-gray-400 rounded-full text-gray-600 text-sm hover:text-gray-900 hover:border-gray-900 transition-colors duration-200"
            >
              See more on Dribbble →
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {otherWork.map((item) => (
              <a
                key={item.href}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block overflow-hidden rounded-xl bg-white"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="w-full aspect-[4/3] object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="pointer-events-none absolute inset-0 flex items-end bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <span className="p-4 text-sm font-medium text-white">{item.title}</span>
                </div>
              </a>
            ))}
          </div>
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
