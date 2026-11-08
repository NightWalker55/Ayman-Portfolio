// All site content lives here. Edit this file and the whole site updates.
// Leave a link as "" and the button simply does not appear.

export const profile = {
  name: "Ayman Iktidar",
  role: "Machine learning researcher and lecturer",
  location: "Chattogram, Bangladesh",
  statement:
    "I build machine learning models that keep working when data is incomplete, private, or in a language few tools support.",
  intro:
    "I teach computer science at Chittagong Independent University and research healthcare AI, multimodal learning and Bangla language processing. I am looking for research-focused MSc and PhD positions starting in 2027 in Canada, the USA and Europe.",
  email: "iktidar55@gmail.com",
  cv: "/CV/CV.pdf",
  links: {
    github: "https://github.com/NightWalker55",
    linkedin: "https://www.linkedin.com/in/ayman-iktidar-11b30b175/",
    codeforces: "https://codeforces.com/profile/Ikti55",
    scholar: "", // paste your Google Scholar URL here
  },
};

export const about = {
  paragraphs: [
    "I am a lecturer in the Department of Computer Science and Engineering at Chittagong Independent University. I graduated from CUET in 2024 and started teaching that September.",
    "Most of my research asks how far a model can be shrunk, or how little data it can see, before it stops being useful. The answers matter in hospitals and clinics, and for languages like Bangla that get less attention from mainstream tools.",
  ],
  interests: [
    {
      title: "Healthcare AI",
      text: "Skin lesion classification, ICU mortality prediction, privacy-preserving training across hospitals.",
    },
    {
      title: "Language and vision",
      text: "Bangla NLP, multimodal learning, harmful content detection in code-mixed text and memes.",
    },
    {
      title: "Efficient and explainable models",
      text: "Knowledge distillation, robustness to missing inputs, attribution analysis with Grad-CAM.",
    },
  ],
  alsoInterested: "Image processing, bio-informatics, cybersecurity.",
};

// Order here is the order on the page. Set `link` to a DOI or paper URL.
export const publications = [
  {
    id: "punctuation",
    year: 2024,
    type: "Conference",
    role: "First author",
    award: "Second Best Paper Award",
    featured: true,
    shortTitle: "Bangla punctuation prediction",
    title:
      "Towards Developing an Automatic Punctuation Prediction Model for Bangla Language: A Pre-trained Mono-lingual Transformer-based Approach",
    authors: ["Ayman Iktidar", "Hasan Murad"],
    venue: "ICEEICT 2024, IEEE, pp. 398 to 403",
    summary:
      "A Bangla-only transformer (BanglaBERT-large with a Bi-LSTM layer) restores punctuation better than multilingual models. We also built a five-class dataset by adding an Exclamation class.",
    results: [
      "F1 of 0.89 on four classes, up from the previous best of 0.87",
      "F1 of 0.74 on the new five-class dataset, up from 0.50",
    ],
    link: "https://ieeexplore.ieee.org/abstract/document/10534556",
  },
  {
    id: "skin-lesion",
    year: 2026,
    type: "Preprint",
    role: "Co-author",
    shortTitle: "Skin lesion classification with missing metadata",
    title:
      "Masked Privileged-Information Distillation for Multimodal Skin Lesion Classification Under Missing Clinical Metadata",
    authors: [
      "Anirban Barua",
      "Md Mahir Abrar Khan",
      "Ayman Iktidar",
      "Md. Sajjatul Islam",
    ],
    venue: "arXiv:2610.03991",
    summary:
      "A teacher that sees full clinical metadata trains a student 9.2 times smaller that only sees random subsets. One compact model then works whether a clinic records every patient detail or none.",
    results: [
      "Loses 7.8 balanced-accuracy points from full to no metadata, against 36.6 without masking",
      "6.2 times faster than the teacher on a CPU",
    ],
    link: "https://arxiv.org/abs/2610.03991",
  },
  {
    id: "federated",
    year: 2026,
    type: "Conference",
    role: "Co-author",
    shortTitle: "Federated distillation for ICU mortality",
    title:
      "Federated Knowledge Distillation for In-Hospital Mortality Prediction in ICU Patients with Acute Kidney Injury",
    authors: [
      "Turza Chowdhury",
      "Habibur Rahaman",
      "Md. Sajjatul Islam",
      "Ayman Iktidar",
    ],
    venue: "ICCVBIC 2026, IEEE, pp. 1306 to 1311",
    summary:
      "Hospitals train a shared mortality model without sharing patient records, then compress it into a student 6.3 times smaller. The student catches many more deaths while overall AUROC stays about the same.",
    results: [
      "AUROC 0.830 against 0.834 for the full teacher, averaged over 20 seeds",
      "Mortality sensitivity from 0.457 to 0.748 in a single run",
      "AUROC 0.829 on a hospital cohort never seen in training",
    ],
    link: "", // paste the IEEE Xplore or DOI link
  },
  {
    id: "battery",
    year: 2026,
    type: "Journal",
    role: "Co-author",
    shortTitle: "Community battery in energy markets",
    title:
      "Techno-Economic Assessment of Community Battery Participation in Energy and FCAS Markets with Customer Cost Reduction",
    authors: ["Umme Mumtahina", "Ayman Iktidar", "Sanath Alahakoon"],
    venue: "Energies, 19(2):445",
    summary:
      "A mixed-integer linear program schedules a community battery across energy trading, frequency control services and local demand for a full year. Combining services beat any single service. I implemented the model and contributed to its methodology and validation.",
    results: [
      "Total revenue more than 85% higher than energy trading alone",
      "AUD 822,969 a year in savings for 800 households",
      "A full-year schedule solves in about 5 minutes",
    ],
    link: "https://www.mdpi.com/1996-1073/19/2/445",
  },
  {
    id: "memes",
    year: 2024,
    type: "Conference",
    role: "Co-author",
    shortTitle: "Bangla cyberbullying meme detection",
    title:
      "A Multimodal Approach to Bangla Cyberbullying Meme Detection in Social Media",
    authors: ["Aishwaria Roy", "Hasan Murad", "Ayman Iktidar"],
    venue: "ICCIT 2024, IEEE, pp. 1886 to 1891",
    summary:
      "A Vision Transformer reads the image and a pre-trained language model reads the caption. Together they spot bullying memes in code-mixed Bangla and English better than either alone.",
    results: [
      "F1 of 0.76 against 0.71 for the best image-only model",
      "Previous best on this dataset was 0.74",
    ],
    link: "https://ieeexplore.ieee.org/abstract/document/11021800",
  },
];

export const education = [
  {
    title: "B.Sc. in Computer Science and Engineering",
    org: "Chittagong University of Engineering and Technology",
    period: "Feb 2019 to Jun 2024",
    detail:
      "CGPA 3.52 / 4.00. Coursework includes Data Structures, Algorithms, Operating Systems, Databases, Artificial Intelligence, Machine Learning, Software Engineering and Information Security.",
  },
];

export const experience = [
  {
    title: "Lecturer, Computer Science and Engineering",
    org: "Chittagong Independent University",
    period: "Jan 2025 to present",
    detail:
      "Courses: Structured Programming, Algorithm Design and Analysis, Software Engineering, Artificial Intelligence, Machine Learning, Compiler Design.",
  },
  {
    title: "Adjunct lecturer, Computer Science and Engineering",
    org: "International Islamic University Chittagong",
    period: "Sep 2024 to Dec 2024",
    detail: "Courses: Algorithm Design and Analysis, Theory of Computation.",
  },
  {
    title: "Industrial attachment intern",
    org: "New Technology Systems Ltd",
    period: "Sep 2023 to Oct 2023",
    detail:
      "Practical exposure to software development practices and professional engineering workflows.",
  },
  {
    title: "Competitive programming trainer",
    org: "CUET Computer Club",
    period: "Jul 2023 to Mar 2024",
    detail:
      "Mentored students in problem solving, algorithms, data structures and competitive programming.",
  },
];

export const projects = [
  {
    name: "This portfolio",
    text: "The site you are reading. Next.js, Tailwind CSS and Framer Motion, with all content kept in one data file.",
    tech: ["Next.js", "Tailwind CSS", "Framer Motion"],
    code: "https://github.com/NightWalker55/Portfolio",
    live: "https://ikti-portfolio.vercel.app",
  },
  {
    name: "Translaton",
    text: "Real-time translation app. It listens to speech, transcribes it and translates it into the language you choose, using the Google Cloud Speech API.",
    tech: ["Next.js", "Tailwind CSS", "Node.js", "Express.js"],
    code: "",
    live: "",
  },
  {
    name: "Project Management System",
    text: "Full-stack platform to create, edit and delete projects. GraphQL keeps data fetching lean, and the interface is responsive on phones.",
    tech: ["React", "Bootstrap", "Node.js", "MongoDB", "GraphQL"],
    code: "",
    live: "",
  },
  {
    name: "Golpo",
    text: "Real-time chat with instant messaging, emojis and custom avatars, built on Socket.IO.",
    tech: ["React", "Node.js", "Express.js", "MongoDB", "Socket.IO"],
    code: "",
    live: "",
  },
  {
    name: "CS Monitor",
    text: "A blog website for computer science students.",
    tech: [],
    code: "",
    live: "",
  },
  {
    name: "Todo list",
    text: "An application to manage to-do lists.",
    tech: [],
    code: "",
    live: "",
  },
];

export const skills = [
  {
    title: "Research methods",
    items: [
      "Knowledge distillation",
      "Federated learning",
      "Multimodal fusion",
      "Transformer fine-tuning",
      "Mixed-integer linear programming",
      "Grad-CAM",
    ],
  },
  { title: "Languages", items: ["Python", "C++", "C", "JavaScript", "Go"] },
  { title: "ML frameworks", items: ["PyTorch", "TensorFlow"] },
  {
    title: "Web",
    items: [
      "React",
      "Next.js",
      "Node.js",
      "Express.js",
      "NestJS",
      "MongoDB",
      "GraphQL",
      "Tailwind CSS",
    ],
  },
  { title: "Tools", items: ["Git", "LaTeX"] },
];

export const recognition = [
  {
    title: "Second Best Paper Award",
    text: "ICEEICT 2024, for the Bangla punctuation prediction paper.",
  },
  {
    title: "Judge, World Robot Olympiad regional round (2025)",
    text: "Evaluated student robotics projects and gave feedback to participants.",
  },
  {
    title: "Competitive programming",
    text: "600+ problems solved and 50+ contests. Codeforces peak rating 1375 (Ikti55).",
  },
];
