const trainerData = {
  branding: {
    primaryColor: "#ff4c29",
    secondaryColor: "#8b5cf6",
  },

  name: "Charbel The Warrior",
  role: "Elite Fitness Coach",
  brandName: "Charbel Maalouf",

  phone: "96171742862",
  email: "coach@fitcoach.com",
  location: "Zahle, Lebanon",

  whatsappMessage: "Hi I want to start training",

  socials: {
    facebook: "https://www.facebook.com/charbel.maalouf.7",
    instagram: "https://www.instagram.com/charbelthewarrior/",
    linkedin: "https://linkedin.com/",
  },

  images: {
    profile:
      "https://scontent.fbey15-1.fna.fbcdn.net/v/t39.30808-6/654692323_26341740742124578_3321615207846857178_n.jpg?stp=cp6_dst-jpg_tt6&cstp=mx2048x2048&ctp=s2048x2048&_nc_cat=100&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=sSdZAcsCmrEQ7kNvwGBuLUz&_nc_oc=AdoHy31vyeAqwvfWWwrLwLmpxSY-VfQY7-b2-pABd2Lk9GcLXheoNV33UMhiHBa2hEI&_nc_zt=23&_nc_ht=scontent.fbey15-1.fna&_nc_gid=si6aXLeZSI-zEKhppX-vew&_nc_ss=7b2a8&oh=00_Af8K2g_jbTO227d0JfifQdPHsT6ysEgMy2dwPiFUt8_B-A&oe=6A4893CC",

    heroBackground:
      "https://scontent.fbey15-1.fna.fbcdn.net/v/t51.82787-15/727268094_18592601683040411_7655118983414139417_n.jpg?stp=dst-jpegr_tt6&cstp=mx2268x3024&ctp=s2048x2048&_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_ohc=2mvw2fbZTiYQ7kNvwGfC52Y&_nc_oc=AdrYE-Z2fhPelqWPbva-eZyfXecLkm5W8darkNV86d1bMLyJKDlXmjnfiL6FKAk2YNk&_nc_zt=23&se=-1&_nc_ht=scontent.fbey15-1.fna&_nc_gid=QKNFqlHWNpFfiKWM-yjw3g&_nc_ss=7b2a8&oh=00_Af_OEuPEUNU7tzZ_lcIUkC3wg7AXNLNf16st_LUkxNF5nA&oe=6A48AD6A",

    about:
      "https://scontent.fbey15-1.fna.fbcdn.net/v/t51.82787-15/670966619_18574203220040411_1809361142716164439_n.jpg?stp=dst-jpegr_tt6&cstp=mx1440x1920&ctp=s1440x1920&_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_ohc=hfJqo9nEs_8Q7kNvwG_TqvU&_nc_oc=AdqV9uuJ4WLf4GEIkDTGeAnWB64qIYPnQXW_fbXOH3p4CujRB_DQLcsid-AZzB6Ksk0&_nc_zt=23&se=-1&_nc_ht=scontent.fbey15-1.fna&_nc_gid=aDmgKKXphxrASdoWgYG00A&_nc_ss=7b2a8&oh=00_Af8AaxV82N9ANnXpbD7mDAbiGNxmwsHQebggfpo0x1TyxA&oe=6A48B381",
  },

  hero: {
    tag: "PERSONAL FITNESS COACH",
    titleStart: "Transform Your",
    titleHighlight: "Body",
    titleEnd: "Into Strength",
    subtitle:
      "Personalized coaching, nutrition guidance, and elite-level fitness programs designed to unlock your full potential.",
    primaryButton: "Start Your Transformation",
    secondaryButton: "View Results",
    stats: [
      { number: "500+", label: "Clients Transformed" },
      { number: "8+", label: "Years Experience" },
      { number: "24/7", label: "Online Support" },
    ],
  },

  about: {
    tag: "ABOUT THE COACH",
    headingStart: "Build The Strongest",
    headingHighlight: "Version Of Yourself",
    paragraphs: [
      "I'm Charbel Maalouf, a certified fitness coach with over 8 years of experience helping people transform their physique, confidence, and mindset.",
      "My coaching philosophy combines science-based training, nutrition strategies, and elite-level accountability to help clients achieve long-term sustainable results.",
    ],
    stats: [
      { number: "500+", label: "Clients" },
      { number: "8+", label: "Years" },
      { number: "15+", label: "Programs" },
    ],
    buttonText: "Start Your Journey",
  },

  programsSection: {
    tag: "TRAINING PROGRAMS",
    headingStart: "Programs Built For",
    headingHighlight: "Real Results",
    description:
      "Personalized coaching programs designed to help you build strength, confidence, and a powerful physique.",
  },

  programs: [
    {
      title: "Weight Loss",
      desc: "Burn fat, improve endurance, and transform your physique with customized fat-loss programs.",
      icon: "🔥",
    },
    {
      title: "Muscle Gain",
      desc: "Build lean muscle mass and increase strength using elite-level hypertrophy training methods.",
      icon: "💪",
    },
    {
      title: "Online Coaching",
      desc: "Train from anywhere with personalized coaching, nutrition guidance, and weekly check-ins.",
      icon: "⚡",
    },
  ],

  pricingSection: {
    tag: "PRICING PLANS",
    headingStart: "Choose Your",
    headingHighlight: "Transformation",
    description:
      "Flexible coaching plans designed for every level, from beginners to elite athletes.",
    buttonText: "Get Started",
    monthlyText: "/month",
    popularBadge: "MOST POPULAR",
  },

  plans: [
    {
      name: "Starter",
      price: "$49",
      description: "Perfect for beginners starting their fitness journey.",
      features: [
        "Custom Workout Plan",
        "Basic Nutrition Guide",
        "Weekly Check-ins",
      ],
      popular: false,
    },
    {
      name: "Pro",
      price: "$99",
      description: "The most popular plan for serious transformations.",
      features: [
        "Workout + Nutrition Plan",
        "24/7 Support",
        "Progress Tracking",
        "Weekly Video Calls",
      ],
      popular: true,
    },
    {
      name: "Elite",
      price: "$149",
      description: "Premium one-on-one coaching for maximum results.",
      features: [
        "Everything in Pro",
        "Daily Coaching",
        "Priority Support",
        "Personalized Adjustments",
      ],
      popular: false,
    },
  ],

  testimonialsSection: {
    tag: "CLIENT REVIEWS",
    headingStart: "What Clients",
    headingHighlight: "Say About Us",
    description:
      "Real stories from clients who transformed their bodies, mindset, and confidence.",
  },

  testimonials: [
    {
      name: "John M.",
      role: "Fitness Client",
      text: "This program completely changed my life. I lost 12kg in 3 months and gained confidence I never had before.",
    },
    {
      name: "Sarah L.",
      role: "Fitness Client",
      text: "Amazing coaching and support. The personalized plan helped me become stronger physically and mentally.",
    },
    {
      name: "Michael R.",
      role: "Fitness Client",
      text: "The best fitness coach I've worked with. Professional, motivating, and the results speak for themselves.",
    },
  ],

  transformationsSection: {
    tag: "CLIENT RESULTS",
    headingStart: "Real People.",
    headingHighlight: "Real Transformations",
    description:
      "Every transformation is built through discipline, consistency, and personalized coaching strategies.",
  },

  transformations: [
    {
      before:
        "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=800",
      after:
        "https://images.unsplash.com/photo-1554284126-aa88f22d8b74?q=80&w=800",
      result: "-12KG",
    },
    {
      before:
        "https://images.unsplash.com/photo-1541534401786-2077eed87a74?q=80&w=800",
      after:
        "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=800",
      result: "+8KG Muscle",
    },
    {
      before:
        "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=800",
      after:
        "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=800",
      result: "90 Days",
    },
  ],

  contact: {
    tag: "CONTACT US",
    headingStart: "Ready To",
    headingHighlight: "Transform?",
    description:
      "Start your fitness journey today with personalized coaching, expert guidance, and elite-level support.",
    buttonText: "Send Message",
  },

  footer: {
    text:
      "Premium fitness coaching for real transformations, strength, and confidence.",
    designerText: "Designed by Chris Sabbak",
  },
}

export default trainerData