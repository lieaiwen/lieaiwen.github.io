(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{203:function(e,t,a){"use strict";a.r(t);var s=a(6),n=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h2",{attrs:{id:"date-对象"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#date-对象"}},[e._v("#")]),e._v(" Date 对象")]),e._v(" "),a("p",[e._v("Date 对象用于处理日期与时间。"),a("br"),e._v("\n创建 Date 对象： new Date() "),a("br"),e._v("\n1.0 getDate()\t从 Date 对象返回一个月中的某一天 (1 ~ 31)。")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("var d = new Date();\nvar n = d.getDate();\n")])])]),a("p",[e._v("注意：使用new Date(dataTime).getTime()在pc端以及Android手机上调试均没有问题，在苹果手机上显示的是NAN；解决方案就是")]),e._v(" "),a("blockquote",[a("p",[e._v("new Date(dataTime.replace(/-/g,'/')).getTime()")])]),e._v(" "),a("p",[e._v("2.0 getDay()\t从 Date 对象返回一周中的某一天 (0 ~ 6)。")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("var d = new Date();\nvar n = d.getDay();\n")])])]),a("p",[e._v("3.0 getFullYear()\t从 Date 对象以四位数字返回年份。")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("var d = new Date();\nvar n = d.getFullYear(); // 2019\n")])])]),a("p",[e._v("4.0 getHours()\t返回 Date 对象的小时 (0 ~ 23)。")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("var d = new Date();\nvar n = d.getHours(); //14\n")])])]),a("p",[e._v("5.0 getMilliseconds()\t返回 Date 对象的毫秒(0 ~ 999)。\n6.0 getMinutes()\t返回 Date 对象的分钟 (0 ~ 59)。\n7.0 getMonth()\t从 Date 对象返回月份 (0 ~ 11)。\n8.0 getSeconds()\t返回 Date 对象的秒数 (0 ~ 59)。\n9.0 getTime()\t返回 1970 年 1 月 1 日至今的毫秒数。")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("var d = new Date();\nvar n = d.getTime();\n")])])]),a("p",[e._v("10.0 parse()\t返回1970年1月1日午夜到指定日期（字符串）的毫秒数。")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('var d = Date.parse("4 21, 2012"); // 1334937600000\n')])])]),a("p",[e._v("11.0 setDate()\t设置 Date 对象中月的某一天 (1 ~ 31)。")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("Date.setDate(day)\nday\t    必需。表示一个月中的一天的一个数值（1 ~ 31）:\n\n            0 为上一个月的最后一天\n            -1 为上一个月最后一天之前的一天\n            如果当月有 31 天:\n            \n            32 为下个月的第一天\n            如果当月有 30 天:\n            \n            32 为下一个月的第二天\nvar d = new Date();\nd.setDate(15);\n")])])]),a("p",[e._v("12.0 setFullYear()\t设置 Date 对象中的年份（四位数字）。")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("Date.setFullYear(year,month,day) 后两个可选\n我们将通过 setFullYear() 把日期设置为 November 3, 2020：\n\nvar d=new Date();\nd.setFullYear(2020,10,3); // Tue Nov 03 2020 14:08:56 GMT+0800 (中国标准时间)\n")])])]),a("p",[e._v("13.0 setHours()\t设置 Date 对象中的小时 (0 ~ 23)。\n14.0 setMilliseconds()\t设置 Date 对象中的毫秒 (0 ~ 999)。\n15.0 setMinutes()\t设置 Date 对象中的分钟 (0 ~ 59)。\n16.0 setMonth()\t设置 Date 对象中月份 (0 ~ 11)。\n17.0 setSeconds()\t设置 Date 对象中的秒钟 (0 ~ 59)。\n18.0 setTime()\tsetTime() 方法以毫秒设置 Date 对象。")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("我们将向 1970年01月01日 添加 1332403882588毫秒，并显示新的日期和时间：\nvar d = new Date();\nd.setTime(1332403882588);\n")])])])])}),[],!1,null,null,null);t.default=n.exports}}]);