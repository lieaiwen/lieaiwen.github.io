## 1.0 DOM 事件机制
1.0 DOM 事件级别<br>
2.0 DOM 事件流 <br>
3.0 DOM 事件模型 <br>
4.0 DOM 事件代理 <br>
5.0 DOM Event对象常见的方法和属性 <br>


## 1.0 DOM事件级别
按规范来说总共有四个级别： DOM0级  DOM1级  DOM2级 DOM3级 因为没有 DOM1级事件  所有就只有3级了 DOM0 DOM2 DOM3 <br>
DOM0 级之前的事件 HTML 事件处理程序

<pre><code class="javascript">
//注意要加括号，要加括号()
[[ div type="button" onclick="fn()" id="btn">点我试试  ]]

  function fn() {
      alert('Hello World');
  }

// console.log(document.getElementById('btn').onclick); 你这样验证一下
</code></pre>

上面代码我们通过直接在html代码当中定义一个onclick的属性触发fn方法，这样的事件处理程序最大的
缺点就是html和js 强耦合，当我们一旦修改函数名就得修改两个地方，当然其优点就是不需要操作DOM来完成事件的绑定<br>
DOM0事件绑定，给元素的事件行为绑定方法，这些方法都是在当前元素事件行为的冒泡阶段(或者目标阶段)执行的。<br>
DOM0级事件就解决了这个事情，DOM0 级事件将一个函数赋值给一个事件处理属性：比如<br>
<pre><code class="javascript">
  var button = document.getElementById('btn');
    button.onclick = function(){
                console.log(1)
            }
    // 这个会覆盖上面的 所以也是DOM0级事件的缺点，不能同时绑定多个函数
    button.onclick = function(){
        console.log(2)
    }
    // btn.onclick = null; 解绑事件
</code></pre>
DOM0 级的事件处理的步骤：先找到DOM节点，然后把处理函数赋值给该节点对象的事件属性<br>
DOM2级事件就能解决绑定多个函数的问题，比如: 处理函数不一样是不会覆盖的
<pre><code class="javascript">
function fn(){
    console.log(1)
}
function fn2(){
    console.log(2)
}
button.addEventListener('click', fn, false);
button.addEventListener('click', fn2, false);
</code></pre>
移除事件是：btn.removeEventListener('click', fn, false);  <br>
ie注意要加on，on，on <br>
btn.attachEvent('onclick', fn); // 绑定事件  <br>
btn.detachEvent('onclick', fn); // 解绑事件




DOM2 级事件 还可以监听键盘，鼠标等事件<br>
btn.addEventListener("click", showMes, false); <br>
btn.addEventListener("keyup", showMes, false); <br>
btn.addEventListener("mousemove", showMes, false); <br>
添加多个事件。<br>


DOM3级事件
DOM3级事件在DOM2级事件的基础上添加了更多的事件类型，全部类型如下：<br>

UI事件，当用户与页面上的元素交互时触发，如：load、scroll <br>
焦点事件，当元素获得或失去焦点时触发，如：blur、focus <br>
鼠标事件，当用户通过鼠标在页面执行操作时触发如：dbclick、mouseup <br>
滚轮事件，当使用鼠标滚轮或类似设备时触发，如：mousewheel <br>
文本事件，当在文档中输入文本时触发，如：textInput <br>
键盘事件，当用户通过键盘在页面上执行操作时触发，如：keydown、keypress <br>
合成事件，当为IME（输入法编辑器）输入字符时触发，如：compositionstart <br>
变动事件，当底层DOM结构发生变化时触发，如：DOMsubtreeModified <br>
同时DOM3级事件也允许使用者自定义一些事件。 <br>

DOM事件级别的发展使得事件处理更加完整丰富，而下一个问题就是之前提到的DOM事件模型。「事件冒泡和事件捕获」


## 2.0 DOM标准的事件的三个阶段
js的事件流也是如此: <br>
js事件的三个阶段分别是：捕获，目标，冒泡<br>
1.0 事件捕获：父级元素先触发，子元素后触发（由外而内）<br>
2.0 事件冒泡: 子元素先触发，父元素后触发(由内向外) <br>
3.0 w3c标准: 任何事件发生时，先从顶层开始进行事件捕获，直到事件触发到达事件源，再从事件源向上进行事件捕获 <br>
注意：<br/>
1.0 标准浏览器：addEventListener('click','doSomething','true')方法, 最后一个参数为true 则采用事件捕获，若为false，则采用事件冒泡; 默认是false <br>
2.0 IE浏览器只支持事件冒泡，不支持事件捕获，所以它不支持addEventListener方法，独有的方法是 ele.attachEvent('onclick','dosomething')
<pre><code class="javascript">
// 阻止事件传播(冒泡)：
1.0 W3C  使用 stopPropagation() 方法
2.0 IE  使用 cancelBubble = true 方法
// 阻止默认行为(事件捕获)
1.0 W3C 使用 preventDefault() 方法
2.0 IE 使用 return false;
</code>
</pre>

## 3.0 DOM事件模型
DOM事件模型分为 捕获和冒泡。

## 4.0 DOM事件代理(事件委托)
1.0 事件代理含义和为什么优化？<br>
由于事件会在冒泡阶段向上传播到父节点，因此可以把子节点的监听函数定义在父节点上，由父节点的监听函数统一处理多个子元素的事件。这种方法叫做事件的代理（delegation）。<br>
那么利用事件冒泡或捕获的机制，我们可以对时间绑定做一些优化。<br/>
在JS中，如果我们注册的事件越来越多，页面的性能就越来越差，因为：<br/>

----1.0 函数是对象，会占用内存，内存中的对象越多，浏览器性能越差 <br>
----2.0 注册的事件一般都会指定DOM元素，事件越多，导致DOM元素访问次数越多，会延迟页面交互就绪时间。<br>
----3.0 删除子元素的时候不用考虑删除绑定事件<br>
2.0 优点 <br>
----2.1 减少内存消耗,提高性能
```
    <ul id="list">
      <li>item 1</li>
      <li>item 2</li>
      <li>item 3</li>
      ......
      <li>item n</li>
    </ul>
```
我们需要每个li---都绑定一个函数，那对于内存消耗是非常大的，效率上需要消耗很多新能。借助事件代理，我们只需要
给父容器ul绑定方法就行了，不管点击的是哪一个后代元素，都会根据冒泡传播的传递机制，把容器的click行为触发，根据
事件源，我们可以知道点击的是谁，从而完成不同的事。<br>
----2.2 动态绑定事件<br>
在很多时候，我们需要通过用户操作动态的增删列表项元素，如果一开始给每个子元素绑定事件，那么在列表发生变化时，就需要重新给新增的元素绑定事件，给即将删去的元素解绑事件，如果用事件代理就会省去很多这样麻烦。
```
<ul id="list">
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
</ul>
 document.getElementById('list').addEventListener('click',function(e){
      // 兼容处理
      // e 其他页面的事件对象，window.event IE 上 这个e 是空的，他在window上面
      var event = e || window.event;
      // event.srcElement：表示的当前的这个事件源。
      // firefox 下的 event.target = IE 下的 event.srcElement
      var target =event.target || event.srcElement;
      if(target.nodeName.toLocaleLowerCase() === 'li'){
          console.log(target.innerHTML);
      }
});
```
这是常规的事件委托的方法，但是这种方法有bug，当监听的元素里存在子元素时，那么我们点击这个子元素事件会失效，
所以我们可以联系文章上一小节说到的冒泡事件传播机制来解决这个bug。改进的事件委托代码：
```
<ul id="list" style="border:1px solid red;">
        <li>1 <span>111111111</span> </li>
        <li>2 <span>22222222222</span> </li>
        <li>3 <span>33333333333</span> </li>
        <li>4 <span>44444444444</span> </li>
</ul>
    document.getElementById('list').addEventListener('click',function(e){
        // 兼容处理
        var event = e || window.event; // e 其他页面的事件对象，window.event IE 上 这个e 是空的，他在window上面
        var target =event.target || event.srcElement;
        while(target.tagName !== 'LI'){
            if(target.tagName === 'UL'){
                target = null
                break;
            }
             target = target.parentNode
        }
        if(target){
           console.log(target.innerHTML);
        }
    });
```

## 5.0 DOM Event对象常见的方法和属性
--5.1 event.preventDefault() <br>
如果调用这个方法，默认事件行为将不再触发，什么是默认事件呢？
比如表单一点击提交按钮(submit)刷新页面、a标签默认页面跳转或是锚点定位等。<br>
使用场景1：使用a标签仅仅是想当做一个普通的按钮，点击实现一个功能，不想页面跳转，也不想锚点定位。<br>
方法1
```
<a href="javascript:;">链接</a>
```
方法2:<br>
使用JS方法来阻止，给其click事件绑定方法，当我们点击A标签的时候，先触发click事件，其次才会执行自己的默认行为
```
<a id="test" href="http://www.google.com">链接</a>
<script>
    test.onclick = function(e){
        e = e || window.event;
        return false;
    }
</script>
```
方法3 <br>
```
<a id="test" href="http://www.google.com">链接</a>
<script>
    test.onclick = function(e){
        e = e || window.event;
        e.preventDefault();
    }
</script>
```
使用场景2：输入框最多只能输入六个字符，如何实现？
```
<input type="text" id='tempInp'>
<script>
    tempInp.onkeydown = function(ev) {
        ev = ev || window.event;
        let val = this.value.trim() //trim去除字符串首位空格（不兼容）
        // this.value=this.value.replace(/^ +| +$/g,'') 兼容写法
        let len = val.length
        if (len >= 6) {
            this.value = val.substr(0, 6);
            //阻止默认行为去除特殊按键（DELETE\BACK-SPACE\方向键...）
            let code = ev.which || ev.keyCode;
            if (!/^(46|8|37|38|39|40)$/.test(code)) {
                ev.preventDefault()
            }
        }
    }
</script>
```
--5.2 event.stopPropagation() 和 event.stopImmediatePropagation() <br>
event.stopPropagation() 方法阻止事件冒泡到父元素，阻止任何父事件处理程序被执行。
```
// 在事件冒泡demo代码的基础上修改一下
child1.addEventListener('click',function fn1(e){
    console.log('儿子');
    e.stopPropagation()
},false)
```
stopImmediatePropagation 既能阻止事件向父元素冒泡，也能阻止元素同事件类型的其它监听器被触发。
而 stopPropagation 只能实现前者的效果
```
 <button id="btn">点我试试</button>
<script>
// 只会打印 btn click 1
        const btn = document.querySelector('#btn');
        btn.addEventListener('click', function(event) {
          console.log('btn click 1');
          event.stopImmediatePropagation();
        });
        btn.addEventListener('click', function(event) {
          console.log('btn click 2');
        });
        document.body.addEventListener('click', function(event) {
          console.log('body click');
        });
</script>
```
--5.3 event.target & event.currentTarget <br>
```
<div class="grandpar" id="grandpar" style="width:300px;height:300px;border:1px solid red">
     <div class="father" id="father" style="width:200px;height:200px;border:1px solid blue;">
         <div class="son" id="son">22222</div>
     </div>
 </div>
<script>
        const grandpar = document.getElementById('grandpar');
        const father = document.getElementById('father');
        const son = document.getElementById('son');
        son.onclick = function(e){
            console.log(e.currentTarget,e.target) // son son
            //
        }
        father.onclick = function(e){
            console.log(e.currentTarget,e.target) // father son
        }
        grandpar.onclick = function(e){
            console.log(e.currentTarget,e.target) // grandpar son
        }

</script>
```
event.target指向引起触发事件的元素，而event.currentTarget则是事件绑定的元素。<br>
e.target 指向触发事件监听的对象「事件的真正发出者」。<br>
e.currentTarget 指向添加监听事件的对象「监听事件者」
