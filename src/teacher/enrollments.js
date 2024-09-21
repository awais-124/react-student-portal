import { collection, getDocs, doc, setDoc, Timestamp } from 'firebase/firestore';
import { db } from '../firebaseConfig';

// Function to create enrollments
export async function createEnrollments() {
  try {
    // Fetch all student documents
    const studentsCollection = collection(db, 'students');
    const studentSnapshot = await getDocs(studentsCollection);

    if (studentSnapshot.empty) {
      console.log('No students found.');
      return;
    }

    // Iterate over each student
    studentSnapshot.forEach(async studentDoc => {
      const studentData = studentDoc.data();
      const { stdRegNumber, courses } = studentData;

      // Check if the student has a courses array
      if (Array.isArray(courses) && courses.length > 0) {
        for (const courseCode of courses) {
          const enrollmentId = `${stdRegNumber}_${courseCode}`; // Create unique enrollment ID
          const today = Timestamp.fromDate(new Date()); // Get today's date

          // Set entry in 'enrollments' collection
          const enrollmentDocRef = doc(db, 'enrollments', enrollmentId);
          await setDoc(enrollmentDocRef, {
            stdRegNumber,
            courseCode,
            enrolledDate: today,
          });

          console.log(`Enrollment created: ${enrollmentId}`);
        }
      } else {
        console.log(`No courses found for student: ${stdRegNumber}`);
      }
    });
  } catch (error) {
    console.error('Error creating enrollments:', error);
  }
}
