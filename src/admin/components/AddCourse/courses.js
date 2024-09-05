// courses.js
const courses = [
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
        description:
          'Understand various data structures and their applications',
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
        description:
          'Understand machine learning algorithms and their applications',
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
        description:
          'Explore concepts in artificial intelligence and neural networks',
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
        description:
          'Build complex web applications with advanced technologies',
      },
    ],
  },
];

export default courses;
