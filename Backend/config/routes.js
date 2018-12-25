const passport = require('passport');
const requiredAuth = passport.authenticate('jwt', {
    session: false
});

const auth = require('../api/middleware/auth');
const siteController = require('../api/controllers/homePage');
const userController = require('../api/controllers/userController');
const productController = require('../api/controllers/productController');
const roleController = require('../api/controllers/roleController');

exports.initRoutes = function (app, express) {
    app.get('/', siteController.index);

    const apiRoutes = express.Router();

    //user routes
    var userRoutes = express.Router();
    apiRoutes.use('/user', userRoutes);
    userRoutes.post('/login', userController.login);
    userRoutes.get('/getAll',requiredAuth,userController.getAll);
    userRoutes.post('/updateRole',requiredAuth, userController.updateRole);
    userRoutes.post('/create',requiredAuth, userController.create);
    userRoutes.post('/delete',requiredAuth, userController.delete);
    // userRoutes.post('/signup',userController.signup);
    

    var productRoutes = express.Router();
    apiRoutes.use('/product', productRoutes);
    productRoutes.get('/getAll',productController.getAll);
    

    var roleRoutes = express.Router();
    apiRoutes.use('/role', roleRoutes);
    roleRoutes.get('/getAll',requiredAuth,roleController.getAll);
    roleRoutes.post('/create',requiredAuth,roleController.create);
    roleRoutes.post('/getObject',requiredAuth,roleController.getObjectByRole);
    roleRoutes.post('/updateObjectRole',requiredAuth,roleController.update);

    app.use('/api', apiRoutes);
}