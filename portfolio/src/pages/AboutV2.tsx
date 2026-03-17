const timelineEvents = [
  {
    year: '2012 – 2014',
    tag: 'Tencent · Shenzhen',
    title: 'Visual Designer at Tencent',
    body: 'Worked on the QQ redesign — one of China\'s most-used apps. But I kept noticing where users struggled. Visual design alone wasn\'t enough.',
    accent: false,
    subPoints: null,
  },
  {
    year: '2014 – 2015',
    tag: 'A turning point',
    title: 'I quit.',
    body: 'I wanted to design interactions, not just visuals. So I left — learned English, came to the US for a Master\'s in design.',
    accent: true,
    subPoints: null,
  },
  {
    year: '2015 – 2024',
    tag: 'LinkedIn · Bay Area',
    title: 'Internship. Then 8.5 years at LinkedIn.',
    body: 'Landed an internship while still in school — and never really left. Over 8.5 years, I became known for finding the real problem beneath the surface request, and designing solutions that addressed people\'s actual pain points.',
    accent: false,
    subPoints: null,
  },
  {
    year: '2024 – Now',
    tag: 'A different kind of growth',
    title: 'Giving back — and going deeper.',
    body: 'After LinkedIn, I took time to invest in what matters beyond a job title — coaching job seekers on ADPList (top 100 UX mentors globally, 50+ sessions), and giving back to communities I care about.',
    accent: true,
    subPoints: null,
  },
];

const AboutV2 = () => {
  return (
    <div className="min-h-screen bg-white">

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="pt-32 pb-20 px-6 md:px-16 lg:px-24 bg-white">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs font-bold tracking-[0.3em] uppercase text-accent-teal mb-6">
            My Story
          </p>
          <div className="flex items-center gap-8">
            {/* Circular photo */}
            <div className="flex-shrink-0 w-28 h-28 md:w-36 md:h-36 rounded-full overflow-hidden border-4 border-white shadow-md">
              <img
                src="/images/wendy-profile.jpg"
                alt="Wendy Liang"
                className="w-full h-full object-cover"
                style={{ objectPosition: 'center top' }}
              />
            </div>
            {/* Title */}
            <h1
              className="text-4xl md:text-5xl font-black text-gray-900 leading-[1.1]"
              style={{ letterSpacing: '-0.02em' }}
            >
              From visual designer at Tencent<br />
              to product designer in San Francisco.
            </h1>
          </div>
        </div>
      </section>

      {/* ── TIMELINE ─────────────────────────────────────────── */}
      <section className="pb-10 px-6 md:px-16 lg:px-24 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Vertical line */}
            <div
              className="absolute top-0 bottom-0 w-px bg-gray-200"
              style={{ left: '11px' }}
            />

            <div className="space-y-0">
              {timelineEvents.map((event, i) => (
                <div key={i} className="relative flex gap-10 pb-8 group">
                  {/* Dot */}
                  <div className="relative flex-shrink-0 mt-1" style={{ width: '23px' }}>
                    <div
                      className={`w-[23px] h-[23px] rounded-full border-2 transition-colors duration-300 ${
                        event.accent
                          ? 'bg-accent-teal border-accent-teal'
                          : 'bg-white border-gray-300 group-hover:border-accent-teal'
                      }`}
                    />
                  </div>

                  {/* Content */}
                  <div
                    className={`flex-1 ${event.accent ? 'px-6 py-6 rounded-2xl' : 'pb-4'}`}
                    style={event.accent ? { backgroundColor: '#F6FAF9' } : {}}
                  >
                    {/* Year + tag */}
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <span className="text-sm font-bold text-accent-teal tracking-wide">
                        {event.year}
                      </span>
                      <span className="text-xs text-gray-400 uppercase tracking-[0.2em] font-medium">
                        {event.tag}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 leading-snug">
                      {event.title}
                    </h3>

                    {/* Body */}
                    <p className="text-lg text-gray-600 leading-relaxed">
                      {event.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── WHAT I'M LOOKING FOR ─────────────────────────────── */}
      <section className="py-24 px-6 md:px-16 lg:px-24 bg-white">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs font-bold tracking-[0.3em] uppercase text-accent-teal mb-4">
            What I'm Looking For
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            Still here for the hard problems.
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed max-w-2xl">
            I want to be back in tech — working on products that reach real people at scale.
            Not just making interfaces cleaner, but finding the actual problem underneath the
            surface request and designing something that genuinely changes how people experience
            the world. That's what I've always been drawn to, and that's what I'm looking for next.
          </p>
        </div>
      </section>

      {/* ── BEYOND WORK ──────────────────────────────────────── */}
      <section className="py-24 px-6 md:px-16 lg:px-24" style={{ backgroundColor: '#FAF9F7' }}>
        <div className="max-w-5xl mx-auto">
          <p className="text-xs font-bold tracking-[0.3em] uppercase text-accent-teal mb-4">
            Beyond Work
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-16">
            I'm someone who never stops growing —<br />
            and loves helping others do the same.
          </h2>

          <div className="space-y-16">

            {/* Painting */}
            <div className="flex flex-col md:flex-row gap-10 items-start">
              {/* Left: images */}
              <div className="flex flex-col gap-4 flex-shrink-0">
                <div className="flex gap-3">
                  <div className="rounded-2xl overflow-hidden w-48 flex-shrink-0">
                    <img src="/images/buddha-event.jpg" alt="Wendy painting" className="w-full h-full object-cover" style={{ aspectRatio: '3/4' }} />
                  </div>
                  <div className="grid grid-cols-2 gap-3 w-60 flex-shrink-0">
                    <div className="rounded-xl overflow-hidden bg-gray-50">
                      <img src="/images/67d283ae1425ea1144a1b1c6_hoby3.jpg" alt="Koala painting" className="w-full h-full object-cover object-left" style={{ aspectRatio: '1/1' }} />
                    </div>
                    <div className="rounded-xl overflow-hidden bg-gray-50">
                      <img src="/images/67d283ae1425ea1144a1b1c6_hoby3.jpg" alt="Sloth painting" className="w-full h-full object-cover" style={{ aspectRatio: '1/1', objectPosition: '35% center' }} />
                    </div>
                    <div className="rounded-xl overflow-hidden bg-gray-50">
                      <img src="/images/67d283ae1425ea1144a1b1c6_hoby3.jpg" alt="Red panda painting" className="w-full h-full object-cover" style={{ aspectRatio: '1/1', objectPosition: '65% center' }} />
                    </div>
                    <div className="rounded-xl overflow-hidden bg-gray-50">
                      <img src="/images/67d283ae1425ea1144a1b1c6_hoby3.jpg" alt="Oranges painting" className="w-full h-full object-cover object-right" style={{ aspectRatio: '1/1' }} />
                    </div>
                  </div>
                </div>
              </div>
              {/* Right: text */}
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Painting</h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  I've loved drawing since I was a kid. There's something deeply satisfying about
                  finishing a piece — seeing it come to life from nothing. It's one of the few things
                  I do purely for the joy of it.
                </p>
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-gray-200" />

            {/* Buddhist community */}
            <div className="flex flex-col md:flex-row gap-10 items-start">
              {/* Left: images */}
              <div className="flex gap-3 flex-shrink-0">
                <div className="rounded-2xl overflow-hidden w-48 flex-shrink-0">
                  <img src="/images/buddha4.jpg" alt="Buddhist study group" className="w-full h-full object-cover" style={{ aspectRatio: '3/4' }} />
                </div>
                <div className="grid grid-cols-2 gap-3 w-60 flex-shrink-0">
                  <div className="rounded-xl overflow-hidden col-span-2">
                    <img src="/images/buddha-leading.jpg" alt="Leading session" className="w-full h-full object-cover" style={{ aspectRatio: '2/1' }} />
                  </div>
                  <div className="rounded-xl overflow-hidden">
                    <img src="/images/buddha-event2.jpg" alt="Tea ceremony" className="w-full h-full object-cover" style={{ aspectRatio: '1/1' }} />
                  </div>
                  <div className="rounded-xl overflow-hidden">
                    <img src="/images/tea.jpg" alt="Meditation" className="w-full h-full object-cover" style={{ aspectRatio: '1/1' }} />
                  </div>
                </div>
              </div>
              {/* Right: text */}
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Personal growth — and helping others grow
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  I'm part of a Buddhist learning community — studying, practicing, and organizing
                  sessions for members every week. I care so much about this community that I
                  eventually{' '}
                  <a
                    href="/project/buddha-story"
                    className="text-accent-teal hover:underline font-medium"
                  >
                    built an app to help members study more effectively
                  </a>
                  .
                </p>
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-gray-200" />

            {/* Volunteering with kids */}
            <div className="flex flex-col md:flex-row gap-10 items-start">
              {/* Left: image — same total width as sections above (w-48 + gap-3 + w-60 = 444px) */}
              <div className="flex-shrink-0" style={{ width: '444px' }}>
                <div className="rounded-2xl overflow-hidden">
                  <img src="/images/teaching2.jpg" alt="Volunteering with kids" className="w-full h-full object-cover" style={{ aspectRatio: '16/9', objectPosition: 'center top' }} />
                </div>
              </div>
              {/* Right: text */}
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Kids teach, teaching kids.</h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  I volunteer reading and drawing with children — encouraging them to speak up and
                  find words for what they feel. Their openness reminds me what genuine curiosity
                  looks like. I hope to leave them with at least one moment of feeling truly seen.
                </p>
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-gray-200" />

            {/* Coaching */}
            <div className="flex flex-col md:flex-row gap-10 items-start">
              {/* Left: certificates */}
              <div className="flex gap-3 flex-shrink-0">
                <div className="flex-shrink-0" style={{ width: '216px', borderRadius: '16px', overflow: 'hidden', border: '1px solid #e5e7eb' }}>
                  <img src="/images/top-100-mentor.png" alt="Top 100 UX Design Mentor" className="w-full h-auto block" />
                </div>
                <div className="flex-shrink-0" style={{ width: '216px', borderRadius: '16px', overflow: 'hidden', border: '1px solid #e5e7eb' }}>
                  <img src="/images/complete-50-sessions.png" alt="Complete 50 sessions" className="w-full h-auto block" />
                </div>
              </div>
              {/* Right: text */}
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Career coaching on{' '}
                  <a
                    href="https://adplist.org/mentors/wendy-liang"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent-teal hover:underline"
                  >
                    ADPList
                  </a>
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  I coach job seekers through the stress and uncertainty of the job search —
                  helping them find clarity, confidence, and their next step.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>


    </div>
  );
};

export default AboutV2;
