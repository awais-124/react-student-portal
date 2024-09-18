/*

{
  "_id": "CS",
  "programName": "Computer Science",
  "PEOs": ["Provide quality education", "Promote leadership"],
  "PLOs": [
    {
      "ploId": 1,
      "ploLevel": "Basic",
      "ploDomain": "Cognitive",
      "ploDescription": "Understanding basic concepts",
      "ploHeading": "Introductory"
    }
  ]
}

{
  "_id": "CS",  // depId
  "depName": "Computer Science",
  "HODName": "Dr. John Doe"
}

{
  "_id": "20240001",  // stdRegNumber
  "firstName": "Awais",
  "lastName": "Khan",
  "fatherName": "Ahmed Khan",
  "fatherOccupation": "Engineer",
  "username": "awais01",
  "password": "securepassword",
  "dateOfBirth": ISODate("2002-05-14"),
  "section": 1,
  "email": "awais@example.com",
  "contactNumber": "+923001234567",
  "gender": "M",
  "cnic": "12345-1234567-1",
  "semester": 4,
  "department": ObjectId("5f50c3e2b7d7e70017372287"),  // depId
  "program": "CS",  // Reference to Program Code
  "address": {
    "houseNo": "23",
    "street": "Main Street",
    "town": "Gulberg",
    "city": "Lahore"
  },
  "prevAcademicRecord": {
    "degree": "Intermediate",
    "obtainedMarks": 960,
    "totalMarks": 1100,
    "institute": "Lahore College"
  },
  "feeSummary": [
    {
      "challanNumber": "CH1234",
      "amount": 150000,
      "semester": 4,
      "feeType": "Tuition",
      "paidAmount": 150000,
      "paidDate": ISODate("2024-08-30"),
      "fine": 0
    }
  ]
}


{
  "_id": "CS101",  // courseCode
  "courseName": "Introduction to Programming",
  "creditHours": 3,
  "preRequisite": null,
  "department": ObjectId("5f50c3e2b7d7e70017372287"),
  "CLOs": [
    {
      "cloNumber": 1,
      "description": "Understand basic programming concepts"
    }
  ]
}


{
  "_id": "T001",  // teacherId
  "teacherName": "Mr. Ali",
  "gender": "M",
  "contactNumber": "+923001234568",
  "email": "ali@example.com",
  "username": "aliT001",
  "password": "password123",
  "courses": [
    "CS101",  // References to Course Codes
    "CS102"
  ]
}


{
  "courseCode": "CS101",  // Reference to Course Code
  "semesterName": "Fall 2024",
  "examDate": ISODate("2024-11-20"),
  "examType": "Finals",
  "examStartTime": "10:00",
  "examEndTime": "12:00"
}


{
  "studentId": "20240001",  // Reference to Student Registration Number
  "courseCode": "CS101",  // Reference to Course Code
  "attendanceDate": ISODate("2024-09-01"),
  "attendanceStatus": "Present"
}


{
  "startTime": "08:00",
  "endTime": "10:00",
  "classDate": ISODate("2024-09-05"),
  "section": 1,
  "teacherId": "T001",  // Reference to Teacher
  "courseCode": "CS101"  // Reference to Course
}


{
  "_id": "A01",  // adminId
  "adminName": "Admin User",
  "email": "admin@example.com",
  "username": "admin01",
  "password": "adminpassword"
}


{
  "studentId": "20240001",  // Reference to Student
  "courseCode": "CS101",  // Reference to Course
  "enrollmentDate": ISODate("2024-09-01"),
  "attempt": 1,
  "section": 1,
  "grades": 85
}


{
  "teacherId": "T001",  // Reference to Teacher
  "courseCode": "CS101"  // Reference to Course
}

// Course Enrollment
{
  "courseCode": "CS101",
  "teacherId": "T001",
  "students": [
    "BCS221093", "BCS221050", and so on...
  ]
}
*/
