import express from 'express';
import ClassesController from './controllers/ClassesController';
import ConnectionsControler from './controllers/ConnectionsController';

const routes = express.Router();
const classesController = new ClassesController();
const conneciontController = new ConnectionsControler();

routes.post('/classes', classesController.create);
routes.get('/classes', classesController.index);
routes.get('/all', classesController.all);

routes.post('/connections', conneciontController.create);
routes.get('/connections', conneciontController.index);

export default routes;