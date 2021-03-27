var express = require('express');
var router = express.Router();
var connection=require('../database');


router.post('/addmarks', function(req, res){
    const data = [req.body.sname, req.body.roll, req.body.m1,req.body.m2,req.body.m3];
	var sql = "INSERT INTO tbl_student (sname,rollno,mark1,mark2,mark3) VALUES (?,?,?,?,?)";
	connection.query(sql,data,function (err, result) {
  	  if (err) throw err;
   		 console.log("1 record inserted");
		 res.redirect('/viewmark');
 	 });
});


router.get('/viewmark', function(req, res, next) {
    var sql='SELECT * FROM tbl_student';
    connection.query(sql, function (err, data, fields) {
    if (err) throw err;
   	 res.render('viewmark-form', { userData: data});
  });
});
router.get('/delete/:id', function(req, res) {
      console.log(" record");
	  var id= req.params.id;
	  var sql = 'DELETE FROM tbl_student WHERE id = ?';
	  connection.query(sql,id, function (err, data) {
	  if (err) throw err;
	  console.log(" record(s) deleted");
	});
	res.redirect('/viewmark');
  });


router.get('/editmark/:id', function(req, res) {
	var userid=req.params.id;
    var sql='SELECT * FROM tbl_student where id=?';
    connection.query(sql,userid, function (err, result, fields) {
        if (err) throw err;
		console.log(userid);
        res.render('editmark-form.ejs', {
            userData: result[0]
        });
  });
});

router.post('/display', function(req, res) {
    const data = [req.body.sname,req.body.roll, req.body.m1,req.body.m2,req.body.m3,req.body.id];
	var sql = "UPDATE tbl_student set sname=?,rollno=?,mark1=?,mark2=?,mark3=? WHERE id=?";
	connection.query(sql,data,function (err, result) {
  	  if (err) throw err;
   		 console.log("1 record edited");
		 res.redirect('/viewmark');
 	 });
});

module.exports = router;