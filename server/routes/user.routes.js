const mongoose = require('mongoose');
const User = require('../models/user');
const db = 'mongodb://neha:neha@ds161164.mlab.com:61164/insurance'
mongoose.Promise = global.Promise;
mongoose.connection.openUri(db, function(err){
	if(err){
		console.error("Error! " + err);
	}
});
router.get('/', function(req,res){
	res.send("api is working");
});
router.get('/users', function(req, res){
	console.log("request to get all records");
	User.find({})
	.exec(function(err, users){
		if(err){
			console.log("error retrieving users");
		}else {
			res.json(users);
		}
	});
});

router.get('/users/:id', function(req, res){
	console.log("request to get single record");
	User.findById(req.params.id)
	.exec(function(err, user){
		if(err){
			console.log("error retrieving user");
		}else {
			res.json(user);
		}
	});
});

router.post('/user', function(req, res){
	console.log("add a record");
	var newUser = new User();
		newUser.email = req.body.email,
		newUser.username = req.body.username,
		newUser.phone = req.body.phone,
		newUser.address = req.body.address,
		newUser.pincode = req.body.pincode,
		newUser.branch = req.body.branch
		newUser.save(function(err, insertedUser){
			if(err){
				console.log('Error saving user ');
			} else {
				res.json(insertedUser);
			}
		});
	
});

router.put('/user/:id', function(req, res){
	console.log("update single record");
	User.findByIdAndUpdate(req.params.id,
	{
		$set: { email: req.body.email, username: req.body.username, phone: req.body.phone, address: req.body.address, pincode: req.body.pincode, branch: req.body.branch }
	},
	{
		new: true
	},
	function(err, updatedUser){
		if(err){
			console.log("Error updating record");
		}else {
			res.json(updatedUser);
		}
	});

});

router.delete('/user/:id', function(req, res){
	console.log("delete single record");
	User.findByIdAndRemove(req.params.id, function(err, deleteUser){
		if(err){
			res.send("Error deleting record");
		}else {
			res.json(deleteUser);
		}
	});
});


module.exports = router;