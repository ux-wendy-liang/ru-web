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
  images?: string[];
  imageStyle?: 'phone'; // Wrap images in phone frame mockup
  phoneBefore?: string[]; // Before phone screenshots
  phoneAfter?: { image: string; caption: string }[]; // After phone screenshots with captions
  phoneAfterCaption?: string; // Overall design rationale (deprecated, use per-phone captions)
  gif?: string;
  gifs?: string[];
  embed?: string; // URL for interactive prototype iframe
  cards?: { title: string; content: string }[];
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
  images?: string[];
  gifs?: string[];
  // New fields
  takeaways?: string[];
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
}

export const projects: Project[] = [
  {
    id: 'jingxin-xuetang',
    title: 'From Designer to Builder: Shipping a Buddhist Learning Platform in 4 Days with AI',
    year: 2026,
    cover: '/images/jingxin-hero-en.png',
    shortDescription: 'I noticed 50%+ dropout in Buddhist study groups because materials were too academic. I wrote a comprehensive PRD, then used AI vibe coding to build and ship a full-stack learning platform — with auth, database, and bilingual support — in just 4 days. Now serving real users.',
    role: 'Product Designer\n+ Builder (Vibe Coding)',
    duration: '4 days',
    team: 'Solo — built with Claude Code (AI)',
    sections: [
      // ===== THE PROBLEM =====
      {
        title: '50%+ of Buddhist Study Group Students Drop Out',
        sectionLabel: 'The Problem',
        content: 'Master Jiqun\'s Buddhist courses are studied in community groups across China. But more than half of students leave within the first few sessions.\n\nI observed this firsthand in my own study community — out of 5 study groups, 4 had lost roughly half their members. Through conversations with students and group leaders, I identified three root causes:',
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
        content: 'Before touching any tool, I spent time observing study groups and talking to students and leaders. I then wrote a 746-line Product Requirements Document — covering user personas, feature specs, a design system, and accessibility standards. Everything that followed was built on this foundation.\n\nI identified three distinct user personas, each with fundamentally different needs:',
        cards: [
          { title: 'New Student', content: 'Just joined out of curiosity. No Buddhist background. Overwhelmed by terminology. Needs simplified language and clear takeaways.\n\n→ Most likely to drop out in the first 2 weeks' },
          { title: 'Casual Learner', content: 'Been in a group for a few months. Attends sessions but rarely reviews between meetings. Wants quick recaps and practical exercises.\n\n→ Reads on mobile during commutes' },
          { title: 'Experienced Practitioner', content: 'Deeply committed, studied for 1+ years. Values accuracy and wants to cross-reference simplified content with originals.\n\n→ Mentors newer students' }
        ],
        afterCards: 'These three personas shaped every design decision that followed. Each feature had to answer: which persona does this serve, and how?',
        dividerAfter: true
      },
      // ===== KEY DESIGN DECISIONS =====
      {
        title: 'Turning Insights Into Solutions',
        sectionLabel: 'Key Design Decisions',
        content: ''
      },
      // Decision 1
      {
        title: 'Decision 1: Making Ancient Wisdom Accessible',
        isDecisionBlock: true,
        challenge: 'Buddhist texts use precise classical language developed over 2,500 years. Oversimplifying risks distorting the teaching. But keeping it academic means students can\'t learn.',
        insight: 'My three personas have three distinct reading modes — quick scanning, deep learning, and accuracy verification. One content format can\'t serve all three.',
        solution: 'A three-layer content architecture — each layer designed to serve a specific persona.',
        content: '',
        cards: [
          { title: 'Simplified Explanation', content: 'Plain language with life analogies (e.g., explaining "attachment" through phone addiction).\n\n→ Serves the New Student' },
          { title: 'Core Takeaways', content: 'Each lesson distilled into one memorable sentence + 3–5 key points. The core insight you should walk away with.\n\n→ Serves the Casual Learner' },
          { title: 'Source Text Tracing', content: 'Click any simplified passage to see the original text, displayed in a resizable side panel.\n\n→ Serves the Experienced Practitioner' }
        ],
        afterCards: 'Three personas, three reading modes, one unified interface.',
        image: '/images/jingxin-lesson-en.png'
      },
      // Decision 2
      {
        title: 'Decision 2: From Reading to Doing',
        isDecisionBlock: true,
        challenge: 'Students read lessons but couldn\'t apply teachings to daily life. Buddhism is about practice, not memorization.',
        insight: 'The Casual Learner — who attends but rarely reviews — needs practical reasons to keep showing up. Abstract theory isn\'t enough.',
        solution: 'A practice system where each lesson ends with concrete exercises tied to real life.',
        content: 'For example, after a lesson on compassion: "This week, think of someone you find difficult. Silently wish them well for 3 minutes before bed. Write down how it felt."',
        image: '/images/jingxin-exercise-en.png',
        imageSize: 'medium' as const
      },
      {
        title: '',
        isDecisionBlock: true,
        content: 'But giving users exercises isn\'t enough — they need to understand *why* each practice matters. I added a "?" icon next to each exercise that reveals the reasoning. This progressive disclosure keeps the interface action-focused while giving curious learners a path to deeper understanding.',
        image: '/images/jingxin-exercise-expanded-en.png',
        imageSize: 'medium' as const
      },
      // Decision 3
      {
        title: 'Decision 3: Designing for Vulnerability',
        isDecisionBlock: true,
        challenge: 'Students needed to reflect on personal spiritual growth, but were embarrassed to share publicly.',
        insight: 'Through observation, I noticed students avoided journaling when they knew others could see their reflections. Spiritual growth feels deeply personal.',
        solution: 'Two design choices that respect cultural context.',
        content: '4-tier privacy controls for journaling (private / classmates / teacher / everyone). Defaulting to "private" with opt-in sharing removed the barrier and increased participation.\n\n"随喜赞叹" (Suixi Zantan) — replaced generic "likes" with a Buddhist concept of rejoicing in others\' good deeds. This culturally meaningful interaction created authentic engagement aligned with users\' values.',
        dividerAfter: true
      },
      // ===== THE PRODUCT =====
      {
        title: 'Try the Live Product',
        sectionLabel: 'The Product',
        content: 'Unlike a Figma prototype, this is a real, shipped product with user authentication, a database, and bilingual support. I used AI vibe coding with my detailed PRD as the blueprint — 70 commits over 4 days, each one a cycle of describe → review → refine. My role throughout was creative director, reviewing every output and giving feedback like a design review.\n\nTry it yourself below — browse courses, read simplified lessons, and explore the practice center.',
        embed: 'https://jingxin-xuetang.vercel.app'
      },
      {
        title: '',
        content: 'Buddhist study often happens on phones — commuting, before bed. I designed a mobile-first experience with bottom tab navigation and touch-optimized interactions.',
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
        images: ['/images/jingxin-hero-en.png', '/images/jingxin-courses-en.png', '/images/jingxin-lesson-en.png', '/images/jingxin-practice-en.png'],
        dividerAfter: true
      }
    ],
    impact: [
      'Identified root cause: User research revealed 50%+ dropout was driven by content comprehension, not motivation — reframing the entire solution direction',
      'Designed for real behavior: Privacy-first journaling and culturally meaningful interactions increased community participation',
      'Shipped end-to-end: From user research to live product serving real users — designed, built, and launched in 4 days'
    ],
    testimonial: {
      quote: 'This is SO cool — clean, clear, and feels immediately usable. The website design is beautiful, it really captures the Zen spirit. The one-sentence summaries and practice exercises are brilliant. I think this could become a real learning tool for our community.',
      author: 'Yianguo',
      role: 'Study Group Leader'
    },
    takeaways: [
      'End-to-end ownership changes how you design: Owning the full journey — from user research, to PRD, to design system, to shipped product — forced me to make tighter decisions. When you\'re accountable for the final experience, not just the mockup, every detail matters more.',
      'Start with the community, not the technology: I spent time observing study groups before writing a single requirement. The best features (like practice privacy controls) came from understanding social dynamics, not technical possibilities.',
      'Vibe coding is a design tool, not a replacement for designers: AI writes code, but it can\'t decide what to build or why one layout works better than another. A clear PRD and strong design instincts are what make vibe coding productive — without them, you just ship faster in the wrong direction.',
      'Ship early, learn from real users: A live product with 10 real users teaches more than a polished prototype with zero users. The practice sharing feature was redesigned based on early user behavior.'
    ],
    stakeholderFeedback: [
      {
        quote: 'Yes! After the rewrite it\'s so much easier to understand. Appreciating your effort!',
        author: 'Zhaoming',
        role: 'Study Group Member'
      },
      {
        quote: 'This is truly a great approach! I just opened it and it really is much more accessible and easy to understand. You put so much heart into this!',
        author: 'Lisa Zhong',
        role: 'Study Group Member'
      }
    ]
  },
  {
    id: 'publisher',
    title: 'Building the LinkedIn Publisher Portal from 0-1',
    year: 2024,
    cover: '/images/67cb85a4357dca204c5f885a_cover2.png',
    shortDescription: 'Enable publishers to integrate LinkedIn Ads SDK to their product to display ads to gain revenue. I proposed and convinced to expand the scope to build a new publisher portal.',
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
        images: [
          '/images/67cb85009b1310686606903c_user flow.png'
        ]
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
        content: 'After finishing setup the integration. David can do manage SDK settings.\n\nExample 1, Adding team members.',
        gifs: ['/images/67cb852f9b1310686606bad8_add member.gif']
      },
      {
        title: '',
        content: 'Example 2, He can updating the passcode for security reason.',
        gifs: ['/images/67cb853e8054bc90c6ad0f78_change key.gif']
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
    id: 'dashboard',
    title: 'Reimagining LinkedIn\'s Data Virtualization Tool Dashboard',
    year: 2022,
    cover: '/images/67ce84a463ba9f169c18cd3c_dashboard cover.png',
    shortDescription: 'LinkedIn\'s data virtualization tool empowers internal users—product managers, engineers, and managers—to visualize data and make informed product decisions.',
    role: 'User researcher, UX, UI',
    duration: '8 Weeks',
    team: '1 Product Manager, 1 Designer, 7 Developers',
    sections: [
      {
        title: 'Problem: Dashboard lacks direct filtering, limiting decisions.',
        content: 'The dashboard is one of the most visited pages in the tool. It includes various contextual charts designed to tell data stories. However, users frequently click into individual charts to apply filters and manipulate data because filters cannot be applied directly from the dashboard. This workflow limits the dashboard\'s potential as a decision-making tool.'
      },
      {
        title: 'Business Goal',
        content: 'This project aimed to address these usability challenges and enable decision-makers to stay on the dashboard for a cohesive understanding of their data.'
      },
      {
        title: 'Initial Engineering Solution: Add tab-level filters to dashboards.',
        content: 'The dashboard contains multiple tabs. Some users expressed the need for tab-level filters to refine data within a specific tab. Engineering managers suggested to build tab-level filters to address those specific user requests. While this solution could satisfy immediate needs, it risked only addressing surface-level issues rather than tackling the broader usability challenges of the dashboard.'
      },
      {
        title: 'Propose to research',
        content: 'I recognized that the proposed engineering solution might not fully resolve the dashboard\'s usability issues. I engaged product managers and convinced engineering managers to support conducting user research to understand the true needs and pain points of both data creators and consumers to uncover the root causes. To achieve this, I:\n\nRecruited: Recruited six current users, including both data creators (data scientists) and data consumers (product managers and leaderships).\n\n1-1 research: Conducted interviews to uncover their goals, current challenges, and ideal experiences\n\nAnalyzed: Analyzed findings to identify gaps in the dashboard\'s usability.'
      },
      {
        title: 'Key Findings: User Pain points',
        content: 'Data consumers (e.g., product managers, leadership):',
        image: '/images/67cfb9efbc291cfeca61ecb1_problem1.1.jpg'
      },
      {
        title: '',
        content: '1. Filters were too technical, requiring users to select datasets before applying filters.',
        image: '/images/67cfb9ef26fc2a0ae9f50b1e_problem2.2.jpg'
      },
      {
        title: '',
        content: '2. Filters applied inconsistently, often impacting only one or a few charts without clarity on their scope.\n\n3. Consumers often relied on data creators to answer questions, as the tool was not intuitive enough for self-service.\n\nData creators (e.g., data scientists):\n\n1. Creating dashboards was complex due to inconsistent filters across charts.\n\n2. There was no way to unify filters with similar dimensions, leading to confusion and inefficiencies.\n\n3. Creators often acted as "human filters" because consumers could not self-serve effectively.'
      },
      {
        title: 'How might we enable creators to build intuitive dashboards while empowering consumers to self-serve and understand cohesive data stories?',
        content: ''
      },
      {
        title: 'The Solution',
        content: 'Right now there is no difference between the consumer with the creator view. To address these challenges, I proposed a solution that distinctly separates the experiences for data creators and consumers.'
      },
      {
        title: 'For Data Creators:',
        content: ''
      },
      {
        title: 'Meet Danny, a data Scientist need to create a dashboard for his team to track product metrics.',
        content: '',
        image: '/images/67d4fd2c045042941d70a271_dashboard-UX Persona.png'
      },
      {
        title: '',
        content: 'With the new launched tool, Danny can setup filters at various levels (chart, group, section, tab, and dashboard).\n\nStep1: Danny created a dashboard.\n\nStep2: Danny created a group section, then he added the first and second chart into the group.',
        gifs: ['/images/67cfbc10e25b1be3c51e25ef_dashboard-create chart.gif']
      },
      {
        title: 'Unify filters',
        content: 'With the new tool, it allow creators to identify and unify filters with similar dimensions, even when named differently. The system recognizes common filters across these two charts. Danny want to add more filters, he saw there is a button to associate dimensions. so\n\nStep3: He clicked the button to select dimension under two different datasets. Danny linked these two dimensions to be the same and give a name country.',
        gifs: ['/images/67cfbc7eda8ac5637ea98171_equal.gif']
      },
      {
        title: '',
        content: 'The new tool ensure filters are intuitive and relevant for consumers.\n\nStep4: Danny sets up useful filters to this group, including date, device, domain, member_language and country.\n\nStep5: Danny selected country equal to Canada and Mexico to narrow down the data for consumers to view.\n\nThen Danny finished dashboard creation flow.',
        gifs: ['/images/67d4fe8aa0173122a967c81e_applyfilter.gif']
      },
      {
        title: 'For Data Consumers:',
        content: ''
      },
      {
        title: 'Meet Alex, a product Manager',
        content: '',
        image: '/images/67d4fd2cf6d060ea4a8ff4f6_dashboard-UX Persona2.png'
      },
      {
        title: '',
        content: 'Alex, accesses the dashboard created by Danny. She sees clear filters at different levels (e.g., Chat, group, tab levels).',
        gifs: ['/images/67cfbcb79c2e266ae34dff05_view1-v2.gif']
      },
      {
        title: '',
        content: 'The updated tool can simplify technical terms to make filters intuitive for non-technical users. Alex apply intuitive filters to narrow down data results. Without leaving the dashboard. Alex gains insights into product performance and identifies actionable opportunities.',
        gifs: ['/images/67cfbcb74cc2f2be89673d7c_view 2.gif']
      }
    ],
    impact: [
      'Engagement increased by 45%: Engagement with dashboard filters increased by 45%, leading to more efficient decision-making.',
      'Self-serve rate increased: 71% of consumers reporting they could now analyze data independently.',
      'Shape direction: Separating creator and consumer experiences shaped the future direction of the product.'
    ],
    stakeholderFeedback: [
      {
        quote: 'Wendy always strives to understand the real reasons behind user requests. By conducting thorough research, she ensured the solution delivered an exceptional user experience, not just a quick fix to the immediate problem.',
        author: 'Sophie',
        role: 'Engineering Manager'
      }
    ]
  },
  {
    id: 'knowledge-graph',
    title: 'Knowledge graph management tool from 0-1',
    year: 2023,
    cover: '/images/67cb869038c509a70cb997f8_graph-cover.png',
    shortDescription: 'Knowledge graph management tool is for LinkedIn taxonomists to manage skills, titles, products & services, interests, etc, so that linkedin can use these to match members with jobs.',
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
    title: 'AI Coach Mentor: Building a Platform for the $7.3B Coaching Industry',
    year: 2026,
    cover: '/images/ai-coach-landing-new.png',
    shortDescription: 'Through market research, I discovered coaches\' #1 pain isn\'t supervision cost—it\'s client acquisition ($200-500/client). This insight led me to pivot from a single AI tool to a full ecosystem platform combining coach directory, booking, and AI supervision.',
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
