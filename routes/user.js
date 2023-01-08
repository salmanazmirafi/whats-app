const { register } = require("../controller/userCon");

const route = require("express").Router();

//-------------------User----------------
// Register User
route.post("/register", register);
// Login User
route.post("/login");
// User Details
route.get("/me");
// Update User Info
route.put("/me/:id");
// Delete User Info
route.delete("/me/:id");

//-------------------Admin----------------
// All User
route.get("/admin/user");
// User Details
route.get("/admin/user/:id");
// Change User Roulers
route.put("/admin/user/:id");
// Delete User Info
route.delete("/admin/user/:id");

module.exports = route;
