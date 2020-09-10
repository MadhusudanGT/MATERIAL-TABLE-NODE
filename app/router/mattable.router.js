module.exports = app => {
    const mattable = require("../controllers/matable.controllers");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", mattable.create);
  
    // Retrieve all Tutorials
    router.get("/", mattable.findAll);
  
    // Retrieve all published Tutorials
    //router.get("/published", mattable.findAllPublished);
  
    // Retrieve a single Tutorial with id
    router.get("/:_id", mattable.findOne);
  
    // Update a Tutorial with id
    router.put("/:_id", mattable.update);
  
    // Delete a Tutorial with id
    router.delete("/:_id", mattable.delete);
  
    // Create a new Tutorial
    //router.delete("/", mattable.deleteAll);
  
    app.use('/api/Mattable', router);
  };