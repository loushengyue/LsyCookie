# LsyCookie

abstract: This is a plugin of cookie for browser. This plugin output some API for customer.

plugin name: LsyCookie

version: 1.2.0

author: loushengyue

Personal website: http://www.loushengyue.com

methods: [setItem(),getItem(),getAll(),removeItem(),clear()]

----

## 使用方法如下：

//cookie名称key，值val,过期时间time(单位s), path存储路径
LsyCookie.setItem(key[string], val[string|object], time[number], path[string])

//通过cookie名称获取
LsyCookie.getItem(key[string])

//获取所有cookie
LsyCookie.getAll()

//通过cookie名称删除
LsyCookie.removeItem(key[string])

//删除所有cookie
LsyCookie.clear()