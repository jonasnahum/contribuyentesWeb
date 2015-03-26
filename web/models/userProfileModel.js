exports.init = function () {
    "use strict";
    var UserProfile = function (config) {
        config = config || {};
        this.password = config.username || "";
        this.email = config.email || "";
        this.provider = config.provider || "";
        this.username = config.username || "";
    };
    return UserProfile;
};