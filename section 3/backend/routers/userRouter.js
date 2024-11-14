const express = require('express');

const router = express.Router();

router.get('/add', (req,res) => {
    res.send('response from user add');
});

router.get('/getall', (req,res) => {
    res.send('getall response');
});
router.get('/getbyid', (req,res) => {
    res.send('getbyid');
});
router.get('/delete', (req,res) => {
    res.send('delete the response user');
});
router.get('/update', (req,res) => {
    res.send('update new responses');
});

module.exports = router;
