import express from 'express';
import { sendMail } from '../controllers/chat.js';

const router = express.Router();

router.post('/contact', async (req, res) => {
  const { name, email, message } = req.body;

  // You could prepend the sender’s name if you like:
  const fullMessage = `From: ${name}\n\n${message}`;

  const success = await sendMail(email, fullMessage);

  if (success) {
    return res.json({ ok: true });
  } else {
    return res.status(500).json({ ok: false, error: 'Failed to send email' });
  }
});

export default router;
