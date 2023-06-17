const express = require('express');
const { createConnection } = require('typeorm');
const { v4: uuidv4 } = require('uuid');
const { ChickenSchema, Chicken } = require('./models/chicken');

const app = express();
app.use(express.json());


app.post('/chickens', async (req, res) => {
    try {
      const { name, weight } = req.body;
  
      const connection = await createConnection({
          type: 'postgres',
          host: 'localhost',
          port: 5432,
          username: 'postgres',
          password: '123456',
          database: 'testdb2',
          synchronize: true,
          logging: true,
          entities: [
              ChickenSchema,
          ],
        });
      const chickenRepository = connection.getRepository(Chicken);
  
      const chicken = new Chicken();
        user.id = uuidv4();
        user.name = name;
        user.weight = weight; 
  
      await chickenRepository.save(chicken1);
  
      res.json(chicken);
    } catch (error) {
      console.error(error);
      res.status(500).json({ errorr: 'Internal Server Error',error });
    }
  });

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});