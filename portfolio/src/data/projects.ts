export interface Project {
  id: string;
  title: string;
  year: number;
  cover: string;
  shortDescription: string;
  role: string;
  duration: string;
  team: string;
  challenge?: string;
  solution?: string;
  impact?: string[];
  images?: string[];
  gifs?: string[];
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
    title: 'Building the LinkedIn Publisher Portal from 0-1',
    year: 2024,
    cover: '/images/67cb85a4357dca204c5f885a_cover2.png',
    shortDescription: 'Proposed and convinced to expand the scope from a feature level to become an entire new publisher portal.',
    role: 'User researcher, UX & UI designer',
    duration: '6 weeks',
    team: '1 PM, 1 Designer, 3 Engineers',
    challenge: 'Privacy policy changes from Google Chrome and Apple disrupted digital advertising. LinkedIn faced losing 23-30% of LinkedIn\'s ad revenue.',
    solution: 'Rather than simply adding an SDK integration feature, I proposed a comprehensive Publisher Portal—a dedicated hub where publishers could integrate, manage, and optimize their LinkedIn Ads SDK efficiently.',
    impact: [
      'Scope expansion from minor feature to full product platform',
      'Protected 23-30% of ad revenue',
      'Established foundation for long-term publisher ecosystem'
    ],
    images: [
      '/images/67cb84a67b6264e6794a94c4_connections2.png',
      '/images/67cb84c38054bc90c6aca4d3_UX Persona.png',
      '/images/67cb84d64cc1503938241211_Meta Monetization Manager.png',
      '/images/67cb84d64cc150393824121c_Google AdSense.png',
      '/images/67cb84e00fc914afc695d536_Publisher Journey Map.png',
      '/images/67cb85009b1310686606903c_user flow.png',
      '/images/67cb85009b1310686606904a_User Journey.png',
      '/images/67cb850b7c14b5f7a1765807_Publisher portal_Landing page copy.png',
    ],
    gifs: [
      '/images/67cb85220fc914afc69622b0_waiting for approve.gif',
      '/images/67cb852f9b1310686606bad8_add member.gif',
      '/images/67cb853e8054bc90c6ad0f78_change key.gif',
    ]
  },
  {
    id: 'knowledge-graph',
    title: 'Build the Knowledge graph management tool from 0-1',
    year: 2023,
    cover: '/images/67cb869038c509a70cb997f8_graph-cover.png',
    shortDescription: 'Lead research to help PM form the requirements and lead end-to-end UX UI design.',
    role: 'User researcher, UX, UI designer',
    duration: '5 weeks',
    team: '1 PM, 1 designer, 6 developers',
    challenge: 'Taxonomists avoided the existing tool, instead relying on ineffective Google Sheets for managing taxonomy data.',
    solution: 'Built a comprehensive management tool with hierarchy visualization, advanced search, and validation safeguards.',
    impact: [
      'Improved taxonomy management efficiency',
      'Reduced human errors with validation flow',
      'Enabled better collaboration among teams'
    ],
    images: [
      '/images/67cb92bc2eec9c96bcc1904d_Top problems 1.png',
      '/images/67cb92bcbe66f8b07bac2f37_Top problems-2.png',
      '/images/67cb92bcc54804d38163a4cd_Top problems-3.png',
      '/images/67cb92bc7845961936afb3da_user flow -2.png',
      '/images/67ce7e90b67e4995faef95db_no job-yes.png',
      '/images/67ce7e91d86cc8570c9ec05a_no job.png',
      '/images/67ce839d8e96a1537f2b9142_polymath-before%26after.jpg',
      '/images/67d4be3bc753c52a734d8621_polymath-research.png',
      '/images/67d4bf4dd436f8ae41af7408_idealflow.png',
      '/images/67d4d20eb7691ea36bec87cd_polymath-persona.png',
    ],
    gifs: [
      '/images/67ce7e5b990e9dc66d529248_polymath-expand2.gif',
      '/images/67ce7ecd3bd02d41e498c1fb_polymath-edit2.gif',
      '/images/67ce83167f3ae95913cea361_polymath-addnew2.gif',
      '/images/67ce8375990e9dc66d5733e0_polymath-download2.gif',
      '/images/67d4d4acb7f5b4a55dda0729_polymath-delete2.gif',
    ]
  },
  {
    id: 'dashboard',
    title: 'Reimagining LinkedIn\'s Data Virtualization Tool Dashboard',
    year: 2022,
    cover: '/images/67ce84a463ba9f169c18cd3c_dashboard cover.png',
    shortDescription: 'Persuaded to research to understand users\' needs to make revolutionary designs.',
    role: 'User researcher, UX/UI designer',
    duration: '8 weeks',
    team: '1 PM, 1 designer, 7 developers',
    challenge: 'The dashboard lacked direct filtering capabilities, limiting its effectiveness as a decision-making tool.',
    solution: 'A dual-experience approach separating creator and consumer interfaces, enabling creators to establish multi-level filters.',
    impact: [
      '45% increase in dashboard filter engagement',
      '71% of consumers reporting independent data analysis capability',
      'Shaped future product direction'
    ],
    images: [
      '/images/67cfb9efbc291cfeca61ecb1_problem1.1.jpg',
      '/images/67cfb9ef26fc2a0ae9f50b1e_problem2.2.jpg',
      '/images/67d4fd2c045042941d70a271_dashboard-UX Persona.png',
      '/images/67d4fd2cf6d060ea4a8ff4f6_dashboard-UX Persona2.png',
    ],
    gifs: [
      '/images/67cfbc10e25b1be3c51e25ef_dashboard-create chart.gif',
      '/images/67cfbc7eda8ac5637ea98171_equal.gif',
      '/images/67cfbcb79c2e266ae34dff05_view1-v2.gif',
      '/images/67cfbcb74cc2f2be89673d7c_view 2.gif',
      '/images/67d4a2e7a10bd11b3afe1433_landing-2.gif',
      '/images/67d4fe8aa0173122a967c81e_applyfilter.gif',
    ]
  },
  {
    id: 'camera-app',
    title: 'Camera App',
    year: 2014,
    cover: '/images/67ce84f5a2c070823d627a16_banner_carema_800.png',
    shortDescription: 'A side plugin project to drive the main social media app\'s engagement.',
    role: 'User research, UX, UI',
    duration: '2 weeks',
    team: '3 designers',
    challenge: 'Qzone users were still taking photos but sharing willingness decreased.',
    solution: 'Created V Camera to make photography and sharing fun with effects and stickers.',
    impact: [
      'Increased photo sharing on Qzone',
      'Won Tencent Creative Award',
      'Proved design-driven user engagement'
    ],
    images: [
      '/images/67cfc02f0e617aef5fd6f86e_3-Persona.png',
      '/images/67cfc02ffceccce3435cd9bd_4-ideas online.png',
      '/images/67cfc02ff2ded24fe45a40ac_5-ideas.png',
      '/images/67cfc02f5001bb7a89b20d17_6-wireframe.png',
      '/images/67cfc02fbc291cfeca667f07_7-ui.png',
      '/images/67cfc02fa3a834944bf1e71e_8-ui.png',
      '/images/67cfc02fa1639429379115ea_9-ui.png',
      '/images/67cfc02f175de6166a39c22c_10-ui.png',
      '/images/67cfc02fea7df78777de9436_11-ui.png',
      '/images/67cfc02f60d82f0fbc487db9_12-interface.png',
      '/images/67cfc02f9abfa240a092c62f_Frame 5.png',
      '/images/67cfc02f175de6166a39c293_Main-projects--10-V-Camera_03_1000.png',
      '/images/67cfc77c9730c3b0c998b6f9_WechatIMG27.jpg',
    ]
  }
];
