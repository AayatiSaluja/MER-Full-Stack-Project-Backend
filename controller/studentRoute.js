
const express = require("express");
const studentSchema = require("../model/studentSchema");
const studentRoute = express.Router();
const mongoose = require("mongoose");

studentRoute.post("/create-student",(req,res)=>{
    studentSchema.create(req.body, (err,data) => {
        if(err)
            return err;
        else
            res.json(data);
    })
})

studentRoute.get("/",(req,res)=>{
    studentSchema.find((err,data)=>{
        if(err)
            return err;
        else
            res.json(data);
    })
})
studentRoute.route("/update-student/:id")
.get((req,res)=>{
    studentSchema.findById(mongoose.Types.ObjectId(req.params.id),(err,data)=>{
        if(err)
            return err;
        else
            res.json(data);
    })
}).put((req,res)=>{
    studentSchema.findByIdAndUpdate(mongoose.Types.ObjectId(req.params.id),
    {$set: req.body},
    (err,data)=>{
        if(err)
            return err;
        else
            res.json(data);
    })
})

studentRoute.delete("/delete-student/:id",(req,res)=>{
    studentSchema.findByIdAndRemove(mongoose.Types.ObjectId(req.params.id),
    (err,data)=>{
        if(err)
            return err;
        else
            res.json(data);
    })
})

//studentRoute.get("/update-student/:id")
//studentRoute.put("/update-student/:id")

//_id -> 652cc54cc8286de95b52b15f -> ObjectID of raj
//http://localhost:4000/studentRoute/update-student/652cc54cc8286de95b52b15f

//Axios.put("http://localhost:4000/studentRoute/update-student/652cc54cc8286de95b52b15f")

module.exports = studentRoute;
