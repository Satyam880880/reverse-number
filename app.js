const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Listing = require("./models/listing.js");
const path = require("path");

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

main()
.then(()=>{
    console.log("connected to DB");
})
.catch((err) =>{
    console.log(err);
});

async function main() {
  await mongoose.connect(MONGO_URL);
}

app.set("view engine", "ejs");
app.set("views",path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));

app.get("/",(req,res) =>{
    res.send("Hi I am root");
});

/*
 app.get("/test",async(req,res)=>{
  let sampleListing = {
    title : "My new Villa",
    description : "By the beach",
    price : 1200,
    location : "jaunpur",
    country : "india"
};

  Listing.create(sampleListing)
  .then(createdListing =>{
    console.log("Listing created :",createdListing);
  })
  .catch(error =>{
    console.error("Error creatibng Listings :", error);
  });

});
 */
    // Index Route

app.get("/Listing",async(req , res) =>{
  const allListings = await Listing.find({});
  res.render("listings/index.ejs", { allListings });
   });
 
   // show Route

   app.get("/Listings/:id", async (req , res) =>{
    let {id} = req.params;
      const listing = await Listing.findById(id);
       res.render("listings/show.ejs", {listing});
   });
app.listen(5000, () => {
    console.log("server is listening on port 5000");
});