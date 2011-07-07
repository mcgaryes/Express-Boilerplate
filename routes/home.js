module.exports = function(app) {

	// route
	app.param('/', function(req, res, next, id) {
        next();
    });

    // http response
    app.get('/', function(req, res, next) {
        res.render( 'home.ejs', { 
        	title:"Home Page",
        	location:"home"
        });
    });
    
}; 