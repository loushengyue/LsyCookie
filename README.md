# LsyCookie

desc: This is a plugin of cookie for browser. This plugin output some API for customer.
plugin name: LsyCookie
version: 1.0.2
author: loushengyue
Personal website: http://www.loushengyue.com
methods: [set(),get(),getAll(),clear(),clearAll()]

----

##使用方法如下：

###设置cookie
```
//cookie名称key，值val,过期时间time(单位s)
LsyCookie.set(key, val, time);
```
### 删除cookie

```
//通过cookie名称删除
LsyCookie.clear(key);
//删除所有cookie
LsyCookie.clearAll();
```
### 获取cookie

```
//通过cookie名称获取
LsyCookie.get(key);
//获取所有cookie
LsyCookie.getAll();
```
