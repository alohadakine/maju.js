re.prototype.compareJson = function(el) {
        var aIsInB = function(a, b) {
                for (var prop in a) {
                        if (a.hasOwnProperty(prop)) {
                                if (b.hasOwnProperty(prop)) {
                                        if (typeof a[prop] === "object") {
                                                if (!aIsInB(a[prop], b[prop]))
                                                        return false;
                                        } else {
                                                if (a[prop] !== b[prop])
                                                        return false;
                                        }
                                } else {
                                        return false;
                                }
                        }
                }
                return true;
        };
        return (aIsInB(a, b) && aIsInB(b, a));
};

