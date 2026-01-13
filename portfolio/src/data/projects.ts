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
    title: 'Building the LinkedIn Publisher Portal from 0-1',
    year: 2024,
    cover: '/images/67cb85a4357dca204c5f885a_cover2.png',
    shortDescription: 'Enable publishers to integrate LinkedIn Ads SDK to their product to display ads to gain revenue. I proposed and convinced to expand the scope to build a new publisher portal.',
    role: 'User researcher\nUX & UI',
    duration: '6 Weeks',
    team: '1 PM\n1 Designer\n3 Eng',
    sections: [
      {
        title: 'Challenge: Privacy restrictions put 30% of LinkedIn\'s ad revenue at risk.',
        content: 'In 2021, major privacy changes from Google Chrome and Apple began disrupting digital advertising. Users were opting out of data sharing, and as a result, LinkedIn started losing critical audience signals to know who the audiences are, making it harder to serve relevant ads to publishers or business owners who want to serve LinkedIn ads on their websites.\n\n23-30% of LinkedIn\'s ad revenue was at stake.\n\nThe solution:\nEnable publishers to integrate LinkedIn\'s Ads SDK seamlessly to regain audience insights and optimize ad performance. Initially, my task was simple:\n\n"Just add an SDK integration entry point to the developer site."\n\nBut after diving deep into research, I saw a much bigger opportunity. Instead of just adding a small feature, I pitched a full-scale Publisher Portal — a dedicated hub where publishers could integrate, manage, and optimize their LinkedIn Ads SDK efficiently to gain ads revenue.',
        image: '/images/67cb84a67b6264e6794a94c4_connections2.png'
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
        content: 'I studied how Meta Audience Network and Google AdSense tackled this challenge. They offered dedicated publisher portals with robust tools for managing ad performance.\n\nMeta and Google and competitors to LinkedIn, from the research, they all have common features. I confirmed with PM to see if he imagined we will build features including all the features like payment. He agreed.\n\nSo, This insight reinforced the need for LinkedIn to build its own independent solution rather than embedding a quick fix into the developer site.',
        images: [
          '/images/67cb84d64cc150393824121c_Google AdSense.png',
          '/images/67cb84d64cc1503938241211_Meta Monetization Manager.png'
        ]
      },
      {
        title: 'Convince Design leads, PM & Engineers',
        content: 'I showed how Meta and Google already had full portals—LinkedIn needed the same to stay competitive. My partners felt excited and supported on this long term vision.\n\nMy proposal:\n— a dedicated hub where publishers could integrate, manage, and optimize their LinkedIn Ads SDK efficiently to gain ads revenue.'
      },
      {
        title: 'Designed ideal user journey to be the Vision',
        content: 'With that I defined the ideal user journey with the consideration with current existing LinkedIn business products.',
        image: '/images/67cb84e00fc914afc695d536_Publisher Journey Map.png'
      },
      {
        title: 'Turn Vision Into Reality',
        content: 'Once we aligned on the vision, I proposed the MVP version of the Publisher Portal, focusing on the onboarding SDK integration process.\n\nKeep iterating to share flow with product managers to align on the design direction.',
        images: [
          '/images/67cb85009b1310686606903c_user flow.png',
          '/images/67cb85009b1310686606904a_User Journey.png'
        ]
      },
      {
        title: 'Zoom to details on the MVP landing page',
        content: 'To begin the onboarding process, we need a landing page to explain the LinkedIn value.',
        image: '/images/67cb850b7c14b5f7a1765807_Publisher portal_Landing page copy.png'
      },
      {
        title: 'Design flow',
        content: 'And a step-by-step integration flow for publishers.\n\nMeet David. He is a publisher from New York Times, he wants to research LinkedIn monetization process and integrate LinkedIn SDK on their website to show relevant ads to gain more revenues.\n\nStep 1: He set up account by creating app.\n\nStep 2: Then he has to wait for approve from LinkedIn side.\n\nAfter three days, David saw his account is been approved.\n\nStep 3: He copied and pasted the client ID and passcode to their New York Times website code area. With that he can see the relevant LinkedIn provided ads.',
        gifs: [
          '/images/67cb85220fc914afc69622b0_waiting for approve.gif'
        ]
      },
      {
        title: 'After finishing setup the integration',
        content: 'David can do manage SDK settings.\n\nExample 1, Adding team members.\n\nExample 2, He can updating the passcode for security reason.\n\nWith the long term vision in mind, we have designed the MVP version to publishers and make sure it scale to the vision.',
        gifs: [
          '/images/67cb852f9b1310686606bad8_add member.gif',
          '/images/67cb853e8054bc90c6ad0f78_change key.gif'
        ]
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
    id: 'knowledge-graph',
    title: 'Knowledge graph management tool from 0-1',
    year: 2023,
    cover: '/images/67cb869038c509a70cb997f8_graph-cover.png',
    shortDescription: 'Knowledge graph management tool is for LinkedIn taxonomists to manage skills, titles, products & services, interests, etc, so that LinkedIn can use these to match members with jobs.',
    role: 'User researcher\nUX\nUI',
    duration: '5 Weeks',
    team: '1 Product Manager\n1 Designer\n6 Developers',
    sections: [
      {
        title: 'Problem: Users avoid existing tools, relying on ineffective Google Sheets',
        content: 'Linguistic/taxonomists don\'t use the existing tool to manage skills, titles, Geo since it\'s hard to manage. Users are still using Google sheets to manage these, but Google sheet is also not effective to use.',
        image: '/images/67ce839d8e96a1537f2b9142_polymath-before%26after.jpg'
      },
      {
        title: 'Business goal',
        content: 'After evaluating options, the team decided to invest in a brand new tool to explore, manage & grow LinkedIn\'s Knowledge Graph.'
      },
      {
        title: 'Challenge',
        content: 'Short timeline\nEngineering planned to build the tool by the end of September, giving me only one month to ramp up and deliver designs.\n\nNo Predefined Requirements\nThe PM was also new, and there was no existing research or design foundation.'
      },
      {
        title: 'My process',
        content: ''
      },
      {
        title: 'Ramp up & Lead research',
        content: 'I leveraged existing knowledge & Align with Engineering\nI connected with engineering leads who had experience in this domain to quickly grasp the big picture. I requested internal documents to understand the roadmap and align expectations.\n\nI collaborated with PM to define research goal\nSince there were no pre-existing requirements, I initiated user research by engaging with three taxonomy teams (Skills, Interests, and Product&Services). I recruited 3-4 representatives from each team to understand the pain points and goals to make sure we found top common issues across three teams.\n\nI listed key research questions:\n• What is your goal?\n• What is your current workflow to achieve their goal?\n• What are your biggest pain points with the current process?',
        image: '/images/67d4be3bc753c52a734d8621_polymath-research.png'
      },
      {
        title: 'Top problems across three teams is aligned',
        content: 'Taxonomists/linguistics across three teams shared the same Goal:\n"As a linguist/taxonomist, I want to manage and expand taxonomy to build a knowledge graph to benefit LinkedIn members."'
      },
      {
        title: 'Top user problems across three teams',
        content: 'Hard to View & Edit Hierarchies\nTaxonomists were using Google Sheets to manage structured skills, making it hard to visualize parent-child relationships across a 10-level hierarchy.\n\nHard to search via Google Sheets\nPeople use Command +F to search on Google sheet, but there are too many results, which makes it harder to find the right item.\n\nLack of Validation\nGoogle Sheets are free form, there is no validation, easy to create human errors.',
        images: [
          '/images/67cb92bc2eec9c96bcc1904d_Top problems 1.png',
          '/images/67cb92bcbe66f8b07bac2f37_Top problems-2.png',
          '/images/67cb92bcc54804d38163a4cd_Top problems-3.png'
        ]
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
        content: '',
        image: '/images/67d4d20eb7691ea36bec87cd_polymath-persona.png'
      },
      {
        title: 'Story 1 - Viewing Hierarchies',
        content: 'Alex, used to use Google sheets to view and manage all skills which is hard to view the hierarchies.\n\nAfter the new tool launched.\nAlex used the new tool to view the hierarchies which is much clear to see the parent and child relationship.',
        images: [
          '/images/67ce7e90b67e4995faef95db_no job-yes.png',
          '/images/67ce7e91d86cc8570c9ec05a_no job.png'
        ],
        gifs: [
          '/images/67ce7e5b990e9dc66d529248_polymath-expand2.gif'
        ]
      },
      {
        title: 'Story 2 - Adding Aliases',
        content: 'One day, Alex found many people reported they couldn\'t get the UX design job recommendations. Since people\'s skill on their LinkedIn profile is "UX design". the jobs are hiring for skills "User experience design". They are not marked to be the same in our system.\n\nAfter research, Alex knew "UX design" is the same with the skill "User experience design". Alex used the new tool to easily search the skill: "User experience design". Alex added the "UX design" as a alias for the "User experience design", which indicate "UX design" equal to the skill "User experience design"\n\nThen, People like Mike can get the right job recommendations.',
        gifs: [
          '/images/67ce7ecd3bd02d41e498c1fb_polymath-edit2.gif'
        ]
      },
      {
        title: 'Story 3 - Adding Child Terms',
        content: 'Alex added "User interface design" to be the child of the user experience design. There is a validation process to validate if the input is correct typing.',
        gifs: [
          '/images/67ce83167f3ae95913cea361_polymath-addnew2.gif'
        ]
      },
      {
        title: 'Story 4 - Deleting Incorrect Terms',
        content: 'Alex found there is a skill "Games" which shouldn\'t be under design category. She choose to delete it.',
        gifs: [
          '/images/67d4d4acb7f5b4a55dda0729_polymath-delete2.gif'
        ]
      },
      {
        title: 'Story 5 - Publishing Changes',
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
    id: 'dashboard',
    title: 'Reimagining LinkedIn\'s Data Virtualization Tool Dashboard',
    year: 2022,
    cover: '/images/67ce84a463ba9f169c18cd3c_dashboard cover.png',
    shortDescription: 'The dashboard is one of the most visited pages in the tool. It includes various contextual charts designed to tell data stories. However, users frequently click into individual charts to apply filters.',
    role: 'User researcher\nUX\nUI',
    duration: '8 Weeks',
    team: '1 Product Manager\n1 Designer\n7 Developers',
    sections: [
      {
        title: 'Problem: Dashboard lacks direct filtering, limiting decisions.',
        content: 'The dashboard is one of the most visited pages in the tool. It includes various contextual charts designed to tell data stories. However, users frequently click into individual charts to apply filters and manipulate data because filters cannot be applied directly from the dashboard. This workflow limits the dashboard\'s potential as a decision-making tool.',
        images: [
          '/images/67cfb9efbc291cfeca61ecb1_problem1.1.jpg',
          '/images/67cfb9ef26fc2a0ae9f50b1e_problem2.2.jpg'
        ]
      },
      {
        title: 'Business Goal',
        content: 'This project aimed to address these usability challenges and enable decision-makers to stay on the dashboard for a cohesive understanding of their data.'
      },
      {
        title: 'Initial Engineering Solution: Add tab-level filters to dashboards',
        content: 'The dashboard contains multiple tabs. Some users expressed the need for tab-level filters to refine data within a specific tab. Engineering managers suggested building tab-level filters to address those specific user requests. While this solution could satisfy immediate needs, it risked only addressing surface-level issues rather than tackling the broader usability challenges of the dashboard.'
      },
      {
        title: 'Propose to research',
        content: 'I recognized that the proposed engineering solution might not fully resolve the dashboard\'s usability issues. I engaged product managers and convinced engineering managers to support conducting user research to understand the true needs and pain points of both data creators and consumers to uncover the root causes.\n\nTo achieve this, I:\n• Recruited six current users, including both data creators (data scientists) and data consumers (product managers and leaderships)\n• 1-1 research: Conducted interviews to uncover their goals, current challenges, and ideal experiences\n• Analyzed findings to identify gaps in the dashboard\'s usability'
      },
      {
        title: 'Key Findings: User Pain points',
        content: ''
      },
      {
        title: 'Data consumers (e.g., product managers, leadership):',
        content: '1. Filters were too technical, requiring users to select datasets before applying filters\n2. Filters applied inconsistently, often impacting only one or a few charts without clarity on their scope\n3. Consumers often relied on data creators to answer questions, as the tool was not intuitive enough for self-service'
      },
      {
        title: 'Data creators (e.g., data scientists):',
        content: '1. Creating dashboards was complex due to inconsistent filters across charts\n2. There was no way to unify filters with similar dimensions, leading to confusion and inefficiencies\n3. Creators often acted as "human filters" because consumers could not self-serve effectively'
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
        title: 'For Data Creators',
        content: 'Meet Danny, a data Scientist need to create a dashboard for his team to track product metrics.\n\nWith the new launched tool, Danny can setup filters at various levels (chart, group, section, tab, and dashboard).',
        image: '/images/67d4fd2c045042941d70a271_dashboard-UX Persona.png'
      },
      {
        title: 'Step 1-2: Create dashboard and group charts',
        content: 'Step 1: Danny created a dashboard\nStep 2: Danny created a group section, then he added the first and second chart into the group',
        gifs: [
          '/images/67cfbc10e25b1be3c51e25ef_dashboard-create chart.gif'
        ]
      },
      {
        title: 'Unify Filters',
        content: 'With the new tool, it allow creators to identify and unify filters with similar dimensions, even when named differently. The system recognizes common filters across these two charts. Danny want to add more filters, he saw there is a button to associate dimensions.\n\nStep 3: He clicked the button to select dimension under two different datasets. Danny linked these two dimensions to be the same and give a name country.',
        gifs: [
          '/images/67cfbc7eda8ac5637ea98171_equal.gif'
        ]
      },
      {
        title: 'Set up filters for consumers',
        content: 'The new tool ensure filters are intuitive and relevant for consumers.\n\nStep 4: Danny sets up useful filters to this group, including date, device, domain, member_language and country\nStep 5: Danny selected country equal to Canada and Mexico to narrow down the data for consumers to view. Then Danny finished dashboard creation flow.',
        gifs: [
          '/images/67d4a2e7a10bd11b3afe1433_landing-2.gif'
        ]
      },
      {
        title: 'For Data Consumers',
        content: 'Meet Alex, a product Manager.',
        image: '/images/67d4fd2cf6d060ea4a8ff4f6_dashboard-UX Persona2.png'
      },
      {
        title: 'Consumer experience',
        content: 'Alex, accesses the dashboard created by Danny. She sees clear filters at different levels (e.g., Chat, group, tab levels).\n\nThe updated tool can simplify technical terms to make filters intuitive for non-technical users. Alex apply intuitive filters to narrow down data results. Without leaving the dashboard. Alex gains insights into product performance and identifies actionable opportunities.',
        gifs: [
          '/images/67cfbcb79c2e266ae34dff05_view1-v2.gif',
          '/images/67cfbcb74cc2f2be89673d7c_view 2.gif',
          '/images/67d4fe8aa0173122a967c81e_applyfilter.gif'
        ]
      }
    ],
    impact: [
      'Engagement increased by 45%: Engagement with dashboard filters increased by 45%, leading to more efficient decision-making',
      'Self-serve rate increased: 71% of consumers reporting they could now analyze data independently',
      'Shape direction: Separating creator and consumer experiences shaped the future direction of the product'
    ],
    testimonial: {
      quote: 'Wendy always strives to understand the real reasons behind user requests. By conducting thorough research, she ensured the solution delivered an exceptional user experience, not just a quick fix to the immediate problem.',
      author: 'Sophie',
      role: 'Engineering Manager'
    }
  },
  {
    id: 'camera-app',
    title: 'V Camera: Bringing Fun Back to Qzone',
    year: 2014,
    cover: '/images/67ce84f5a2c070823d627a16_banner_carema_800.png',
    shortDescription: 'In 2014, Qzone\'s engagement declined, so we built V Camera, a fun photo plugin with effects and stickers to encourage sharing.',
    role: 'User researcher\nUX\nUI',
    duration: '2 Weeks',
    team: '3 Designer',
    sections: [
      {
        title: 'The Challenge',
        content: 'The platform faced competition from WeChat as user engagement dropped significantly during 2014, despite Qzone having over 648 million monthly active users.'
      },
      {
        title: 'The Idea: Camera app',
        content: 'The solution emerged from a Tencent hackathon. The concept focused on three objectives:\n\n1. Making photo-sharing enjoyable\n2. Increasing posting frequency\n3. Differentiating the platform competitively',
        image: '/images/67cfc02f0e617aef5fd6f86e_3-Persona.png'
      },
      {
        title: 'Design Process',
        content: '',
        images: [
          '/images/67cfc02ffceccce3435cd9bd_4-ideas online.png',
          '/images/67cfc02ff2ded24fe45a40ac_5-ideas.png',
          '/images/67cfc02f5001bb7a89b20d17_6-wireframe.png'
        ]
      },
      {
        title: 'UI Design',
        content: '',
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
        title: 'Final Product',
        content: '',
        images: [
          '/images/67cfc02f9abfa240a092c62f_Frame 5.png',
          '/images/67cfc02f175de6166a39c293_Main-projects--10-V-Camera_03_1000.png'
        ]
      }
    ],
    impact: [
      'Engagement increased: Users shared more photos',
      'Creative Award: Won recognition at Tencent',
      'Design influence: Demonstrated design\'s influence on user interaction'
    ],
    takeaways: [
      'This project showed me the power of understanding user behavior—instead of forcing people to engage, we gave them a fun tool that naturally encouraged it.'
    ]
  }
];
