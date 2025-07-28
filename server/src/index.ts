import express from 'express';
import dotenv from 'dotenv';
import userRoutes from './routes/userRoutes';
import dishesRoutes from './routes/dishesRoutes';
import swaggerUi from 'swagger-ui-express';
import YAML from 'yamljs';
import path from 'path';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// User routes
// TODO: To Manage users using database
app.use('/api/users', userRoutes);

// Dishes routes
app.use('/api/dishes', dishesRoutes);

const swaggerPath = path.join(__dirname, '../openapi/api.yaml');
const swaggerDocument = YAML.load(swaggerPath);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(port, () => {
  console.log(`✅ Server running at http://localhost:${port}`);
  console.log(`📘 Swagger docs available at http://localhost:${port}/api-docs`);
});
