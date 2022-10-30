const controlRouter = require('./control.route');
const roomRouter = require('./room.route');
const cartRouter = require('./cart.route');
const userRouter = require('./user.route');
const orderRouter = require('./order.route');
const categoryRouter = require('./category.route');
const { authenticateToken } = require('../middleware/JWTAction');
const { isAuth } = require('../middleware/AuthenticateSession');

const { cloudinary } = require('../utils/cloudinary/cloudinary');
const db = require('../models/index');

const initRoutes = (app) => {
  app.use('/control', controlRouter);
  app.use('/room', roomRouter);
  app.use('/category', categoryRouter);
  app.use('/cart', authenticateToken, isAuth, cartRouter);
  app.use('/order', authenticateToken, isAuth, orderRouter);
  app.use('/information', authenticateToken, isAuth, userRouter);

  app.get('/vi', (req, res) => {
    res.cookie('lang', 'vi', { maxAge: 900000 });
  });

  app.get('/', authenticateToken, isAuth, async (req, res) => {
    const rooms = await db.Room.findAll();
    res.render('index', {
      homepage: 'homepage',
      rooms,
    });
  });

  app.get(
    '/login',
    (req, res) => {
      // req.session.isAuth = true;
      // console.log(req.session);
      // console.log(req.session.id);
      res.render('login/login', {
        data: req.query,
      });
    },
  );
  app.post('/api/upload', async (req) => {
    try {
      const fileStr = req.body.image;
      const uploadedResponse = await cloudinary.uploader.upload(fileStr, {
        upload_preset: 'dev_setups',
      });
      console.log(uploadedResponse);
    } catch (e) {
      console.log(e);
    }
  });

//   app.get('/api/upload', (req, res) => {
//     res.render('api/upload');
//   });
//   app.get('/api/images', async (req, res) => {
//     const { resources } = await cloudinary.search
//       .expression('folder:dev_setups')
//       .sort_by('public_id', 'desc')
//       .max_results(30)
//       .execute();
//     const publicIds = resources.map((file) => file.public_id);
//     res.send(publicIds);
//   });
//   app.get('/api/image', async (req, res) => {
//     const result = [];
//     // const sss = await cloudinary.api.root_folders(function (error, result) { console.log(result); });
//     await listResources(null, result, 0);
//   });
// };
// async function listResources(next_cursor, result) {
//   const options = { resource_type: 'image', folder: 'dev_setups', max_results: 30 };
//   if (next_cursor) {
//     options.next_cursor = next_cursor;
//   }
//   await cloudinary.api.resources(options, async (error, res) => { // res here is result, not response
//     if (error) {
//       console.log(error);
//     }
//     const more = res.next_cursor;
//     resources = res.resources;
//     console.log('length is: ', resources.length);
//     let j = 0;
//     for (var res in resources) {
//       res = resources[res];
//       const resultTemp = [];
//       const url = res.secure_url;
//       resultTemp.push(j);
//       // resultTemp.push(url);
//       result.push(resultTemp);
//       j += 1;
//     }
//     console.log(result);
//     if (more) { await listResources(more, result); } else { console.log('done'); }
//   });
};
module.exports = initRoutes;
