// Module Intort
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const ErrorHandler = require("../utils/erorHeandelar");
const User = require("../models/User");
const sendToken = require("../utils/jwtToken");

//-------------------User----------------
// Register User
exports.register = catchAsyncErrors(async (req, res, next) => {
  const { name, email, password, avatar } = req.body;
  if (!name || !email || !password)
    return next(new ErrorHandler("Invalid Data", 404));

  try {
    let user = await User.findOne({ email });
    if (user) return next(new ErrorHandler("User Already exist", 404));

    user = new User({
      name,
      email,
      password,
      avatar,
    });
    const save = await user.save();
    sendToken(save, 201, res);
  } catch (err) {
    next(new ErrorHandler(err));
  }
});
// Login User
exports.login = catchAsyncErrors(async (req, res, next) => {
  const { email, password } = req.body;

  // checking if user has given password and email both
  if (!email || !password) return next(new ErrorHandler("Invalid Data", 404));

  const user = await User.findOne({ email }).select("+password");
  if (!user) return next(new ErrorHandler("Invalid email or password", 404));

  const isPasswordMatched = await user.comparePassword(password);

  if (!isPasswordMatched) {
    return next(new ErrorHandler("Invalid email or password", 404));
  }

  sendToken(user, 200, res);
});

// Logout User
exports.logOut = catchAsyncErrors(async (_req, res, _next) => {
  res.cookie("token", null, {
    expires: new Date(Date.now()),
    httpOnly: true,
  });
  res.status(200).json({ message: "Log Out" });
});

// User Details
exports.userDetails = catchAsyncErrors(async (req, res, next) => {
  const userId = req.user.id;

  try {
    const user = await User.findById(userId);
    if (!user) return next(new ErrorHandler("User Not Found", 400));
    res.status(200).json(user);
  } catch (err) {
    next(new ErrorHandler(err));
  }
});

// Update User Info
exports.updateUser = catchAsyncErrors(async (req, res, next) => {
  const { name, email, avatar } = req.body;
  const user = req.user.id;

  try {
    const users = await User.findOne({ email });
    if (!user) return next(new ErrorHandler("Have a Already email", 404));

    const newD = await User.findByIdAndUpdate(
      user,
      { name, email, avatar },
      {
        new: true,
        runValidators: true,
        useFindAndModify: false,
      }
    );
    res.status(200).json(newD);
  } catch (err) {
    next(new ErrorHandler(err));
  }
});

// Forgot Password
// TODO:
// Change Password

// Delete User Info
exports.deleteUser = catchAsyncErrors(async (req, res, next) => {
  try {
    await User.findByIdAndRemove(req.user.id);
    res.status(200).json("User Deleted");
  } catch (err) {
    next(new ErrorHandler(err));
  }
});

//-------------------Admin----------------
// Admin Login

exports.adminLogin = catchAsyncErrors(async (req, res, next) => {
  const { email, password } = req.body;

  // checking if user has given password and email both
  if (!email || !password) return next(new ErrorHandler("Invalid Data", 404));

  const user = await User.findOne({ email }).select("+password");
  if (!user) return next(new ErrorHandler("Invalid email or password", 404));

  const isPasswordMatched = await user.comparePassword(password);

  if (!isPasswordMatched) {
    return next(new ErrorHandler("Invalid email or password", 404));
  }

  sendToken(user, 200, res);
});

// All User
exports.finAll = catchAsyncErrors(async (_req, res, next) => {
  try {
    const user = await User.find();
    res.status(200).json(user);
  } catch (err) {
    next(new ErrorHandler(err));
  }
});
// User Details
exports.singleUser = catchAsyncErrors(async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return next(new ErrorHandler("User Not Found", 401));
    res.status(200).json(user);
  } catch (err) {
    next(new ErrorHandler(err));
  }
});
// Change User Roulers
exports.roulersChange = catchAsyncErrors(async (req, res, next) => {
  const { role } = req.body;
  try {
    const user = await User.findByIdAndUpdate(
      req.params.id,
      { role },
      { new: true, runValidators: true, useFindAndModify: true }
    );
    res.status(200).json(user);
  } catch (err) {
    next(new ErrorHandler(err));
  }
});
// Delete User Info
exports.userDelete = catchAsyncErrors(async (req, res, next) => {
  try {
    const user = await User.findByIdAndRemove(req.params.id);
    if (!user) return next(new ErrorHandler("User Not Found"));
    res.status(203).json({ message: "User Delete" });
  } catch (err) {
    next(new ErrorHandler(err));
  }
});
