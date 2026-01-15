const servicesCatalog = {
  education: {
    id: "education",
    villageServiceKey: "education",
    isSpecialProgram: false,
    title: "Educational Services",
    heroQuote:
      "Education is the manifestation of the perfection already in man.",
    intro:
      "We believe education should nurture both intellect and character. Our educational services focus on academic excellence, value-based learning, and creating a supportive environment where children can grow with confidence, discipline, and moral strength.",

    services: [
      {
        title: "Daily Tuitions",
        description:
          "Structured daily evening tuition classes are conducted to support school-going children with academic learning. These sessions focus on concept clarity, doubt resolution, regular practice, and personalized attention, helping students strengthen their fundamentals and improve academic performance with confidence.",
        icon: "/images/icons/tutions.png",
      },
      {
        title: "Bala Vikas Classes",
        description:
          "Bala Vikas classes provide value-based education rooted in moral, spiritual, and human values. Through stories, bhajans, group activities, and discussions, children learn discipline, devotion, respect, and right conduct, shaping them into responsible and compassionate individuals.",
        icon: "/images/icons/balvikas.png",
      },
      {
        title: "Appointing Teachers",
        description:
          "Dedicated teachers are appointed to ensure consistent academic and value-based education in villages where resources are limited. This initiative helps bridge educational gaps and provides children with qualified guidance and mentorship.",
        icon: "/images/icons/teachers.png",
      },
      {
        title: "School Repairs & Development",
        description:
          "School infrastructure is improved through repairs, renovation, and development activities. Creating clean, safe, and functional classrooms helps foster a positive learning atmosphere and encourages regular student attendance.",
        icon: "/images/icons/schools.png",
      },
      {
        title: "Stationery, Bags & Clothes",
        description:
          "Essential educational materials such as school bags, notebooks, uniforms, and stationery are distributed to students from economically weaker families, ensuring that financial constraints do not hinder a child’s education.",
        icon: "/images/icons/stationary.png",
      },
      {
        title: "Sports & Physical Activities",
        description:
          "Sports and physical activities are encouraged to promote physical fitness, teamwork, discipline, and mental well-being. These activities help children build confidence, reduce stress, and develop a healthy lifestyle.",
        icon: "/images/icons/sports.png",
      },
    ],
  },

  health: {
    id: "health",
    villageServiceKey: "health",
    isSpecialProgram: false,
    title: "Health Service Activities",
    heroQuote: "The first wealth is health.",
    intro:
      "Good health is essential for a dignified and productive life. Our health services focus on preventive care, early diagnosis, and accessible treatment, ensuring that healthcare reaches even the most remote and underserved communities.",

    services: [
      {
        title: "Medical Camps",
        description:
          "Regular medical camps are organized in villages to provide free consultations, health checkups, and basic diagnostic services. These camps help identify health issues early and guide patients toward timely treatment.",
        icon: "/images/icons/medical-camps.png",
      },
      {
        title: "Free Medicines Distribution",
        description:
          "Essential medicines are distributed free of cost to patients identified during medical camps, ensuring continued treatment and relief for those who cannot afford regular medication.",
        icon: "/images/icons/medicines.png",
      },
      {
        title: "Support for Surgeries",
        description:
          "Financial and logistical support is provided for critical surgeries in deserving cases, helping individuals access life-saving medical procedures without financial burden.",
        icon: "/images/icons/surgeries.png",
      },
      {
        title: "Veterinary Medical Camps",
        description:
          "Veterinary medical camps with free medicines are conducted to care for cattle and livestock, which are vital to rural livelihoods. Healthy animals directly contribute to the economic stability of village families.",
        icon: "/images/icons/veterinary.png",
      },
    ],
  },

  "village-development": {
    id: "village-development",
    villageServiceKey: "villageDevelopment",
    isSpecialProgram: false,
    title: "Village Development Activities",
    heroQuote: "The village is the heart of India.",
    intro:
      "Sustainable village development is essential for long-term progress. Our initiatives focus on clean water, sanitation, and spiritual infrastructure, creating healthier and self-reliant rural communities.",

    services: [
      {
        title: "RO Water Plants",
        description:
          "Installation and maintenance of RO water plants provide free access to clean and safe drinking water, helping prevent water-borne diseases and improving overall community health.",
        icon: "/images/icons/ro-water.png",
      },
      {
        title: "Sanitation & Cleanliness Support",
        description:
          "Sanitation initiatives promote cleanliness, hygiene awareness, and healthier living conditions through community participation and infrastructure support.",
        icon: "/images/icons/sanitation.png",
      },
      {
        title: "Temple Development & Renovation",
        description:
          "Temple renovation and development activities help preserve spiritual heritage while creating spaces that foster unity, devotion, and cultural harmony within villages.",
        icon: "/images/icons/temple.png",
      },
    ],
  },

  "skill-development": {
    id: "skill-development",
    villageServiceKey: "skillDevelopment",
    isSpecialProgram: false,
    title: "Skill Development",
    heroQuote: "Self-reliance is the foundation of dignity.",
    intro:
      "Skill development empowers individuals, especially women, by providing them with practical abilities that lead to self-reliance, confidence, and sustainable livelihoods.",

    services: [
      {
        title: "Tailoring Training for Women",
        description:
          "Tailoring training programs equip women with practical stitching and garment-making skills, enabling them to earn independently and support their families.",
        icon: "/images/icons/Tailoring.png",
      },
      {
        title: "Free Sewing Machine Distribution",
        description:
          "Sewing machines are distributed to trained women, helping them start home-based income activities and become economically self-sufficient.",
        icon: "/images/icons/Sewing-Machine.png",
      },
    ],
  },

  annadaatha: {
    id: "annadaatha",
    villageServiceKey: "dailyMeals",
    isSpecialProgram: true,
    icon: "public/images/annadaatha-sukhibhava.png",
    title: "Annadaatha Sukhibhava",
    heroQuote: "There is no greater service than feeding the hungry.",
    intro:
      "Annadaatha Sukhibhava is a sacred daily meal service dedicated to elderly and differently-abled individuals. This initiative ensures that no one goes hungry and that every beneficiary is served with dignity, love, and care.",

    services: [
      {
        title: "Daily Afternoon Meals for Elders",
        description:
          "Nutritious meals are prepared and served daily to elderly and physically challenged individuals, ensuring regular nourishment and emotional reassurance.",
        icon: "/images/icons/meals.png",
      },
      {
        title: "Want to contribute?",
        description:
          "You can sponsor meals on special occasions or contribute to the daily meal fund. Your support helps us reach more individuals in need.",
        url: "/contribute",
        icon: "/images/icons/contribute.png",
      }
    ],
  },
};

export default servicesCatalog;
