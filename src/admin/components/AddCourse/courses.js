// courses.js
const courses = [
  // BBA Courses
  {
    _id: 'BBA101',
    courseName: 'Introduction to Business',
    creditHours: 3,
    preRequisite: null,
    department: 'BA', // Business Administration
    CLOs: [
      {
        cloNumber: 1,
        description: 'Understand the basics of business operations',
      },
    ],
  },
  {
    _id: 'BBA102',
    courseName: 'Principles of Management',
    creditHours: 3,
    preRequisite: null,
    department: 'BA',
    CLOs: [
      {
        cloNumber: 1,
        description: 'Develop management and leadership skills',
      },
    ],
  },
  {
    _id: 'BBA201',
    courseName: 'Marketing Management',
    creditHours: 3,
    preRequisite: 'BBA102',
    department: 'BA',
    CLOs: [
      {
        cloNumber: 1,
        description: 'Understand marketing strategies and management',
      },
    ],
  },
  {
    _id: 'BBA202',
    courseName: 'Financial Accounting',
    creditHours: 3,
    preRequisite: null,
    department: 'BA',
    CLOs: [
      {
        cloNumber: 1,
        description: 'Analyze and interpret financial statements',
      },
    ],
  },
  {
    _id: 'BBA301',
    courseName: 'Business Ethics',
    creditHours: 3,
    preRequisite: null,
    department: 'BA',
    CLOs: [
      {
        cloNumber: 1,
        description: 'Apply ethical principles in business decision making',
      },
    ],
  },
  {
    _id: 'BBA302',
    courseName: 'Human Resource Management',
    creditHours: 3,
    preRequisite: 'BBA102',
    department: 'BA',
    CLOs: [
      {
        cloNumber: 1,
        description: 'Understand HR policies and employee management',
      },
    ],
  },

  // BEE Courses
  {
    _id: 'EE101',
    courseName: 'Circuit Analysis',
    creditHours: 3,
    preRequisite: null,
    department: 'EE', // Electrical Engineering
    CLOs: [
      {
        cloNumber: 1,
        description: 'Analyze and solve basic electrical circuits',
      },
    ],
  },
  {
    _id: 'EE102',
    courseName: 'Digital Logic Design',
    creditHours: 3,
    preRequisite: null,
    department: 'EE',
    CLOs: [
      {
        cloNumber: 1,
        description: 'Understand the fundamentals of digital circuits',
      },
    ],
  },
  {
    _id: 'EE201',
    courseName: 'Electromagnetic Fields',
    creditHours: 3,
    preRequisite: 'EE101',
    department: 'EE',
    CLOs: [
      {
        cloNumber: 1,
        description: 'Analyze electromagnetic fields and their applications',
      },
    ],
  },
  {
    _id: 'EE202',
    courseName: 'Signals and Systems',
    creditHours: 3,
    preRequisite: 'EE101',
    department: 'EE',
    CLOs: [
      {
        cloNumber: 1,
        description: 'Understand the principles of signal processing',
      },
    ],
  },
  {
    _id: 'EE301',
    courseName: 'Power Systems Analysis',
    creditHours: 3,
    preRequisite: 'EE201',
    department: 'EE',
    CLOs: [
      {
        cloNumber: 1,
        description: 'Analyze and design electrical power systems',
      },
    ],
  },
  {
    _id: 'EE302',
    courseName: 'Control Systems',
    creditHours: 3,
    preRequisite: 'EE202',
    department: 'EE',
    CLOs: [
      {
        cloNumber: 1,
        description: 'Understand the basics of control theory',
      },
    ],
  },

  // BME Courses
  {
    _id: 'ME101',
    courseName: 'Engineering Mechanics',
    creditHours: 3,
    preRequisite: null,
    department: 'ME', // Mechanical Engineering
    CLOs: [
      {
        cloNumber: 1,
        description: 'Apply the principles of mechanics to solve engineering problems',
      },
    ],
  },
  {
    _id: 'ME102',
    courseName: 'Thermodynamics',
    creditHours: 3,
    preRequisite: null,
    department: 'ME',
    CLOs: [
      {
        cloNumber: 1,
        description: 'Understand the laws of thermodynamics and energy conversion',
      },
    ],
  },
  {
    _id: 'ME201',
    courseName: 'Fluid Mechanics',
    creditHours: 3,
    preRequisite: 'ME101',
    department: 'ME',
    CLOs: [
      {
        cloNumber: 1,
        description: 'Analyze fluid flow and its engineering applications',
      },
    ],
  },
  {
    _id: 'ME202',
    courseName: 'Mechanics of Materials',
    creditHours: 3,
    preRequisite: 'ME101',
    department: 'ME',
    CLOs: [
      {
        cloNumber: 1,
        description: 'Understand the behavior of materials under different forces',
      },
    ],
  },
  {
    _id: 'ME301',
    courseName: 'Heat Transfer',
    creditHours: 3,
    preRequisite: 'ME102',
    department: 'ME',
    CLOs: [
      {
        cloNumber: 1,
        description: 'Analyze heat transfer mechanisms in engineering systems',
      },
    ],
  },
  {
    _id: 'ME302',
    courseName: 'Machine Design',
    creditHours: 3,
    preRequisite: 'ME202',
    department: 'ME',
    CLOs: [
      {
        cloNumber: 1,
        description: 'Design mechanical components based on strength and material properties',
      },
    ],
  },
  {
    _id: 'SE101',
    courseName: 'Software Engineering Fundamentals',
    creditHours: 3,
    preRequisite: null,
    department: 'SE', // Software Engineering
    CLOs: [
      {
        cloNumber: 1,
        description: 'Understand the software development lifecycle and methodologies',
      },
    ],
  },
  {
    _id: 'SE102',
    courseName: 'Requirements Engineering',
    creditHours: 3,
    preRequisite: null,
    department: 'SE',
    CLOs: [
      {
        cloNumber: 1,
        description: 'Gather and analyze software requirements effectively',
      },
    ],
  },
  {
    _id: 'SE201',
    courseName: 'Software Architecture and Design',
    creditHours: 3,
    preRequisite: 'SE101',
    department: 'SE',
    CLOs: [
      {
        cloNumber: 1,
        description: 'Design scalable software architectures',
      },
    ],
  },
  {
    _id: 'SE202',
    courseName: 'Human-Computer Interaction',
    creditHours: 3,
    preRequisite: null,
    department: 'SE',
    CLOs: [
      {
        cloNumber: 1,
        description: 'Design user-friendly interfaces',
      },
    ],
  },
  {
    _id: 'SE301',
    courseName: 'Software Quality Assurance',
    creditHours: 3,
    preRequisite: 'SE201',
    department: 'SE',
    CLOs: [
      {
        cloNumber: 1,
        description: 'Ensure software quality through testing and validation',
      },
    ],
  },
  {
    _id: 'SE302',
    courseName: 'Software Project Management',
    creditHours: 3,
    preRequisite: 'SE101',
    department: 'SE',
    CLOs: [
      {
        cloNumber: 1,
        description: 'Manage software development projects effectively',
      },
    ],
  },
  {
    _id: 'SE401',
    courseName: 'Agile Development',
    creditHours: 3,
    preRequisite: 'SE301',
    department: 'SE',
    CLOs: [
      {
        cloNumber: 1,
        description: 'Implement agile methodologies in software development',
      },
    ],
  },
  {
    _id: 'SE402',
    courseName: 'DevOps and Continuous Integration',
    creditHours: 3,
    preRequisite: 'SE301',
    department: 'SE',
    CLOs: [
      {
        cloNumber: 1,
        description: 'Integrate DevOps practices in the software delivery process',
      },
    ],
  },

  // BCE Courses
  {
    _id: 'CE101',
    courseName: 'Engineering Drawing',
    creditHours: 3,
    preRequisite: null,
    department: 'CE', // Civil Engineering
    CLOs: [
      {
        cloNumber: 1,
        description: 'Interpret and create engineering drawings',
      },
    ],
  },
  {
    _id: 'CE102',
    courseName: 'Building Materials',
    creditHours: 3,
    preRequisite: null,
    department: 'CE',
    CLOs: [
      {
        cloNumber: 1,
        description: 'Understand the properties of various construction materials',
      },
    ],
  },
  {
    _id: 'CE201',
    courseName: 'Structural Analysis',
    creditHours: 3,
    preRequisite: 'CE101',
    department: 'CE',
    CLOs: [
      {
        cloNumber: 1,
        description: 'Analyze forces and deformations in structures',
      },
    ],
  },
  {
    _id: 'CE202',
    courseName: 'Fluid Mechanics for Civil Engineers',
    creditHours: 3,
    preRequisite: 'CE101',
    department: 'CE',
    CLOs: [
      {
        cloNumber: 1,
        description: 'Understand fluid flow in civil engineering applications',
      },
    ],
  },
  {
    _id: 'CE301',
    courseName: 'Geotechnical Engineering',
    creditHours: 3,
    preRequisite: 'CE201',
    department: 'CE',
    CLOs: [
      {
        cloNumber: 1,
        description: 'Analyze soil properties for civil engineering projects',
      },
    ],
  },
  {
    _id: 'CE302',
    courseName: 'Hydrology and Water Resources Engineering',
    creditHours: 3,
    preRequisite: 'CE202',
    department: 'CE',
    CLOs: [
      {
        cloNumber: 1,
        description: 'Design water resource systems based on hydrological principles',
      },
    ],
  },
  {
    _id: 'CE401',
    courseName: 'Transportation Engineering',
    creditHours: 3,
    preRequisite: 'CE301',
    department: 'CE',
    CLOs: [
      {
        cloNumber: 1,
        description: 'Design and manage transportation systems',
      },
    ],
  },
  {
    _id: 'CE402',
    courseName: 'Environmental Engineering',
    creditHours: 3,
    preRequisite: 'CE201',
    department: 'CE',
    CLOs: [
      {
        cloNumber: 1,
        description: 'Understand environmental impact in civil engineering projects',
      },
    ],
  },
  {
    _id: 'CE403',
    courseName: 'Construction Management',
    creditHours: 3,
    preRequisite: 'CE301',
    department: 'CE',
    CLOs: [
      {
        cloNumber: 1,
        description: 'Manage construction projects efficiently',
      },
    ],
  },
  {
    _id: 'CE404',
    courseName: 'Advanced Structural Design',
    creditHours: 3,
    preRequisite: 'CE201',
    department: 'CE',
    CLOs: [
      {
        cloNumber: 1,
        description: 'Design complex structures with advanced techniques',
      },
    ],
  },
  {
    _id: 'CS101',
    courseName: 'Introduction to Programming',
    creditHours: 3,
    preRequisite: null,
    department: 'CS', // Replace with actual department ID
    CLOs: [
      {
        cloNumber: 1,
        description: 'Understand basic programming concepts',
      },
    ],
  },
  {
    _id: 'CS102',
    courseName: 'Object-Oriented Programming',
    creditHours: 3,
    preRequisite: 'CS101',
    department: 'CS', // Replace with actual department ID
    CLOs: [
      {
        cloNumber: 1,
        description: 'Master object-oriented design principles',
      },
    ],
  },
  {
    _id: 'CS201',
    courseName: 'Data Structures',
    creditHours: 4,
    preRequisite: 'CS102',
    department: 'CS',
    CLOs: [
      {
        cloNumber: 1,
        description: 'Understand various data structures and their applications',
      },
    ],
  },
  {
    _id: 'CS202',
    courseName: 'Algorithms',
    creditHours: 4,
    preRequisite: 'CS201',
    department: 'CS',
    CLOs: [
      {
        cloNumber: 1,
        description: 'Master algorithm design and analysis',
      },
    ],
  },
  {
    _id: 'CS301',
    courseName: 'Operating Systems',
    creditHours: 4,
    preRequisite: 'CS202',
    department: 'CS',
    CLOs: [
      {
        cloNumber: 1,
        description: 'Understand the fundamentals of operating systems',
      },
    ],
  },
  {
    _id: 'CS302',
    courseName: 'Database Systems',
    creditHours: 4,
    preRequisite: 'CS202',
    department: 'CS',
    CLOs: [
      {
        cloNumber: 1,
        description: 'Learn about database design and management',
      },
    ],
  },
  {
    _id: 'CS303',
    courseName: 'Software Engineering',
    creditHours: 4,
    preRequisite: 'CS302',
    department: 'CS',
    CLOs: [
      {
        cloNumber: 1,
        description: 'Understand the software development lifecycle',
      },
    ],
  },
  {
    _id: 'CS304',
    courseName: 'Computer Networks',
    creditHours: 4,
    preRequisite: 'CS302',
    department: 'CS',
    CLOs: [
      {
        cloNumber: 1,
        description: 'Learn about computer networking concepts',
      },
    ],
  },
  {
    _id: 'CS401',
    courseName: 'Web Development',
    creditHours: 3,
    preRequisite: 'CS303',
    department: 'CS',
    CLOs: [
      {
        cloNumber: 1,
        description: 'Build and maintain web applications',
      },
    ],
  },
  {
    _id: 'CS402',
    courseName: 'Mobile App Development',
    creditHours: 3,
    preRequisite: 'CS401',
    department: 'CS',
    CLOs: [
      {
        cloNumber: 1,
        description: 'Develop mobile applications for Android and iOS',
      },
    ],
  },
  {
    _id: 'CS403',
    courseName: 'Machine Learning',
    creditHours: 4,
    preRequisite: 'CS202',
    department: 'CS',
    CLOs: [
      {
        cloNumber: 1,
        description: 'Understand machine learning algorithms and their applications',
      },
    ],
  },
  {
    _id: 'CS404',
    courseName: 'Artificial Intelligence',
    creditHours: 4,
    preRequisite: 'CS403',
    department: 'CS',
    CLOs: [
      {
        cloNumber: 1,
        description: 'Explore concepts in artificial intelligence and neural networks',
      },
    ],
  },
  {
    _id: 'CS405',
    courseName: 'Cybersecurity',
    creditHours: 4,
    preRequisite: 'CS304',
    department: 'CS',
    CLOs: [
      {
        cloNumber: 1,
        description: 'Learn about cybersecurity principles and practices',
      },
    ],
  },
  {
    _id: 'CS406',
    courseName: 'Cloud Computing',
    creditHours: 4,
    preRequisite: 'CS304',
    department: 'CS',
    CLOs: [
      {
        cloNumber: 1,
        description: 'Understand cloud computing technologies and services',
      },
    ],
  },
  {
    _id: 'CS407',
    courseName: 'Human-Computer Interaction',
    creditHours: 3,
    preRequisite: 'CS401',
    department: 'CS',
    CLOs: [
      {
        cloNumber: 1,
        description: 'Study the design and evaluation of user interfaces',
      },
    ],
  },
  {
    _id: 'CS408',
    courseName: 'Big Data',
    creditHours: 4,
    preRequisite: 'CS303',
    department: 'CS',
    CLOs: [
      {
        cloNumber: 1,
        description: 'Learn about big data technologies and analytics',
      },
    ],
  },
  {
    _id: 'CS409',
    courseName: 'Computer Graphics',
    creditHours: 3,
    preRequisite: 'CS202',
    department: 'CS',
    CLOs: [
      {
        cloNumber: 1,
        description: 'Understand computer graphics principles and techniques',
      },
    ],
  },
  {
    _id: 'CS410',
    courseName: 'Game Development',
    creditHours: 4,
    preRequisite: 'CS409',
    department: 'CS',
    CLOs: [
      {
        cloNumber: 1,
        description: 'Develop games and interactive media',
      },
    ],
  },
  {
    _id: 'CS411',
    courseName: 'Embedded Systems',
    creditHours: 4,
    preRequisite: 'CS304',
    department: 'CS',
    CLOs: [
      {
        cloNumber: 1,
        description: 'Learn about embedded systems and their applications',
      },
    ],
  },
  {
    _id: 'CS412',
    courseName: 'Digital Signal Processing',
    creditHours: 4,
    preRequisite: 'CS303',
    department: 'CS',
    CLOs: [
      {
        cloNumber: 1,
        description: 'Study digital signal processing techniques',
      },
    ],
  },
  {
    _id: 'CS413',
    courseName: 'Network Security',
    creditHours: 4,
    preRequisite: 'CS405',
    department: 'CS',
    CLOs: [
      {
        cloNumber: 1,
        description: 'Learn about network security measures and practices',
      },
    ],
  },
  {
    _id: 'CS414',
    courseName: 'Advanced Databases',
    creditHours: 4,
    preRequisite: 'CS302',
    department: 'CS',
    CLOs: [
      {
        cloNumber: 1,
        description: 'Understand advanced database concepts and techniques',
      },
    ],
  },
  {
    _id: 'CS415',
    courseName: 'Software Project Management',
    creditHours: 3,
    preRequisite: 'CS303',
    department: 'CS',
    CLOs: [
      {
        cloNumber: 1,
        description: 'Learn about managing software projects and teams',
      },
    ],
  },
  {
    _id: 'CS416',
    courseName: 'Theoretical Computer Science',
    creditHours: 3,
    preRequisite: 'CS202',
    department: 'CS',
    CLOs: [
      {
        cloNumber: 1,
        description: 'Explore theoretical foundations of computer science',
      },
    ],
  },
  {
    _id: 'CS417',
    courseName: 'Artificial Neural Networks',
    creditHours: 4,
    preRequisite: 'CS404',
    department: 'CS',
    CLOs: [
      {
        cloNumber: 1,
        description: 'Study neural network models and their applications',
      },
    ],
  },
  {
    _id: 'CS418',
    courseName: 'Advanced Web Development',
    creditHours: 4,
    preRequisite: 'CS401',
    department: 'CS',
    CLOs: [
      {
        cloNumber: 1,
        description: 'Build complex web applications with advanced technologies',
      },
    ],
  },
];

export default courses;
const ids = courses.map(course => course._id);

console.log({ ids });