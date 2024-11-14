import React, { useState, useEffect } from 'react';
import CandidateTable from './components/CandidateTable';
import CandidateForm from './components/CandidateForm';
import SearchBar from './components/SearchBar';
import Filter from './components/Filter';
import Pagination from './components/Pagination';

function App() {
  const [candidates, setCandidates] = useState([]);
  const [filteredCandidates, setFilteredCandidates] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [candidatesPerPage] = useState(10);

  useEffect(() => {
    fetch('http://localhost:5000/api/candidates')
      .then(res => res.json())
      .then(data => {
        console.log('Fetched candidates:', data); // Log fetched data
        setCandidates(data);
        setFilteredCandidates(data);
      })
      .catch(error => console.error('Error fetching candidates:', error));
  }, []);

  const handleSearch = (searchTerm) => {
    const filtered = candidates.filter(candidate =>
      candidate.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      candidate.phone.includes(searchTerm) ||
      candidate.email.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredCandidates(filtered);
  };

  const handleFilter = (filterCriteria) => {
    const filtered = candidates.filter(candidate => {
      const genderMatch = !filterCriteria.gender || candidate.gender === filterCriteria.gender;
      const skillsMatch = !filterCriteria.skills || candidate.skills.includes(filterCriteria.skills);
      return genderMatch && skillsMatch;
    });
    setFilteredCandidates(filtered);
  };

  const addCandidate = (newCandidate) => {
    setCandidates([...candidates, newCandidate]);
    setFilteredCandidates([...filteredCandidates, newCandidate]);
  };

  const totalPages = Math.ceil(filteredCandidates.length / candidatesPerPage);
  const indexOfLastCandidate = currentPage * candidatesPerPage;
  const indexOfFirstCandidate = indexOfLastCandidate - candidatesPerPage;
  const currentCandidates = filteredCandidates.slice(indexOfFirstCandidate, indexOfLastCandidate);

  return (
    <div className="App">
      <header>
        <h1>Candidate Management</h1>
      </header>
      <SearchBar onSearch={handleSearch} />
      <Filter onFilter={handleFilter} />
      <CandidateTable candidates={currentCandidates} />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
      <CandidateForm addCandidate={addCandidate} />
    </div>
  );
}

export default App;
