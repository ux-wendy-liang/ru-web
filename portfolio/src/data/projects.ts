export interface ProjectSection {
  title: string;
  content: string;
  sectionLabel?: string; // Small teal uppercase label (e.g., "The Problem", "Key Design Decisions")
  challenge?: string; // Red colored block for challenge text
  insight?: string; // Blue colored block for insight text
  solution?: string; // Green colored block for solution text
  isDecisionBlock?: boolean; // Wrap section in white card (for decision blocks)
  dividerAfter?: boolean; // Add horizontal divider after this section
  image?: string;
  imageSize?: 'small' | 'medium' | 'large'; // Controls max-width: small=400px, medium=600px, large=full
  imageHighlight?: { top: string; left: string; width: string; height: string; label?: string }; // Overlay highlight box on image
  images?: string[];
  imageLabels?: string[]; // Labels for images (e.g., ['Before', 'After'])
  imageHighlights?: (null | { top: string; left: string; width: string; height: string })[]; // Per-image highlight boxes
  imageStyle?: 'phone'; // Wrap images in phone frame mockup
  phoneBefore?: string[]; // Before phone screenshots
  phoneAfter?: { image: string; caption: string }[]; // After phone screenshots with captions
  phoneAfterCaption?: string; // Overall design rationale (deprecated, use per-phone captions)
  gif?: string;
  gifs?: string[];
  embed?: string; // URL for interactive prototype iframe
  quotes?: { text: string; author: string; role: string }[];
  cards?: { title: string; content: string; avatar?: string }[];
  afterCards?: string;
  flow?: string[];
}

export interface Project {
  id: string;
  title: string;
  year: number;
  cover: string;
  shortDescription: string;
  role: string;
  duration: string;
  team: string;
  // New structured content
  sections?: ProjectSection[];
  // Legacy fields (still used for simple projects)
  challenge?: string;
  solution?: string;
  impact?: string[];
  impactSummary?: string;
  images?: string[];
  gifs?: string[];
  // New fields
  takeaways?: string[];
  nextSteps?: {
    title: string;
    content: string;
    items: string[];
  };
  reflection?: {
    title: string;
    items: string[];
  };
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
  stakeholderFeedback?: {
    quote: string;
    author: string;
    role: string;
  }[];
  hideCoverOnDetail?: boolean;
  subtitle?: string;
  hideOverview?: boolean;
  hidden?: boolean;
  liveUrl?: string;
}

export const projects: Project[] = [
  {
    id: 'publisher',
    title: 'Building the LinkedIn Publisher Portal from 0-1',
    year: 2024,
    cover: '/images/67cb85a4357dca204c5f885a_cover2.png',
    shortDescription: 'Designed LinkedIn\'s publisher portal from 0→1. I proposed expanding the scope beyond SDK integration — resulting in a full self-serve platform for ad revenue.',
    role: 'User researcher, UX & UI',
    duration: '6 Weeks',
    team: '1 PM, 1 Designer, 3 Engineers',
    sections: [
      {
        title: 'Challenge: Privacy restrictions put 30% of LinkedIn\'s ad revenue at risk.',
        content: 'In 2021, major privacy changes from Google Chrome and Apple began disrupting digital advertising. Users were opting out of data sharing, and as a result, LinkedIn started losing critical audience signals to know who the audiences are, making it harder to serve relevant ads to publishers or business owners who want to serve LinkedIn ads on their websites.\n\n23-30% of LinkedIn\'s ad revenue was at stake.',
        image: '/images/67cb84a67b6264e6794a94c4_connections2.png'
      },
      {
        title: 'The solution',
        content: 'Enable publishers to integrate LinkedIn\'s Ads SDK seamlessly to regain audience insights and optimize ad performance. Initially, my task was simple: "Just add an SDK integration entry point to the developer site."\n\nBut after diving deep into research, I saw a much bigger opportunity. Instead of just adding a small feature, I pitched a full-scale Publisher Portal — a dedicated hub where publishers could integrate, manage, and optimize their LinkedIn Ads SDK efficiently to gain ads revenue.'
      },
      {
        title: 'My process',
        content: ''
      },
      {
        title: 'Understand who are the users',
        content: 'Before jumping into solutions, I worked closely with engineers, PM, business development, and partners to fully understand who are the users.',
        image: '/images/67cb84c38054bc90c6aca4d3_UX Persona.png'
      },
      {
        title: 'Competitive Research to propose',
        content: 'I studied how Meta Audience Network and Google AdSense tackled this challenge. They offered dedicated publisher portals with robust tools for managing ad performance. Meta and Google and competitors to LinkedIn, from the research, they all have common features. I confirmed with Pm to see if he image we will build features Include all the features like payment. He agreed.\n\nSo, This insight reinforced the need for LinkedIn to build its own independent solution rather than embedding a quick fix into the developer site.',
        images: [
          '/images/67cb84d64cc150393824121c_Google AdSense.png',
          '/images/67cb84d64cc1503938241211_Meta Monetization Manager.png'
        ]
      },
      {
        title: 'Convince Design leads, PM & Engineers',
        content: 'I showed how Meta and Google already had full portals—LinkedIn needed the same to stay competitive. My partners felt excited and supported on this long term vision.\n\nMy proposal: — a dedicated hub where publishers could integrate, manage, and optimize their LinkedIn Ads SDK efficiently to gain ads revenue.'
      },
      {
        title: 'Designed ideal user journey to be the Vision',
        content: 'With that I defined the ideal user journey with the consideration with current existing LinkedIn business products.',
        image: '/images/67cb84e00fc914afc695d536_Publisher Journey Map.png'
      },
      {
        title: 'Turn Vision Into Reality',
        content: '',
        image: '/images/67cb85009b1310686606904a_User Journey.png'
      },
      {
        title: '',
        content: 'Once we aligned on the vision, I proposed the MVP version of the Publisher Portal, focusing on the onboarding SDK integration process:',
        image: '/images/67cb85009b1310686606903c_user flow.png',
        imageSize: 'large'
      },
      {
        title: '',
        content: 'Keep iterating to share flow with product managers to align on the design direction.'
      },
      {
        title: 'Zoom to details on the MVP landing page',
        content: 'To begin the onboarding process, we need a landing page to explain the LinkedIn value.',
        image: '/images/67cb850b7c14b5f7a1765807_Publisher portal_Landing page copy.png'
      },
      {
        title: 'Design flow',
        content: 'And a step-by-step integration flow for publishers. Meet David. He is a publisher from NewYork times, he wants to research LinkedIn monetization process and integrate LinkedIn SDK on their website to show relevant ads to gain more revenues.',
        image: '/images/67cb84c38054bc90c6aca4d3_UX Persona.png'
      },
      {
        title: '',
        content: '',
        gifs: ['/images/67d4a2e7a10bd11b3afe1433_landing-2.gif']
      },
      {
        title: '',
        content: 'Step1: He set up account by creating app.\n\nStep2: Then he has to wait for approve from LinkedIn side.\n\nAfter three days, David saw his account is been approved.\n\nStep3: He copied and pasted the client ID and passcode to their NewYork times website code area. With that he can see the relevant linkedin provided ads.',
        gifs: ['/images/67cb85220fc914afc69622b0_waiting for approve.gif']
      },
      {
        title: '',
        content: 'With the long term vision in mind, we have designed the MVP version to publishers and make sure it scale to the vision.'
      }
    ],
    impact: [
      'Scope changed: From a small SDK entry point to a full Publisher Portal.',
      '30% Ad Revenue: Protected 23-30% of LinkedIn\'s ad revenue.',
      'Publisher Ecosystem: Set the foundation for a long-term scalable publisher ecosystem.'
    ],
    takeaways: [
      'Don\'t just execute: Challenge the problem statement. A small feature request led to a strategic product shift that future-proofed LinkedIn\'s advertising business.',
      'Design isn\'t just visuals: It\'s problem-solving. Understanding users, business impact, and technical feasibility allowed me to shape the product direction.',
      'Storytelling matters: Pitching the idea with research, and a clear user journey helped me gain executive and cross-functional alignment.'
    ]
  },
  {
    id: 'dashboard-v2',
    title: 'Reimagining LinkedIn\'s Data Dashboard: From Quick Fix to Root-Cause Redesign',
    year: 2022,
    cover: '/images/67ce84a463ba9f169c18cd3c_dashboard cover.png',
    shortDescription: 'Challenged a quick-fix proposal with user research, uncovering root causes that led to a dual-experience dashboard redesign — boosting self-serve rate to 71%.',
    role: 'User Researcher, UX & UI Designer',
    duration: '8 Weeks',
    team: '1 Product Manager, 1 Designer, 7 Engineers',
    sections: [
      // ===== THE CONTEXT =====
      {
        title: 'A Dashboard Everyone Visits, But Nobody Can Explore',
        sectionLabel: 'The Context',
        content: 'LinkedIn\'s internal data visualization tool (Retina) helps product managers, engineers, and leadership track product metrics. The dashboard was **one of the most visited pages** — hundreds of internal users relied on it daily to make product decisions.\n\nBut there was a problem hiding in plain sight: **the dashboard\'s filtering experience was so unusable that users simply didn\'t filter at all.** PMs would visit the dashboard, glance at the default view, and leave — unable to drill into the data they actually needed.\n\nThe result? PMs couldn\'t self-serve. Instead of exploring data themselves, they went directly to data scientists to ask questions — turning data creators into **"human filters."**',
        dividerAfter: true
      },
      // ===== THE TURNING POINT =====
      {
        title: 'Engineering Had a Solution. I Thought We Were Solving the Wrong Problem.',
        sectionLabel: 'The Turning Point',
        content: 'As the **sole designer on a team of 7 engineers**, I owned the full design process — from user research to final UI.\n\nAt this point, **nobody on the team fully understood why users weren\'t engaging with the dashboard.** We knew usage was low, but the root cause was unclear. Some users had requested tab-level filters, and the engineering manager proposed building exactly that — a quick win to address the specific request.'
      },
      {
        title: '',
        content: '',
        challenge: 'The proposed fix: Add tab-level filters to let users refine data within each tab.'
      },
      {
        title: '',
        content: 'On the surface, it made sense. But something didn\'t sit right with me. We were about to commit 7 engineers to build a solution, but no one could explain what we were actually solving.'
      },
      {
        title: '',
        content: '',
        insight: 'My design judgment: Before building anything, I needed to find the root cause. User requests are symptoms — and shipping a fix for the wrong symptom would waste the entire team\'s time.'
      },
      {
        title: 'Convincing Stakeholders to Invest in Research',
        content: 'This wasn\'t an easy sell. Engineering wanted to ship fast. I made the case to both the PM and engineering manager: **"We have 7 engineers ready to build. Give me 2 weeks to make sure we build the right thing."**\n\nI framed it as **risk reduction** — the cost of 2 weeks of research was far lower than the cost of shipping a solution that didn\'t solve the real problem. They agreed.',
        image: '/images/dashboard-8week-timeline.svg',
        dividerAfter: true
      },
      // ===== RESEARCH =====
      {
        title: 'Uncovering What Users Actually Needed',
        sectionLabel: 'Research',
        content: 'I designed and led a research study with **two distinct user groups** — because I hypothesized that dashboard **creators** (data scientists) and dashboard **consumers** (PMs, leadership) had fundamentally different pain points.\n\nI recruited **~5 participants per group** and conducted **1-on-1 interviews** to uncover their goals, current challenges, and ideal experiences. In qualitative research, **5 users per segment is the sweet spot** — studies show it uncovers ~85% of usability issues within a user group, while keeping the research fast enough to stay within my 2-week timeline.',
        image: '/images/dashboard-research-participants.svg'
      },
      {
        title: 'What I Found: Two Sides of the Same Problem',
        content: 'After conducting all interviews, I synthesized the findings into an affinity map — grouping observations by theme to identify patterns across both user groups.',
        image: '/images/dashboard-research.png'
      },
      {
        title: '',
        content: '',
        cards: [
          { title: 'Consumers: Filters are too technical', content: 'Users had to select a "dataset" before applying filters — a concept they didn\'t understand. One IPM said: "I\'ve only selected this tab already — why does the filter have so many options?" She was confusing dataset names with tab names.' },
          { title: 'Consumers: Filters behave unpredictably', content: 'A filter might affect one chart but not others. Users had no way to know the scope of their filters. As one user put it: "Retina filters are very clicky — very back and forth to get where you want. Feels very counterintuitive."' },
          { title: 'Creators: Can\'t unify similar filters', content: 'Two charts might both have a "country" filter, but named differently in their datasets ("country_code" vs "COUNTRY-CODE"). Users had to apply the same filter four times across different datasets to see results.' },
          { title: 'Creators: Became "human filters"', content: 'Because consumers couldn\'t self-serve, data scientists spent hours answering ad-hoc questions. One participant noted: "It\'s okay to have a complicated tool for producers — just build something much simpler for consumers, since they\'re not technical."' }
        ]
      },
      {
        title: 'A Clue from Competitive Analysis',
        content: 'One participant pointed to a key Tableau feature: **a single filter that works across multiple data sources** — as long as you create associations between datasets. This became a direct design inspiration.\n\nBut I didn\'t want to simply copy Tableau. In Tableau, producers and consumers share the same complex interface. My approach was different: **give producers the power to link dimensions behind the scenes, so consumers only see one clean, human-readable filter** — no technical knowledge needed.',
        dividerAfter: true
      },
      // ===== FROM INSIGHT TO STRATEGY =====
      {
        title: 'The Insight That Changed Everything',
        sectionLabel: 'From Insight to Strategy',
        content: 'Two quotes from the interviews hit me at the same time — and reframed the entire project:',
        quotes: [
          { text: 'This tool isn\'t designed for people like me — it\'s too technical.', author: 'PM', role: 'Data Consumer' },
          { text: 'Having a complex tool is fine for us — as long as consumers get something simple.', author: 'Data Scientist', role: 'Data Creator' }
        ],
        afterCards: 'This wasn\'t a filter problem — it was an **audience problem.** The tool treated everyone the same, but creators and consumers had fundamentally different needs. The real challenge: **design two distinct experiences for two distinct users.**',
        image: '/images/dashboard-insight-to-strategy.svg',
        dividerAfter: true
      },
      // ===== THE SOLUTION =====
      {
        title: 'How might we enable creators to build intuitive dashboards while empowering consumers to self-serve and understand cohesive data stories?',
        sectionLabel: 'The Solution',
        content: 'Instead of one-size-fits-all filters, I designed two tailored experiences: a powerful setup mode for data creators, and a simplified, human-readable interface for consumers.'
      },
      {
        title: 'For Data Creators: Powerful Setup Tools',
        content: 'Data scientists can now set up filters at multiple levels and **unify filters across datasets** — the breakthrough feature born from research.',
        image: '/images/dashboard-filter-unify.svg'
      },
      {
        title: 'For Data Consumers: Intuitive Self-Service',
        content: 'Before, consumers chose from cryptic names like "country_code." Now, they simply pick **"Country"** from a clean, human-readable list — no technical knowledge needed.',
        image: '/images/dashboard-consumer-before-after.svg'
      },
      {
        title: 'From Concept to Ship: Defending the Design with Engineers',
        content: 'I designed filters to work at **every level** — chart, group, tab, and dashboard. But the engineering team pushed back: **"Chart-level filters aren\'t needed. Users can just click into the chart and filter there."**\n\nThis was exactly the workflow that caused the original problem — forcing users to leave the dashboard to filter was why PMs couldn\'t self-serve. I walked engineers through the research findings and the consumer journey. The team agreed, and we shipped filters at all levels.',
        image: '/images/dashboard-filter-hierarchy.svg',
        insight: 'Without user evidence, this would have been an opinion battle. With research, I had concrete user quotes that made the case undeniable.'
      },
      // --- Creator Demo: focus on the breakthrough feature ---
      {
        title: 'Creator Experience: Unify Filters Across Datasets',
        sectionLabel: 'Demo',
        content: 'The **breakthrough feature born from research.** Two charts name the same data differently — "country_code" vs "country_Code." Danny can now **link these dimensions** and give them one clean name: "Country." One filter controls both charts.',
        gifs: ['/images/67cfbc7eda8ac5637ea98171_equal.gif']
      },
      // --- Consumer Demo: before/after experience ---
      {
        title: 'Consumer Experience: Self-Serve in Seconds',
        content: 'Alex no longer asks data scientists for help. Filters show **human-readable labels** — "Country" instead of "dataset_geo_dim" — and she always knows which charts are affected. **Self-serve, without leaving the dashboard.**',
        gifs: ['/images/67cfbcb74cc2f2be89673d7c_view 2.gif']
      },
      {
        title: 'Validating the Design Direction with Users',
        content: 'Before finalizing, I brought prototypes back to users for usability testing. The testing validated some assumptions and **overturned others:**',
        cards: [
          { title: 'Validated: Linking dimensions across datasets', content: 'Producers confirmed this was the most needed capability — exactly what our competitive analysis of Tableau had inspired.' },
          { title: 'Surprise: Group-level filters > tab-level filters', content: 'Users wanted to control a cluster of related charts, not an entire tab. The original user request for "tab-level filters" wasn\'t quite right — they needed a more granular scope.' },
          { title: 'Deprioritized: Dashboard-level filters', content: 'Users said different tabs rarely share the same filters — so dashboard-wide filters weren\'t essential for MVP.' }
        ]
      }
    ],
    impact: [
      '+45%: Filter engagement increased — because filters finally made sense to non-technical consumers',
      '71%: Of consumers could now analyze data independently — freeing data scientists from "human filter" duty',
      'New roadmap: Separating creator and consumer experiences became the product\'s future direction'
    ],
    impactSummary: 'The biggest impact wasn\'t the numbers — it was the direction. By investing in research upfront, we didn\'t just ship a feature. We reframed how the entire tool thinks about its two audiences, setting the foundation for the product\'s evolution.',
    stakeholderFeedback: [
      {
        quote: 'Wendy always strives to understand the real reasons behind user requests. By conducting thorough research, she ensured the solution delivered an exceptional user experience, not just a quick fix to the immediate problem.',
        author: 'Sophie',
        role: 'Engineering Manager'
      }
    ],
    takeaways: [
      'Challenge the brief, not just execute it: The original ask was "add tab filters." By questioning whether that was the right solution, I uncovered a deeper structural problem that changed the project\'s scope and impact.',
      'Research is how you earn trust: I couldn\'t just say "I think the engineering solution is wrong." I needed evidence. The user interviews gave me concrete quotes and patterns that convinced stakeholders to change direction.',
      'Separate the users to serve them better: The key insight — that creators and consumers have fundamentally different needs — seems obvious in hindsight. But it took deliberate research to see it, because the existing tool treated everyone the same.'
    ],
    reflection: {
      title: 'What I Would Do Differently',
      items: [
        'Challenge the design system when it hurts users: I simplified the filter experience, but I was still constrained by the existing design system — which was built for technical users. Consistency across tools is valuable, but not when it comes at the cost of usability. If I could redo this, I would make a stronger case to the design team for breaking from the system: treat PMs as everyday consumers, reference consumer product patterns (like Spotify or Notion), and strip away every trace of technical complexity — even if it means creating new design patterns.',
        'Build in post-launch measurement: After shipping, I was moved to another project and didn\'t get to track long-term adoption data. If I could redo this, I would set up a structured post-launch plan — tracking filter usage rates, drop-off points, and scheduling follow-up interviews at 30 and 90 days — so the team could continue iterating with data even after I moved on.'
      ]
    }
  },
  {
    id: 'jingxin-xuetang',
    title: 'From Designer to Builder: Shipping a Buddhist Learning Platform in 4 Days with AI',
    year: 2026,
    cover: '/images/jingxin-hero-en.png',
    liveUrl: 'https://jingxin-xuetang.vercel.app',
    shortDescription: '50%+ dropout in Buddhist study groups — caused by overly academic materials. I wrote the PRD and vibe-coded a full-stack learning platform in 4 days. Now live with 58 users and 615 page views.',
    role: 'Product Designer\n+ Builder (Vibe Coding)',
    duration: '1 year observing + 4 days building',
    team: 'Solo — built with Claude Code (AI)',
    sections: [
      // ===== THE PROBLEM =====
      {
        title: '50%+ of Buddhist Study Group Students Drop Out',
        sectionLabel: 'The Problem',
        content: 'I watched 4 out of 5 study groups in my San Francisco community lose half their members. Same story everywhere. Three root causes:',
        cards: [
          { title: 'Content too academic', content: 'Original texts use classical Buddhist language with dense terminology. Even educated adults said "I need to read it 3 times to understand."' },
          { title: 'No clear takeaways', content: 'After reading a 3,000-word lesson, students couldn\'t articulate what they learned in one sentence.' },
          { title: 'No practice guidance', content: 'Buddhism emphasizes applying teachings to daily life, but courses only provided theory. Students read, nodded, and then... did nothing different.' }
        ],
        afterCards: 'This created a vicious cycle:',
        flow: ['Can\'t understand', 'Can\'t remember', 'Can\'t apply', 'No benefit', 'Quit'],
        dividerAfter: true
      },
      // ===== RESEARCH & INSIGHTS =====
      {
        title: 'Understanding Who I\'m Designing For',
        sectionLabel: 'Research & Insights',
        content: 'I\'ve been a student in this community for over a year — attending weekly sessions, talking with fellow students, discussing pain points with our group leader. That lived experience gave me a different kind of insight than surveys could.\n\nOne moment stayed with me: a student told me studying Buddhism **increased her anxiety**. She understood the teachings intellectually but couldn\'t apply them to her life. Instead of finding peace, she felt more pressure. That gap — **between understanding and doing** — became the emotional core of this project.\n\nFrom a year of observation, I identified two distinct personas:',
        cards: [
          { title: 'Beginner', content: '"I read it 3 times and still can\'t follow." Drops out in the first few months.\n\n→ Needs plain language to even get started', avatar: '/images/persona-new-student.svg' },
          { title: 'Experienced Practitioner', content: '"I understood it during the session. A week later I forgot everything — and still can\'t apply it."\n\n→ Understands but can\'t retain or practice', avatar: '/images/persona-experienced.svg' }
        ],
        dividerAfter: true
      },
      // ===== KEY DESIGN DECISIONS =====
      // Decision 1
      {
        title: 'Decision 1: Making Ancient Wisdom Accessible',
        isDecisionBlock: true,
        challenge: 'Buddhist texts use precise classical language developed over 2,500 years. Oversimplifying risks distorting the teaching. But keeping it academic means students can\'t learn.',
        insight: 'In my own study group, I observed two distinct behaviors: beginners couldn\'t finish the 30-page text at all — they\'d use AI summaries just to understand the gist before group discussion. Experienced students could read the original but struggled to retain it or apply it to daily life. One content format can\'t serve both.',
        solution: 'A three-layer content architecture — simplified explanation for beginners, core takeaways for retention, and source text tracing for accuracy.',
        content: '',
        cards: [
          { title: 'Simplified Explanation', content: 'Plain language with everyday analogies — explaining "attachment" through phone addiction, for example.\n\n→ For Beginners' },
          { title: 'Core Takeaways', content: 'One memorable sentence + 3–5 key points per lesson. Easy to revisit on a commute or right before the weekly session.\n\n→ For Everyone' },
          { title: 'Source Text Tracing', content: 'Click any passage to see the original text side by side. Builds trust — users can verify the AI didn\'t distort the teaching.\n\n→ For Everyone (especially experienced practitioners)' }
        ],
        afterCards: '**This wasn\'t the original design.** My first version had no source tracing. An early user\'s feedback was immediate: *"I want to see the original text to make sure the AI didn\'t misinterpret the teachings."* Trust was the missing piece — so I added click-to-trace: every simplified paragraph links back to its source text. This feature, born from real user feedback, became one of the most valued parts of the product.',
        images: ['/images/jingxin-source-before.png', '/images/jingxin-source-after.png'],
        imageLabels: ['Before: Simplified text only', 'After: Click to trace original source'],
        imageHighlights: [null, { top: '8%', left: '54%', width: '44%', height: '90%' }]
      },
      // Decision 2
      {
        title: 'Decision 2: From Reading to Doing',
        isDecisionBlock: true,
        challenge: 'Students read lessons but couldn\'t apply teachings to daily life. Buddhism is about practice, not memorization.',
        insight: 'I realized I didn\'t need to build a new habit. The weekly study group was already the habit. I just needed to give each lesson one thing worth trying before Thursday.',
        solution: 'One practice exercise per lesson — aligned with the weekly study rhythm, so each week students have exactly one thing to apply to their daily life.',
        content: 'For example, after a lesson on compassion: "This week, think of someone you find difficult. Silently wish them well for 3 minutes before bed. Write down how it felt."',
        image: '/images/jingxin-exercise-en.png',
        imageSize: 'medium' as const
      },
      {
        title: '',
        isDecisionBlock: true,
        content: 'But giving users exercises isn\'t enough — they need to understand *why* each practice matters. I added a "?" icon next to each exercise that reveals the reasoning. This progressive disclosure keeps the interface action-focused while giving curious learners a path to deeper understanding.',
        image: '/images/jingxin-exercise-expanded-en.png',
        imageSize: 'medium' as const,
        imageHighlight: { top: '34%', left: '2%', width: '96%', height: '26%' }
      },
      // Decision 3
      {
        title: 'Decision 3: Designing for Vulnerability',
        isDecisionBlock: true,
        challenge: 'Students needed to reflect on personal spiritual growth, but were embarrassed to share publicly.',
        insight: 'I felt this myself when I tried the early version — I hesitated to write anything because I didn\'t know who\'d read it. If I felt that way, everyone did. But comfort with sharing varies: some want total privacy, some trust their teacher, some are happy to share with classmates.',
        solution: 'Two design choices that respect this spectrum of vulnerability.',
        content: '**4-tier privacy controls** for journaling: private (default) → teacher only → classmates → everyone. Defaulting to "private" removed the barrier to writing — students could reflect honestly knowing they controlled who sees it.',
        image: '/images/jingxin-privacy-controls-real.png',
        imageSize: 'medium' as const,
        imageHighlight: { top: '38%', left: '68%', width: '30%', height: '38%' }
      },
      {
        title: '',
        isDecisionBlock: true,
        content: '**"随喜赞叹" (Suixi Zantan)** — Generic "likes" felt wrong here from the start. Giving a thumbs-up to someone\'s spiritual reflection felt shallow. Buddhism has a concept for this exact moment: rejoicing in others\' good deeds. It fit so naturally I almost felt like I discovered it rather than designed it.',
        image: '/images/jingxin-rejoice.png',
        imageSize: 'medium' as const,
        imageHighlight: { top: '72%', left: '2%', width: '30%', height: '22%' },
        dividerAfter: true
      },
      // ===== SHIPPING: MVP & CHALLENGES =====
      {
        title: 'The Hardest Part: Building with AI',
        content: 'The first AI-generated build worked functionally, but the design was a mess — inconsistent padding, mismatched fonts, varying button styles. I spent hours fixing issues one by one, only for new ones to appear elsewhere.\n\nThen I realized: **I was solving symptoms, not the root cause.** I stepped back and created a design system — typography scales, spacing rules, button styles, layout standards. Once applied globally, every subsequent change became predictable. The designer in me solved what the builder in me couldn\'t.',
        image: '/images/jingxin-design-consistency.svg',
        dividerAfter: true
      },
      // ===== THE PRODUCT =====
      {
        title: 'Try the Live Product',
        sectionLabel: 'The Product',
        content: 'This is a real, shipped product — not a Figma prototype. Browse courses, read simplified lessons, and try the practice exercises yourself.',
        embed: 'https://jingxin-xuetang.vercel.app'
      },
      {
        title: 'Fixing the Mobile Experience',
        content: 'I designed for desktop first. But when I tested the responsive layout on mobile, the experience broke down: **navigation buttons were overloaded, fonts felt cramped, and the sidebar course list became painful to use on a small screen.** Users had to click to expand, then scroll, then click again.\n\nSo I redesigned the mobile experience specifically:',
        phoneBefore: ['/images/jingxin-mobile-lesson-en.png'],
        phoneAfter: [
          { image: '/images/mobile-home.png', caption: 'Bottom tabs for one-handed use.' },
          { image: '/images/mobile-list.png', caption: 'Replaced dense sidebar with card-based course list for faster scanning.' },
          { image: '/images/mobile-list-org.png', caption: 'Source overlay to verify content — trust without clutter.' }
        ]
      },
      {
        title: '',
        content: '',
        dividerAfter: true
      }
    ],
    impact: [
      'Behavior change: A student said the practice exercises directly triggered real-world action — "I finally did something I\'d been putting off." This is the exact understanding → doing loop the product was designed to create.',
      '615 page views: From 58 visitors in the first week after launch — people weren\'t just clicking once, they were exploring.',
      '~10 pages / user: With a 21% bounce rate in week one. Most products see 50–70% bounce rates at launch. This means users stayed, scrolled, and came back.'
    ],
    testimonial: {
      quote: 'This is SO cool — clean, clear, and feels immediately usable. The website design is beautiful, it really captures the Zen spirit. The one-sentence summaries and practice exercises are brilliant. I think this could become a real learning tool for our community.',
      author: 'Yianguo',
      role: 'Study Group Leader'
    },
    takeaways: [
      'I shipped fast and stayed open to feedback: Source tracing wasn\'t in my original design — an early user said "I need to see the original text to trust this." I listened, built it in a day, and it became the most praised part of the product.'
    ],
    nextSteps: {
      title: 'Next: Use Data to Know What\'s Actually Working',
      content: 'Next: add analytics to see what people actually use, then interview the outliers. The goal isn\'t a bigger product — it\'s one that people genuinely come back to.',
      items: []
    },
    impactSummary: 'When the North America program director saw the platform for the first time, **she was moved to tears** — not because of the design or the technology, but because someone had voluntarily put in the time and effort to build something that genuinely helps the whole community learn and grow. She immediately came back with new ideas for the next phase.',
    stakeholderFeedback: [
      {
        quote: 'I used it to preview the lesson before our session — it helped me build a mental framework quickly and connect all the scattered notes I had from before. The practice exercise at the bottom directly triggered me to take action that day.',
        author: 'Zhaoming',
        role: 'Study Group Member'
      },
      {
        quote: 'This is truly a great approach! I just opened it and it really is much more accessible and easy to understand. You put so much heart into this!',
        author: 'Lisa Zhong',
        role: 'Study Group Member'
      },
      {
        quote: 'Wendy, you should have shared this website earlier! Every lesson has corresponding content — it\'s incredibly detailed and practical.',
        author: 'Linmeng',
        role: 'Study Group Member'
      }
    ]
  },
  {
    id: 'buddha-story',
    title: 'From Designer to Builder: Shipping a Buddhist Learning Platform in 4 Days with AI',
    subtitle: '50%+ dropout in Buddhist study groups — caused by overly academic materials. I wrote the PRD and vibe-coded a full-stack learning platform in 4 days. Now live and serving real users.',
    year: 2026,
    cover: '/images/jingxin-hero-en.png',
    hideCoverOnDetail: true,
    hideOverview: true,
    shortDescription: 'Half of Buddhist study group students were dropping out. I identified the root cause — too much theory, zero practice — and built a learning platform that flipped the model. 54 users and 554 page views in the first week.',
    role: 'Product Designer\n+ Builder',
    duration: '4 days to build\n1.5 years to see the need',
    team: 'Solo project',
    sections: [
      // ===== 1. OPENING: Show the product first =====
      {
        title: 'Here\'s What I Built. Try It.',
        sectionLabel: 'The Product',
        content: '**📖 Simplified lessons** — every teaching, rewritten in plain language with one sentence you can actually remember.\n\n**🧘 Practice exercises** — apply each lesson to your real life. 1–2 weeks in, you\'ll feel it.',
        embed: 'https://jingxin-xuetang.vercel.app',
        dividerAfter: true
      },
      // ===== 2. WHY: Context and problem =====
      {
        title: 'I Watched Half My Community Quietly Drop Out. For 1.5 Years.',
        sectionLabel: 'Why',
        content: 'I\'ve been studying Buddhist philosophy for over a year and a half — in a community group right here in San Francisco. We have 60+ students in SF alone. Similar groups exist in Los Angeles, New York, and across North America. Back in China, the national headquarters reaches millions of practitioners.\n\nBut after 1.5 years inside this community, I noticed something that worried me: **the existing website only had articles. No exercises. No way to apply anything to real life.**\n\nStudents were spending months — sometimes over a year — reading and studying. But most of them couldn\'t feel any real benefit. And so, quietly, they stopped coming. **About half the students were dropping out.**\n\nThe articles themselves were part of the problem. Each lesson was 20+ pages of classical Buddhist language — dense, abstract, deliberately academic. Students were asked to read each lesson three times. Most people invested enormous effort but walked away with nothing they could actually use.',
        images: ['/images/buddha-v2-problem-1.png', '/images/buddha-v2-problem-2.png'],
        imageLabels: ['The existing website: articles with no exercises', 'Each lesson: 20+ pages, read three times'],
        dividerAfter: true
      },
      // ===== 3. MY SOLUTION =====
      {
        title: '2 Weeks of Practice Taught Me More Than Months of Reading',
        sectionLabel: 'My Solution',
        content: 'My idea came from personal experience. Before I built anything, I had already been trying something on my own: combining psychological practice exercises with Buddhist teachings. After just 2 weeks, I felt real results. Not after 6 months of reading — after 2 weeks of actually doing.\n\nSo I believed: **the model should be 50% learning right view, 50% practice. Practice matters just as much as study.** But the current model was almost entirely reading — 30-page lessons, read three times, with no guidance on practice at all.\n\nAnd the lessons themselves didn\'t need to be that long. You don\'t need 20 pages. If you can remember just one insight from a lesson and apply it to your life, that alone creates real change.',
        image: '/images/buddha-v2-before-after.svg'
      },
      {
        title: '',
        content: '',
        cards: [
          {
            title: 'Before: 95% Reading',
            content: '20+ page articles, read three times. No supervision. No guidance on practice. Students who struggled simply left — no one noticed and no one helped.'
          },
          {
            title: 'After: 50% Reading + 50% Practice',
            content: 'Simplified, accessible lessons paired with practice exercises. Learn one insight → apply it to daily life → feel a real benefit → continue to the next lesson. A positive loop.'
          }
        ],
        image: '/images/buddha-v2-virtuous-cycle.svg',
        dividerAfter: true
      },
      // ===== 4. VALIDATION =====
      {
        title: 'Even the Head Teacher Didn\'t Believe Me at First',
        sectionLabel: 'Validation',
        content: '**With the teacher:**\nI went to the head teacher and shared my 50/50 model. He didn\'t agree at first — the tradition has always placed enormous emphasis on studying the texts carefully. But I explained my reasoning in detail and shared what I had personally experienced. After that conversation, he came around: practice really is crucial. He gave me the go-ahead to run this model across North America.\n\n**With fellow students:**\nI asked classmates a simple question: "Do you find the lessons hard to understand?" Every single one said yes. I already knew from a year of watching that almost no one was actually applying the teachings to their daily life. Most people were on the edge of dropping out.',
        image: '/images/buddha-v2-validation.svg',
        dividerAfter: true
      },
      // ===== 5. FEATURE 1: Simplified lessons =====
      {
        title: 'One Sentence Per Lesson. That\'s All You Need to Remember.',
        sectionLabel: 'What I Built',
        content: 'The original lessons are rewritten in plain, easy-to-understand language using AI. They\'re shorter, clearer, and come with a one-sentence takeaway.\n\nEven if a student has no time to read the full lesson — if they just remember that one sentence and carry it into their day — that\'s already real learning.',
        image: '/images/buddha-story-lesson.png',
        dividerAfter: true
      },
      // ===== 6. FEATURE 2: Practice exercises =====
      {
        title: 'Every Lesson Ends With Something You Can Do Today',
        content: 'At the end of each lesson, there\'s a structured practice exercise — drawn directly from the teachings and designed to be tried in real life.\n\nCommit to it for 1–2 weeks, and you\'ll feel a real difference. That\'s the whole point: not more reading. Doing.',
        image: '/images/buddha-story-exercises.png',
        dividerAfter: true
      },
      // ===== 7. RESULTS =====
      {
        title: 'Shared With 10. Used by 54. In 7 Days.',
        sectionLabel: 'Results',
        content: 'Almost everyone who tried it gave positive feedback.\n\nI had only shared it with 10+ people internally. Within 7 days, 54 people had used it and the site had 554 page views.',
        image: '/images/buddha-story-analytics.svg'
      },
      {
        title: '',
        content: '',
        image: '/images/buddha-v2-feedback.png'
      },
      {
        title: '',
        content: 'Our study group leader used the practice exercises while studying the current lesson — and they directly helped her take real action in her life. She was genuinely excited.',
        dividerAfter: true
      },
      // ===== 8. EMOTIONAL MOMENT =====
      {
        title: 'The Program Director Cried. Not Because of the Design.',
        sectionLabel: 'Impact',
        content: 'When the North America program director saw the website, **she was moved to tears.**\n\nNot because of the design or the technology. But because someone had voluntarily put in the time and effort to build something that genuinely helps the whole community learn and grow.\n\nShe thought it could reach far more people. And she immediately came back with new ideas — like adding practice exercises from the annual compassion retreat.',
        dividerAfter: true
      },
      // ===== 9. NEXT STEPS =====
      {
        title: 'Next: Use Data to Know What\'s Actually Working',
        sectionLabel: 'Next Steps',
        content: 'I plan to build a better tracking system using Google Analytics — to understand which features users actually engage with, how far they go into a lesson, whether they come back.\n\nThen I\'ll use that data to do user interviews: find out the "why" behind the numbers.\n\nThe goal is a platform that the majority of students genuinely find useful — one that helps people not just understand Buddhist teachings, but actually improve their lives through practice.',
        dividerAfter: true
      },
      // ===== 10. CLOSING REFLECTION =====
      {
        title: 'I Had an Idea on Monday. It Was Live by Friday.',
        sectionLabel: 'Reflection',
        content: 'Seeing a website I built actually go live and get used by real people — that\'s an incredible feeling.\n\nI had an idea. I built it. People are using it. That loop — from idea to shipped product to real impact — is something I want to keep doing, again and again.'
      }
    ]
  },
  {
    id: 'buddha-learning',
    hidden: true,
    title: 'Redesigning Buddhist Education: How a 50/50 Learning Model Reduced Student Dropout',
    year: 2026,
    cover: '/images/buddha-v2-hero.svg',
    shortDescription: 'Half of Buddhist study group students were dropping out. I identified the root cause — too much theory, zero practice — and built a learning platform that flipped the model. 54 users and 554 page views in the first week.',
    role: 'Product Designer\n+ Builder',
    duration: '1 year observing + 4 days building',
    team: 'Solo project',
    sections: [
      // ===== INTRO / HOOK =====
      {
        title: 'I Built a Website for Buddhist Students. Let Me Show You Why.',
        sectionLabel: 'The Story',
        content: 'This is a personal project — born from a real problem I experienced as a student myself.\n\nI\'ve been studying Buddhist philosophy in a community group in San Francisco for over a year and a half. Across North America — in SF, LA, New York — and across hundreds of cities in China, people gather in small groups to study ancient wisdom together. The curriculum is deep, the community is committed, and the teachings are profound.\n\nBut something was broken. And I couldn\'t stop thinking about it.',
        dividerAfter: true
      },
      // ===== THE PROBLEM =====
      {
        title: 'Half the Students Were Leaving',
        sectionLabel: 'The Problem',
        content: 'Our SF community has 60+ students across multiple study groups. After observing for a year, I noticed a painful pattern: **roughly half of all students drop out** within months of joining.\n\nThe existing learning website only offered articles — long, dense, academic texts. Each lesson was 20+ pages of classical Buddhist language that students were asked to read three times. No exercises. No way to apply the teachings to daily life.',
        images: ['/images/buddha-v2-problem-1.png', '/images/buddha-v2-problem-2.png'],
        imageLabels: ['The existing website: walls of dense text', 'Students struggled with 20+ page lessons']
      },
      {
        title: '',
        content: 'The result was predictable:',
        cards: [
          { title: 'Content too dense', content: 'Each lesson was 20+ pages of classical Buddhist language, deliberately academic and difficult to parse. Students were asked to read it three times.' },
          { title: 'No practical application', content: 'The website was 95% reading, with zero structured exercises. Students learned theory but had no guidance on how to apply wisdom to their daily lives.' },
          { title: 'No sense of progress', content: 'After months of studying, many students still couldn\'t feel any real benefit. Without tangible results, motivation disappeared.' }
        ],
        afterCards: 'This created a vicious cycle — students invested significant time reading dense material, couldn\'t apply it, felt no benefit, and eventually quit.',
        flow: ['Read dense text', 'Can\'t understand', 'Can\'t apply', 'No benefit', 'Drop out'],
        dividerAfter: true
      },
      // ===== MY INSIGHT & SOLUTION =====
      {
        title: 'The Core Insight: 50% Theory, 50% Practice',
        sectionLabel: 'My Solution',
        content: 'From my own experience, I had a strong hypothesis: **the current model was 95% reading and almost 0% practice — but it should be 50/50.**\n\nI had personally experimented with combining psychological exercises with Buddhist teachings for just 2 weeks — and already felt tangible benefits. The teachings didn\'t need to be longer; they needed to be **actionable**. Even remembering just one core insight from a lesson and applying it to daily life could create real change.',
        image: '/images/buddha-v2-before-after.svg'
      },
      {
        title: 'The New Model',
        content: '',
        cards: [
          { title: 'Before: 95% Reading', content: 'Dense 20+ page articles, read three times. No exercises, no supervision, no guidance on practice. Students who couldn\'t keep up simply left.' },
          { title: 'After: 50% Reading + 50% Practice', content: 'Simplified, accessible lessons paired with structured exercises. Learn the right insight, practice it in daily life, experience the benefit, then continue to the next lesson — a positive feedback loop.' }
        ],
        image: '/images/buddha-v2-virtuous-cycle.svg',
        dividerAfter: true
      },
      // ===== VALIDATION =====
      {
        title: 'Validating with the Teacher and Students',
        sectionLabel: 'Validation',
        content: 'I didn\'t just build on assumptions — I validated my hypothesis with both the authority figure and the end users.\n\n**With the teacher:** I presented my 50/50 model to the head teacher. His initial reaction was skeptical — the tradition heavily emphasizes reading and study. But after I explained my reasoning and personal experience in detail, he came around. He agreed that practice was indeed crucial and **gave me permission to execute this approach across North America.**\n\n**With fellow students:** I asked classmates directly — did they find the articles hard to understand? Every single one said yes. Through a year of observation, I also knew that very few students were actually applying teachings to their lives. Most were on the verge of dropping out.',
        image: '/images/buddha-v2-validation.svg',
        dividerAfter: true
      },
      // ===== KEY DESIGN DECISIONS =====
      {
        title: 'Turning Insights Into a Product',
        sectionLabel: 'Key Design Decisions',
        content: ''
      },
      // Decision 1: Simplified Content
      {
        title: 'Decision 1: Making Ancient Wisdom Accessible',
        isDecisionBlock: true,
        challenge: 'The original lesson texts were 20+ pages of classical Buddhist language — deliberately dense and academic. Students were asked to read them three times, but most couldn\'t even finish once.',
        insight: 'You don\'t need to read the entire 20-page text to benefit. If you can remember just one core insight and apply it to your life, that alone creates real change.',
        solution: 'AI-powered plain-language summaries with a one-sentence takeaway for every lesson. Even if a student has no time to read the full text, they can remember and apply that one sentence.',
        content: '',
        image: '/images/buddha-v2-simplified.png'
      },
      // Decision 2: Practice Exercises
      {
        title: 'Decision 2: From Reading to Doing',
        isDecisionBlock: true,
        challenge: 'Students read lessons but had zero guidance on how to apply Buddhist teachings to daily life. The gap between understanding and doing was causing dropout.',
        insight: 'Buddhism is fundamentally about practice, not memorization. But the current system treated it as an academic exercise. I had personally seen results from just 2 weeks of combining practice with study.',
        solution: 'Every lesson now ends with a structured practice exercise — extracted from the original teachings and designed to be applied in daily life. Commit to 1-2 weeks and you\'ll feel the difference.',
        content: '',
        image: '/images/buddha-v2-exercises.png'
      },
      // Decision 3: Two core features
      {
        title: 'The Two Core Features',
        isDecisionBlock: true,
        content: 'The platform was designed around two complementary pillars that work together to create a virtuous learning cycle:',
        cards: [
          { title: 'Accessible Wisdom', content: 'AI-simplified lessons that make ancient Buddhist teachings easy to understand, with one-sentence takeaways that anyone can remember and apply.' },
          { title: 'Structured Practice', content: 'Practice exercises tied to each lesson, helping students bridge the gap from "I understand this" to "I\'m living this" — creating real, felt benefits.' }
        ],
        afterCards: 'Together, these two features create the positive feedback loop: **learn an accessible insight → practice it in daily life → experience the benefit → feel motivated to learn more.**',
        dividerAfter: true
      },
      // ===== THE PRODUCT =====
      {
        title: 'Try the Live Product',
        sectionLabel: 'The Product',
        content: 'This isn\'t a Figma prototype — it\'s a real, shipped product that\'s actively being used. I designed and built it myself using AI-assisted development, going from idea to live product in just 4 days.\n\nExplore the platform below:',
        embed: 'https://jingxin-xuetang.vercel.app'
      },
      {
        title: '',
        content: '',
        dividerAfter: true
      },
      // ===== RESULTS =====
      {
        title: 'The Reception Exceeded Expectations',
        sectionLabel: 'Results',
        content: 'I initially shared the website with just 10+ people internally. Within 7 days, word had spread organically:',
        image: '/images/buddha-v2-results.svg'
      },
      {
        title: '',
        content: 'The feedback was overwhelmingly positive — almost universally so.',
        image: '/images/buddha-v2-feedback.png'
      },
      {
        title: 'Real Behavior Change',
        content: 'The most meaningful validation came from seeing actual behavior change: **our study group leader used the practice exercises while studying the current lesson and reported that they directly triggered real action in her life.** She was genuinely excited — this was exactly the "understanding → doing" loop the platform was designed to create.',
        dividerAfter: true
      },
      // ===== EMOTIONAL IMPACT =====
      {
        title: 'A Moment That Made It All Worth It',
        content: 'When the North America program director saw the website, **she was moved to tears.** Not because of the design or the technology — but because she recognized what it represented: someone had voluntarily invested their time and effort to build something that genuinely helps the community learn and grow.\n\nShe immediately saw the potential to expand it to all North American study groups, and even suggested new features — like incorporating practice exercises from the annual compassion retreat.',
        dividerAfter: true
      }
    ],
    impact: [
      '54 active users within 7 days — from sharing with just 10+ people initially, the platform spread through word of mouth alone.',
      '554 page views in the first week, demonstrating deep engagement — users weren\'t just clicking once, they were exploring multiple lessons.',
      'Nearly 100% positive feedback from all users who tried the platform.',
      'Real behavior change observed: a study group leader reported that practice exercises directly triggered real-world action in her daily life.'
    ],
    testimonial: {
      quote: 'When she saw the website, the North America program director was moved to tears — not because of the design, but because someone had voluntarily built something to help the entire community grow.',
      author: 'Program Director',
      role: 'North America Buddhist Study Program'
    },
    takeaways: [
      'The best products come from lived experience: I spent a full year as a student in this community before building anything. That deep, firsthand understanding of the pain points — not user interviews or surveys — is what made the solution resonate instantly.',
      'Validate with stakeholders before building: Getting the teacher\'s buy-in on the 50/50 model before writing a single line of code ensured the product had institutional support. Without that conversation, even the best product would face adoption resistance.',
      'Ship fast, learn from real users: Going from idea to live product in 4 days meant I could get real feedback immediately. The organic growth from 10 to 54 users in a week confirmed the need was real.',
      'Having an idea and being able to ship it myself is incredibly empowering: As a designer who can also build, I don\'t have to wait for engineering resources or convince a PM to prioritize my idea. I see a problem, I design the solution, I ship it — and I get to watch real people benefit from it.'
    ],
    nextSteps: {
      title: 'What\'s Next',
      content: 'The platform is live and growing. Here\'s my plan for the next phase:',
      items: [
        'Build a tracking system with Google Analytics to understand which features users engage with most — lesson reading vs. practice exercises, completion rates, return visits.',
        'Use quantitative data to identify patterns, then conduct targeted user interviews to understand the "why" behind the numbers.',
        'Incorporate feedback from the program director: add practice exercises from the annual compassion retreat (慈心营) to expand the platform\'s content.',
        'Long-term goal: create a platform that the majority of students find genuinely useful — one that helps people not just understand Buddhist teachings, but actually improve their lives through practice.'
      ]
    }
  },
  {
    id: 'knowledge-graph',
    title: 'Knowledge graph management tool from 0-1',
    year: 2023,
    cover: '/images/67cb869038c509a70cb997f8_graph-cover.png',
    shortDescription: 'Built LinkedIn\'s first dedicated tool for taxonomists — replacing error-prone spreadsheets with a structured system that powers job-member matching.',
    role: 'User researcher, UX, UI',
    duration: '5 Weeks',
    team: '1 Product Manager, 1 Designer, 6 Developers',
    sections: [
      {
        title: 'Problem: Users avoid existing tools, relying on ineffective Google Sheets.',
        content: 'Linguistic/ taxonomists don\'t use the existing tool (Left image) to manage skills, titles, Geo…. since it\'s hard to manage. Users are still using Google sheets to manage these, but Google sheet is also not effective to use.',
        image: '/images/67ce839d8e96a1537f2b9142_polymath-before%26after.jpg'
      },
      {
        title: 'Business goal',
        content: 'After evaluating options, the team decided to invest in a brand new tool to explore, manage & grow LinkedIn\'s Knowledge Graph.'
      },
      {
        title: 'Challenge',
        content: 'Engineering planned to build the tool by the end of September, giving me only one month to ramp up and deliver designs.\n\nThe PM was also new, and there was no existing research or design foundation.'
      },
      {
        title: 'My process',
        content: ''
      },
      {
        title: 'Ramp up & Lead research',
        content: 'I connected with engineering leads who had experience in this domain to quickly grasp the big picture. I requested internal documents to understand the roadmap and align expectations.\n\nSince there were no pre-existing requirements, I initiated user research by engaging with three taxonomy teams (Skills, Interests, and Product&Services). I recruited 3-4 representatives from each team to understand the pain points and goals to make sure we found top common issues across three teams.',
        image: '/images/67d4be3bc753c52a734d8621_polymath-research.png'
      },
      {
        title: 'Top user problems across three teams',
        content: ''
      },
      {
        title: 'Hard to View & Edit Hierarchies',
        content: 'Taxonomists were using Google Sheets to manage structured skills, making it hard to visualize parent-child relationships across a 10-level hierarchy.',
        image: '/images/67cb92bc2eec9c96bcc1904d_Top problems 1.png'
      },
      {
        title: 'Hard to search via Google Sheets',
        content: 'People use Command +F to search on Google sheet, but there are too many results, which makes it harder to find the right item.',
        image: '/images/67cb92bcbe66f8b07bac2f37_Top problems-2.png'
      },
      {
        title: 'Lack of Validation',
        content: 'Google Sheets are free form, there is no validation, easy to create human errors.',
        image: '/images/67cb92bcc54804d38163a4cd_Top problems-3.png'
      },
      {
        title: 'Additional user needs',
        content: '1. Downloading and uploading will have toughs of errors, which is time-consuming.\n2. Sheets slowed down significantly beyond 40,000 rows.\n3. No version control to track changes.\n4. Users wanted a graph view for better visualization.\n5. Collaboration was difficult due to multiple users working in the same document.'
      },
      {
        title: 'How might we enable taxonomists to easily manage and expand taxonomy to build a knowledge graph to benefit LinkedIn members?',
        content: ''
      },
      {
        title: 'Develop the long-term Vision',
        content: 'First we need to think from the big picture. What\'s the ideal version looks like. I am thinking of a one-stop shop for taxonomists to finish their work end to end in one place effectively. Thus, I made the use flow based on the research insights. I brought this to discuss with PM and EM to establish a long-term vision.',
        image: '/images/67d4bf4dd436f8ae41af7408_idealflow.png'
      },
      {
        title: 'Turning Vision Into MVP',
        content: 'They are aligned with the long term vision, moreover we need to define the minimus user needs to cover the basic workflow to provide an immediate improvement over spreadsheets, reducing errors and inefficiencies.\n\nI proposed to provide these basic features:\n1. Basic CRUD Operations: Users can Create, View, Edit, and Delete terms.\n2. Search Functionality: Enable users to quickly find relevant terms.\n3. Data Upload/Download: Users can manage and publish taxonomies efficiently.',
        image: '/images/67cb92bc7845961936afb3da_user flow -2.png'
      },
      {
        title: 'Design',
        content: ''
      },
      {
        title: 'Meet Alex, a linguistic at LinkedIn',
        content: 'Alex, used to use Google sheets to view and manage all skills which is hard to view the hierarchies. After the new tool launched.\nAlex used the new tool to view the hierarchies which is much clear to see the parent and child relationship.',
        image: '/images/67d4d20eb7691ea36bec87cd_polymath-persona.png'
      },
      {
        title: '',
        content: '',
        gifs: [
          '/images/67ce7e5b990e9dc66d529248_polymath-expand2.gif'
        ]
      },
      {
        title: '',
        content: '',
        images: [
          '/images/67ce7e90b67e4995faef95db_no job-yes.png',
          '/images/67ce7e91d86cc8570c9ec05a_no job.png'
        ]
      },
      {
        title: '',
        content: 'One day, Alex found many people reported they couldn\'t get the UX design job recommendations. Since people\'s skill on their LinkedIn profile is "UX design". the jobs are hiring for skills "User experience design". They are not marked to be the same in our system.\n\nAfter research, Alex knew "UX design" is the same with the skill "User experience design". Alex used the new tool to easily search the skill: "User experience design". Alex added the "UX design" as a alias for the "User experience design", which indicate "UX design" equal to the skill "User experience design"\n\nThen, People like Mike can get the right job recommendations.'
      },
      {
        title: '',
        content: '',
        gifs: [
          '/images/67ce7ecd3bd02d41e498c1fb_polymath-edit2.gif'
        ]
      },
      {
        title: 'Add New Skills with Validation',
        content: 'Alex added "User interface design" to be the child of the user experience design. There is a validation process to validate if the input is correct typing.',
        gifs: [
          '/images/67ce83167f3ae95913cea361_polymath-addnew2.gif'
        ]
      },
      {
        title: 'Remove Incorrect Terms',
        content: 'Alex found there is a skill"Games" which shouldn\'t be under design category. She choose to delete it.',
        gifs: [
          '/images/67d4d4acb7f5b4a55dda0729_polymath-delete2.gif'
        ]
      },
      {
        title: 'Publish Changes',
        content: 'After done all the changes, Alex choose the download the skills and handoff to eng to publish to the end users.',
        gifs: [
          '/images/67ce8375990e9dc66d5733e0_polymath-download2.gif'
        ]
      }
    ],
    testimonial: {
      quote: 'The design and validation flow look stunning, my goodness so clean and intuitive!',
      author: 'Linguistic manager',
      role: ''
    },
    stakeholderFeedback: [
      {
        quote: 'Wendy, you led the research and planning so well that it felt like you had been on the project for a long time.',
        author: 'Senior product manager',
        role: ''
      },
      {
        quote: 'Wendy is a fierce advocate for the end user. she ensuring even complex problems are solved with usability in mind. She goes beyond just making things work—she deeply understands user needs and champions intuitive, user-centered design.',
        author: 'Juan | Principal Staff Software Engineer',
        role: ''
      }
    ]
  },
  {
    id: 'ai-coach-mentor',
    hidden: true,
    title: 'AI Coach Mentor: Building a Platform for the $7.3B Coaching Industry',
    year: 2026,
    cover: '/images/ai-coach-landing-new.png',
    shortDescription: 'Research revealed coaches\' real pain: client acquisition ($200–500/client), not supervision cost. I pivoted from a single AI tool to a full platform — directory, booking, and AI supervision.',
    role: 'Product Designer\n(End-to-End)',
    duration: '4 weeks',
    team: 'Solo project',
    sections: [
      {
        title: 'Impact Summary',
        content: '• Market size validated: $7.3B global, $16B US\n• Target users identified: 167,000+ coaches worldwide\n• Pain point discovered: Acquisition cost $200-500/client\n• Business model validated: Similar product (SimCare) at $4M ARR'
      },
      {
        title: 'The Spark: A Paradox in Coaching',
        content: 'I started researching the coaching industry and found a surprising paradox:\n\n"Coaches help others grow. But who helps the coaches grow?"\n\nThe answer: supervision sessions at $150-300/hour. Most coaches can only afford one session per month. I thought this was the opportunity.\n\nThen I found SimCare AI — a YC-backed startup ($4.5M raised, $4M revenue) letting therapy students practice with AI patients.\n\nMy initial hypothesis: Build "SimCare for Coaches" — an AI practice tool.'
      },
      {
        title: 'The Pivot: Discovering the Real Pain Point',
        content: 'Through deeper research, I discovered something unexpected:\n\n"The #1 challenge for coaches isn\'t expensive supervision. It\'s getting clients."\n\n• Customer acquisition cost: $200-500 per client\n• Clients needed to go full-time: 25-35 people\n• Sales cycle: 6-12 touchpoints before purchase\n\nThe "Feast or Famine" Cycle:\nGreat month (5 clients) → Next month: crickets → Relying on referrals → Unpredictable income → Anxiety\n\nWhy is acquisition so hard?\n• Coach training teaches coaching skills, not marketing\n• 232,000+ coaches in the US alone = oversaturated market\n• Self-promotion feels awkward ("I AM the product")\n• Long sales cycles due to high prices + trust dependency'
      },
      {
        title: 'The Strategy: From Tool to Ecosystem',
        content: 'This insight changed my entire approach:\n\nOriginal Idea → New Strategy\n• AI Supervision tool → Coach Ecosystem Platform\n• Single pain point → Two-sided marketplace\n• B2C only → B2C + B2B\n\nThe new vision: A platform that helps clients find good coaches, and helps coaches become better.\n\nWhy combine directory + AI supervision?\n• Directory only → Competing with Noomii, no differentiation\n• AI Supervision only → Hard to acquire coach users\n• Combined → AI Supervision is unique value + Directory brings organic traffic',
        image: '/images/ai-coach-directory.png'
      },
      {
        title: 'Market Validation',
        content: 'The Market is Huge:\n• Global coaching market: $7.3B (ICF 2025)\n• US market: $16B\n• Global coaches: 167,000+\n• US coaches: 232,000+\n• Growth rate: 17% CAGR\n\nDemand is Real (SEO Research):\n• "Life Coach" - 22,000 monthly searches\n• "Career Coach" - 14,000 monthly searches\n• "Find a Life Coach" - 500 searches (high purchase intent)\n• "Hire a Coach" - 100 searches (ready to buy)\n\nKey insight: Search traffic converts at 14.6% vs paid ads at 1.7% — 8.5x better!'
      },
      {
        title: 'Competitive Landscape',
        content: 'Analyzing existing solutions:\n\n• Noomii - Has directory, no booking, no AI\n• BetterUp - Has directory + booking, no AI\n• ADPList - Has directory + booking, no AI\n• Our Platform - Directory + Booking + AI Supervision ← Differentiator\n\nThe gap in AI tools:\n• Therapy field has Eleos Health, Lyssn, Mentalyc for AI supervision\n• Coaching field has nothing equivalent\n• Existing AI coaching tools (Rocky.ai, CoachHub) serve coachees, not coaches'
      },
      {
        title: 'User Research',
        content: 'Primary Personas:\n\n1. New ACC Coach - Just certified, building practice. Needs: Clients + skill improvement\n2. Coach Trainee - In certification program. Needs: Practice opportunities\n3. Training Institution (B2B) - Coach schools. Needs: Better student outcomes'
      },
      {
        title: 'User Journey (Current Pain Points)',
        content: 'Coach completes training\n→ 🔴 Struggles to find clients (spends hours on marketing)\n→ Finally gets a few clients\n→ 🔴 Uncertain about their own performance\n→ Books supervision ($200/session)\n→ 🔴 4 weeks later, the case is already stale\n→ Gets feedback, tries to apply\n→ 🔴 No way to practice immediately\n→ 🔴 Income unstable (feast or famine cycle)'
      },
      {
        title: 'Key Design Decisions',
        content: ''
      },
      {
        title: 'Decision 1: Real-time Feedback Without Disruption',
        content: 'Challenge: How to give feedback during a live coaching session without breaking conversation flow?'
      },
      {
        title: 'Iteration 1 - Stats Dashboard',
        content: '• Sidebar showing talk ratio, open questions count, empathy moments\n• Problem: Stats too abstract — coaches knew "4 open questions" but not WHICH questions were good',
        image: '/images/ai-coach-session-iteration1.png'
      },
      {
        title: 'Iteration 2 - Live Transcript with Inline Feedback',
        content: '• Real-time transcript appears as conversation happens\n• AI feedback appears directly under each coach statement\n• Green = positive ("Great acknowledgment of emotion")\n• Yellow = suggestion ("This shifts into advice-giving. Consider...")',
        image: '/images/ai-coach-session-iteration2.png'
      },
      {
        title: '',
        content: 'Why the iteration worked:\n• Coaches see exactly WHAT they said + immediate feedback\n• No context switching — feedback is in the flow of conversation\n• Can review specific moments later'
      },
      {
        title: 'Decision 2: Building Trust Through ICF Framework',
        content: 'Challenge: Coaches are skeptical of AI evaluating their "soft skills."\n\nExplorations:\n• Generic AI feedback → Felt arbitrary\n• Star ratings → Too gamified\n• Percentage scores alone → Meaningless without context\n\nSolution: Ground everything in ICF\'s official 8 Core Competencies with:\n1. Evidence — Exact timestamps and quotes\n2. ICF Definition — What the competency means officially\n3. Specific praise — What they did well\n4. Actionable improvement — Concrete next step\n\nWhy it works: ICF is the industry authority. Coaches already know and trust this framework.',
        image: '/images/ai-coach-report-new.png'
      },
      {
        title: 'Decision 3: Inline Transcript Feedback',
        content: 'Challenge: Traditional feedback summarizes at the end, but coaches learn best seeing exactly where they did well.\n\nSolution: Annotated transcript with inline comments (like Google Docs).\n\n• 00:50 | Coach: "It sounds like you\'re carrying a lot..." → ✅ Great empathy + open question\n• 02:20 | Coach: "Have you tried talking to your boss?" → ⚠️ This is advice, not a question\n• 03:28 | (8 seconds of silence) → ✅ Great use of silence\n\nWhy it works: Connects abstract feedback to specific moments. Creates "aha" moments.'
      },
      {
        title: 'Decision 4: Platform Flywheel',
        content: 'Challenge: How to solve the chicken-and-egg problem of a two-sided marketplace?\n\nSolution: Design for flywheel effect:\n\nMore coaches join (supply)\n→ More content → Better SEO\n→ More clients find the platform (demand)\n→ Coaches get clients → They\'re happy\n→ AI Supervision makes coaches better\n→ Better sessions → Better reviews\n→ More clients trust the platform\n→ More coaches want to join... (repeat)\n\nKey insight: AI Supervision isn\'t just a feature — it makes coaches better, which drives the flywheel.'
      },
      {
        title: 'Product Architecture',
        content: 'Four Core Modules:\n\n1. Coach Directory (For Clients) - Search, filter, view profiles\n2. Booking System (For Both) - Calendar, scheduling, reminders\n3. AI Supervision (For Coaches) - Practice, review, feedback, progress\n4. Coach Dashboard (For Coaches) - Bookings, clients, revenue',
        images: [
          '/images/ai-coach-coach-dashboard.png',
          '/images/ai-coach-supervision.png'
        ]
      },
      {
        title: '',
        content: 'AI Supervision Features:\n• Real-time Coaching Tips - Live feedback during practice\n• Post-Session Review - Transcript + inline comments\n• Auto Session Notes - AI-generated summaries (saves 30+ min)\n• Progress Tracking - ICF skill radar chart over time\n• Client Growth Profiles - Track each client\'s progress'
      },
      {
        title: 'Business Model',
        content: 'Why Coaches Will Pay:\n"$79/month subscription < $200-500 client acquisition cost"\nIf the platform brings stable clients, the subscription pays for itself.\n\nPricing Strategy:\n• Free ($0) - Basic profile, 3 bookings/month, 3 AI practices\n• Pro ($29/month) - Full profile, unlimited bookings, 15% commission\n• Premium ($79/month) - Pro + full AI Supervision, 10% commission\n\nReference: Noomii charges $447/year for directory listing alone — no booking, no AI.'
      },
      {
        title: 'Interactive Prototype',
        content: 'Try the interactive prototype below. Navigate through the coach directory, dashboard, and AI supervision features.\n\nTech stack: React, TypeScript, Tailwind CSS, Recharts',
        embed: 'https://ux-wendy-liang.github.io/ai-supervision/'
      },
      {
        title: '',
        content: '',
        images: [
          '/images/ai-coach-landing-new.png',
          '/images/ai-coach-directory.png',
          '/images/ai-coach-coach-dashboard.png',
          '/images/ai-coach-supervision.png'
        ]
      }
    ],
    impact: [
      'Strategic Pivot: Research-driven shift from single tool to ecosystem platform',
      'Pain Point Discovery: Identified acquisition ($200-500/client) as bigger problem than supervision cost',
      'Market Validation: Validated $7.3B market with 167,000+ target users'
    ],
    takeaways: [
      'Research can change direction: The original "AI supervision" idea became one piece of a larger platform after discovering the real pain point.',
      'Pain points have layers: Supervision cost was a symptom; acquisition was the root cause. Deep research reveals what users truly need.',
      'Flywheel thinking: AI Supervision isn\'t just a feature — it makes coaches better, which drives the entire platform\'s value.',
      'Authority builds trust: Grounding AI feedback in ICF standards overcomes skepticism about AI evaluating "soft skills."'
    ]
  }
];
