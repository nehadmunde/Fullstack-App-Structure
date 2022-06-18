const express=require("express");
const router=express.Router();
const Controller=require('../controllers/controller');

router.get('/',Controller.getAlldata);
// in thunder : http://localhost:9011/covid_paitient  ==> get


module.exports=router;