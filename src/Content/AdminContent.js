const TableHeadings = [
  'Sr.No',
  'Name',
  'Registration Number',
  'Semester',
  'Program',
  'Actions',
];

const AddStudentFormContent = [
  {
    type: 'text',
    name: 'stdRegNumber',
    placeholder: 'Registration Number',
    value: '',
    onChange: 'handleChange',
  },
  {
    type: 'text',
    name: 'firstName',
    placeholder: 'First Name',
    value: '',
    onChange: 'handleChange',
  },
  {
    type: 'text',
    name: 'lastName',
    placeholder: 'Last Name',
    value: '',
    onChange: 'handleChange',
  },
  {
    type: 'text',
    name: 'fatherName',
    placeholder: "Father's Name",
    value: '',
    onChange: 'handleChange',
  },
  {
    type: 'text',
    name: 'fatherOccupation',
    placeholder: "Father's Occupation",
    value: '',
    onChange: 'handleChange',
  },
  {
    type: 'password',
    name: 'password',
    placeholder: 'Password',
    value: '',
    onChange: 'handleChange',
  },
  {
    type: 'date',
    name: 'dateOfBirth',
    placeholder: 'Date of Birth',
    value: '',
    onChange: 'handleChange',
  },
  {
    type: 'select',
    name: 'section',
    placeholder: 'Select Section',
    value: '',
    onChange: 'handleChange',
    options: [
      { value: '', label: 'Select Section' },
      { value: '1', label: 'Section 1' },
      { value: '2', label: 'Section 2' },
    ],
  },
  {
    type: 'email',
    name: 'email',
    placeholder: 'Email',
    value: '',
    onChange: 'handleChange',
  },
  {
    type: 'text',
    name: 'contactNumber',
    placeholder: 'Contact Number',
    value: '',
    onChange: 'handleChange',
  },
  {
    type: 'select',
    name: 'gender',
    placeholder: 'Select Gender',
    value: '',
    onChange: 'handleChange',
    options: [
      { value: '', label: 'Select Gender' },
      { value: 'M', label: 'Male' },
      { value: 'F', label: 'Female' },
    ],
  },
  {
    type: 'text',
    name: 'cnic',
    placeholder: 'CNIC',
    value: '',
    onChange: 'handleChange',
  },
  {
    type: 'number',
    name: 'semester',
    placeholder: 'Semester',
    value: '',
    onChange: 'handleChange',
    min: 1,
    max: 8,
  },
  {
    type: 'text',
    name: 'department',
    placeholder: 'Department ID',
    value: '',
    onChange: 'handleChange',
  },
  {
    type: 'text',
    name: 'program',
    placeholder: 'Program Code',
    value: '',
    onChange: 'handleChange',
  },
  // Address fields
  {
    type: 'text',
    name: 'houseNo',
    placeholder: 'House Number',
    value: '',
    onChange: 'handleAddressChange',
  },
  {
    type: 'text',
    name: 'street',
    placeholder: 'Street',
    value: '',
    onChange: 'handleAddressChange',
  },
  {
    type: 'text',
    name: 'town',
    placeholder: 'Town',
    value: '',
    onChange: 'handleAddressChange',
  },
  {
    type: 'text',
    name: 'city',
    placeholder: 'City',
    value: '',
    onChange: 'handleAddressChange',
  },
];

 const DefaultPrograms = [
   {
     _id: 'BCS',
     programName: 'Bachelor of Computer Science',
     PEOs: ['Provide strong CS foundation', 'Promote critical thinking'],
     PLOs: [
       {
         ploId: 1,
         ploLevel: 'Basic',
         ploDomain: 'Cognitive',
         ploDescription: 'Understanding core programming concepts',
         ploHeading: 'Introductory',
       },
       {
         ploId: 2,
         ploLevel: 'Intermediate',
         ploDomain: 'Cognitive',
         ploDescription: 'Building software development skills',
         ploHeading: 'Intermediate Software Skills',
       },
     ],
   },
   {
     _id: 'BBA',
     programName: 'Bachelor of Business Administration',
     PEOs: ['Develop business leaders', 'Enhance decision-making skills'],
     PLOs: [
       {
         ploId: 1,
         ploLevel: 'Basic',
         ploDomain: 'Cognitive',
         ploDescription: 'Understanding business fundamentals',
         ploHeading: 'Business Foundations',
       },
       {
         ploId: 2,
         ploLevel: 'Intermediate',
         ploDomain: 'Cognitive',
         ploDescription: 'Mastering management techniques',
         ploHeading: 'Managerial Skills',
       },
     ],
   },
   {
     _id: 'BSE',
     programName: 'Bachelor of Software Engineering',
     PEOs: ['Develop software professionals', 'Encourage collaboration'],
     PLOs: [
       {
         ploId: 1,
         ploLevel: 'Basic',
         ploDomain: 'Cognitive',
         ploDescription: 'Understanding software development life cycle',
         ploHeading: 'Software Life Cycle',
       },
       {
         ploId: 2,
         ploLevel: 'Advanced',
         ploDomain: 'Cognitive',
         ploDescription: 'Building enterprise-level applications',
         ploHeading: 'Enterprise Development',
       },
     ],
   },
   {
     _id: 'BME',
     programName: 'Bachelor of Mechanical Engineering',
     PEOs: [
       'Develop mechanical engineers',
       'Promote research in mechanical systems',
     ],
     PLOs: [
       {
         ploId: 1,
         ploLevel: 'Basic',
         ploDomain: 'Cognitive',
         ploDescription: 'Understanding mechanical systems',
         ploHeading: 'Mechanical Foundations',
       },
     ],
   },
   {
     _id: 'BEE',
     programName: 'Bachelor of Electrical Engineering',
     PEOs: [
       'Produce innovative electrical engineers',
       'Advance electrical systems research',
     ],
     PLOs: [
       {
         ploId: 1,
         ploLevel: 'Basic',
         ploDomain: 'Cognitive',
         ploDescription: 'Understanding electrical systems',
         ploHeading: 'Electrical Foundations',
       },
     ],
   },
   {
     _id: 'BCE',
     programName: 'Bachelor of Civil Engineering',
     PEOs: ['Develop civil engineers', 'Promote sustainable infrastructure'],
     PLOs: [
       {
         ploId: 1,
         ploLevel: 'Basic',
         ploDomain: 'Cognitive',
         ploDescription: 'Understanding civil engineering fundamentals',
         ploHeading: 'Civil Foundations',
       },
     ],
   },
 ];

 export { TableHeadings, AddStudentFormContent, DefaultPrograms };
