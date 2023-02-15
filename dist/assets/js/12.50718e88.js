(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{65:function(n,e,t){"use strict";t.r(e);var a=t(0),r=Object(a.a)({},(function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[t("h2",{attrs:{id:"dom-事件机制"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#dom-事件机制"}},[n._v("#")]),n._v(" DOM 事件机制")]),n._v(" "),t("p",[n._v("1.0 DOM 事件级别"),t("br"),n._v("\n2.0 DOM 事件流 "),t("br"),n._v("\n3.0 DOM 事件模型 "),t("br"),n._v("\n4.0 DOM 事件代理 "),t("br"),n._v("\n5.0 DOM Event对象常见的方法和属性 "),t("br")]),n._v(" "),t("h2",{attrs:{id:"_1-0-dom事件级别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-0-dom事件级别"}},[n._v("#")]),n._v(" 1.0 DOM事件级别")]),n._v(" "),t("p",[n._v("按规范来说总共有四个级别： DOM0级  DOM1级  DOM2级 DOM3级 因为没有 DOM1级事件  所有就只有3级了 DOM0 DOM2 DOM3 "),t("br"),n._v("\nDOM0 级之前的事件 HTML 事件处理程序")]),n._v(" "),t("pre",[t("code",{staticClass:"javascript"},[n._v('\n//注意要加括号，要加括号()\n[[ div type="button" onclick="fn()" id="btn">点我试试  ]]\n\n  function fn() {\n      alert(\'Hello World\');\n  }\n\n// console.log(document.getElementById(\'btn\').onclick); 你这样验证一下\n')])]),n._v(" "),t("p",[n._v("上面代码我们通过直接在html代码当中定义一个onclick的属性触发fn方法，这样的事件处理程序最大的\n缺点就是html和js 强耦合，当我们一旦修改函数名就得修改两个地方，当然其优点就是不需要操作DOM来完成事件的绑定"),t("br"),n._v("\nDOM0事件绑定，给元素的事件行为绑定方法，这些方法都是在当前元素事件行为的冒泡阶段(或者目标阶段)执行的。"),t("br"),n._v("\nDOM0级事件就解决了这个事情，DOM0 级事件将一个函数赋值给一个事件处理属性：比如"),t("br"),n._v(" "),t("pre",[t("code",{staticClass:"javascript"},[n._v("\nvar button = document.getElementById('btn');\nbutton.onclick = function(){\nconsole.log(1)\n}\n// 这个会覆盖上面的 所以也是DOM0级事件的缺点，不能同时绑定多个函数\nbutton.onclick = function(){\nconsole.log(2)\n}\n// btn.onclick = null; 解绑事件\n")])]),n._v("\nDOM0 级的事件处理的步骤：先找到DOM节点，然后把处理函数赋值给该节点对象的事件属性"),t("br"),n._v("\nDOM2级事件就能解决绑定多个函数的问题，比如: 处理函数不一样是不会覆盖的\n"),t("pre",[t("code",{staticClass:"javascript"},[n._v("\nfunction fn(){\nconsole.log(1)\n}\nfunction fn2(){\nconsole.log(2)\n}\nbutton.addEventListener('click', fn, false);\nbutton.addEventListener('click', fn2, false);\n")])]),n._v("\n移除事件是：btn.removeEventListener('click', fn, false);  "),t("br"),n._v("\nie注意要加on，on，on "),t("br"),n._v("\nbtn.attachEvent('onclick', fn); // 绑定事件  "),t("br"),n._v("\nbtn.detachEvent('onclick', fn); // 解绑事件")]),n._v(" "),t("p",[n._v("DOM2 级事件 还可以监听键盘，鼠标等事件"),t("br"),n._v('\nbtn.addEventListener("click", showMes, false); '),t("br"),n._v('\nbtn.addEventListener("keyup", showMes, false); '),t("br"),n._v('\nbtn.addEventListener("mousemove", showMes, false); '),t("br"),n._v("\n添加多个事件。"),t("br")]),n._v(" "),t("p",[n._v("DOM3级事件\nDOM3级事件在DOM2级事件的基础上添加了更多的事件类型，全部类型如下："),t("br")]),n._v(" "),t("p",[n._v("UI事件，当用户与页面上的元素交互时触发，如：load、scroll "),t("br"),n._v("\n焦点事件，当元素获得或失去焦点时触发，如：blur、focus "),t("br"),n._v("\n鼠标事件，当用户通过鼠标在页面执行操作时触发如：dbclick、mouseup "),t("br"),n._v("\n滚轮事件，当使用鼠标滚轮或类似设备时触发，如：mousewheel "),t("br"),n._v("\n文本事件，当在文档中输入文本时触发，如：textInput "),t("br"),n._v("\n键盘事件，当用户通过键盘在页面上执行操作时触发，如：keydown、keypress "),t("br"),n._v("\n合成事件，当为IME（输入法编辑器）输入字符时触发，如：compositionstart "),t("br"),n._v("\n变动事件，当底层DOM结构发生变化时触发，如：DOMsubtreeModified "),t("br"),n._v("\n同时DOM3级事件也允许使用者自定义一些事件。 "),t("br")]),n._v(" "),t("p",[n._v("DOM事件级别的发展使得事件处理更加完整丰富，而下一个问题就是之前提到的DOM事件模型。「事件冒泡和事件捕获」")]),n._v(" "),t("h2",{attrs:{id:"_2-0-dom标准的事件的三个阶段"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-0-dom标准的事件的三个阶段"}},[n._v("#")]),n._v(" 2.0 DOM标准的事件的三个阶段")]),n._v(" "),t("p",[n._v("js的事件流也是如此: "),t("br"),n._v("\njs事件的三个阶段分别是：捕获，目标，冒泡"),t("br"),n._v("\n1.0 事件捕获：父级元素先触发，子元素后触发（由外而内）"),t("br"),n._v("\n2.0 事件冒泡: 子元素先触发，父元素后触发(由内向外) "),t("br"),n._v("\n3.0 w3c标准: 任何事件发生时，先从顶层开始进行事件捕获，直到事件触发到达事件源，再从事件源向上进行事件捕获 "),t("br"),n._v("\n注意："),t("br"),n._v("\n1.0 标准浏览器：addEventListener('click','doSomething','true')方法, 最后一个参数为true 则采用事件捕获，若为false，则采用事件冒泡; 默认是false "),t("br"),n._v("\n2.0 IE浏览器只支持事件冒泡，不支持事件捕获，所以它不支持addEventListener方法，独有的方法是 ele.attachEvent('onclick','dosomething')\n"),t("pre",[t("code",{staticClass:"javascript"},[n._v("\n// 阻止事件传播(冒泡)：\n1.0 W3C  使用 stopPropagation() 方法\n2.0 IE  使用 cancelBubble = true 方法\n// 阻止默认行为(事件捕获)\n1.0 W3C 使用 preventDefault() 方法\n2.0 IE 使用 return false;\n")]),n._v("\n")])]),n._v(" "),t("h2",{attrs:{id:"_3-0-dom事件模型"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-0-dom事件模型"}},[n._v("#")]),n._v(" 3.0 DOM事件模型")]),n._v(" "),t("p",[n._v("DOM事件模型分为 捕获和冒泡。")]),n._v(" "),t("h2",{attrs:{id:"_4-0-dom事件代理-事件委托"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-0-dom事件代理-事件委托"}},[n._v("#")]),n._v(" 4.0 DOM事件代理(事件委托)")]),n._v(" "),t("p",[n._v("1.0 事件代理含义和为什么优化？"),t("br"),n._v("\n由于事件会在冒泡阶段向上传播到父节点，因此可以把子节点的监听函数定义在父节点上，由父节点的监听函数统一处理多个子元素的事件。这种方法叫做事件的代理（delegation）。"),t("br"),n._v("\n那么利用事件冒泡或捕获的机制，我们可以对时间绑定做一些优化。"),t("br"),n._v("\n在JS中，如果我们注册的事件越来越多，页面的性能就越来越差，因为："),t("br")]),n._v(" "),t("p",[n._v("----1.0 函数是对象，会占用内存，内存中的对象越多，浏览器性能越差 "),t("br"),n._v("\n----2.0 注册的事件一般都会指定DOM元素，事件越多，导致DOM元素访问次数越多，会延迟页面交互就绪时间。"),t("br"),n._v("\n----3.0 删除子元素的时候不用考虑删除绑定事件"),t("br"),n._v("\n2.0 优点 "),t("br"),n._v("\n----2.1 减少内存消耗,提高性能")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v('    <ul id="list">\n      <li>item 1</li>\n      <li>item 2</li>\n      <li>item 3</li>\n      ......\n      <li>item n</li>\n    </ul>\n')])])]),t("p",[n._v("我们需要每个li---都绑定一个函数，那对于内存消耗是非常大的，效率上需要消耗很多新能。借助事件代理，我们只需要\n给父容器ul绑定方法就行了，不管点击的是哪一个后代元素，都会根据冒泡传播的传递机制，把容器的click行为触发，根据\n事件源，我们可以知道点击的是谁，从而完成不同的事。"),t("br"),n._v("\n----2.2 动态绑定事件"),t("br"),n._v("\n在很多时候，我们需要通过用户操作动态的增删列表项元素，如果一开始给每个子元素绑定事件，那么在列表发生变化时，就需要重新给新增的元素绑定事件，给即将删去的元素解绑事件，如果用事件代理就会省去很多这样麻烦。")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("<ul id=\"list\">\n        <li>1</li>\n        <li>2</li>\n        <li>3</li>\n        <li>4</li>\n</ul>\n document.getElementById('list').addEventListener('click',function(e){\n      // 兼容处理\n      // e 其他页面的事件对象，window.event IE 上 这个e 是空的，他在window上面\n      var event = e || window.event;\n      // event.srcElement：表示的当前的这个事件源。\n      // firefox 下的 event.target = IE 下的 event.srcElement\n      var target =event.target || event.srcElement;\n      if(target.nodeName.toLocaleLowerCase() === 'li'){\n          console.log(target.innerHTML);\n      }\n});\n")])])]),t("p",[n._v("这是常规的事件委托的方法，但是这种方法有bug，当监听的元素里存在子元素时，那么我们点击这个子元素事件会失效，\n所以我们可以联系文章上一小节说到的冒泡事件传播机制来解决这个bug。改进的事件委托代码：")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("<ul id=\"list\" style=\"border:1px solid red;\">\n        <li>1 <span>111111111</span> </li>\n        <li>2 <span>22222222222</span> </li>\n        <li>3 <span>33333333333</span> </li>\n        <li>4 <span>44444444444</span> </li>\n</ul>\n    document.getElementById('list').addEventListener('click',function(e){\n        // 兼容处理\n        var event = e || window.event; // e 其他页面的事件对象，window.event IE 上 这个e 是空的，他在window上面\n        var target =event.target || event.srcElement;\n        while(target.tagName !== 'LI'){\n            if(target.tagName === 'UL'){\n                target = null\n                break;\n            }\n             target = target.parentNode\n        }\n        if(target){\n           console.log(target.innerHTML);\n        }\n    });\n")])])]),t("h2",{attrs:{id:"_5-0-dom-event对象常见的方法和属性"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-0-dom-event对象常见的方法和属性"}},[n._v("#")]),n._v(" 5.0 DOM Event对象常见的方法和属性")]),n._v(" "),t("p",[n._v("--5.1 event.preventDefault() "),t("br"),n._v("\n如果调用这个方法，默认事件行为将不再触发，什么是默认事件呢？\n比如表单一点击提交按钮(submit)刷新页面、a标签默认页面跳转或是锚点定位等。"),t("br"),n._v("\n使用场景1：使用a标签仅仅是想当做一个普通的按钮，点击实现一个功能，不想页面跳转，也不想锚点定位。"),t("br"),n._v("\n方法1")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v('<a href="javascript:;">链接</a>\n')])])]),t("p",[n._v("方法2:"),t("br"),n._v("\n使用JS方法来阻止，给其click事件绑定方法，当我们点击A标签的时候，先触发click事件，其次才会执行自己的默认行为")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v('<a id="test" href="http://www.google.com">链接</a>\n<script>\n    test.onclick = function(e){\n        e = e || window.event;\n        return false;\n    }\n<\/script>\n')])])]),t("p",[n._v("方法3 "),t("br")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v('<a id="test" href="http://www.google.com">链接</a>\n<script>\n    test.onclick = function(e){\n        e = e || window.event;\n        e.preventDefault();\n    }\n<\/script>\n')])])]),t("p",[n._v("使用场景2：输入框最多只能输入六个字符，如何实现？")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("<input type=\"text\" id='tempInp'>\n<script>\n    tempInp.onkeydown = function(ev) {\n        ev = ev || window.event;\n        let val = this.value.trim() //trim去除字符串首位空格（不兼容）\n        // this.value=this.value.replace(/^ +| +$/g,'') 兼容写法\n        let len = val.length\n        if (len >= 6) {\n            this.value = val.substr(0, 6);\n            //阻止默认行为去除特殊按键（DELETE\\BACK-SPACE\\方向键...）\n            let code = ev.which || ev.keyCode;\n            if (!/^(46|8|37|38|39|40)$/.test(code)) {\n                ev.preventDefault()\n            }\n        }\n    }\n<\/script>\n")])])]),t("p",[n._v("--5.2 event.stopPropagation() 和 event.stopImmediatePropagation() "),t("br"),n._v("\nevent.stopPropagation() 方法阻止事件冒泡到父元素，阻止任何父事件处理程序被执行。")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("// 在事件冒泡demo代码的基础上修改一下\nchild1.addEventListener('click',function fn1(e){\n    console.log('儿子');\n    e.stopPropagation()\n},false)\n")])])]),t("p",[n._v("stopImmediatePropagation 既能阻止事件向父元素冒泡，也能阻止元素同事件类型的其它监听器被触发。\n而 stopPropagation 只能实现前者的效果")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v(" <button id=\"btn\">点我试试</button>\n<script>\n// 只会打印 btn click 1\n        const btn = document.querySelector('#btn');\n        btn.addEventListener('click', function(event) {\n          console.log('btn click 1');\n          event.stopImmediatePropagation();\n        });\n        btn.addEventListener('click', function(event) {\n          console.log('btn click 2');\n        });\n        document.body.addEventListener('click', function(event) {\n          console.log('body click');\n        });\n<\/script>\n")])])]),t("p",[n._v("--5.3 event.target & event.currentTarget "),t("br")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v('<div class="grandpar" id="grandpar" style="width:300px;height:300px;border:1px solid red">\n     <div class="father" id="father" style="width:200px;height:200px;border:1px solid blue;">\n         <div class="son" id="son">22222</div>\n     </div>\n </div>\n<script>\n        const grandpar = document.getElementById(\'grandpar\');\n        const father = document.getElementById(\'father\');\n        const son = document.getElementById(\'son\');\n        son.onclick = function(e){\n            console.log(e.currentTarget,e.target) // son son\n            //\n        }\n        father.onclick = function(e){\n            console.log(e.currentTarget,e.target) // father son\n        }\n        grandpar.onclick = function(e){\n            console.log(e.currentTarget,e.target) // grandpar son\n        }\n\n<\/script>\n')])])]),t("p",[n._v("event.target指向引起触发事件的元素，而event.currentTarget则是事件绑定的元素。"),t("br"),n._v("\ne.target 指向触发事件监听的对象「事件的真正发出者」。"),t("br"),n._v("\ne.currentTarget 指向添加监听事件的对象「监听事件者」")])])}),[],!1,null,null,null);e.default=r.exports}}]);