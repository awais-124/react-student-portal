import React, { useContext } from 'react';

import { AppContext } from '../../../Context/AppContext';
import PersonalDetails from './PersonalDetails';
import FeeDetails from './FeeDetails';
import AcademicDetails from './AcademicDetails';

const StudentDetails = ({ activeLink }) => {
  const { user } = useContext(AppContext);

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
