import departments from '../../admin/components/AddDepartment/departments';
import { DefaultPrograms } from '../../Content/AdminContent';

export const getDepartmentName = id => {
  const name = departments.find(dep => dep._id === id);
  return name['depName'] ?? id;
};

export const getProgramName = id => {
  const name = DefaultPrograms.find(prog => prog._id === id);
  return name['programName'] ?? id;
};
