const express =require('express');
const path = require('path'); // Permet d'avoir acces aux chemins de notre systeme de fichiers
const userRoutes = require('./routes/user');
const postsRoutes = require('./routes/posts');

const xss = require('xss-clean');
const helmet = require('helmet');
require('dotenv').config();

  const app = express();
  
  app.use((req, res, next) => { // permet de regler  le problème de CORS (Cross Origin Resource Sharing)
    res.setHeader('Access-Control-Allow-Origin', '*'); // permet à tout le monde d'acceder à l'API
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization'); // on donne l'autorisation d'utiliser certains Headers
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS'); // on donne l'autorisation d'utiliser certaines methodes
    next();
  });
  app.use(helmet());
  app.use(express.json());
  app.use(xss());
  app.use('/images', express.static(path.join(__dirname, 'images'))); // Permet que les requetes à /images/ servent le dossier images
  app.use('/api/users', userRoutes);
  app.use('/api/posts', postsRoutes)

  module.exports = app; 