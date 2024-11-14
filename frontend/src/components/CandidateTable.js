import React from 'react';

function CandidateTable({ candidates }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Phone</th>
          <th>Email</th>
          <th>Gender</th>
          <th>Experience</th>
          <th>Skills</th>
        </tr>
      </thead>
      <tbody>
        {candidates.map(candidate => (
          <tr key={candidate._id}>
            <td>{candidate.name}</td>
            <td>{candidate.phone}</td>
            <td>{candidate.email}</td>
            <td>{candidate.gender}</td>
            <td>{candidate.experience}</td>
            <td>{candidate.skills.join(', ')}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default CandidateTable;
