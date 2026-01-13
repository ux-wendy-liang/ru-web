const About = () => {
  return (
    <div className="min-h-screen bg-cream">
      {/* Hero Section with Photo */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-16 items-start">
            {/* Left Column - Text */}
            <div className="w-full md:w-1/2">
              <h1 className="text-6xl font-bold text-gray-900 mb-8">
                <span className="inline-block mr-4">👋</span>Hi
              </h1>
              <div className="text-xl text-gray-700 leading-relaxed space-y-6">
                <p>
                  I am Wendy (Ru Liang), 8+ years of UX design experience working on Enterprise & Big Data SaaS products. I build products from 0 to product-market fit while wearing multiple hats as a Project Lead, UX researcher, and Product Manager. I'm a passionate and empathetic product designer with a deep curiosity about human behavior, personal growth, and emotional well-being. Beyond my design career, I dedicate time to continuous learning, self-reflection, and helping others navigate challenges.
                </p>
              </div>
              <div className="mt-8">
                <a
                  href="https://docs.google.com/document/d/15staG_wP1O0-HSl8O4V44kzVNShqZBRnl9PKEHaAwcM/edit?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-8 py-3 bg-primary hover:bg-green-200 transition-colors duration-200 rounded-full text-gray-900 font-medium text-lg"
                >
                  DOWNLOAD RESUME
                </a>
              </div>
            </div>

            {/* Right Column - Photo */}
            <div className="w-full md:w-1/2">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/images/67cfc77c9730c3b0c998b6f9_WechatIMG27.jpg"
                  alt="Wendy Liang"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interests Section - Two columns */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
            {/* Reading Club */}
            <div>
              <div className="rounded-2xl overflow-hidden shadow-lg mb-6">
                <img
                  src="/images/67d283ae65d39aa60f528085_hoby1.jpg"
                  alt="Reading club"
                  className="w-full h-auto object-cover"
                />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Reading club</h3>
              <p className="text-xl text-gray-700 leading-relaxed">
                Since last year, I have attended a reading club every Sunday, where we read books and discuss deep questions such as how to achieve inner peace and happiness, the value of kindness, our origins, and our identity.
              </p>
            </div>

            {/* Coaching */}
            <div>
              <div className="rounded-2xl overflow-hidden shadow-lg mb-6">
                <img
                  src="/images/67d283adadafa1c246e5924a_hoby2.jpg"
                  alt="Coaching"
                  className="w-full h-auto object-cover"
                />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Coaching</h3>
              <p className="text-xl text-gray-700 leading-relaxed">
                I deeply value helping others find emotional balance and grow. I've provided long-term coaching to two individuals, guiding them toward inner peace and better relationships, and volunteered to support others through emotional and job-seeking challenges.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Painting Section - Full width */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-2xl overflow-hidden shadow-lg mb-6">
            <img
              src="/images/67d283ae1425ea1144a1b1c6_hoby3.jpg"
              alt="Painting"
              className="w-full h-auto object-cover"
            />
          </div>
          <h3 className="text-3xl font-bold text-gray-900 mb-4">Painting</h3>
          <p className="text-xl text-gray-700 leading-relaxed">
            I also enjoy drawing, especially cute and fun cartoon animals.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
