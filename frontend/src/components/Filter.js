import React, { useState } from 'react';

function Filter({ onFilter }) {
  const [filterCriteria, setFilterCriteria] = useState({
    gender: '',
    skills: '',
  });

  const handleChange = (e) => {
    setFilterCriteria({
      ...filterCriteria,
      [e.target.name]: e.target.value,
    });
    onFilter(filterCriteria);
  };

  return (
    <div className="filter">
      <select name="gender" onChange={handleChange}>
        <option value="">Select Gender</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Other">Other</option>
      </select>
      <input
        type="text"
        name="skills"
        placeholder="Skills"
        onChange={handleChange}
      />
    </div>
  );
}

export default Filter;
