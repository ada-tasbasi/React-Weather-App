const express = require("express"),
      Weather = require("../models/weather");

const router = express.Router();

router.get("/:city", (req,res)=>{
    let city = req.params.city;
    Weather.retrieveCity(city, (err, weather)=>{
        if(err) return res.json(err);
        return res.json(weather);
    });
});

module.exports = router;