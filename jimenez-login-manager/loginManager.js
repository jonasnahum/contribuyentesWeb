exports.init = function () {
    var couchdb= require("jimenez-couchdb-endpoints");
    var db = new couchdb.Database("contribuyentes_users");
    
    "use strict";
    var LoginManager = function () {
    };
    LoginManager.prototype.verifyCredentials = function (userName, password, done) {
        
        var query = new couchdb.Query("contribuyentes_users", "contribuyentes", "byusername");
        var endPoint = query.getEndPoint({
            startkey: encodeURIComponent('"' + userName + '"'),
            endkey: encodeURIComponent('"' + userName + '"'),
        });
        
        var factory = couchdb.PromiseFactory();
        var promise = factory.getPromise(endPoint);
        
        promise.then(function(args){
            var body = JSON.parse(args[1]);
            var doc = null;
            var success = false;
            
            if (body.rows.length){
                doc = body.rows[0];
                if (doc.username === userName && doc.password === password){
                    success = true;
                }
            }
            
            if (success) {
                done(null, doc);
            } else {
                done(null, null);
            }                
        });
        
        promise.fail(function(err, couchRes, body){
            done(err, null);
        });
        
        
    };
    LoginManager.prototype.serializeUser = function (user, done) {
        done(null, user.id);
    };
    LoginManager.prototype.deserializeUser = function (id, done) {
        var endpointView = db.view(id);
        
        done(null, {id: id, name: id});
    };
                                           
    return LoginManager;
};