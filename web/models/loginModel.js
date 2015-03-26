exports.init = function () {
    "use strict";
    var LoginModel = function (username, password) {
        this.username = username || "";
        this.password = password || "";
    };
    return LoginModel;
};