re.prototype.loadcss = function(urls, cb) {
        var i, len, url;
        var appendcss = function(url, cb) {
                var s = re
                        .create("link")
                        .attr("rel", "stylesheet")
                        .attr("href", url);
                if (cb) {
                        s.on("error", function() {
                                cb(true, this);
                        });
                        s.on("load", function() {
                                cb(false, this);
                        });
                }
                return re
                        .find("script")
                        .get(0)
                        .prepend(s);
        };
        if (typeof urls === "string") {
                urls = [urls];
        }
        for (i = 0, len = urls.length; i < len; i++) {
                url = urls[i];
                appendcss(url, cb);
        }
};
