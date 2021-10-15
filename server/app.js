import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';

import route from './router/route.js';

const app = express();

const PORT = 5000;
const url = 'mongodb+srv://dev:dev@cluster0.ogo1o.mongodb.net/test';

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use('/api', route);

mongoose.connect(url).then(() => console.log('db connected'));

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}`));