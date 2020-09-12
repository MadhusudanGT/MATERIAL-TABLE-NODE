const { response } = require("express");
const Mattablemodel = require("../modules/mattable.model");



exports.create = (req, res) => {
    // Validate request
    if (!req.body) {
      res.status(400).send({ message: "Content can not be empty!" });
      return;
    }
  
    // Create a Tutorial
    const matatble = new Mattablemodel(req.body);
  
    // Save Tutorial in the database
    matatble
      .save()
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Tutorial."
        });
      });
  };

  exports.findAll = (req, res) => {
    // const title = req.query.id;
    // var condition = id ? { id: { $regex: new RegExp(id), $options: "i" } } : {};
  
    Mattablemodel.find()
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving tutorials."
        });
      });
  };

  exports.findOne = (req, res) => {
    const id = req.params.id;
  
    Mattablemodel.findOne(id,{ useFindAndModify: false })
      .then(data => {
        if (!data)
          res.status(404).send({ message: "Not found  with id " + id });
        else res.send(data);
      })
      .catch(err => {
        res
          .status(500)
          .send({ message: "Error retrieving with id=" + id });
      });
  };

  exports.update =async (req, res) => {
    if (!req.body) {
      return res.status(400).send({
        message: "Data to update can not be empty!"
      });
    }
  
    const givenid = req.params.id;
  
    console.log(givenid)
    //console.log(req.body)
    try {
      let data=await Mattablemodel.findById(req.body._id)
      
      data.name=req.body.name
      data.progress=req.body.progress;
      data.color=req.body.color;

     await data.save()
      console.log(data)
     res.send(data)
    } catch (error) {
      res.send(error)
    }
     
   };


  exports.delete = (req, res) => {
    const namefind = req.params._id;
  
    Mattablemodel.findOneAndRemove(namefind,{ useFindAndModify: false })
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Cannot delete with id=${id}. Maybe  was not found!`
          });
        } else {
          res.send({
            message: "id was deleted successfully!"
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete  with id=" + id
        });
      });
  };

