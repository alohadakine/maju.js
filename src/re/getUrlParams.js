re.prototype.getUrlParams = function(url) {
        var params = {};
        var link = document.createElement("a");
        link.setAttribute("href", url);
        var queryString = link.search;
        if (queryString.length === 0)
                return params;
        if (queryString.indexOf("?") === 0)
                queryString = queryString.substring(1);
        queryString.split("&").forEach(function(param) {
                var p = param.split("=");
                params[p[0].toString()] = p[1];
        });
        return params;
};
