const express = require('express');
const router = express.Router();

const userController = require('../api/registration');
const verifcationController = require('../api/verification');



//register route
router.post('/register', (req, res) => {
    console.log(req.body)
    var userReg = new userController(req.body, req.headers);
    userReg.register()
        .then(result => {
            res.status(result.code).json({
                result: result.result,
                code: result.code,
                message: result.message
            })
        })
        .catch(err => {
            console.log(err)
            res.status(err.code).json({
                result: err.result,
                code: err.code,
                error: err.error
            })
        })
})

//to verfy user activation link
router.post('/verify',(req,res)=>{
    console.log(req.body)
    verifcationController.verifyEmail(req.body.email,req.body.code)
    .then(verification=>{
        res.status(verification.code).json({
            result: verification.result,
            code: verification.code,
            message: verification.message
        })
    })
    .catch(verificationError=>{
        res.status(verificationError.code).json({
            result: verificationError.result,
            code: verificationError.code,
            message: verificationError.message
        })
    })
})

module.exports = router;