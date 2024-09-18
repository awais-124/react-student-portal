import React, { useContext, useEffect } from 'react';

import { AppContext } from '../../../Context/AppContext';
import { getDepartmentName } from '../../helpers/helperFunctions';

import PersonalDetails from './PersonalDetails';
import FeeDetails from './FeeDetails';
import RegisterCourses from '../RegisterCourses/RegisterCourses';
import AcademicDetails from './AcademicDetails';
import EnrolledCourses from '../EnrolledCourses/EnrolledCourses';
import DateSheet from '../DateSheet/DateSheet';

const StudentDetails = ({ activeLink }) => {
  const { user } = useContext(AppContext);

  useEffect(() => console.log(getDepartmentName('CS')), []);

  console.log({ activeLink });

  return activeLink === 'details' ? (
    <PersonalDetails user={user} />
  ) : activeLink === 'fee' ? (
    <FeeDetails user={user} />
  ) : activeLink === 'academic' ? (
    <AcademicDetails user={user} />
  ) : activeLink === 'register_courses' ? (
    <RegisterCourses />
  ) : activeLink === 'datesheet' ? (
    <DateSheet />
  ) : activeLink === 'enrolled_courses' ? (
    <EnrolledCourses />
  ) : (
    <p>Error in JSX</p>
  );
};

export default StudentDetails;
