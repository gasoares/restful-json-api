const express = require('express');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

app.use(express.static(__dirname + '/client'));
app.use(bodyParser.json());
app.use(cors());

User = require('./models/user');
Pet = require('./models/pet');

// Connect to Mongoose
mongoose.connect('mongodb://localhost/bookstore');
var db = mongoose.connection;

app.get('/', (req, res) => {
	res.send('Please use /api/...');
});


// User start 

app.get('/api/users', (req, res) => {
	User.getUsers((err, users) => {
		if(err){
			throw err;
		}
		res.json(users);
	});
});

app.get('/api/users/email/:email', (req, res) => {
	var email = req.params.email;
	User.getUserByEmail(email, (err, users) => {
		if(err){
			throw err;
		}
		res.json(users);
	});
});

app.post('/api/users', (req, res) => {
	var user = req.body;
	User.addUser(user, (err, user) => {
		if(err){
			throw err;
		}
		res.json(user);
	});
});

app.put('/api/users/:_id', (req, res) => {
	var id = req.params._id;
	var user = req.body;
	User.updateUser(id, user, {}, (err, user) => {
		if(err){
			throw err;
		}
		res.json(user);
	});
});

app.delete('/api/user/:_id', (req, res) => {
	var id = req.params._id;
	User.removeUser(id, (err, user) => {
		if(err){
			throw err;
		}
		res.json(user);
	});
});

// User end


// Pet start

app.get('/api/pets', (req, res) => {
	Pet.getPets((err, pets) => {
		if(err){
			throw err;
		}
		res.json(pets);
	});
});

app.get('/api/pets/:_id', (req, res) => {
	Pet.getPetById(req.params._id, (err, pet) => {
		if(err){
			throw err;
		}
		res.json(pet);
	});
});

app.post('/api/pets', (req, res) => {
	var pet = req.body;
	Pet.addPet(pet, (err, pet) => {
		if(err){
			throw err;
		}
		res.json(pet);
	});
});

app.put('/api/pets/:_id', (req, res) => {
	var id = req.params._id;
	var pet = req.body;
	Pet.updatePet(id, pet, {}, (err, pet) => {
		if(err){
			throw err;
		}
		res.json(pet);
	});
});

app.delete('/api/pet/:_id', (req, res) => {
	var id = req.params._id;
	Pet.removePet(id, (err, pet) => {
		if(err){
			throw err;
		}
		res.json(pet);
	});
});

// Pets end

app.listen(3000);
console.log('Running on port 3000...');