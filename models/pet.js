const mongoose = require('mongoose');

// Pet Schema
const petSchema = mongoose.Schema({
	name:{
		type: String,
		required: true
	},
	birth:{
		type: Date,
		required: true
	},
	gender:{
		type: Number,
		required: true
	},
	specie:{
		type: Number,
		required: true
	},
	owner:{
		type: Object
	},
	isVacinado:{
		type: Boolean
	},
	isCastrado:{
		type: Boolean
	},
	create_date:{
		type: Date,
		default: Date.now
	}
});

const Pet = module.exports = mongoose.model('Pet', petSchema);

// Get Pets
module.exports.getPets = (callback, limit) => {
	Pet.find(callback).limit(limit);
}

// Get Pet
module.exports.getPetById = (id, callback) => {
	Pet.findById(id, callback);
}

// Add Pet
module.exports.addPet = (pet, callback) => {
	Pet.create(pet, callback);
}

// Update Pet
module.exports.updatePet = (id, pet, options, callback) => {
	var query = {_id: id};
	var update = {
		name: user.name,
		email: user.email,
		password: user.password
	}
	Pet.findOneAndUpdate(query, update, options, callback);
}

// Delete Pet
module.exports.removePet = (id, callback) => {
	var query = {_id: id};
	Pet.remove(query, callback);
}
