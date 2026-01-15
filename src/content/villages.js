// const villages = [
//   /* =========================
//      PEDANANDIPALLY
//      ========================= */
//   {
//     id: "pedanandipally",
//     slug: "pedanandipally",
//     name: "Pedanandipally",
//     status: "adopted",
//     adoptedSince: 2018,

//     location: { district: "Nellore", state: "Andhra Pradesh" },
//     needs: ["water", "medical", "education"],

//     photos: [
//       "/images/gallery/IMG-20170708-WA0012.jpg",
//       "/images/gallery/IMG-20170708-WA0022.jpg",
//       "/images/gallery/IMG-20170708-WA0025.jpg",
//       "/images/gallery/IMG-20170708-WA0028.jpg",
//       "/images/gallery/IMG-20170708-WA0031.jpg",
//       "/images/gallery/IMG-20170924-WA0006.jpg",
//     ],

//     description:
//       "A village where Bala Vikas, education support, village development and Annadaatha Sukhibhava services are actively carried out.",

//     services: {
//       education: {
//         active: true,
//         items: [
//           {
//             id: "tuition",
//             title: "Daily Tuitions",
//             description:
//               "Daily evening tuition programs offering guided academic support, personalized attention, and regular practice to help students build confidence, strengthen fundamentals, and achieve better academic results.",
//             photos: [
//               "/images/gallery/IMG-20170708-WA0012.jpg",
//               "/images/gallery/IMG-20170708-WA0022.jpg",
//               "/images/gallery/IMG-20170708-WA0025.jpg",
//               "/images/gallery/IMG-20170708-WA0028.jpg",
//               "/images/gallery/IMG-20170708-WA0031.jpg",
//               "/images/gallery/IMG-20170924-WA0006.jpg",
//             ],
//           },
//           {
//             id: "balavikas",
//             title: "Bala Vikas",
//             description: "Value-based education for children.",
//             photos: [
//               "/images/gallery/IMG-20170708-WA0012.jpg",
//               "/images/gallery/IMG-20170708-WA0022.jpg",
//               "/images/gallery/IMG-20170708-WA0025.jpg",
//               "/images/gallery/IMG-20170708-WA0028.jpg",
//               "/images/gallery/IMG-20170708-WA0031.jpg",
//               "/images/gallery/IMG-20170924-WA0006.jpg",
//             ],
//           },
//           {
//             id: "stationery",
//             title: "Stationery & Bags",
//             description: "Distribution to students.",
//             photos: [],
//           },
//           {
//             id: "sports",
//             title: "Sports Activities",
//             description: "Encouraging physical fitness.",
//             photos: [],
//           },
//         ],
//       },

//       health: {
//         active: true,
//         items: [
//           {
//             id: "medical-camp",
//             title: "Medical Camps",
//             description: "Free checkups & medicines.",
//             photos: [],
//           },
//         ],
//       },

//       villageDevelopment: {
//         active: true,
//         items: [
//           {
//             id: "school-repair",
//             title: "School Repairs",
//             year: 2024,
//             description: "Infrastructure improvements.",
//             photos: [],
//           },
//           {
//             id: "sanitation",
//             title: "Sanitation Support",
//             year: 2024,
//             description: "Cleanliness initiatives.",
//             photos: [],
//           },
//         ],
//       },

//       skillDevelopment: {
//         active: false,
//         items: [],
//       },

//       dailyMeals: {
//         active: true,
//         programmeName: "Annadaatha Sukhibhava",
//         description: "Daily meals for elderly & handicapped.",
//         beneficiariesApprox: 18,
//         costPerDay: 3400,
//         photos: [
//           "/images/gallery/IMG-20170708-WA0012.jpg",
//           "/images/gallery/IMG-20170708-WA0022.jpg",
//           "/images/gallery/IMG-20170708-WA0025.jpg",
//           "/images/gallery/IMG-20170708-WA0028.jpg",
//           "/images/gallery/IMG-20170708-WA0031.jpg",
//           "/images/gallery/IMG-20170924-WA0006.jpg",
//         ],
//       },
//     },

//     yearlyHighlights: [
//       {
//         year: 2025,
//         events: [
//           {
//             id: "sai-birthday-2025",
//             title: "Swami Birthday Celebrations",
//             serviceKey: "spiritual",
//             description: "Cultural programs by children & food distribution.",
//             photos: [
//               "/images/gallery/IMG-20170708-WA0012.jpg",
//               "/images/gallery/IMG-20170708-WA0022.jpg",
//               "/images/gallery/IMG-20170708-WA0025.jpg",
//               "/images/gallery/IMG-20170708-WA0028.jpg",
//               "/images/gallery/IMG-20170708-WA0031.jpg",
//               "/images/gallery/IMG-20170924-WA0006.jpg",
//             ],
//           },
//         ],
//       },
//       {
//         year: 2024,
//         events: [
//           {
//             id: "medical-camp-2024",
//             title: "Medical Camp",
//             serviceKey: "health",
//             description: "Free medical services to villagers.",
//             photos: [
//               "/images/gallery/IMG-20170708-WA0012.jpg",
//               "/images/gallery/IMG-20170708-WA0022.jpg",
//               "/images/gallery/IMG-20170708-WA0025.jpg",
//               "/images/gallery/IMG-20170708-WA0028.jpg",
//               "/images/gallery/IMG-20170708-WA0031.jpg",
//               "/images/gallery/IMG-20170924-WA0006.jpg",
//             ],
//           },
//         ],
//       },
//     ],
//   },

//   /* =========================
//      NAGAYYAPETA
//      ========================= */
//   {
//     id: "nagayyapeta",
//     slug: "nagayyapeta",
//     name: "Nagayyapeta",
//     status: "adopted",
//     adoptedSince: 2020,

//     location: { district: "Nellore", state: "Andhra Pradesh" },
//     needs: ["medical", "daily-meals"],

//     photos: [
//       "/images/gallery/IMG-20170708-WA0012.jpg",
//       "/images/gallery/IMG-20170708-WA0022.jpg",
//       "/images/gallery/IMG-20170708-WA0025.jpg",
//       "/images/gallery/IMG-20170708-WA0028.jpg",
//       "/images/gallery/IMG-20170708-WA0031.jpg",
//       "/images/gallery/IMG-20170924-WA0006.jpg",
//     ],

//     description:
//       "One of the villages where Annadaatha Sukhibhava is serving elders daily.",

//     services: {
//       education: { active: false, items: [] },
//       health: {
//         active: true,
//         items: [
//           {
//             id: "medical-camp",
//             title: "Medical Camps",
//             description: "Periodic health camps.",
//             photos: [],
//           },
//         ],
//       },
//       villageDevelopment: { active: false, items: [] },
//       skillDevelopment: { active: false, items: [] },

//       dailyMeals: {
//         active: true,
//         programmeName: "Annadaatha Sukhibhava",
//         description: "Daily meals for elders.",
//         beneficiariesApprox: 10,
//         costPerDay: 3400,
//         photos: [],
//       },
//     },

//     yearlyHighlights: [
//       {
//         year: 2024,
//         events: [
//           {
//             id: "annadaatha-2024",
//             title: "Annadaatha Sukhibhava Service",
//             serviceKey: "dailyMeals",
//             description: "Continuous daily meal service.",
//             photos: [],
//           },
//         ],
//       },
//     ],
//   },

//   /* =========================
//      KASIPURAM
//      ========================= */
//   {
//     id: "kasipuram",
//     slug: "kasipuram",
//     name: "Kasipuram",
//     status: "adopted",
//     adoptedSince: 2021,

//     location: { district: "Nellore", state: "Andhra Pradesh" },
//     needs: ["education", "medical"],

//     photos: [
//       "/images/gallery/IMG-20170708-WA0012.jpg",
//       "/images/gallery/IMG-20170708-WA0022.jpg",
//       "/images/gallery/IMG-20170708-WA0025.jpg",
//       "/images/gallery/IMG-20170708-WA0028.jpg",
//       "/images/gallery/IMG-20170708-WA0031.jpg",
//       "/images/gallery/IMG-20170924-WA0006.jpg",
//     ],

//     description:
//       "Village supported with education services, medical camps and daily meals for elders.",

//     services: {
//       education: {
//         active: true,
//         items: [
//           {
//             id: "tuition",
//             title: "Daily Tuitions",
//             description: "Evening tuition support.",
//             photos: [],
//           },
//           {
//             id: "balavikas",
//             title: "Bala Vikas",
//             description: "Spiritual education.",
//             photos: [],
//           },
//         ],
//       },

//       health: {
//         active: true,
//         items: [
//           {
//             id: "medical-camp",
//             title: "Medical Camps",
//             description: "Free checkups.",
//             photos: [],
//           },
//         ],
//       },

//       villageDevelopment: { active: false, items: [] },
//       skillDevelopment: { active: false, items: [] },

//       dailyMeals: {
//         active: true,
//         programmeName: "Annadaatha Sukhibhava",
//         description: "Meals for elderly.",
//         beneficiariesApprox: 12,
//         costPerDay: 3400,
//         photos: [],
//       },
//     },

//     yearlyHighlights: [
//       {
//         year: 2025,
//         events: [
//           {
//             id: "eswaramma-day-2025",
//             title: "Eswaramma Day",
//             serviceKey: "spiritual",
//             description: "Children stage performances to overcome stage fear.",
//             photos: [],
//           },
//         ],
//       },
//     ],
//   },

//   /* =========================
//      UPCOMING / READY TO ADOPT
//      ========================= */
//   {
//     id: "valabu",
//     slug: "valabu",
//     name: "Valabu",
//     status: "upcoming",

//     location: { district: "Nellore", state: "Andhra Pradesh" },
//     needs: ["water", "education", "medical"],

//     photos: [
//       "/images/gallery/IMG-20170708-WA0012.jpg",
//       "/images/gallery/IMG-20170708-WA0022.jpg",
//       "/images/gallery/IMG-20170708-WA0025.jpg",
//       "/images/gallery/IMG-20170708-WA0028.jpg",
//       "/images/gallery/IMG-20170708-WA0031.jpg",
//       "/images/gallery/IMG-20170924-WA0006.jpg",
//     ],

//     description:
//       "Identified for adoption. Immediate needs include clean drinking water and medical support.",

//     services: {
//       education: { active: false, items: [] },
//       health: { active: false, items: [] },
//       villageDevelopment: { active: false, items: [] },
//       skillDevelopment: { active: false, items: [] },
//       dailyMeals: { active: false },
//     },

//     yearlyHighlights: [],
//   },
// ];

// export default villages;


const villages = [
  {
    id: "pedanandipally",
    slug: "pedanandipally",
    name: "Pedanandipally",
    status: "adopted",
    adoptedSince: 2018,

    location: { district: "Nellore", state: "Andhra Pradesh" },
    needs: ["water", "medical", "education"],

    photos: ["/images/gallery/IMG-20170708-WA0012.jpg"],

    description:
      "Pedanandipally is a village where sustained and selfless service is carried out with deep devotion in the sacred name of Sri Sathya Sai Baba. Since its adoption in 2018, continuous efforts have been made to uplift the village through education, healthcare, nutrition, and infrastructure support. Children benefit from Daily Tuitions and Bala Vikas programs that strengthen academic learning while nurturing moral values, discipline, and self-confidence. Regular medical camps provide essential healthcare services and medicines, ensuring that villagers receive timely care with dignity and compassion. The Annadaatha Sukhibhava programme serves nutritious daily meals to elderly and physically challenged residents, offering not just food but love, security, and reassurance. Village development initiatives such as sanitation support and school repairs contribute to a cleaner, healthier, and more dignified living environment. Every activity in Pedanandipally is guided by the spirit of selfless seva, transforming the village into a space of hope, unity, and value-based living.",

    services: {
      education: {
        active: true,
        items: [
          {
            id: "tuition",
            title: "Daily Tuitions",
            description:
              "Daily evening tuition programs offering guided academic support, personalized attention, and regular practice to help students build confidence, strengthen fundamentals, and achieve better academic results.",
            photos: [
              "/images/gallery/IMG-20170708-WA0012.jpg",
              "/images/gallery/IMG-20170708-WA0022.jpg",
              "/images/gallery/IMG-20170708-WA0025.jpg",
              "/images/gallery/IMG-20170708-WA0028.jpg",
              "/images/gallery/IMG-20170708-WA0031.jpg",
              "/images/gallery/IMG-20170924-WA0006.jpg",
            ],
          },
          {
            id: "balavikas",
            title: "Bala Vikas",
            description:
              "Value-based education that nurtures character, discipline, devotion, and moral values in children through stories, bhajans, and interactive learning.",
            photos: [
              "/images/gallery/IMG-20170708-WA0012.jpg",
              "/images/gallery/IMG-20170708-WA0022.jpg",
              "/images/gallery/IMG-20170708-WA0025.jpg",
              "/images/gallery/IMG-20170708-WA0028.jpg",
              "/images/gallery/IMG-20170708-WA0031.jpg",
              "/images/gallery/IMG-20170924-WA0006.jpg",
            ],
          },
          {
            id: "stationery",
            title: "Stationery & Bags",
            description:"Supplying school bags, notebooks, and vital stationery to children from underserved communities, nurturing their educational dreams and reinforcing the belief that every child deserves the tools to learn and grow.",
            photos: [
              "/images/2019/Bag-distribution/bag-distribution-2019-cdvp.jpg",
              "/images/2019/Bag-distribution/bag-distribution-2019-chnp.jpg",
              "/images/2019/Bag-distribution/bag-distribution-2019-chnp (2).jpg",
              "/images/2019/Bag-distribution/bag-distribution-2019-chnp (3).jpg",
              "/images/2019/Bag-distribution/bag-distribution-2019-chnp (4).jpg",
              "/images/2019/Bag-distribution/bag-distribution-2019-pnp.jpg",
            ],
          },
          {
            id: "sports",
            title: "Sports Activities",
            description:
              "Encouraging physical fitness, teamwork, and discipline among children through organized sports and recreational activities.",
            photos: [],
          },
        ],
      },

      health: {
        active: true,
        items: [
          {
            id: "medical-camp",
            title: "Medical Camps",
            description:
              "Free medical checkups, consultations, and distribution of essential medicines for villagers of all age groups.",
            photos: [],
          },
        ],
      },

      villageDevelopment: {
        active: true,
        items: [
          {
            id: "Temple Development and Renovation",
            title: "Temple Development and Renovation",
            year: 2019,
            description: "Built a mandir for Ganapathi in the Shivalayam premises and renovated the existing temple structures to create a serene and spiritually uplifting environment for devotees.",
            photos:[
              "/images/2019/temple-renovation/new-temple-and-renovation-2019-pnp.jpg",
              "/images/2019/temple-renovation/new-temple-and-renovation-2019-pnp (2).jpg",
              "/images/2019/temple-renovation/new-temple-and-renovation-2019-pnp (3).jpg",
            ],
          },
          {
            id: "school-repair",
            title: "School Repairs",
            year: 2024,
            description:
              "Improvement of school infrastructure to create a safe, clean, and supportive learning environment for children.",
            photos: [],
          },
          {
            id: "sanitation",
            title: "Sanitation Support",
            year: 2024,
            description:
              "Initiatives promoting cleanliness, hygiene, and healthy living conditions across the village.",
            photos: [],
          },
        ],
      },

      skillDevelopment: {
        active: false,
        items: [],
      },

      dailyMeals: {
        active: true,
        programmeName: "Annadaatha Sukhibhava",
        description:
          "Daily nutritious meals served with love and care to elderly and physically challenged villagers.",
        beneficiariesApprox: 18,
        costPerDay: 3400,
        photos: [
          "/images/gallery/IMG-20170708-WA0012.jpg",
          "/images/gallery/IMG-20170708-WA0022.jpg",
          "/images/gallery/IMG-20170708-WA0025.jpg",
          "/images/gallery/IMG-20170708-WA0028.jpg",
          "/images/gallery/IMG-20170708-WA0031.jpg",
          "/images/gallery/IMG-20170924-WA0006.jpg",
        ],
      },
    },

    yearlyHighlights: [
      {
        year: 2025,
        events: [
          {
            id: "sai-birthday-2025",
            title: "Swami Birthday Celebrations",
            serviceKey: "spiritual",
            description:
              "Swami’s birthday celebrated with devotion through cultural programs by children and food distribution to villagers.",
            photos: [
              "/images/gallery/IMG-20170708-WA0012.jpg",
              "/images/gallery/IMG-20170708-WA0022.jpg",
              "/images/gallery/IMG-20170708-WA0025.jpg",
              "/images/gallery/IMG-20170708-WA0028.jpg",
              "/images/gallery/IMG-20170708-WA0031.jpg",
              "/images/gallery/IMG-20170924-WA0006.jpg",
            ],
          },
        ],
      },
      {
        year: 2024,
        events: [
          {
            id: "medical-camp-2024",
            title: "Medical Camp",
            serviceKey: "health",
            description:
              "A large-scale medical camp offering free healthcare services and medicines to villagers.",
            photos: [
              "/images/gallery/IMG-20170708-WA0012.jpg",
              "/images/gallery/IMG-20170708-WA0022.jpg",
              "/images/gallery/IMG-20170708-WA0025.jpg",
              "/images/gallery/IMG-20170708-WA0028.jpg",
              "/images/gallery/IMG-20170708-WA0031.jpg",
              "/images/gallery/IMG-20170924-WA0006.jpg",
            ],
          },
        ],
      },
      {
        year: 2023,
        events: [
          {
            id: "Swami-Birthday-2023",
            title: "Swami Birthday Celebrations - 2023",
            serviceKey: "spiritual",
            description: "The birthday of Bhagawan Sri Sathya Sai Baba was devoutly celebrated in Pedanandipalli village with a series of spiritual and service-oriented activities. The day began with Nagara Sankeerthana in the morning, spreading devotional vibrations throughout the village. This was followed by Narayana Seva in the afternoon, where lunch was served to villagers as an offering of selfless service. In the evening, Pallaki Seva was conducted, creating a deeply spiritual atmosphere. The celebrations concluded with cultural and spiritual programs by children from evening till night, highlighting Swami’s teachings and values.",
            photos: [
              "/images/2023/Sai-birthday-pnp/pnp-sai-birthday-2023.jpg",
              "/images/2023/Sai-birthday-pnp/pnp-sai-birthday-2023 (2).jpg",
              "/images/2023/Sai-birthday-pnp/pnp-sai-birthday-2023 (3).jpg",
              "/images/2023/Sai-birthday-pnp/pnp-sai-birthday-2023 (4).jpg",
              "/images/2023/Sai-birthday-pnp/pnp-sai-birthday-2023 (5).jpg",
              "/images/2023/Sai-birthday-pnp/pnp-sai-birthday-2023 (6).jpg",
              "/images/2023/Sai-birthday-pnp/pnp-sai-birthday-2023 (7).jpg",
              "/images/2023/Sai-birthday-pnp/pnp-sai-birthday-2023 (8).jpg",
              "/images/2023/Sai-birthday-pnp/pnp-sai-birthday-2023 (9).jpg",
              "/images/2023/Sai-birthday-pnp/pnp-sai-birthday-2023 (10).jpg",
              "/images/2023/Sai-birthday-pnp/pnp-sai-birthday-2023 (11).jpg",
              "/images/2023/Sai-birthday-pnp/pnp-sai-birthday-2023 (12).jpg",
              "/images/2023/Sai-birthday-pnp/pnp-sai-birthday-2023 (13).jpg",
            ],
          },
        ],
      },
      {
        year: 2018,
        events:[
          {
            id: "Swami-Birthday - 2018",
            title: "Swami Birthday Celebrations-2018",
            serviceKey: "spiritual",
            description: "Birthday of sri satya sai baba was celebrated with great devotion and enthusiasm in pedanandipalli village. The celebrations commenced with nagara sankeerthana in the morning, filling the village with devotional fervor. This was followed by narayana seva in the afternoon, where lunch was served to villagers as an act of selfless service. In the evening, pallaki seva was performed, creating a spiritually uplifting atmosphere. The day concluded with cultural and spiritual programs by children from evening till night, showcasing swami's teachings and values. Cultural programs included bhajans, devotional songs by children, skits depicting swami's life and teachings, dance performances, and speeches highlighting swami's messages of love, compassion, and selfless service.",
            photos: [
              "/images/2018/sai-birthday-pnp/sai-birthday-pnp-2018.jpg",
              "/images/2018/sai-birthday-pnp/sai-birthday-pnp-2018 (2).jpg",
              "/images/2018/sai-birthday-pnp/sai-birthday-pnp-2018 (3).jpg",
              "/images/2018/sai-birthday-pnp/sai-birthday-pnp-2018 (4).jpg",
              "/images/2018/sai-birthday-pnp/sai-birthday-pnp-2018 (5).jpg",
              "/images/2018/sai-birthday-pnp/sai-birthday-pnp-2018 (6).jpg",
              "/images/2018/sai-birthday-pnp/sai-birthday-pnp-2018 (7).jpg",
              "/images/2018/sai-birthday-pnp/sai-birthday-pnp-2018 (8).jpg",
              "/images/2018/sai-birthday-pnp/sai-birthday-pnp-2018 (9).jpg",
              "/images/2018/sai-birthday-pnp/sai-birthday-pnp-2018 (10).jpg",
              "/images/2018/sai-birthday-pnp/sai-birthday-pnp-2018 (11).jpg",
              "/images/2018/sai-birthday-pnp/sai-birthday-pnp-2018 (12).jpg",
              "/images/2018/sai-birthday-pnp/sai-birthday-pnp-2018 (13).jpg",
              "/images/2018/sai-birthday-pnp/sai-birthday-pnp-2018 (14).jpg",
            ],
          }
        ]
      }
    ],
  },

  {
    id: "nagayyapeta",
    slug: "nagayyapeta",
    name: "Nagayyapeta",
    status: "adopted",
    adoptedSince: 2020,

    location: { district: "Nellore", state: "Andhra Pradesh" },
    needs: ["medical", "daily-meals"],

    photos: [
      "/images/gallery/IMG-20170708-WA0012.jpg",
      "/images/gallery/IMG-20170708-WA0022.jpg",
      "/images/gallery/IMG-20170708-WA0025.jpg",
      "/images/gallery/IMG-20170708-WA0028.jpg",
      "/images/gallery/IMG-20170708-WA0031.jpg",
      "/images/gallery/IMG-20170924-WA0006.jpg",
    ],

    description:
      "Nagayyapeta is a village where compassionate service reaches the elderly and vulnerable every single day. Since its adoption in 2020, the focus has been on healthcare support and the Annadaatha Sukhibhava programme. Regular medical camps provide preventive healthcare, consultations, and essential medicines, ensuring timely care for villagers. The daily meal service nourishes elderly residents while offering emotional comfort, dignity, and a sense of belonging. Each act of service in Nagayyapeta reflects silent, sincere devotion and reinforces the belief that serving the needy is the highest form of worship.",

    services: {
      education: { active: false, items: [] },
      health: {
        active: true,
        items: [
          {
            id: "medical-camp",
            title: "Medical Camps",
            description:
              "Periodic health camps offering free consultations and medicines for villagers.",
            photos: [],
          },
        ],
      },
      villageDevelopment: { active: false, items: [] },
      skillDevelopment: { active: false, items: [] },

      dailyMeals: {
        active: true,
        programmeName: "Annadaatha Sukhibhava",
        description:
          "Daily meal service ensuring nourishment and dignity for elderly villagers.",
        beneficiariesApprox: 10,
        costPerDay: 3400,
        photos: [],
      },
    },

    yearlyHighlights: [
      {
        year: 2024,
        events: [
          {
            id: "annadaatha-2024",
            title: "Annadaatha Sukhibhava Service",
            serviceKey: "dailyMeals",
            description:
              "Continuous daily meal service carried out throughout the year for elders.",
            photos: [],
          },
        ],
      },
    ],
  },

  {
    id: "kasipuram",
    slug: "kasipuram",
    name: "Kasipuram",
    status: "adopted",
    adoptedSince: 2021,

    location: { district: "Nellore", state: "Andhra Pradesh" },
    needs: ["education", "medical"],

    photos: [
      "/images/gallery/IMG-20170708-WA0012.jpg",
      "/images/gallery/IMG-20170708-WA0022.jpg",
      "/images/gallery/IMG-20170708-WA0025.jpg",
      "/images/gallery/IMG-20170708-WA0028.jpg",
      "/images/gallery/IMG-20170708-WA0031.jpg",
      "/images/gallery/IMG-20170924-WA0006.jpg",
    ],

    description:
      "Kasipuram is a village where education, healthcare, and compassion work together to uplift the community. Since its adoption in 2021, children have benefited from Daily Tuitions and Bala Vikas programs that blend academic learning with spiritual and moral education. Regular medical camps provide essential healthcare support, while the Annadaatha Sukhibhava programme ensures daily meals for elderly residents. Cultural and spiritual events help children overcome stage fear and grow with confidence rooted in values. These sustained efforts continue to guide Kasipuram toward holistic and value-based development.",

    services: {
      education: {
        active: true,
        items: [
          {
            id: "tuition",
            title: "Daily Tuitions",
            description:
              "Evening tuition support to help students improve academic performance.",
            photos: [],
          },
          {
            id: "balavikas",
            title: "Bala Vikas",
            description:
              "Spiritual and moral education to nurture discipline, devotion, and character.",
            photos: [],
          },
        ],
      },

      health: {
        active: true,
        items: [
          {
            id: "medical-camp",
            title: "Medical Camps",
            description:
              "Free health checkups and medicine distribution for villagers.",
            photos: [],
          },
        ],
      },

      villageDevelopment: { active: false, items: [] },
      skillDevelopment: { active: false, items: [] },

      dailyMeals: {
        active: true,
        programmeName: "Annadaatha Sukhibhava",
        description: "Nutritious meals provided daily for elderly villagers.",
        beneficiariesApprox: 12,
        costPerDay: 3400,
        photos: [],
      },
    },

    yearlyHighlights: [
      {
        year: 2025,
        events: [
          {
            id: "eswaramma-day-2025",
            title: "Eswaramma Day",
            serviceKey: "spiritual",
            description:
              "Children participate in cultural programs, gaining confidence and stage experience.",
            photos: [],
          },
        ],
      },
    ],
  },

  {
    id: "valabu",
    slug: "valabu",
    name: "Valabu",
    status: "upcoming",

    location: { district: "Nellore", state: "Andhra Pradesh" },
    needs: ["water", "education", "medical"],

    photos: [
      "/images/gallery/IMG-20170708-WA0012.jpg",
      "/images/gallery/IMG-20170708-WA0022.jpg",
      "/images/gallery/IMG-20170708-WA0025.jpg",
      "/images/gallery/IMG-20170708-WA0028.jpg",
      "/images/gallery/IMG-20170708-WA0031.jpg",
      "/images/gallery/IMG-20170924-WA0006.jpg",
    ],

    description:
      "Valabu is an identified village ready for adoption, presenting an opportunity to bring meaningful and structured service to the community. The village faces immediate needs such as access to clean drinking water, healthcare facilities, and educational support for children. With focused intervention, Valabu can benefit from value-based education, medical camps, sanitation initiatives, and village development programs. The vision is to serve Valabu with humility, love, and dedication, transforming challenges into opportunities and guiding the village toward sustainable growth and dignity.",

    services: {
      education: { active: false, items: [] },
      health: { active: false, items: [] },
      villageDevelopment: { active: false, items: [] },
      skillDevelopment: { active: false, items: [] },
      dailyMeals: { active: false },
    },

    yearlyHighlights: [],
  },
];

export default villages;

