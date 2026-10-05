/* ==========================================================================
   Articles shown on writing.html
   - Add one object per article; order doesn't matter (sorted by date).
   - The newest article in the current filter gets the large featured card.
   - tags: any of UX, Product, Education, AI, DesignThinking, User Research,
     Design/Code, Design Systems, Interaction Design.
     The first tag sets the icon on the small card.
   - excerpt is the article's subtitle, shown on every card.
   - image is optional (used only on the featured card).
   - featured is optional: true (label "Featured") or a short label string adds
     a blood-orange strip with that caption to the top of the small card.
   - topRated is optional: true adds a light-blue "Top rated" strip in the same
     style. If an article has both, featured wins.
   ========================================================================== */

window.ARTICLES = [
  {
    title: 'The next larger context',
    url: 'https://medium.com/user-experience-design-1/the-next-larger-context-4dd0c91a7c5b?sk=e54977f11de339abbe2b618e98ef4ce8',
    date: '2026-09-28',
    tags: ['AI', 'UX', 'Design/Code'],
    excerpt: 'Designing beyond the interface, the product, and the prompt.',
    image: 'https://cdn-images-1.medium.com/max/1200/57c076bfa3105c41a754a345d5d0917a86486478a825815c67a32a73cb106311'
  },
  {
    title: 'Users don’t see your design system',
    url: 'https://medium.com/user-experience-design-1/users-dont-see-your-design-system-d6abd51c18fc?sk=f10c877ab93bb1bb7329bad9063a7575',
    date: '2026-09-01',
    tags: ['Design Systems', 'UX', 'AI'],
    excerpt: 'How Gestalt principles power any great design system.',
    image: 'https://cdn-images-1.medium.com/max/1200/1*M2UAhbx7BHmk_d_G6Q8PHA.png'
  },
  {
    title: 'The aggressively mediocre fight',
    url: 'https://medium.com/user-experience-design-1/the-aggressively-mediocre-fight-ed47b3f9f8f4?sk=4d7ea5ca7989687d012a1c6901e1c198',
    date: '2026-07-24',
    tags: ['AI', 'Product', 'UX'],
    excerpt: 'The battle we have with AI and something we can do about it.',
    image: 'https://cdn-images-1.medium.com/max/1200/1*AmFyXhpWu-1nF8VVDvrZdQ.png'
  },
  {
    title: 'AI meets Sturgeon’s Law',
    url: 'https://medium.com/user-experience-design-1/ai-meets-sturgeons-law-21d17488fc48?sk=4e54892f8d5ed1d10aeed59f465ad3a3',
    date: '2026-06-01',
    tags: ['Design/coce','AI', 'UX'],
    excerpt: 'Why more content does not mean more quality.',
    image: 'https://cdn-images-1.medium.com/max/1200/1*UXZuLeKNNH4XliAHVkKz7A.png'
  },
  {
    featured: 'Must read',
    title: 'We become what we behold',
    url: 'https://medium.com/user-experience-design-1/we-become-what-we-behold-b552cad26702?sk=bd30fbf2080d02165664bac20c66887c',
    date: '2026-04-16',
    tags: ['AI', 'Design/Code', 'UX'],
    excerpt: 'A discussion of AI + Design and our shifting roles.',
    image: 'https://cdn-images-1.medium.com/max/1200/1*4ofBskqjYgYr1_rr9J2jHA@2x.jpeg'
  },
  {
    title: 'User personas of consequence',
    url: 'https://medium.com/user-experience-design-1/user-personas-of-consequence-7bd666865e2f?sk=e7492ccb982004263dbe29ea71ef2c3a',
    date: '2026-02-28',
    tags: ['User Research','Education', 'UX'],
    excerpt: 'Using inclusive empathy, the ICF framework, and human-centered design rigour to improve your user personas.',
    image: 'https://cdn-images-1.medium.com/max/1200/1*SWZGdTMdPUwzqlCiY22WCA.png'
  },
  {
    title: 'Keep making (AI will not save you)',
    url: 'https://medium.com/user-experience-design-1/keep-making-ai-will-not-save-you-402023b808fc?sk=f7d7e9da8de5135ffbb14bdacd19c65c',
    date: '2025-12-18',
    tags: ['DesignThinking', 'AI', 'UX'],
    excerpt: 'Why growing your conceptual abilities via sketching and idea generation will help you compete with AI and against AI.',
    image: 'https://cdn-images-1.medium.com/max/1200/1*4ZsibUXyomAMfufYXBeUgQ.png'
  },
  {
    featured: 'Must read',
    title: 'Let designers think',
    url: 'https://uxdesign.cc/let-designers-think-82721f458b73',
    date: '2025-11-11',
    tags: ['Design Thinking', 'UX', 'Product'],
    excerpt: 'How “Thinking” + “Designing” need to be practiced outside AI.',
    image: 'https://cdn-images-1.medium.com/max/1200/1*8Qb8r3bVmGM66mP2bBdORg.png'
  },
  {
    title: 'Failing fast with AI',
    url: 'https://medium.com/user-experience-design-1/failing-fast-with-ai-e30887321ef5?sk=51218d9f9bb883206527bdccacd7e3cc',
    date: '2025-09-26',
    tags: ['AI', 'Design/Code', 'UX'],
    excerpt: 'Why failing fast is essential to the era of AI-assisted design/dev prototyping.',
    image: 'https://cdn-images-1.medium.com/max/1200/1*I8db_56Ds5RsRgtvyvumBw.png'
  },
  {
    title: 'AI + the age of choice',
    url: 'https://medium.com/user-experience-design-1/failing-fast-with-ai-e30887321ef5?sk=51218d9f9bb883206527bdccacd7e3cc',
    date: '2025-08-17',
    tags: ['AI', 'Design/Code','UX'],
    excerpt: 'How AI should be used for less noise and more quality.',
    image: 'https://cdn-images-1.medium.com/max/1200/1*1ZsdWrMXY8x_5j7vYpz6rA.png'
  },
  {
    title: 'UX scenarios + GenAI',
    url: 'https://medium.com/user-experience-design-1/ux-scenarios-genai-fb25d100a98a?sk=2eb7985bb9148a88085728b0c4d43390',
    date: '2025-06-06',
    tags: ['Design/Code','AI', 'UX','Design Thinking'],
    excerpt: 'Using AI for ideation, UX scenarios, and the value of world-building in UX design.',
  },
  {
    title: 'AI + Hermes (speed) worship',
    url: 'https://medium.com/user-experience-design-1/ai-hermes-speed-worship-798ad11c8962?sk=e685e83307d47d03502381b0f3082e80',
    date: '2024-10-20',
    tags: ['AI', 'UX','Education'],
    excerpt: 'Tech’s obsession with speed and how it has the potential to strip quality and craft in Design.',
  },
  {
    title: 'Back of the TV UX',
    url: 'https://medium.com/user-experience-design-1/back-of-the-tv-ux-7cd5878459bf?sk=7b1f8ccc2ed1e1cd47842d46be9dc008',
    date: '2024-07-24',
    tags: ['UX','Education','User Research'],
    excerpt: 'Why Information Architecture (IA) and Sitemaps are essential to designing great user experiences and not always sexy artifacts.',
  }
  ,
  {
    topRated: "top rated",
    title: 'UX and the Feynman Technique',
    url: 'https://medium.com/user-experience-design-1/ux-and-the-feynman-technique-7874aaa7520e?sk=936427f4ae8cd05da8b6c02c33b43e88',
    date: '2023-12-19',
    tags: ['Education','UX','Design Thinking'],
    excerpt: 'How a teaching framework is valuable to UX.',
  }
  ,
  {
    topRated: "top rated",
    title: 'Why lives in the deep',
    url: 'https://medium.com/user-experience-design-1/why-lives-in-the-deep-1314452b96a4?sk=2c0e107befb289b5427af547192bac83',
    date: '2023-08-28',
    tags: ['User Research','UX','Design Thinking'],
    excerpt: 'Using the Laddering Technique to deliver on the “Why” in User Research/UX/Product Design.',
  }
  ,
  {
    title: 'Facilitating Fun',
    url: 'https://medium.com/user-experience-design-1/facilitating-fun-91b3859c6b5d?sk=d1dc1ef2a7b8ab306da6f57b02030a20',
    date: '2023-07-06',
    tags: ['Product','UX','Design Thinking'],
    excerpt: 'How UX helps teams collaborate and have more fun from the UXPA International Conference 2023.',
  }
  ,
  {
    title: 'Design Koans',
    url: 'https://medium.com/user-experience-design-1/design-koans-edb5ab22a734?sk=5c58b43495b1714d7c7bc001e2a645d4',
    date: '2023-04-24',
    tags: ['Design Thinking','UX','Education'],
    excerpt: 'A series of thought experiments for designers.',
  }
  ,
  {
    topRated: "top rated",
    title: 'Mind the AI Gap',
    url: 'https://medium.com/user-experience-design-1/mind-the-ai-gap-225aeed9edff?sk=fefc274ca189a98b39b4a4385556281f',
    date: '2023-03-17',
    tags: ['AI','UX','Design Thinking'],
    excerpt: 'UX keeps learning and working with AI tools to recognize any opportunity.',
  }
  ,
  {
    title: 'MVC (Minimum Viable Culture) not MVP (Minimum Viable Product)',
    url: 'https://medium.com/user-experience-design-1/mvc-minimum-viable-culture-not-mvp-minimum-viable-product-1b68f9f54ed2?sk=2fbbe33e88dcbd6e77d18d04671a3dc8',
    date: '2023-04-24',
    tags: ["Product",'UX','Education'],
    excerpt: 'Working towards a community vs working towards things.',
  }
  ,
  {
    title: 'A good UX portfolio is…',
    url: 'https://medium.com/user-experience-design-1/a-good-ux-portfolio-is-46b6321a8cf9?sk=fa0c618d1e8fd1a282030eb1bd19a29e',
    date: '2022-10-12',
    tags: ['Design Systems','Product','UX'],
    excerpt: '10 recommendations for how and why your portfolios should focus on how you think as a Designer.',
  }
  ,
  {
    title: 'The inspiration cycle for designers',
    url: 'https://medium.com/user-experience-design-1/the-inspiration-cycle-69614b5c6f4d?sk=68673f768a73d4b8b2a5a9c55f8ef314',
    date: '2022-10-12',
    tags: ['Education','Design','UX'],
    excerpt: 'Building a design habit of looking around > making > sharing.',
  }
   ,
  {
    featured: 'Must read',
    title: 'What if you started your UX process away from a computer?',
    url: 'https://medium.com/user-experience-design-1/what-if-you-started-your-ux-process-away-from-a-computer-1a1ee9fc869a?sk=b9e29a7731995cd72e1f6a6995d799c8',
    date: '2022-03-26',
    tags: ['Education','UX','Product'],
    excerpt: 'A case for sketching-first UX.',
  }
   ,
  {
    title: 'Stuck and unstuck',
    url: 'https://medium.com/user-experience-design-1/stuck-and-unstuck-26093adabe6b?sk=233da591bd2eb690e483d2b00d8db770',
    date: '2021-12-14',
    tags: ['Education','UX/Product', 'Design Thinking'],
    excerpt: 'Ways designers and teams get stuck and the strategies for getting unstuck.',
  }
  ,
  {
    topRated: "top rated",
    title: 'Designers: Be among your users',
    url: 'https://medium.com/user-experience-design-1/designers-be-among-your-users-95913032bb39?sk=411c89ca533e644917734356b976631d',
    date: '2021-10-19',
    tags: ['User Research','UX/Product','Education'],
    excerpt: '3 prompts for infusing more user interaction as a designer',
  }
  ,
  {
    featured: "most-read",
    title: 'A comprehensive list of human-computer interactions',
    url: 'https://medium.com/user-experience-design-1/a-comprehensive-list-of-human-computer-interactions-d72eaca2c0df?sk=cbc8ff00e5bc438c28c0b557a3528e0f',
    date: '2021-08-31',
    tags: ['Education','Interaction Design','Design'],
    excerpt: 'A review of the opportunities with humans, computers, and software.',
  }
  ,
  {
    title: 'Why collaboration is so vital for humans',
    url: 'https://medium.com/user-experience-design-1/fundamental-human-needs-design-collaboration-f639931e368b?sk=6fe06e95efc347807e730c7efa78bc8b',
    date: '2021-08-31',
    tags: ['User Research','Education','Design'],
    excerpt: 'A review of Manfred Max-Neefs fundamental human needs and why designers should advocate for collaboration.',
  }
  ,
  {
    title: 'The first law of technology',
    url: 'https://medium.com/user-experience-design-1/the-first-law-of-technology-41de427c4ee4?sk=1208b1e5064036a44e56d68eca18dca0',
    date: '2021-07-23',
    tags: ['Education','UX/Product','Design Thinking'],
    excerpt: 'A review of Melvin Kranzberg’s tech POV.',
  }
  ,
  {
    title: 'When all you have is a hammer…',
    url: 'https://medium.com/user-experience-design-1/when-all-you-have-is-a-hammer-4eda385b46b4?sk=705658a5f8fb6dc74f95f1855fc171b4',
    date: '2021-03-26',
    tags: ['Interaction Design','UX/Product','Education',],
    excerpt: 'Cognitive bias with tools in UX and beyond.',
  }
  ,
  {
    title: 'The design raconteur',
    url: 'https://medium.com/user-experience-design-1/the-design-raconteur-f65cd863303f?sk=733b82f553506c3257691acbc67250a9',
    date: '2021-03-26',
    tags: ['Education','UX/Product','Design Thinking'],
    excerpt: 'The role storytelling plays in being a better designer.',
  }
  ,
  {
    topRated: "top rated",
    title: 'Applying the Panofsky method to your own design',
    url: 'https://uxdesign.cc/applying-the-panofsky-method-to-your-own-design-c230e91941ac?sk=bf506a3914c2ca724da25a48d89daaf3',
    date: '2021-01-26',
    tags: ['Education','UX/Product','Design Thinking'],
    excerpt: 'Level 1: Primary Analysis Level 2: Conventional Analysis Level 3: Intrinsic Analysis.',
  }
  ,
  {
    title: 'Designers: stay psychologically flexible',
    url: 'https://medium.com/user-experience-design-1/designers-stay-psychologically-flexible-3087d14c9332?sk=3e406c6c6425e582b0cb7466c73a4cf3',
    date: '2020-12-30',
    tags: ['UX/Product','Design','Education',],
    excerpt: '3 Scenarios for how UX applies psychological flexibility to its practice.',
  }
  ,
  {
    title: 'Failure + Iteration: a designer’s dilemma',
    url: 'https://medium.com/user-experience-design-1/failure-iteration-a-designers-dilemma-1a2799e5e46?sk=102eab46abbe281cf24e01dbe1f93512',
    date: '2020-09-03',
    tags: ['Interaction Design','Education','UX/Product'],
    excerpt: 'Use the Socratic method to improve teaching strategies, and move beyond failure for UX and UI.',
  }
  ,
  {
    title: 'ABTI — Always Be Testing & Iterating',
    url: 'https://medium.com/user-experience-design-1/abti-always-be-testing-iterating-d7a1ecaf42ef?sk=157193661e59f83942c1f88dac93949f',
    date: '2020-07-11',
    tags: ['User Research','Education','UX/Product'],
    excerpt: 'Holding the line as UX Designer to solve your user\'s problems.',
  }
  ,
  {
    title: 'UX foundations via Miller’s Law',
    url: 'https://medium.com/user-experience-design-1/ux-foundations-via-millers-law-5121715b487d?sk=ac404167514bf7c0620b7ecabe65457c',
    date: '2020-02-28',
    tags: ['Interaction Design','Education','UX/Product'],
    excerpt: 'Gaining skills that distinguish you as a human-centered problem solver becomes paramount as the number of UX/UI designers grow and their titles change from webmaster to product architect and beyond.',
  }
  ,
  {
    featured: 'most read',
    title: '10 Principles of Good (UI) Design',
    url: 'https://medium.com/user-experience-design-1/10-principles-of-good-ui-design-24ebe3155a11?sk=c0b2f5966e522decebfdace23af5844b',
    date: '2019-10-01',
    tags: ['UX/Product','Education','Design'],
    excerpt: 'A discussion of Dieter Rams 10 principles of good design as applied to User Interfaces.',
  }
  ,
   {
    topRated: 'top rated',
    title: 'User interface ontology — UI jargon',
    url: 'https://medium.com/user-experience-design-1/10-principles-of-good-ui-design-24ebe3155a11?sk=c0b2f5966e522decebfdace23af5844b',
    date: '2019-03-10',
    tags: ["Interaction Design","Education","UX/Product"],
    excerpt: 'A discussion of UI ontology with it comes to user interfaces.',
  }
  ,



  // Add your remaining articles here, e.g.:
  // ,{ title: '…', url: 'https://…', date: 'YYYY-MM-DD', tags: ['UX', 'Education'] }

  
];
