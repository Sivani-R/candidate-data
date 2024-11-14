import React, { useState } from 'react';

function CandidateForm({ addCandidate }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    gender: '',
    experience: '',
    skills: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitting form data:', formData); 
    fetch('http://localhost:5000/api/candidates', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        ...formData,
        skills: formData.skills.split(',').map(skill => skill.trim())
      })
    })
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      console.log('Success:', data); 
      addCandidate(data); 
      
      setFormData({
        name: '',
        phone: '',
        email: '',
        gender: '',
        experience: '',
        skills: ''
      });
    })
    .catch(error => {
      console.error('Error adding candidate:', error);
      alert('There was an error adding the candidate. Please try again.');
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <input
        type="tel"
        name="phone"
        placeholder="Phone"
        value={formData.phone}
        onChange={handleChange}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <select name="gender" value={formData.gender} onChange={handleChange} required>
        <option value="">Select Gender</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Other">Other</option>
      </select>
      <select name="experience" value={formData.experience} onChange={handleChange} required>
        <option value="">Select Experience</option>
        <option value="1 Year">1 Year</option>
        <option value="2 Years">2 Years</option>
        <option value="3 Years">3 Years</option>
        <option value="4 Years">4 Years</option>
        <option value="5 Years">5 Years</option>
      </select>
      <input
        type="text"
        name="skills"
        placeholder="Skills (comma separated)"
        value={formData.skills}
        onChange={handleChange}
        required
      />
      <button type="submit">Add Candidate</button>
    </form>
  );
}

export default CandidateForm;
