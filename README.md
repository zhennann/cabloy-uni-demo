## 介绍

`CabloyJS`是一款免费开源的NodeJS全栈开发框架，采用前后端分离设计，具备开箱即用的后台管理系统

`Cabloy-SDK`是专门为Uniapp应用量身定制的前端SDK，用于便捷的访问CabloyJS提供的所有API接口，让Uniapp前端开发再无`后顾之忧`

## 特性

各个平台的小程序后端API系统，最复杂的就是账号体系对接。CabloyJS提供了一个模块化的生态，需要开发什么平台下的小程序应用，只需安装相应的模块即可

目前`Cabloy-SDK`支持以下平台小程序的开箱即用：

1. [微信小程序](https://cabloy.com/zh-cn/articles/wechat-introduce.html)
2. [企业微信小程序](https://cabloy.com/zh-cn/articles/wxwork-introduce.html)
3. [钉钉小程序](https://cabloy.com/zh-cn/articles/dingtalk-introduce.html)

## 如何使用 - 前端

### 1. 导入插件

进入Uniapp插件页面，点击按钮`使用HBuilderX导入插件`，将`Cabloy-SDK`插件导入Uniapp项目中

> 强烈建议导入Demo工程查看插件的基本用法

### 2. 修改main.js

在`main.js`文件中添加如下代码：

``` javascript
import Vue from 'vue'
import App from './App'

import Cabloy from './js_sdk/cabloy-sdk/main.js'

// 初始化cabloy
const cabloyOptions = {
  base: {
	scene: 'default',
	locale: 'en-us',
  },
  api: {
	baseURL: 'https://yourdomain.com',
  },
}

Vue.prototype.$cabloy = Cabloy(Vue, cabloyOptions)

// 登录
Vue.prototype.$cabloy.util.login().then(res => {
  // 由于 login 是网络请求，可能会在 Page.onLoad 之后才返回
  // 所以此处加入 callback 以防止这种情况
  if (Vue.prototype.$cabloy.__loginReadyCallback) {
    Vue.prototype.$cabloy.__loginReadyCallback(res);
  }
}).catch(err => {
  console.log(err)
})

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
```

> 1. 首先要初始化一个`cabloy`实例，并保存至Vue.prototype.$cabloy，便于在所有Vue组件中引用
> 2. 其次调用`cabloy.util.login`进行登录

- cabloyOptions

|名称|说明|
|--|--|
|base.scene|小程序场景名，默认为`default`|
|base.locale|前端默认使用的语言|
|api.baseURL|后端服务的API地址|

> `base.scene`：CabloyJS后端可以支持创建多个小程序，前端通过此参数设置要对接的小程序场景名，默认为`default`

### 3. API清单

插件`Cabloy-SDK`主要提供了以下API组件

|名称|说明|
|--|--|
|[cabloy](https://cabloy.com/zh-cn/articles/ca6ac903cd8b4b4fb5e3c2199975c3eb.html)|根对象|
|[cabloy.util](https://cabloy.com/zh-cn/articles/df78d29252d749bbb59ad95255130470.html)|工具函数|
|[cabloy.api](https://cabloy.com/zh-cn/articles/4ae53800c6604cb192dd9587b56fd85a.html)|访问后端API接口|
|[cabloy.data](https://cabloy.com/zh-cn/articles/f3b7901db46e4c16b5840452528926b0.html)|状态数据存储|
|[cabloy.config](https://cabloy.com/zh-cn/articles/6c216ad813214aca84cdcc83b3079c25.html)|配置参数|

## 如何使用 - 后端

CabloyJS提供了一个模块化的生态，需要开发什么平台下的小程序应用，只需安装相应的模块即可

### 1. [微信小程序](https://cabloy.com/zh-cn/articles/wechat-introduce.html)

### 2. [企业微信小程序](https://cabloy.com/zh-cn/articles/wxwork-introduce.html)

### 3. [钉钉小程序](https://cabloy.com/zh-cn/articles/dingtalk-introduce.html) 

-----

## CabloyJS介绍

一款自带工作流引擎的Node.js全栈框架, 基于koa + egg + vue + framework7

[![NPM version][npm-image]][npm-url]
[![Unit Test][test-image]][test-url]
[![Test coverage][codecov-image]][codecov-url]
[![David deps][david-image]][david-url]
[![NPM download][download-image]][download-url]
[![Chat on Telegram](https://img.shields.io/badge/Chat%20on-Telegram-brightgreen.svg)](https://t.me/cabloyjs)

[npm-image]: https://img.shields.io/npm/v/cabloy.svg?style=flat-square
[npm-url]: https://npmjs.org/package/cabloy
[test-image]: https://github.com/zhennann/cabloy/workflows/actions-unittest/badge.svg
[test-url]: https://github.com/zhennann/cabloy/actions
[codecov-image]: https://img.shields.io/codecov/c/github/zhennann/cabloy.svg?style=flat-square
[codecov-url]: https://codecov.io/gh/zhennann/cabloy
[david-image]: https://img.shields.io/david/zhennann/cabloy.svg?style=flat-square
[david-url]: https://david-dm.org/zhennann/cabloy
[download-image]: https://img.shields.io/npm/dm/cabloy.svg?style=flat-square
[download-url]: https://npmjs.org/package/cabloy

## 目标、历史、信念

- [关于CabloyJS](https://cabloy.com/zh-cn/articles/introduce.html)

## 特性

### - 第一部分: 基础功能

- [Bean & AOP](https://cabloy.com/zh-cn/articles/bean.html)
  1. 几乎所有事物都是Bean
  2. Bean支持AOP
  3. AOP也是一种Bean
- 基于`Redis`的分布式集群框架
  - [Broadcast](https://cabloy.com/zh-cn/articles/broadcast.html)
  - [Queue](https://cabloy.com/zh-cn/articles/queue.html)
  - [Schedule](https://cabloy.com/zh-cn/articles/schedule.html)
  - [Startup](https://cabloy.com/zh-cn/articles/startup.html)
- [前后端分离](https://cabloy.com/zh-cn/articles/f66dc04c64ca43fa9e8ea30312ca714f.html)
- I18N
  - [后端](https://cabloy.com/zh-cn/articles/f6d5a48f10dc40d3b8aed7862c23570b.html)
  - [前端](https://cabloy.com/zh-cn/articles/1c7c9cf3861744c2a63ae134076c652f.html)
- [主题](https://cabloy.com/zh-cn/articles/theme.html)
- [多租户/多域名/多实例](https://cabloy.com/zh-cn/articles/44e45b3928ca4c6cb63809558145e000.html)
- [测试驱动开发](https://cabloy.com/zh-cn/articles/990962d4e3604fc099c27806de6d6be8.html)

### - 第二部分: 业务功能

- [NodeJS工作流引擎](https://cabloy.com/zh-cn/articles/flow-introduce.html)
- [自适应布局: pc = mobile + pad](https://cabloy.com/zh-cn/articles/adaptive-layout.html)
- 拖拽
  - [移动](https://cabloy.com/zh-cn/articles/dragdrop-move.html)
  - [调整尺寸](https://cabloy.com/zh-cn/articles/dragdrop-resize.html)
- [仪表板](https://cabloy.com/zh-cn/articles/5c90f4fd15174772adb34dfbf6d1adfb.html)
- [PC布局](https://cabloy.com/zh-cn/articles/28f14f839af5457b9243c9e9210d5324.html)
- [统一数据管理](https://cabloy.com/zh-cn/articles/atom-basic.html)
- [统一用户角色权限管理](https://cabloy.com/zh-cn/articles/535f42e8fb8c487fb33b88c9a9e56a7e.html)
- Socket IO
  - 统计值自动更新、自动推送机制
  - [进度条](https://cabloy.com/zh-cn/articles/10327f8fdae44d87b7604ba3fa9c1a89.html)
- [内置大量核心模块](https://cabloy.com/zh-cn/articles/e678d328cb5b4efdaf5d60c8df1ca691.html)

### - 第三部分: 解决方案

由于CabloyJS提供了大量的前端组件和后端特性，使得开发具体场景的业务也变得非常方便、流畅。CabloyJS仍然通过提供不同的`业务模块`来支援不同的业务场景开发

目前，CabloyJS提供了以下业务场景的解决方案

|名称|说明|
|--|--|
|[Cabloy-CMS](https://cabloy.com/zh-cn/articles/cms-introduce.html)|`动静结合(即JAMStack模式)`的CMS，可以快速构建`企业网站`、`博客`、`技术文档`、`社区`、`商城`等Web应用|
|[Cabloy-Community](https://cabloy.com/zh-cn/articles/community-introduce.html)|基于Cabloy-CMS开发的社区（论坛）Web应用|
|[Cabloy-微信](https://cabloy.com/zh-cn/articles/wechat-introduce.html)|`微信接口模块`，当前整合了`微信公众号`、`微信Web登录`和`微信小程序`的接口，达到`开箱即用`的使用效果。在`Cabloy-微信`的基础上，可以很方便的开发各类微信业务系统|
|[Cabloy-企业微信](https://cabloy.com/zh-cn/articles/wxwork-introduce.html)|`企业微信接口模块`，当前整合了`自建应用`和`企业微信小程序`的接口，达到`开箱即用`的使用效果。在`Cabloy-企业微信`的基础上，可以很方便的开发各类企业微信业务系统|
|[Cabloy-钉钉](https://cabloy.com/zh-cn/articles/dingtalk-introduce.html)|`钉钉接口模块`，当前整合了`H5微应用`和`钉钉小程序`的接口，达到`开箱即用`的使用效果。在`Cabloy-钉钉`的基础上，可以很方便的开发各类钉钉业务系统|
|[Cabloy-Uniapp](https://cabloy.com/zh-cn/articles/uniapp-introduce.html)|`Cabloy-Uniapp`专门为`Uniapp`应用提供了一套量身定制的`前端SDK`，用于便捷的访问CabloyJS提供的所有API接口，让`Uniapp`前端开发再无`后顾之忧`|

## 文档

- [官网 && 文档](https://cabloy.com)

## 在线演示

|网站类型|网站链接|
|--|--|
|管理系统（PC布局）|[https://admin.cabloy.com](https://admin.cabloy.com)|
|管理系统（Mobile布局）|![](https://admin.cabloy.com/api/a/file/file/download/f4f26271d3134ff88a993f8d6374ea9d.png)|
|||
|博客|[https://zhennann.com](https://zhennann.com)|
|技术文档（英文）|[https://cabloy.com/index.html](https://cabloy.com/index.html)|
|技术文档（中文）|[https://cabloy.com/zh-cn/index.html](https://cabloy.com/zh-cn/index.html)|
|社区（英文）|[https://community.cabloy.com/index.html](https://community.cabloy.com/index.html)|
|社区（中文）|[https://community.cabloy.com/zh-cn/index.html](https://community.cabloy.com/zh-cn/index.html)|
|Cabloy商店（英文）|[https://store.cabloy.com/index.html](https://store.cabloy.com/index.html)|
|Cabloy商店（中文）|[https://store.cabloy.com/zh-cn/index.html](https://store.cabloy.com/zh-cn/index.html)|

## 资源

### - 英文版

- [CabloyJS Store](https://store.cabloy.com/index.html)
- [CabloyJS Community](https://community.cabloy.com/index.html)
- [CabloyJS Awesome](./docs/awesome.md)

### - 中文版

- [CabloyJS 商店](https://store.cabloy.com/zh-cn/index.html)
- [CabloyJS 社区](https://community.cabloy.com/zh-cn/index.html)
- [CabloyJS Awesome](./docs/awesome.zh-CN.md)

### - CabloyJS官方交流群

请添加个人微信，联系加群，备注：`加群`

  ![wx-zhennann](https://admin.cabloy.com/api/a/file/file/download/bccf2341c71e489cbff3f5daed4110d9.jpg)

### - 文章

- [一文读懂NodeJS全栈开发利器：CabloyJS（万字长文）](https://community.cabloy.com/zh-cn/articles/known-cabloyjs.html)

### - 视频

- [网易免费课程 - CabloyJS全栈业务开发实战](https://study.163.com/course/courseMain.htm?courseId=1209403891)
