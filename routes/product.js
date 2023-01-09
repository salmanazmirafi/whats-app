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
route.post("/auth/register");

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

module.exports = route;
