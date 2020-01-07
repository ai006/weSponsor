
const express = require('express');


const userAddedJobs = require('../userAddedSchema');

//initialize the router
const router =express.Router();

/* this is our create method, this method adds 
new data sent by the user to our database.
*/
router.post('/userAddedJob', (req, res) => {

    console.log("in user added router");
    console.log(req.body);
    let job  = new userAddedJobs();
    
    const { data } = req.body;
    if (data.CompanyName.length < 1) {    //check to make  sure the company name is longer than 
       return res.json({                  //one character, if company name is 0 return 
         success: false,                  //error message
         error: 'MISSING COMPANY NAME',
       });
    }

    job.id = data.id;                     //update the user added database
    job.CompanyName = data.CompanyName;
    job.educationLevel = data.educationLevel;
    job.city = data.city;
    job.country = data.country;
    job.link = data.link;
    job.job = data.job;
    job.about = data.about;

    job.save((err) => {                     //save to database and return true
      if (err) return res.json({ success: false, error: err });
      return res.json({ success: true });
    });
  });

  //export default router;
  module.exports = router;  