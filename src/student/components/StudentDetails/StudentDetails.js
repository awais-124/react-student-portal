import React, { useContext, useEffect } from 'react';

import { AppContext } from '../../../Context/AppContext';
import PersonalDetails from './PersonalDetails';
import FeeDetails from './FeeDetails';
import AcademicDetails from './AcademicDetails';
import { getDepartmentName } from '../helpers/helperFunctions';

const StudentDetails = ({ activeLink }) => {
  const { user } = useContext(AppContext);

  useEffect(() => console.log(getDepartmentName('CS')), []);

  return activeLink === 'details' ? (
    <PersonalDetails user={user} />
  ) : activeLink === 'fee' ? (
    <FeeDetails user={user} />
  ) : activeLink === 'academic' ? (
    <AcademicDetails user={user} />
  ) : (
    <p>Error in JSX</p>
  );
};

export default StudentDetails;
