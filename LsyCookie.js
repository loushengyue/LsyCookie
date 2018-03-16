/* *
 *      LsyCookie
 *      author loushengyue
 *      website http://www.loushengyue.com
 *      version 1.2.4
 *      methods [setItem(),getItem(),getAll(),removeItem(),,clear()]
 */
;(function (win, doc) {
    var LsyCookie, expiresTime = 24 * 3600, version = '1.2.4';

    LsyCookie = function () {
        this.version = 'LsyCookie ' + version;
    };
    /* *
     *      create cookie by key and value, and set expires time
     *      key     typeof string
     *      val     typeof string
     *      path    typeof string
     *      time    typeof number[7days]
     */
    LsyCookie.prototype.setItem = function (key, val, time, path) {
        var exp, pathStr = '';
        checkStr(key);
        val = resetVal(val);
        time = resetTime(time);
        exp = new Date();
        exp.setTime(exp.getTime() + time * 1000);
        if (path) {
            checkStr(path);
            path = resetPath(path);
            pathStr = path ? ';path=' + path : pathStr;
        }
        doc.cookie = key + '=' + val + ';expires=' + exp.toGMTString() + pathStr;
    };
    /* *
     *      remove cookie by key
     *      key typeof string
     */
    LsyCookie.prototype.removeItem = function (key, path) {
	path = path ? path : './';
        this.set(key, '', -1, path);
    };
    /* *
     *      remove all cookies
     */
    LsyCookie.prototype.clear = function () {
        var _this = this;
        var keys = Object.keys(_this.getAll());
        keys.forEach(function (item) {
            _this.removeItem(item);
        });
    };
    /* *
     *      get all cookies, and return object
     */
    LsyCookie.prototype.getAll = function () {
        var cookies = doc.cookie.split(/;\s/);
        var cookieObj = {};
        cookies.forEach(function (item) {
            var key = item.split('=')[0];
            var val = item.split('=')[1];
            val = resetJsonStr(val);
            cookieObj[key] = val;
        });
        return cookieObj;
    };
    /* *
     *      get cookie by key
     *      key typeof string
     */
    LsyCookie.prototype.getItem = function (key) {
        return this.getAll()[key];
    };
    /* *
     *      reset expires time
     *      time     typeof number[7days]
     */
    function resetTime(time) {
        if (time != null) {
            if (isNaN(time)) {
                throw new Error('The typeof time argument in resetTime(time){...} must be number. But the typeof your argument "' + time + '" is ' + typeof time);
            }
            time = time > 0 ? time : -1;
        } else {
            time = expiresTime;
        }
        return time;
    }

    /* *
     *      ckeck val is the right typeof string, if not, change it.
     *      val     typeof String,Array,Object
     *      return  typeof string
     */
    function resetVal(val) {
        if (typeof val === 'object') {
            val = JSON.stringify(val);
        }
        return val;
    }

    /* *
     *      ckeck key is the right typeof string, if not, change it.
     *      val     typeof String,Array,Object
     *      return  typeof string
     */
    function checkStr(key) {
        if (typeof key != 'string') {
            throw new Error('The typeof str argument in setItem(key[string],value[string|object]){...} must be string. But the typeof your argument "' + key + '" is ' + typeof key);
        }
    }

    /* *
     *      reset string for json.
     *      return     typeof String,Array,Object
     */
    function resetJsonStr(str) {
        var obj;
        try {
            obj = JSON.parse(str);
            return obj;
        } catch (e) {
            return str;
        }
    }

    /* *
     *      reset path
     *      path typeof string
     */
    function resetPath(path) {
        if (/^(\.)?\.\//.test(path)) {
            var timesArr, n,
                index = -1,
                pathName = location.pathname;
            path = path.replace(/^\.\//, '');
            timesArr = path.match(/\.\.\//g) || [];
            n = timesArr.length + 1;
            for (; n--;) {
                index = pathName.lastIndexOf('/');
                if (index != -1) {
                    pathName = pathName.substr(0, index);
                }
            }
            path = path.replace(/\.\.\//g, '');
            return pathName + '/' + path;
        }
        return path;
    }

    win['LsyCookie'] = new LsyCookie();
})(window, document);
