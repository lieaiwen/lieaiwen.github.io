(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{283:function(n,a,e){"use strict";e.r(a);var s=e(6),o=Object(s.a)({},(function(){var n=this,a=n.$createElement,e=n._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[e("h2",{attrs:{id:"适配器模式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#适配器模式"}},[n._v("#")]),n._v(" 适配器模式")]),n._v(" "),e("p",[n._v("适配器模式的作用是解决两个软件实体间的接口不兼容的问题。使用\n适配器模式之后，原本由于接口不兼容而不能工作的朗格软件实体可以一起工作。\n"),e("br"),n._v("\n适配器的别名是包装器(wrapper),这是一个响度简单的模式，在程序开发中有\n许多这样的场景：当我们试图调用模块或者对象的某个接口时，却发现这个接口的\n格式并不符合目前的需求。这时候有两种解决办法，第个一种是修改原来的接口实现\n但如果原来的模块很复杂，或者我们拿到的模块一是一段别人编写的经过压缩的代码\n，修改原几口就显的不太现实了。第二种办法是创建一个适配器，将原接口转换为客户\n希望的另外一个接口，客户只需要和适配器打交道。")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("class GoogleMap(){\n    show(){\n        console.log('google地图')\n    }\n}\nclass BaiduMap(){\n    show(){\n        console.log('百度地图')\n    }\n}\nfunction render(map){\n    if(map.show instanceof Function){\n        map.show()\n    }\n}\nrender(new GooleMap())  // 渲染谷歌地图\nrender(new BaiduMap())  // 渲染百度地图\n")])])]),e("p",[n._v("但是假如BaiduMap类的原型方法不叫show，而是叫display，这时候就可以使用适配器模式了，因为我们不能轻易的改变第三方的内容。在BaiduMap的基础上封装一层，对外暴露show方法。")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("class GooleMap {\n    show() {\n        console.log('渲染谷歌地图')\n    }\n}\n\nclass BaiduMap {\n    display() {\n        console.log('渲染百度地图')\n    }\n}\n\n\n// 定义适配器类, 对BaiduMap类进行封装\nclass BaiduMapAdapter{\n    show(){\n        var baiduMap = new BaiduMap()\n        return baiduMap.display()\n    }\n}\n\nfunction render(map) {\n    if (map.show instanceof Function) {\n        map.show()\n    }\n}\n\nrender(new GooleMap())         // 渲染谷歌地图\nrender(new BaiduMapAdapter())  // 渲染百度地图\n")])])]),e("p",[n._v("小结："),e("br"),n._v("\n1.0 适配器模式主要解决两个接口之间不匹配的问题，\n不会改变原来的接口，而是由一个对象对另外一个对象的包装。\n2.0 适配器模式符合开放封闭原则")])])}),[],!1,null,null,null);a.default=o.exports}}]);