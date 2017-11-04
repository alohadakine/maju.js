re.prototype.getUnixtime = function() {
        return parseInt(Math.floor(Date.now() / 1000), 10);
};

