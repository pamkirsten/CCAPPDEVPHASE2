const db = require('../models/db.js');

const controller = {

    getIndex: function(request, result) {
        result.render("landingpage");
    },

    getRegister: function(request, result) {
        result.render("signup");
    },

    createRegister: function(request, result) {
        var username = request.fields.username;
        var fname = request.fields.fname;
        var lname = request.fields.lname;
        var location = request.fields.location;
        var email = request.fields.email;
        var password = request.fields.password;
        var employment = request.fields.employment;
        var education = request.fields.education;
        var industry = request.fields.industry;
        var position = request.fields.position;
        var prevposition = request.fields.prevposition;
        var profileImage = request.fields.profileImage;
        var file = request.fields.file;

        db.findOne("users", {username: username}, function(result) {
            if (result == null) {
                db.insertOne("users", {
                    username: username,
                    fname: fname,
                    lname: lname,
                    location: location,
                    email: email,
                    password: password,
                    education: education,
                    employment: employment,
                    industry: industry,
                    position: position,
                    prevposition: prevposition,
                    profileImage: profileImage,
                    file: file
                }, function (error, data){
                    result.json({
                        "status": "success",
                        "message": "Signed up successfully."
                    })
                })
            } else {
                console.log("Username already taken!");
            }
        });
    },

    getLogin: function(request, result) {
        result.render("login");
    },

    goLogin: function(request, result) {
        var username = request.fields.username;
        var password = request.fields.password;
        db.findOne("users", {username: username}, function(result){
            if (result == null){
                console.log("Username not found!");
            } else {
                if (password == result.password){
                    console.log("Working!");
                } else {
                    console.log("Wrong Password!");
                }
            }
        })
    }
}

module.exports = controller;