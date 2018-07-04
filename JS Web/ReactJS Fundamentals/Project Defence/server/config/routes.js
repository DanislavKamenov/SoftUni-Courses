const routes = require('../routes/');
const auth = require('../config/auth');

module.exports = (app) => {
    app.use('/auth/', routes.authRoutes);
    app.use('/draft/', routes.draftRoutes);

    app.all('*', (req, res) => {
        res.status(404).json({
            success: false,
            message: '404 not found!'
        }); 
    });
};