module.exports = function(app) {
   
    // http response
    app.get('*', function(req, res, next) {
        res.render( '404.ejs' , { title:"404",location:'404' });
    });
   
}; 