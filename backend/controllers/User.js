// Data Model
const User = require("../models/User");

const user_signIn_post=(req, res) => {
	console.log(req.body);
	let username = req.body.username;
	let password = req.body.password;
	let role = req.body.role;
	User.findOne({ username: username, password: password })
		.then((result) => {
			console.log(result);
			console.log(parseInt(result.role) <= parseInt(req.body.role));
			if (parseInt(result.role) <= parseInt(role)) {
				// console.log("hi");
				res.json({ status: 1, redirect: "/home", id: result.id });
				result.status = "1";
				result.save();
			} else {
				res.json({ status: 0, err: "Access Denied" });
			}
		})
		.catch((err) => {
			res.json({ status: 0, err: err });
		});
};

const user_auth_post=(req, res) => {
	let username = req.body.username;
	let role = req.body.role;
	console.log("##1");
	console.log(username, role);
	if (role == "" || username == "") {
		console.log("##2");
		res.json({ status: 0 });
	}
	User.findOne({ username: username }).then((result) => {
		console.log("##3");
		if (result) {
			console.log("##4");
			if (result.status == "0") {
				console.log();
				res.json({ status: 0 });
			} else {
				if (parseInt(result.role) <= parseInt(role)) {
					res.json({ status: 1 });
				} else {
					res.json({ status: 0 });
				}
			}
		} else {
			res.json({ status: 0 });
		}
	});
};

const user_alluser_get=(req, res) => {
	User.find().then((result) => {
		console.log("###",result);
		res.json({ users: result });
	});
};

const user_delete_get=(req, res) => {
	User.findByIdAndDelete(req.params.id).then((result) => {
		console.log(result);
		res.json({redirect:"/users"});
	});
}

const user_updaterole_post=(req, res) => {
	let id = req.body.id;
	let role = req.body.role;
	console.log("##Update User", req.body);
	User.findByIdAndUpdate(id, { role: role })
		.then((result) => {
			console.log(result);
			res.json({ status: 1 });
		})
		.catch((err) => {
			console.log(err);
			res.json({ status: 0, error: err });
		});
};

const user_detail_get=(req, res) => {
	console.log("Profile");
	let id = req.params.id;
	User.findById(id).then((result) => {
		res.json({user: result});
	});
}

const user_update_post=(req, res) => {
	let userData = req.body;
	let id = req.params.id;
	console.log(userData);
	User.findByIdAndUpdate(id, userData)
		.then((result) => {
			console.log(result);
			res.json({ status: 1 });
		})
		.catch((err) => {
			res.json({ status: 0, error: err });
		});
};

const user_signout_get=(req, res) => {
	let id = req.params.id;
	User.findByIdAndUpdate(id, { status: 0 }).then((result) => {
		console.log("###SignOut" + result);
		res.json({redirect:"/"});
	});
};

const user_signup_post=(req, res) => {
	console.log("##1", req.body);
	let data = req.body;
	data["status"] = "0";
	newUser = new User(data);
	newUser
		.save()
		.then((result) => {
			console.log(result);
			res.json({status:1,redirect:"/"});
		})
		.catch((err) => {
			console.log(err);
      res.json({status:0,err:err});
		});
};


module.exports={
  user_signIn_post,
  user_auth_post,
  user_alluser_get,
  user_delete_get,
  user_updaterole_post,
  user_detail_get,
  user_update_post,
  user_signout_get,
  user_signup_post
}