//this index file does routing for the server, handles the routes for HTML and the API

const path = require(`path`);
const router = require(`express`).Router();
const apiRoutes = require(`./api`);

//api routes
router.use(`/api`, apiRoutes);

//html route
router.use(function(req,res){
    res.sendFile(path.join(__dirname, `../client/build/index.html`));
});

module.exports = router;
