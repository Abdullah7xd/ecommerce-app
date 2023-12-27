import express from 'express';
import { loginController, registerController, testController } from '../controllers/authController.js';
import { isAdmin, requireSignIn } from '../middlewares/authMiddleware.js';

// Create a router object
const router = express.Router();

// Define the route for registration
router.post('/register', registerController);

//LOGIN || POST

router.post('/login',loginController)

//test routes
router.get('/test',requireSignIn,isAdmin, testController)


// Export the router 
export default router;
