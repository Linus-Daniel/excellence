import { Class } from "./types";

export const classData:Class[] = [
    // Junior Secondary
    {
      name: "JSS1",
      type: "Junior",
      subjects: [
        { name: "Mathematics", teacher: "Mr. Adebayo" },
        { name: "English", teacher: "Mrs. Johnson" },
        { name: "Basic Science", teacher: "Dr. Musa" },
        { name: "Social Studies", teacher: "Mr. Oladimeji" },
        { name: "Civic Education", teacher: "Mrs. Bello" },
        { name: "Basic Technology", teacher: "Engr. Okoro" },
        { name: "Home Economics", teacher: "Mrs. Eze" }
      ],
      studentCount: 45,
      classTeacher: "Mrs. Johnson",
      departments: null
    },
    {
      name: "JSS2",
      type: "Junior",
      subjects: [
        { name: "Mathematics", teacher: "Mr. Adebayo" },
        { name: "English", teacher: "Mrs. Johnson" },
        { name: "Basic Science", teacher: "Dr. Musa" },
        { name: "Computer Studies", teacher: "Mr. Timothy" },
        { name: "Cultural & Creative Arts", teacher: "Mrs. Ajayi" },
        { name: "Agricultural Science", teacher: "Mr. Dauda" },
        { name: "French", teacher: "Mrs. Jacques" }
      ],
      studentCount: 48,
      classTeacher: "Mr. Timothy",
      departments: null
    },
    {
      name: "JSS3",
      type: "Junior",
      subjects: [
        { name: "Mathematics", teacher: "Mr. Adebayo" },
        { name: "English", teacher: "Mrs. Johnson" },
        { name: "Basic Science", teacher: "Dr. Musa" },
        { name: "Social Studies", teacher: "Mr. Oladimeji" },
        { name: "Business Studies", teacher: "Mr. Okeke" },
        { name: "Religious Studies", teacher: "Pastor James" },
        { name: "Physical and Health Education", teacher: "Coach Bassey" }
      ],
      studentCount: 42,
      classTeacher: "Mr. Okeke",
      departments: null
    },
  
    // Senior Secondary - SS1
    {
      name: "SS1 Science",
      type: "Senior",
      subjects: [
        { name: "Physics", teacher: "Mr. Chinedu" },
        { name: "Chemistry", teacher: "Mrs. Adeleke" },
        { name: "Biology", teacher: "Dr. Okafor" },
        { name: "Mathematics", teacher: "Mr. Adebayo" },
        { name: "English", teacher: "Mrs. Johnson" }
      ],
      studentCount: 32,
      classTeacher: "Mr. Chinedu",
      departments: ["Science"]
    },
    {
      name: "SS1 Art",
      type: "Senior",
      subjects: [
        { name: "Literature", teacher: "Mrs. Okonkwo" },
        { name: "Government", teacher: "Mr. Bello" },
        { name: "CRK", teacher: "Pastor James" },
        { name: "English", teacher: "Mrs. Johnson" },
        { name: "Civic Education", teacher: "Mrs. Bello" }
      ],
      studentCount: 28,
      classTeacher: "Mrs. Okonkwo",
      departments: ["Art"]
    },
    {
      name: "SS1 Commercial",
      type: "Senior",
      subjects: [
        { name: "Economics", teacher: "Mr. Emmanuel" },
        { name: "Accounting", teacher: "Mrs. Agbo" },
        { name: "Commerce", teacher: "Mr. Okeke" },
        { name: "Mathematics", teacher: "Mr. Adebayo" },
        { name: "English", teacher: "Mrs. Johnson" }
      ],
      studentCount: 30,
      classTeacher: "Mrs. Agbo",
      departments: ["Commercial"]
    },
  
    // SS2
    {
      name: "SS2 Science",
      type: "Senior",
      subjects: [
        { name: "Physics", teacher: "Mr. Chinedu" },
        { name: "Chemistry", teacher: "Mrs. Adeleke" },
        { name: "Biology", teacher: "Dr. Okafor" },
        { name: "Further Mathematics", teacher: "Mr. Umeh" },
        { name: "English", teacher: "Mrs. Johnson" }
      ],
      studentCount: 33,
      classTeacher: "Mrs. Adeleke",
      departments: ["Science"]
    },
    {
      name: "SS2 Art",
      type: "Senior",
      subjects: [
        { name: "Literature", teacher: "Mrs. Okonkwo" },
        { name: "Government", teacher: "Mr. Bello" },
        { name: "CRK", teacher: "Pastor James" },
        { name: "History", teacher: "Dr. Nwosu" },
        { name: "English", teacher: "Mrs. Johnson" }
      ],
      studentCount: 26,
      classTeacher: "Dr. Nwosu",
      departments: ["Art"]
    },
    {
      name: "SS2 Commercial",
      type: "Senior",
      subjects: [
        { name: "Economics", teacher: "Mr. Emmanuel" },
        { name: "Accounting", teacher: "Mrs. Agbo" },
        { name: "Office Practice", teacher: "Mrs. Akande" },
        { name: "Commerce", teacher: "Mr. Okeke" },
        { name: "English", teacher: "Mrs. Johnson" }
      ],
      studentCount: 31,
      classTeacher: "Mr. Emmanuel",
      departments: ["Commercial"]
    },
  
    // SS3
    {
      name: "SS3 Science",
      type: "Senior",
      subjects: [
        { name: "Physics", teacher: "Mr. Chinedu" },
        { name: "Chemistry", teacher: "Mrs. Adeleke" },
        { name: "Biology", teacher: "Dr. Okafor" },
        { name: "Mathematics", teacher: "Mr. Adebayo" },
        { name: "English", teacher: "Mrs. Johnson" }
      ],
      studentCount: 29,
      classTeacher: "Dr. Okafor",
      departments: ["Science"]
    },
    {
      name: "SS3 Art",
      type: "Senior",
      subjects: [
        { name: "Literature", teacher: "Mrs. Okonkwo" },
        { name: "Government", teacher: "Mr. Bello" },
        { name: "CRK", teacher: "Pastor James" },
        { name: "Fine Arts", teacher: "Mr. Hassan" },
        { name: "English", teacher: "Mrs. Johnson" }
      ],
      studentCount: 24,
      classTeacher: "Mr. Bello",
      departments: ["Art"]
    },
    {
      name: "SS3 Commercial",
      type: "Senior",
      subjects: [
        { name: "Economics", teacher: "Mr. Emmanuel" },
        { name: "Accounting", teacher: "Mrs. Agbo" },
        { name: "Commerce", teacher: "Mr. Okeke" },
        { name: "Marketing", teacher: "Mrs. Akande" },
        { name: "English", teacher: "Mrs. Johnson" }
      ],
      studentCount: 27,
      classTeacher: "Mrs. Akande",
      departments: ["Commercial"]
    }
  ];
  


export const classes = [
  {
    id: "jss1",
    name: "JSS1",
    type: "Junior",
    studentCount: 45,
    subjects: [
      "English", "Mathematics", "Basic Science", 
      "Social Studies", "CRS/IRS", "Cultural Arts"
    ],
    resultsAvailable: true
  },
  {
    id: "jss2",
    name: "JSS2",
    type: "Junior",
    studentCount: 42,
    subjects: [
      "English", "Mathematics", "Basic Science",
      "Social Studies", "CRS/IRS", "French"
    ],
    resultsAvailable: true
  },
  {
    id: "ss1-science",
    name: "SS1 Science",
    type: "Senior",
    studentCount: 32,
    subjects: [
      "English", "Mathematics", "Physics",
      "Chemistry", "Biology", "Further Maths"
    ],
    resultsAvailable: true
  },
  {
    id: "ss1-art",
    name: "SS1 Art",
    type: "Senior",
    studentCount: 28,
    subjects: [
      "English", "Literature", "Government",
      "CRS/IRS", "History", "Fine Arts"
    ],
    resultsAvailable: false
  }
];
