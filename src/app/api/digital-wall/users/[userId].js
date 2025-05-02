import { prisma } from "lib/prisma";


export default async function handler(req, res) {
  const { userId } = req.query;

  if (req.method === 'GET') {
    try {
      const user = await prisma.digital_wall_users.findUnique({
        where: {
          user_id: userId, 
        },
      });

      if (user) {
        res.status(200).json(user);
      } else {
        console.log('User not found')
        res.status(404).json({ message: 'User not found' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  } else {
    // Handle any non-GET requests
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
