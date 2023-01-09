const {
  register,
  login,
  logOut,
  userDetails,
  updateUser,
  deleteUser,
} = require("../controller/userCon");
const { isAuthenticatedUser } = require("../middleware/auth");

const route = require("express").Router();

//-------------------User----------------
/**
 * Register
 * Create New User
 * Name , Email , password , Avatar
 * @route "http://localhost/api/v1/auth/register"
 * @method POST
 */
route.post("/auth/register", register);

/**
 * User Login
 * Login And Provide Token
 * @route "http://localhost/api/v1/auth/login"
 * @method POST
 */
route.post("/auth/login", login);

/**
 * User Login
 * Login And Provide Token
 * @route "http://localhost/api/v1/auth/login"
 * @method POST
 */
route.get("/auth/logout", isAuthenticatedUser, logOut);

/**
 * Get User Details
 * @route "http://localhost/api/v1/me"
 * @method GET
 */
route.get("/me", isAuthenticatedUser, userDetails);

/**
 * Update User
 * @route "http://localhost/api/v1/me/:id"
 * @method UPDATE
 */
route.patch("/me/update", isAuthenticatedUser, updateUser);

/**
 * Delete User
 * @route "http://localhost/api/v1/me/:id"
 * @method DELETE
 */
route.delete("/me/delete", isAuthenticatedUser, deleteUser);

//-------------------Admin----------------

// All User
route.get("/admin/user");
route.get("/admin/user/:id");
/**
 * Get all users, include
 * - filter
 * - sort
 * - pagination
 * - select properties
 * @method Get
 * @route api/v1/users?sort["by","name"]
 * @visibility private
 */
route.put("/admin/user/:id");
// Delete User Info
route.delete("/admin/user/:id");

module.exports = route;
