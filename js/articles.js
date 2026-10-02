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
    tags: ['AI', 'UX'],
    excerpt: 'The battle we have with AI and something we can do about it.',
    image: 'https://cdn-images-1.medium.com/max/1200/1*AmFyXhpWu-1nF8VVDvrZdQ.png'
  },
  {
    title: 'AI meets Sturgeon’s Law',
    url: 'https://medium.com/user-experience-design-1/ai-meets-sturgeons-law-21d17488fc48?sk=4e54892f8d5ed1d10aeed59f465ad3a3',
    date: '2026-06-01',
    tags: ['AI', 'UX'],
    excerpt: 'Why more content does not mean more quality.',
    image: 'https://cdn-images-1.medium.com/max/1200/1*UXZuLeKNNH4XliAHVkKz7A.png'
  },
  {
    featured: true,
    featured:'must-read',
    title: 'We become what we behold',
    url: 'https://medium.com/user-experience-design-1/we-become-what-we-behold-b552cad26702?sk=bd30fbf2080d02165664bac20c66887c',
    date: '2026-04-16',
    tags: ['AI', 'UX'],
    excerpt: 'A discussion of AI + Design and our shifting roles.',
    image: 'https://cdn-images-1.medium.com/max/1200/1*4ofBskqjYgYr1_rr9J2jHA@2x.jpeg'
  },
  {
    title: 'User personas of consequence',
    url: 'https://medium.com/user-experience-design-1/user-personas-of-consequence-7bd666865e2f?sk=e7492ccb982004263dbe29ea71ef2c3a',
    date: '2026-02-28',
    tags: ['User Research', 'UX', 'Product'],
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
    featured: true,
    featured:'must-read',
    title: 'Let designers think',
    url: 'https://uxdesign.cc/let-designers-think-82721f458b73',
    date: '2025-11-11',
    tags: ['DesignThinking', 'UX', 'Product'],
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
    tags: ['AI', 'UX'],
    excerpt: 'How AI should be used for less noise and more quality.',
    image: 'https://cdn-images-1.medium.com/max/1200/1*1ZsdWrMXY8x_5j7vYpz6rA.png'
  },
  {
    title: 'UX scenarios + GenAI',
    url: 'https://medium.com/user-experience-design-1/ux-scenarios-genai-fb25d100a98a?sk=2eb7985bb9148a88085728b0c4d43390',
    date: '2025-06-06',
    tags: ['education','AI', 'UX','DesignThinking'],
    excerpt: 'Using AI for ideation, UX scenarios, and the value of world-building in UX design.',
  },
  {
    title: 'AI + Hermes (speed) worship',
    url: 'https://medium.com/user-experience-design-1/ai-hermes-speed-worship-798ad11c8962?sk=e685e83307d47d03502381b0f3082e80',
    date: '2024-10-20',
    tags: [,'AI', 'UX','education' ],
    excerpt: 'Tech’s obsession with speed and how it has the potential to strip quality and craft in Design.',
  }

  // Add your remaining articles here, e.g.:
  // ,{ title: '…', url: 'https://…', date: 'YYYY-MM-DD', tags: ['UX', 'Education'] }
];
