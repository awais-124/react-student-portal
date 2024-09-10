import departments from '../admin/components/AddDepartment/departments';

const TableHeadings = [
  'Sr.No',
  'Name',
  'Registration Number',
  'Semester',
  'Program',
  'Actions',
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
    type: 'select',
    name: 'department',
    placeholder: 'Select Department',
    value: '',
    onChange: 'handleChange',
    options: [
      { value: '', label: 'Select Department' },
      ...departments.map((dep) => {
        return { value: dep._id, label: `Department of ${dep.depName}` };
      }),
    ],
  },
  {
    type: 'select',
    name: 'program',
    placeholder: 'Select Program',
    value: '',
    onChange: 'handleChange',
    options: [
      { value: '', label: 'Select Program' },
      ...DefaultPrograms.map((prog) => {
        return { value: prog._id, label: `${prog.programName}` };
      }),
    ],
  },
  // {
  //   type: 'text',
  //   name: 'program',
  //   placeholder: 'Program Code',
  //   value: '',
  //   onChange: 'handleChange',
  // },
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

const StudentUpdateContent = {
  formFields: [
    {
      id: 'firstName',
      label: 'First Name',
      type: 'text',
      placeholder: 'First Name',
    },
    {
      id: 'lastName',
      label: 'Last Name',
      type: 'text',
      placeholder: 'Last Name',
    },
    {
      id: 'fatherName',
      label: "Father's Name",
      type: 'text',
      placeholder: "Father's Name",
    },
    {
      id: 'fatherOccupation',
      label: "Father's Occupation",
      type: 'text',
      placeholder: "Father's Occupation",
    },
    { id: 'dateOfBirth', label: 'Date of Birth', type: 'date' },
    { id: 'section', label: 'Section', type: 'text', placeholder: 'Section' },
    { id: 'email', label: 'Email', type: 'email', placeholder: 'Email' },
    {
      id: 'contactNumber',
      label: 'Contact Number',
      type: 'text',
      placeholder: 'Contact Number',
    },
    { id: 'cnic', label: 'CNIC', type: 'text', placeholder: 'CNIC' },
    {
      id: 'semester',
      label: 'Semester',
      type: 'number',
      placeholder: 'Semester',
    },
    {
      id: 'department',
      label: 'Department',
      type: 'text',
      placeholder: 'Department',
    },
    { id: 'program', label: 'Program', type: 'text', placeholder: 'Program' },
  ],

  addressFields: [
    { id: 'houseNo', label: 'House No.', placeholder: 'House No.' },
    { id: 'street', label: 'Street', placeholder: 'Street' },
    { id: 'town', label: 'Town', placeholder: 'Town' },
    { id: 'city', label: 'City', placeholder: 'City' },
  ],
  buttons: [
    { type: 'submit', label: 'Update', className: 'submitButton' },
    { type: 'button', label: 'Fee Summary ↗', className: 'addButton' },
    {
      type: 'button',
      label: 'Previous Record ↗',
      className: 'addButton',
    },
    { type: 'button', label: 'Cancel', className: 'cancelButton' },
  ],
};

const FeeSummaryLabels = [
  { label: 'Challan Number', name: 'challanNumber', type: 'text' },
  { label: 'Amount', name: 'amount', type: 'number' },
  { label: 'Semester', name: 'semester', type: 'number' },
  { label: 'Fee Type', name: 'feeType', type: 'text' },
  { label: 'Paid Amount', name: 'paidAmount', type: 'number' },
  { label: 'Paid Date', name: 'paidDate', type: 'date' },
  { label: 'Fine', name: 'fine', type: 'number' },
];

const studentIds = [
  'BCS221093',
  'BCS221068',
  'BBA221001',
  'BEE221002',
  'BSE221003',
  'BME221004',
  'BCS221005',
  'BCE221006',
  'BSE221007',
  'BCS221008',
  'BBA221009',
  'BEE221010',
  'BME221011',
  'BCS221012',
  'BSE221013',
  'BCE221014',
  'BBA221015',
  'BME221016',
  'BCS221017',
  'BEE221018',
  'BCS221057',
  'BCS221050',
];

export {
  studentIds,
  FeeSummaryLabels,
  TableHeadings,
  AddStudentFormContent,
  DefaultPrograms,
  StudentUpdateContent,
};
