# Candidate Management Application

## Overview

This is a web application designed to display, search, filter, and manage candidates’ data using modern web technologies. The application allows users to view a list of candidates in a table format, add new candidates, search and filter candidates, and handle large datasets with pagination.

## Features

1. **Table View for Candidates**:
   - Displays a list of candidates with columns: Name, Phone, Email, Gender, Experience, and Skills.

2. **Add Candidate**:
   - Button to open a form for adding a new candidate with input fields for Name, Phone, Email, Gender, Experience, and Skills.
   - The new candidate is saved to the backend database and displayed in the table.

3. **Search Functionality**:
   - Search bar to search candidates by name, phone, or email dynamically.

4. **Pagination**:
   - Pagination to handle large datasets, displaying a limited number of candidates per page with Next and Previous buttons.

5. **Filter Option**:
   - Filter candidates based on gender and skills, dynamically updating the table based on selected criteria.

## Technologies Used

- **Frontend**: React.js
  - Utilizes React components to structure the user interface.
- **Backend**: Node.js with Express.js
  - Creates routes and APIs for the backend.
- **Database**: MongoDB
  - Stores candidate data with the appropriate schema.

## Project Structure

```bash
candidate-data/
├── backend/
│   ├── controllers/
│   │   └── candidateController.js
│   ├── models/
│   │   └── candidateModel.js
│   ├── routes/
│   │   └── candidateRoutes.js
│   ├── app.js
│   └── package.json
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── CandidateForm.js
│   │   │   ├── CandidateTable.js
│   │   │   ├── Pagination.js
│   │   │   ├── SearchBar.js
│   │   │   ├── Filter.js
│   │   ├── App.js
│   │   ├── index.js
│   │   ├── App.css
│   └── package.json
├── README.md
└── .gitignore


Setup Instructions: 
1) Clone the Repository
   # git clone https://github.com/Sivani-R/candidate-data.git
   # cd candidate-data
   
3) Backend Setup
   # cd backend
   # npm install
   # node app.js
Ensure MongoDB is running and accessible at mongodb://localhost:27017/candidatesDB.

3) Frontend Setup
   # cd frontend
   # npm install
   # npm start
The frontend should be accessible at http://localhost:3000.

Usage
  1. Open the application in your browser.
  2. Use the "Add Candidate" button to add new candidates.
  3. Use the search bar to search candidates by name, phone, or email.
  4. Use the filter options to filter candidates based on gender and skills.
  5. Navigate through pages using the pagination controls.
