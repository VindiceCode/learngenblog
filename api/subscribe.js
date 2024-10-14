 // This is a Node.js example
 export default async (req, res) => {
    const { email } = req.body;
    // Logic to insert email into Tigris goes here

    res.status(200).json({ message: 'Subscription successful' });
  };