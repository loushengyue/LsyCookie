# LsyCookie

abstract: This is a plugin of cookie for browser. This plugin output some API for customer.

plugin name: LsyCookie

version: 1.2.0

author: loushengyue

Personal website: http://www.loushengyue.com

methods: [setItem(),getItem(),getAll(),removeItem(),clear()]

----

## 使用方法如下：

### 设置cookie
```
//cookie名称key，值val,过期时间time(单位s)
LsyCookie.setItem(key, val, time);
```
### 删除cookie

```
//通过cookie名称删除
LsyCookie.removeItem(key);
//删除所有cookie
LsyCookie.clear();
```
### 获取cookie

```
//通过cookie名称获取
LsyCookie.getItem(key);
//获取所有cookie
LsyCookie.getAll();
```
