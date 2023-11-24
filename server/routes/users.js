import express from 'express';
import {
    getUser,
    getUserFriends,
    addRemoveFriend
} from '../controllers/users.js'
import { verifyToken } from '../middleware/auth.js';

const router = express.Router();
router.get('/:id', verifyToken, getUser);
router.get('/:id/friends', verifyToken, getUserFriends);
router.patch('/:id/:friendId', addRemoveFriend);

export default router;