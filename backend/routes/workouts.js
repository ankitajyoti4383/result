import express from 'express';
import workout from '../models/workoutModel.js';
const workout = express.Router();
const workoutRoutes = express.Router();

const router=express.Router()

router.get('/',(req,res)=>{
    res.json({mssg:'GET all workouts'})
})
router.get('/:id',(req,res)=>{
    res.json({mssg:'GET a single workouts'})
})
router.post('/',(req,res)=>{
    const{title,load,resp}=req.body
    res.json({mssg:'POST a new workouts'})
})
router.delete('/:id',(req,res)=>{
    res.json({mssg:'DELETE a workouts'})
})
router.patch('/:id',(req,res)=>{
    res.json({mssg:'UPDATE a workouts'})
})

module.exports=router
