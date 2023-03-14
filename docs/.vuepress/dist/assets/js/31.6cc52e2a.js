(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{218:function(t,n,s){"use strict";s.r(n);var a=s(6),e=Object(a.a)({},(function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"bfc"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#bfc"}},[t._v("#")]),t._v(" BFC")]),t._v(" "),s("p",[t._v("BFC （Block Formatting Context） 格式化上下文，是web页面中盒模型布局的css渲染模式，指一个独立的渲染区域或者说是一个隔离的独立容器。\n")]),s("hr"),t._v("\n形成BFC的条件 "),s("br"),s("p"),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("  1、浮动元素，float 除 none 以外的值；\n  2、定位元素，position（absolute，fixed）；\n  3、display 为以下其中之一的值 inline-block，table-cell，table-caption；\n  4、overflow 除了 visible 以外的值（hidden，auto，scroll）；\n")])])]),s("p",[t._v("BFC的特性")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("  1.内部的Box会在垂直方向上一个接一个的放置。\n  2.垂直方向上的距离由margin决定\n  3.bfc的区域不会与float的元素区域重叠。\n  4.计算bfc的高度时，浮动元素也参与计算\n  5.bfc就是页面上的一个独立容器，容器里面的子元素不会影响外面元素。\n")])])]),s("p",[t._v("BFC的作用 "),s("br"),t._v("\n1.0 防止margin 重叠")]),t._v(" "),s("div",{staticClass:"language-css extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[t._v("  "),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v('<div class="one">\n          <div class="two">1</div>\n          <div class="two">2</div>\n  </div>\n  .one')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("400px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("400px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("background")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" #999999"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("overflow")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" hidden"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".two")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("100%"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("100px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("background")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" deeppink"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("margin")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("20px 0"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("在常规文档流中，两个兄弟盒子之间的垂直距离是由他们的外边距所决定的，但不是他们的两个外边距之和，而是以较大的为准。"),s("br"),t._v("\n这个是重叠的，利用BFC让其不重叠")]),t._v(" "),s("div",{staticClass:"language-css extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token selector"}},[t._v('<div class="one">\n  <div class="wrap">\n      <div class="two">1</div>\n  </div>\n  <div class="two">2</div>\n</div>\n添加 css\n.wrap')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("overflow")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" hidden"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[s("a",{attrs:{href:"http://www.zliel.top/vpdemo/css-demo/bfc/bfc1.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("demo"),s("OutboundLink")],1),t._v(" "),s("br"),t._v("\n2.0 不被浮动元素覆盖 常见的两栏布局"),s("br"),t._v("\n左边固定宽度，右边不设宽，右边宽度自适应")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('  <div class="left">1</div>\n  <div class="right">2</div>\n  .left{\n              float: left;\n              width:200px;\n              height:100vh;\n              background: deeppink;\n              margin-right: 10px;\n          }\n          .right{\n              overflow: hidden;\n              background: mediumpurple;\n              height:100vh;\n          }\n')])])]),s("p",[s("a",{attrs:{href:"http://www.zliel.top/vpdemo/css-demo/bfc/bfc2.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("demo"),s("OutboundLink")],1),t._v(" "),s("br"),t._v("\n3.0 对应的三栏布局不就来了么")]),t._v(" "),s("div",{staticClass:"language-css extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token selector"}},[t._v('<div class="left">1</div>\n<div class="left">注意我的位置</div>\n<div class="right">因为bfc的区域不会与float的元素区域重叠 所以自适应宽度，所以放在最后面</div>\n    .left')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("float")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" left"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("200px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("100vh"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("background")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" deeppink"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".right")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("overflow")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" hidden"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("background")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" mediumpurple"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("100vh"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".left:nth-child(2)")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("float")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" right"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("200px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("100vh"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("background")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" deeppink"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[s("a",{attrs:{href:"http://www.zliel.top/vpdemo/css-demo/bfc/bfc3.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("demo"),s("OutboundLink")],1),t._v(" "),s("br"),t._v("\n4.0 防止字体环绕")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('环绕了\n    <div class="content">\n      <div class="one">1</div>\n      <p>阿尔个人赫尔</p>\n   </div>\n    .content{\n      overflow: hidden;\n      width:400px;\n      height:400px;\n      background: #999999;\n  }\n  .one{\n      width:100px;\n      height:100px;\n      float: left;\n      background: green;\n  }\n  防止环绕 加上\n .p{\n    overflow: hidden;\n  }\n')])])]),s("p",[s("a",{attrs:{href:"http://www.zliel.top/vpdemo/css-demo/bfc/bfc4.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("demo"),s("OutboundLink")],1),t._v(" "),s("br"),t._v("\n5.0 清楚浮动")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('将包含块生成BFC即可撑开高度，利用浮动元素也参与BFC高度的计算。\n  <div class="content">\n      <div class="one">1</div>\n      <div class="one two">2</div>\n  </div>\n  .content{\n      border:5px solid green;\n      overflow: hidden;\n  }\n  .one{\n      float: left;\n      width:200px;\n      height:200px;\n      border:4px solid red;\n      margin-right: 10px;\n  }\n')])])]),s("p",[s("a",{attrs:{href:"http://www.zliel.top/vpdemo/css-demo/bfc/bfc5.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("demo"),s("OutboundLink")],1),t._v(" "),s("br")])])}),[],!1,null,null,null);n.default=e.exports}}]);