const Candidate = require('../models/candidateModel');

exports.getCandidates = async (req, res) => {
  try {
    const candidates = await Candidate.find();
    res.json(candidates);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.addCandidate = async (req, res) => {
  console.log('Request body:', req.body); 

  const { name, phone, email, gender, experience, skills } = req.body;

  const candidate = new Candidate({
    name,
    phone,
    email,
    gender,
    experience,
    skills,
  });

  try {
    const newCandidate = await candidate.save();
    res.status(201).json(newCandidate);
  } catch (error) {
    console.error('Error saving candidate:', error);
    res.status(400).json({ message: error.message });
  }
};

exports.getCandidateById = async (req, res) => {
  try {
    const candidate = await Candidate.findById(req.params.id);
    if (!candidate) {
      return res.status(404).json({ message: 'Candidate not found' });
    }
    res.json(candidate);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateCandidate = async (req, res) => {
  try {
    const candidate = await Candidate.findById(req.params.id);
    if (!candidate) {
      return res.status(404).json({ message: 'Candidate not found' });
    }

    candidate.name = req.body.name || candidate.name;
    candidate.phone = req.body.phone || candidate.phone;
    candidate.email = req.body.email || candidate.email;
    candidate.gender = req.body.gender || candidate.gender;
    candidate.experience = req.body.experience || candidate.experience;
    candidate.skills = req.body.skills || candidate.skills;

    const updatedCandidate = await candidate.save();
    res.json(updatedCandidate);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.deleteCandidate = async (req, res) => {
  try {
    const candidate = await Candidate.findById(req.params.id);
    if (!candidate) {
      return res.status(404).json({ message: 'Candidate not found' });
    }

    await candidate.remove();
    res.json({ message: 'Candidate deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
