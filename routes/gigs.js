const express = require('express');
const router = express.Router();
const sequelize = require('../config/database');
const Gig = require('../models/Gig');
const { Op } = require('sequelize');
const {
    v4: uuid
  } = require('uuid');
//Get gig list
router.get('/', (req, res) => {
    Gig.findAll()
        .then(gigs => {
            console.log(gigs);
            // res.status(200).json(gigs);
            res.render('gigs', {
                gigs: gigs
            })
        })
        .catch(err => console.log(err));
});
//Display add gig form
router.get('/add', (req, res) => res.render('add'))
//Add a gig
router.post('/add', (req, res) => {
    let {title, technologies, budget, description, contact_email } = req.body;
    let errors = [];

    //Validate Fields
    if (!title) {
        errors.push({text: 'Please add a title'});
    }
    if (!technologies) {
        errors.push({text: 'Please add some technologies'});
    }
    if (!description) {
        errors.push({text: 'Please add a description'});
    }
    if (!contact_email) {
        errors.push({text: 'Please add a contact_email'});
    }

    // Check for errors
    if(errors.length > 0) {
        res.render('add', {
            errors,
            title,
            technologies,
            budget,
            description,
            contact_email 
        })
    } else {
        if (!budget) {
            budget = 'Unkown';
        } else {
            budget = `$${budget}`
        }
        //Make lowercase and remove space after comma
        technologies = technologies.toLowerCase().replace(/, /g, ',');
        //Insert into table
        Gig.create({
            id: uuid(),
            title,
            technologies,
            description,
            budget,
            contact_email
        })
            .then(gig => res.redirect('/gigs'))
            .catch(err => console.log(err))
    }
})

//Search for gigs
router.get('/search', (req, res) => {
    const { term } = req.query;
    Gig.findAll({
        where: {
            technologies: {
                [Op.like]: `%${term}%`
            }
        }
    })
        .then(gigs => res.render('gigs', {gigs: gigs}))
        .catch(err => console.log(err))
})


module.exports = router;