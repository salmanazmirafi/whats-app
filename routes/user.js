const {
  register,
  login,
  logOut,
  userDetails,
  updateUser,
  deleteUser,
  singleUser,
  finAll,
  roulersChange,
  userDelete,
  adminLogin,
} = require("../controller/userCon");
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");

const route = require("express").Router();

//-------------------User----------------
/**
 * Register
 * Create New User
 * Name , Email , password , Avatar
 * @route "http://localhost/api/v1/auth/register"
 * @method POST
 * @visibility public
 */
route.post("/auth/register", register);

/**
 * User Login
 * Login And Provide Token
 * @route "http://localhost/api/v1/auth/login"
 * @method POST
 * @visibility public
 */
route.post("/auth/login", login);

/**
 * User Login
 * Login And Provide Token
 * @route "http://localhost/api/v1/auth/logout"
 * @method GET
 * @visibility public
 */
route.get("/auth/logout", isAuthenticatedUser, logOut);

/**
 * Get User Details
 * @route "http://localhost/api/v1/me"
 * @method GET
 * @visibility public
 */
route.get("/me", isAuthenticatedUser, userDetails);

/**
 * Forgot Password
 * @method PUT
 * @route "http://localhost/api/v1/user/recovery-password/
 * @visibility public
 */
// Forgot Password
// TODO:
// Change Password

/**
 * Update User
 * @route "http://localhost/api/v1/me/update"
 * @method PATCH
 * @visibility public
 */
route.patch("/me/update", isAuthenticatedUser, updateUser);

/**
 * Delete User
 * @route "http://localhost/api/v1/me/update"
 * @method DELETE
 * @visibility public
 */
route.delete("/me/delete", isAuthenticatedUser, deleteUser);

//-------------------Admin----------------

/**
 * Get All User Find Adn Query
 * - filter
 * - sort
 * - pagination
 * - select properties
 * @method POST
 * @route "http://localhost/api/v1/admin
 * @visibility private
 */
route.post("/admin", isAuthenticatedUser, authorizeRoles("admin"), adminLogin);

/**
 * Get All User Find Adn Query
 * - filter
 * - sort
 * - pagination
 * - select properties
 * @method GET
 * @route "http://localhost/api/v1/admin/users?sort["by","name"]"
 * @visibility private
 */
route.get("/admin/users", isAuthenticatedUser, authorizeRoles("admin"), finAll);

/**
 * Get Single USer,
 * @method GET
 * @route "http://localhost/api/v1/admin/user/:id
 * @visibility private
 */
route.get(
  "/admin/user/:id",
  isAuthenticatedUser,
  authorizeRoles("admin"),
  singleUser
);

/**
 * Get Single USer,
 * @method PUT
 * @route "http://localhost/api/v1/admin/user/:id
 * @visibility private
 */

route.put(
  "/admin/user/:id",
  isAuthenticatedUser,
  authorizeRoles("admin"),
  roulersChange
);

/**
 * Get Single USer,
 * @method DELETE
 * @route "http://localhost/api/v1/admin/user/:id
 * @visibility private
 */

route.delete(
  "/admin/user/:id",
  isAuthenticatedUser,
  authorizeRoles("admin"),
  userDelete
);

module.exports = route;
