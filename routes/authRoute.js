import express from 'express';
import { registerController } from '../controllers/authController.js';

// Create a router object
const router = express.Router();

// Define the route for registration
router.post('/register', registerController);

// Export the router
export default router;
