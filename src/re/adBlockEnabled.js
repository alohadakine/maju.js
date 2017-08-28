window.re.prototype.adBlockEnabled = function(cb) {
        var js = document.createElement('script');
        js.src = 'https://js.revsci.net/gateway/gw.js';
        js.onerror = function() {
                // AdBlock is enabled
                cb(true);
                // Clean up
                this.parentNode.removeChild(this);
        };
        js.onload = function() {
                // AdBlock is NOT enabled
                cb(false);
                // Clean up
                this.parentNode.removeChild(this);
        };
        document.body.appendChild(js);
};

