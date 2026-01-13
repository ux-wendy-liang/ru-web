export interface ProjectSection {
  title: string;
  content: string;
  image?: string;
  images?: string[];
  gif?: string;
  gifs?: string[];
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
    id: 'ai-coach-mentor',
    title: 'AI Coach Mentor - AI-Powered Coaching Practice Platform',
    year: 2025,
    cover: '/images/ai-coach-landing.png',
    shortDescription: 'Designed an AI platform that helps professional coaches practice and improve their skills through simulated conversations and real-time feedback.',
    role: 'Product Designer, UX Researcher',
    duration: '4 weeks',
    team: '1 Designer (me)',
    challenge: 'Professional coaches need 100-2,500+ hours of supervised practice to get ICF certification, but human supervision costs $150-300/hour. This creates a significant barrier for coaches who want to improve their skills.',
    solution: 'Created an AI-powered practice platform where coaches can simulate conversations with AI clients, receive real-time feedback based on ICF standards, and track their skill growth over time.',
    impact: [
      'Designed complete user flow from practice selection to detailed reports',
      'Created real-time feedback system aligned with ICF core competencies',
      'Built progress tracking with radar charts and trend visualization',
      'Reduced practice cost from $150-300/hour to $29-79/month subscription model'
    ],
    images: [
      '/images/ai-coach-dashboard.png',
      '/images/ai-coach-practice.png',
      '/images/ai-coach-session.png',
      '/images/ai-coach-progress.png',
      '/images/ai-coach-report.png'
    ]
  },
  {
    id: 'publisher',
    title: 'LinkedIn Publisher Portal: From Small Feature to Strategic Product',
    year: 2024,
    cover: '/images/67cb85a4357dca204c5f885a_cover2.png',
    shortDescription: 'How can publishers integrate LinkedIn\'s Ads SDK without a 3-week engineering battle? I expanded the scope from a simple feature to a full publisher platform.',
    role: 'User researcher\nUX & UI',
    duration: '6 Weeks',
    team: '1 PM\n1 Designer\n3 Eng',
    sections: [
      {
        title: 'The Problem: 23-30% of LinkedIn\'s Ad Revenue at Risk',
        content: 'In 2021, major privacy changes from Google Chrome and Apple disrupted digital advertising. Users were opting out of data sharing, and LinkedIn was losing critical audience signals.\n\n**23-30% of LinkedIn\'s ad revenue was at stake.**\n\nThe solution? Enable publishers to integrate LinkedIn\'s Ads SDK to regain audience insights. My initial task seemed simple:\n\n*"Just add an SDK integration entry point to the developer site."*\n\nBut after diving deep into research, I saw a much bigger opportunity.',
        image: '/images/67cb84a67b6264e6794a94c4_connections2.png'
      },
      {
        title: 'Meet David, a Publisher from New York Times',
        content: 'Before the Portal, publishers like David faced a frustrating reality.\n\n*"Every time a new ad SDK comes out, my engineering team groans. The last one took us 3 weeks to integrate, and we still have no visibility into whether it\'s actually working."*\n\n**The pain points:**\n• Average SDK integration time: 2-3 weeks\n• No self-service dashboard for performance monitoring\n• Every issue required contacting support',
        image: '/images/67cb84c38054bc90c6aca4d3_UX Persona.png'
      },
      {
        title: 'Key Insight: Publishers Need a Command Center, Not Just Documentation',
        content: 'Through user interviews, I discovered something critical:\n\nPublishers didn\'t just need SDK documentation — they needed a **command center**. They wanted to see integration status, manage team access, monitor performance, and troubleshoot issues all in one place.\n\nThe ask for "SDK integration" was actually a need for "publisher operations platform."'
      },
      {
        title: 'The Turning Point: From Small Feature to Strategic Product',
        content: 'I studied how Meta Audience Network and Google AdSense handled this challenge. They offered dedicated publisher portals with robust tools.\n\nI proposed to my PM and engineering leads:\n\n*"Instead of patching the developer site, let\'s build a dedicated Publisher Portal — a one-stop shop for publishers to integrate, manage, and optimize their LinkedIn Ads SDK."*\n\nThis wasn\'t just a design decision. It was a strategic shift that positioned LinkedIn competitively.\n\n**My partners\' reaction:** Excited. Aligned. Supportive.',
        images: [
          '/images/67cb84d64cc150393824121c_Google AdSense.png',
          '/images/67cb84d64cc1503938241211_Meta Monetization Manager.png'
        ]
      },
      {
        title: 'Designing the Vision: End-to-End Publisher Journey',
        content: 'I defined the ideal user journey, considering LinkedIn\'s existing business products and future scalability.',
        image: '/images/67cb84e00fc914afc695d536_Publisher Journey Map.png'
      },
      {
        title: 'Turning Vision Into MVP',
        content: 'Once aligned on the vision, I proposed an MVP focusing on the onboarding and SDK integration process.',
        images: [
          '/images/67cb85009b1310686606903c_user flow.png',
          '/images/67cb85009b1310686606904a_User Journey.png'
        ]
      },
      {
        title: 'The Landing Page: First Impression Matters',
        content: 'The landing page needed to clearly communicate LinkedIn\'s value proposition to publishers.',
        image: '/images/67cb850b7c14b5f7a1765807_Publisher portal_Landing page copy.png'
      },
      {
        title: 'David\'s New Experience: 5 Minutes, Not 3 Weeks',
        content: '**Before:** David dreaded SDK integrations. His last one required 47 back-and-forth emails with support.\n\n**After:** David opens the Publisher Portal. Within 5 minutes, he\'s created an app and submitted for approval. Three days later, he receives approval notification. He copies two lines of code into his site. That\'s it.\n\n*"Wait, that\'s all? I was prepared for a week-long battle."*\n\nThe next morning, David checks the Portal dashboard. He can see real-time metrics: impressions, fill rate, revenue. No more guessing, no more support tickets.',
        gifs: [
          '/images/67cb85220fc914afc69622b0_waiting for approve.gif'
        ]
      },
      {
        title: 'Self-Service Management',
        content: 'David can now manage everything himself:\n\n**Adding team members** — No more email requests to LinkedIn support\n\n**Updating security credentials** — Instant, self-service\n\nWith the long-term vision in mind, we designed the MVP to scale into a full publisher ecosystem.',
        gifs: [
          '/images/67cb852f9b1310686606bad8_add member.gif',
          '/images/67cb853e8054bc90c6ad0f78_change key.gif'
        ]
      }
    ],
    impact: [
      'Scope expansion: From a small SDK entry point to a full Publisher Portal — demonstrating strategic product thinking',
      '23-30% revenue protected: Enabled smooth SDK adoption, safeguarding LinkedIn\'s ad revenue',
      'Publisher ecosystem foundation: Set the groundwork for long-term monetization features'
    ],
    takeaways: [
      'Challenge the problem statement: A small feature request led to a strategic product shift that future-proofed LinkedIn\'s advertising business.',
      'Design is problem-solving: Understanding users, business impact, and technical feasibility allowed me to shape the product direction.',
      'Storytelling builds alignment: Pitching with research and a clear user journey helped me gain executive and cross-functional support.'
    ]
  },
  {
    id: 'knowledge-graph',
    title: 'Knowledge Graph Tool: How Can Taxonomists Manage 40,000+ Skills Without Spreadsheet Chaos?',
    year: 2023,
    cover: '/images/67cb869038c509a70cb997f8_graph-cover.png',
    shortDescription: 'LinkedIn\'s skill matching affects millions of job recommendations. I built a tool that reduced taxonomist errors by 85% and task time by 60%.',
    role: 'User researcher\nUX\nUI',
    duration: '5 Weeks',
    team: '1 Product Manager\n1 Designer\n6 Developers',
    sections: [
      {
        title: 'The Problem: Google Sheets Can\'t Handle 40,000 Skills',
        content: 'LinkedIn\'s taxonomists manage the skills, titles, and interests that power job matching for millions of members. But they were using Google Sheets.\n\n**The pain was real:**\n• 40,000+ rows that made sheets crawl\n• 10-level hierarchies impossible to visualize\n• No validation = constant human errors\n• Each error could break job recommendations for thousands of members',
        image: '/images/67ce839d8e96a1537f2b9142_polymath-before%26after.jpg'
      },
      {
        title: 'The Challenge: 5 Weeks, No Requirements',
        content: 'Engineering planned to build by end of September — giving me only 5 weeks.\n\nThe PM was new. There was no existing research or design foundation.\n\nI had to ramp up fast and lead the entire discovery process.'
      },
      {
        title: 'Research: Finding the Shared Pain Points',
        content: 'I initiated user research across three taxonomy teams (Skills, Interests, Product & Services). I recruited 3-4 representatives from each team.\n\n**Key research questions:**\n• What is your goal?\n• What is your current workflow?\n• What are your biggest pain points?',
        image: '/images/67d4be3bc753c52a734d8621_polymath-research.png'
      },
      {
        title: 'Key Insight: All Three Teams Had the Same Problems',
        content: 'Despite working on different taxonomies, all teams shared the same goal:\n\n*"As a taxonomist, I want to manage and expand taxonomy to build a knowledge graph to benefit LinkedIn members."*\n\nAnd the same frustrations.'
      },
      {
        title: 'Top User Problems',
        content: '**Hard to View Hierarchies**\nGoogle Sheets couldn\'t visualize parent-child relationships across 10 levels.\n\n**Hard to Search**\nCommand+F returned too many results. Finding the right item was a nightmare.\n\n**No Validation**\nFree-form spreadsheets = constant human errors that broke job matching.',
        images: [
          '/images/67cb92bc2eec9c96bcc1904d_Top problems 1.png',
          '/images/67cb92bcbe66f8b07bac2f37_Top problems-2.png',
          '/images/67cb92bcc54804d38163a4cd_Top problems-3.png'
        ]
      },
      {
        title: 'Additional Pain Points',
        content: '• Upload/download errors were time-consuming to fix\n• Sheets slowed significantly beyond 40,000 rows\n• No version control to track changes\n• Collaboration was difficult with multiple users'
      },
      {
        title: 'Designing the Long-Term Vision',
        content: 'I envisioned a one-stop shop where taxonomists could complete their entire workflow in one place. I created a user flow based on research insights and aligned with PM and Engineering on the vision.',
        image: '/images/67d4bf4dd436f8ae41af7408_idealflow.png'
      },
      {
        title: 'Turning Vision Into MVP',
        content: 'For the MVP, I proposed focusing on the core workflow:\n\n1. **CRUD Operations** — Create, View, Edit, Delete terms\n2. **Search** — Find relevant terms quickly\n3. **Validation** — Prevent human errors\n4. **Upload/Download** — Manage and publish taxonomies',
        image: '/images/67cb92bc7845961936afb3da_user flow -2.png'
      },
      {
        title: 'Meet Alex, a Linguist at LinkedIn',
        content: 'Alex manages the Skills taxonomy. Her work directly affects whether millions of members get matched with the right jobs.',
        image: '/images/67d4d20eb7691ea36bec87cd_polymath-persona.png'
      },
      {
        title: 'Story 1: Viewing Hierarchies',
        content: '**Before:** Alex used Google Sheets to view skills. Seeing parent-child relationships across 10 levels was nearly impossible.\n\n**After:** Alex uses the new tool to view hierarchies clearly. She can expand and collapse branches to see exactly how skills relate to each other.',
        images: [
          '/images/67ce7e90b67e4995faef95db_no job-yes.png',
          '/images/67ce7e91d86cc8570c9ec05a_no job.png'
        ],
        gifs: [
          '/images/67ce7e5b990e9dc66d529248_polymath-expand2.gif'
        ]
      },
      {
        title: 'Story 2: Fixing Job Matching for Millions of Designers',
        content: 'One day, Alex discovered a problem: designers with "UX Design" on their profile weren\'t getting matched with jobs requiring "User Experience Design."\n\nThe skills weren\'t linked in the system.\n\nAlex used the new tool to add "UX Design" as an alias for "User Experience Design." With one simple edit, **millions of designers could now get the right job recommendations.**',
        gifs: [
          '/images/67ce7ecd3bd02d41e498c1fb_polymath-edit2.gif'
        ]
      },
      {
        title: 'Story 3: Adding New Skills with Validation',
        content: 'Alex adds "User Interface Design" as a child of "User Experience Design." The tool validates her input in real-time, preventing typos and errors before they can break job matching.',
        gifs: [
          '/images/67ce83167f3ae95913cea361_polymath-addnew2.gif'
        ]
      },
      {
        title: 'Story 4: Removing Incorrect Terms',
        content: 'Alex finds "Games" incorrectly placed under the Design category. She removes it with confidence, knowing the validation will prevent cascading errors.',
        gifs: [
          '/images/67d4d4acb7f5b4a55dda0729_polymath-delete2.gif'
        ]
      },
      {
        title: 'Story 5: Publishing Changes',
        content: 'After completing her updates, Alex downloads the updated taxonomy and hands it off to engineering for publication.',
        gifs: [
          '/images/67ce8375990e9dc66d5733e0_polymath-download2.gif'
        ]
      }
    ],
    impact: [
      '60% faster task completion: From 2 hours to 45 minutes per session',
      '85% fewer errors: Validation prevents mistakes before they happen',
      'Millions of members affected: Better skill matching = better job recommendations'
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
        quote: 'Wendy is a fierce advocate for the end user. She ensures even complex problems are solved with usability in mind. She goes beyond just making things work—she deeply understands user needs and champions intuitive, user-centered design.',
        author: 'Juan | Principal Staff Software Engineer',
        role: ''
      }
    ],
    takeaways: [
      'Internal tools matter: This tool doesn\'t have a flashy consumer interface, but it affects job matching for millions of LinkedIn members.',
      'Research unifies stakeholders: By interviewing all three teams, I discovered they shared the same pain points — which made alignment easy.'
    ]
  },
  {
    id: 'dashboard',
    title: 'LinkedIn Dashboard: How Can PMs Get Data Answers Without Becoming Data Scientists?',
    year: 2022,
    cover: '/images/67ce84a463ba9f169c18cd3c_dashboard cover.png',
    shortDescription: 'I pushed back on a quick engineering fix and discovered the real problem: creators and consumers had fundamentally different needs. Result: 45% more engagement, 71% self-serve rate.',
    role: 'User researcher\nUX\nUI',
    duration: '8 Weeks',
    team: '1 Product Manager\n1 Designer\n7 Developers',
    sections: [
      {
        title: 'The Problem: 30 Minutes to Answer a Simple Question',
        content: 'The dashboard was one of the most visited pages in LinkedIn\'s data tool. But users were frustrated.\n\nTo apply filters and get insights, users had to click into individual charts, manipulate data, then return to the dashboard. A simple question like "How did we perform in Canada last month?" could take 30 minutes to answer.',
        images: [
          '/images/67cfb9efbc291cfeca61ecb1_problem1.1.jpg',
          '/images/67cfb9ef26fc2a0ae9f50b1e_problem2.2.jpg'
        ]
      },
      {
        title: 'Meet Alex, a Product Manager',
        content: 'Every Monday standup, Alex\'s VP asked: "How did we perform last week?"\n\nAlex knew the answer was in the dashboard. But finding it? That was a 30-minute scavenger hunt.\n\n*"I have to open 5 different charts just to answer one simple question. I spend more time navigating the tool than actually analyzing data."*\n\nThe worst part: Alex often gave up and asked Danny (a data scientist) to pull the numbers. Danny became a "human filter" instead of doing strategic data work.',
        image: '/images/67d4fd2cf6d060ea4a8ff4f6_dashboard-UX Persona2.png'
      },
      {
        title: 'The Turning Point: I Pushed Back on the Quick Fix',
        content: 'Engineering had a quick fix ready: "Let\'s add tab-level filters."\n\nThis would solve the immediate request. But I suspected it wouldn\'t solve the real problem.\n\n**I pushed for user research.** I recruited 6 users — 3 data creators (data scientists), 3 data consumers (PMs and leadership) — and asked them to walk me through their daily dashboard usage.'
      },
      {
        title: 'Key Insight: Two User Types, One Interface',
        content: '**What I discovered changed our direction:**\n\nThe problem wasn\'t "missing filters." The problem was that creators and consumers had fundamentally different needs — but the dashboard treated them the same.\n\n**Data consumers (PMs, leadership):**\n• Filters were too technical, requiring dataset selection first\n• Filters applied inconsistently across charts\n• Often relied on data scientists for simple questions\n\n**Data creators (data scientists):**\n• No way to unify filters with similar dimensions\n• Acted as "human filters" because consumers couldn\'t self-serve\n• Creating intuitive dashboards was unnecessarily complex'
      },
      {
        title: 'The Solution: Separate Creator and Consumer Experiences',
        content: 'I proposed a solution that distinctly separates the experiences:\n\n**For creators:** Powerful tools to set up filters at multiple levels (chart, group, tab, dashboard)\n\n**For consumers:** Simplified, intuitive filters that "just work"'
      },
      {
        title: 'For Data Creators: Meet Danny',
        content: 'Danny is a data scientist who needs to create a dashboard for his team to track product metrics.\n\nWith the new tool, Danny can set up filters at various levels and unify dimensions across different datasets.',
        image: '/images/67d4fd2c045042941d70a271_dashboard-UX Persona.png'
      },
      {
        title: 'Creator Flow: Building a Dashboard',
        content: 'Danny creates a dashboard and groups related charts together. He can now organize data in a way that makes sense for consumers.',
        gifs: [
          '/images/67cfbc10e25b1be3c51e25ef_dashboard-create chart.gif'
        ]
      },
      {
        title: 'Unifying Filters Across Datasets',
        content: 'The new tool allows creators to identify and unify filters with similar dimensions, even when named differently. Danny links "country_code" and "region" to create a unified "Country" filter that works across all charts.',
        gifs: [
          '/images/67cfbc7eda8ac5637ea98171_equal.gif'
        ]
      },
      {
        title: 'Setting Up Consumer-Friendly Filters',
        content: 'Danny sets up intuitive filters for consumers: date, device, domain, language, and country. He pre-selects relevant values so consumers see exactly what they need.',
        gifs: [
          '/images/67d4a2e7a10bd11b3afe1433_landing-2.gif'
        ]
      },
      {
        title: 'Alex\'s New Experience: 5 Minutes, Not 30',
        content: '**Before:** Alex spent 30 minutes navigating between charts to answer a simple question.\n\n**After:** Alex opens the dashboard Danny created. She sees clear filters at different levels. She selects "Canada" and "Last Month" — and instantly sees the data she needs.\n\nNo more asking Danny. No more 30-minute scavenger hunts.',
        gifs: [
          '/images/67cfbcb79c2e266ae34dff05_view1-v2.gif',
          '/images/67cfbcb74cc2f2be89673d7c_view 2.gif',
          '/images/67d4fe8aa0173122a967c81e_applyfilter.gif'
        ]
      }
    ],
    impact: [
      '45% increase in filter engagement: Users now actually use the filters instead of navigating away',
      '71% self-serve rate: Consumers can now analyze data independently without asking data scientists',
      'Product direction shift: Separating creator/consumer experiences became the foundation for future development'
    ],
    testimonial: {
      quote: 'Wendy always strives to understand the real reasons behind user requests. By conducting thorough research, she ensured the solution delivered an exceptional user experience, not just a quick fix to the immediate problem.',
      author: 'Sophie',
      role: 'Engineering Manager'
    },
    takeaways: [
      'Push back on quick fixes: The proposed engineering solution would have addressed symptoms, not the root cause. Research revealed the real problem.',
      'Different users, different needs: The same interface was failing both user types. Separating experiences made both groups happier.'
    ]
  },
  {
    id: 'camera-app',
    title: 'V Camera: Why Did Young Users Stop Sharing Photos?',
    year: 2014,
    cover: '/images/67ce84f5a2c070823d627a16_banner_carema_800.png',
    shortDescription: 'Qzone had 648 million users but photo sharing was plummeting. We discovered users didn\'t stop caring — they stopped feeling confident about their photos.',
    role: 'User researcher\nUX\nUI',
    duration: '2 Weeks',
    team: '3 Designers',
    sections: [
      {
        title: 'The Problem: 648 Million Users, But Photo Sharing Was Dying',
        content: 'In 2014, Qzone had 648 million monthly active users — one of the largest social platforms in China. But something was wrong.\n\nPhoto sharing dropped 25% year-over-year. Young users (18-24) were leaving for WeChat at 3x the rate of older users. Qzone was becoming "the platform your parents use."\n\nIf we couldn\'t make photo sharing fun again, Qzone risked losing an entire generation.'
      },
      {
        title: 'Meet Xiaoming, a 20-Year-Old College Student',
        content: 'Xiaoming used to post on Qzone every day. Now? He scrolls, but rarely posts.\n\n*"My photos look so boring compared to my friends\'. I don\'t have time to learn Photoshop, so I just... don\'t post."*\n\nXiaoming isn\'t alone. Through user interviews, we found that 60% of young users felt their photos "weren\'t good enough to share."',
        image: '/images/67cfc02f0e617aef5fd6f86e_3-Persona.png'
      },
      {
        title: 'Key Insight: Users Didn\'t Stop Caring — They Stopped Feeling Confident',
        content: 'We interviewed 30 young users about their photo-sharing habits. The pattern was clear:\n\nUsers didn\'t stop wanting to share. They stopped feeling confident about their photos.\n\nThey wanted to share, but they felt their photos weren\'t "Instagram-worthy." They didn\'t want professional editing — they wanted to make ordinary moments look fun.\n\n**Our insight:** The solution isn\'t a photo editor. It\'s a confidence booster.'
      },
      {
        title: 'The Hackathon Solution: V Camera',
        content: 'This project emerged from a Tencent hackathon. Our concept focused on three objectives:\n\n1. **Make photo-sharing enjoyable** — not a chore\n2. **Increase posting frequency** — lower the barrier to share\n3. **Differentiate from WeChat** — give users a reason to stay'
      },
      {
        title: 'Design Process: From Ideas to Reality',
        content: 'We started with rapid ideation, exploring different approaches to make photos more shareable. We sketched dozens of concepts before narrowing down to the core features: one-tap filters and fun stickers.',
        images: [
          '/images/67cfc02ffceccce3435cd9bd_4-ideas online.png',
          '/images/67cfc02ff2ded24fe45a40ac_5-ideas.png',
          '/images/67cfc02f5001bb7a89b20d17_6-wireframe.png'
        ]
      },
      {
        title: 'UI Design: Simple, Fun, Instant',
        content: 'The key was simplicity. Users shouldn\'t need to learn anything — they should be able to make their photos look great in seconds.\n\nWe designed large, colorful buttons for filters and an intuitive sticker picker. Everything was optimized for one-handed use.',
        images: [
          '/images/67cfc02fbc291cfeca667f07_7-ui.png',
          '/images/67cfc02fa3a834944bf1e71e_8-ui.png',
          '/images/67cfc02fa1639429379115ea_9-ui.png',
          '/images/67cfc02f175de6166a39c22c_10-ui.png',
          '/images/67cfc02fea7df78777de9436_11-ui.png',
          '/images/67cfc02f60d82f0fbc487db9_12-interface.png'
        ]
      },
      {
        title: 'Xiaoming\'s New Experience',
        content: '**Before:** Xiaoming took a photo in the cafeteria. It looked... like a cafeteria. He saved it to his camera roll and forgot about it.\n\n**After:** Xiaoming opens V Camera. With one tap, his cafeteria lunch gets a warm filter that makes it look like a cozy brunch. He adds a quirky sticker — a cartoon character saying "food coma incoming."\n\nFor the first time in months, he hits "Share to Qzone." His friends react with comments and stickers. Xiaoming feels seen. He posts again the next day.',
        images: [
          '/images/67cfc02f9abfa240a092c62f_Frame 5.png',
          '/images/67cfc02f175de6166a39c293_Main-projects--10-V-Camera_03_1000.png'
        ]
      }
    ],
    impact: [
      '40% increase in photo sharing among V Camera users',
      '3x more reactions on V Camera-enhanced photos',
      'Tencent Creative Award: Recognized for product innovation'
    ],
    takeaways: [
      'Understanding user emotions matters more than features. Users didn\'t need better editing tools — they needed permission to share imperfect moments.',
      'The best engagement comes from confidence, not pressure. Instead of forcing users to engage, we gave them a tool that made them want to.'
    ]
  }
];
