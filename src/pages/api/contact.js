export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { name, email, message } = req.body;

  // Validate input
  if (!name || !email || !message) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  // Basic email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ message: 'Invalid email address' });
  }

  try {
    // Create mailto link for server-side or use a service
    // For now, we'll return success and use mailto on the client
    // In production, you'd integrate with SendGrid, Nodemailer, or similar
    
    // Return the formatted message details
    return res.status(200).json({ 
      message: 'Message received successfully',
      data: { name, email, message }
    });
  } catch (error) {
    console.error('Error processing contact form:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
}
