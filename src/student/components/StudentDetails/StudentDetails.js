import React, { useContext, useEffect } from 'react';

import { AppContext } from '../../../Context/AppContext';
import { getDepartmentName } from '../../helpers/helperFunctions';

import PersonalDetails from './PersonalDetails';
import FeeDetails from './FeeDetails';
import RegisterCourses from '../RegisterCourses/RegisterCourses';
import AcademicDetails from './AcademicDetails';

const StudentDetails = ({ activeLink }) => {
  const { user } = useContext(AppContext);

  useEffect(() => console.log(getDepartmentName('CS')), []);

  return activeLink === 'details' ? (
    <PersonalDetails user={user} />
  ) : activeLink === 'fee' ? (
    <FeeDetails user={user} />
  ) : activeLink === 'academic' ? (
    <AcademicDetails user={user} />
  ) : activeLink === 'register_courses' ? (
    <RegisterCourses />
  ) : (
    <p>Error in JSX</p>
  );
};

export default StudentDetails;
