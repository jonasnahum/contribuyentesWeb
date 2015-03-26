exports.init = function () {
    "use strict";
    var LoginManager = function () {
    };
    LoginManager.prototype.verifyCredentials = function (userName, password, done) {
        if (userName === password) {
            done(null, {id: userName, name: userName});
        } else {
            done(null, null);
        }
    };
    LoginManager.prototype.serializeUser = function (user, done) {
        done(null, user.id);
    };
    LoginManager.prototype.deserializeUser = function (id, done) {
        done(null, {id: id, name: id});
    };
                                           
    return LoginManager;
};