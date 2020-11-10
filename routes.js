const express = require('express');
const routes = express.Router();

const jobController = require('./src/controllers/JobController');

routes.get("/jobs", jobController.index);
routes.get("/jobs/:id", jobController.show);
routes.post("/jobs", jobController.store);
routes.put("/jobs/:id", jobController.update);
routes.delete("jobs/:id", jobController.destroy);

module.express = routes;