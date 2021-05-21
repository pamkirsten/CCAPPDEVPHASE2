const db = require('../models/db.js');

const controller = {

    getIndex: function(request, result) {
        result.render("landingpage");
    }

}

module.exports = controller;