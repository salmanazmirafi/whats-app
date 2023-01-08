// Module Intort
const catchAsyncErrors = require("../middleware/catchAsyncErrors");

//-------------------User----------------
// Register User
exports.register = catchAsyncErrors(async (req, res, _next) => {
  res.status(200).json({ message: "Hi There" });
});
// Login User
// User Details
// Update User Info
// Delete User Info

//-------------------Admin----------------
// All User
// User Details
// Change User Roulers
// Delete User Info
