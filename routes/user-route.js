var express = require('express');
var router = express.Router();
var connection=require('../database');

router.get('/insertuser', function(req, res, next) {
    res.render('insertuser-form')
});

router.get('/loginform', function(req, res, next) {
    res.render('login-form')
});

router.post('/adduser', function(req, res){
    const data = [req.body.username, req.body.uemail, req.body.password,req.body.contact];
	var sql = "INSERT INTO tbl_user (user_name,user_email,user_password,user_contact) VALUES (?,?,?,?)";
	connection.query(sql,data,function (err, result) {
  	  if (err) throw err;
   		 console.log("1 record inserted");
		 res.redirect('/');
 	 });
});

module.exports = router;