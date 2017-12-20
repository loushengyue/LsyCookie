/* *
 *      LsyCookie
 *      author loushengyue
 *      link http://www.loushengyue.com
 *      version 1.0.1
 *      methods [set(),getByKey(),getAll(),clearByKey(),clearAll()]
 */
;(function (win, doc) {
    /* *
     *      The constructor of LsyCookie
     *      version 1.0.1
     */
    var mycookie = function () {
        this.version = 'Lsy cookie 1.0.1';
    };
    /* *
     *      create cookie by key and value, and set expires time
     *      key     typeof string
     *      val     typeof string
     *      time    typeof number[7days]
     */
    mycookie.prototype.set = function (key, val, time) {
        if (typeof key !== 'string' || typeof val !== 'string') {
            return false;
        }
        time = time || 7 * 24 * 3600;
        var exp = new Date();
        exp.setTime(exp.getTime() + time * 1000);
        doc.cookie = key + '=' + val + ';expires=' + exp.toGMTString();
    };
    /* *
     *      remove cookie by key
     *      key typeof string
     */
    mycookie.prototype.clearByKey = function (key) {
        setCookie(key, "", -1);
    };
    /* *
     *      remove all cookies
     */
    mycookie.prototype.clearAll = function () {
        var keys = Object.keys(getAllCookies());
        keys.forEach(function (item) {
            clearCookieByKey(item);
        });
    };
    /* *
     *      get all cookies, and return object
     */
    mycookie.prototype.getAll = function () {
        var cookies = doc.cookie.split(/;\s/g);
        var cookieObj = {};
        cookies.forEach(function (item) {
            var key = item.split('=')[0];
            cookieObj[key] = item.split('=')[1];
        });
        return cookieObj;
    };
    /* *
     *      get cookie by key
     *      key typeof string
     */
    mycookie.prototype.getByKey = function (key) {
        return getAllCookies()[key];
    };
    /* *
     *      init function, return new mycookie()
     */
    mycookie.init = function () {
        return new this();
    };
    /* *
     *      output LsyCookie for customer
     */
    win.LsyCookie = mycookie.init();
})(window, document);