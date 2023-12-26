import express from 'express';
import { loginController, registerController } from '../controllers/authController.js';

// Create a router object
const router = express.Router();

// Define the route for registration
router.post('/register', registerController);

//LOGIN || POST

router.post('/login',loginController)


// Export the router
export default router;
