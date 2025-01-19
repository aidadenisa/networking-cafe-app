import express from 'express';
import cors from 'cors';
import defaultData from '../data/defaultData.json' assert { type: 'json' };

const app = express();
const port = 3001;

const interests = defaultData.interests

// Enable CORS for all routes
app.use(cors());

// Middleware to parse JSON bodies
app.use(express.json());

// GET endpoint for interests
app.get('/api/interests', (req, res) => {
  res.json(interests);
});

app.post('/api/interests', (req, res) => {
  const newInterests = req.body
  if(newInterests && newInterests.length) {
    interests.push(...newInterests)
  }
  res.status(201).send('OK');
});


// GET endpoint for users
app.get('/api/users', (req, res) => {
  res.json(defaultData.users);
});

// GET endpoint for a specific user
app.get('/api/users/:id', (req, res) => {
  const user = defaultData.users.find(u => u.id === parseInt(req.params.id));
  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ message: 'User not found' });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});