## 1.0 异步加载js的两种方法defer和async
为什么要异步加载JS<br>
同步加载JS：将`<script>`脚本放在`<head>`标签内，不使用defer和async。
这时浏览器碰到`<script>`标签会立即加载并执行指定的脚本，
“立即”指的是在渲染 `<script>` 标签之下的文档元素之前，也就是说不再渲染后续的文档元素，
直到`<script>`之内的元素加载并执行完毕。这样会造成 “空白页” 出现，给用户带来很不友好的体验，所以就出现了异步加载JS的办法；
<br>

异步加载JS：异步是相对于HTML解析来说的。即在加载`<script>`脚本的同时继续加载并渲染后续的HTML元素，即并行进行，该过程为异步加载JS；
<br>
将`<script>`脚本放在`</body>`标签之前
<br>
注意，这并不是真正意义上的异步加载JS，而是利用HTML从上到下执行代码的特性，最后执行`<script>`脚本
<br>
但是，这是最佳实践。因为对于旧浏览器来说这是唯一的优化选择，此法可保证非脚本的其它一切元素能够以最快的速度加载并解析。
<br>
异步加载JS有哪些方法
``` 
1、使用defer

　　<script defer src="demo1.js"></script>
　　<script defer src="demo2.js"></script>
　　demo1.js 和 demo2.js 将和后续文档元素的加载同时进行（加载并不等于执行）；

　　demo1.js 和 demo2.js 的执行是在所有元素渲染完成之后，DOMContentLoaded事件触发之前完成；

　　demo1.js 和 demo2.js 会按照顺序执行，即先执行 demo1.js，再执行 demo2.js（因为demo1.js 在 demo2.js 之前）；

　　注意：当脚本都加载完成后才会按照顺序执行

　　适用：当脚本之间有相互依赖时非常合适

3、使用async

<script async src="demo3.js"></script>
<script async src="demo4.js"></script>
　　demo3.js 和 demo4.js 将和后续文档元素的加载同时进行（加载并不等于执行）；

　　demo3.js 和 demo4.js 并不保证执行顺序，谁先加载完成谁先执行。即同一个js文件的执行紧挨着加载的，加载完毕就执行

　　demo3.js 和 demo4.js 可能在DOMContentLoaded事件之前执行，比如当HTML元素特别多时

　　也可能在DOMContentLoaded事件之后执行，比如当HTML元素特别少时

　　适用：对于那些可以不依赖任何脚本或不被任何脚本依赖的脚本来说却是非常合适的
```

## 2.0 html 几个有意思的标签
```
1.0 table 合并边框
table,tr,td{
    border:1px solid blue;
    border-collapse:collapse;
}
2.0 合并单元格 
行：colspan="2"
列：rowspan = "2"
3.0 <dl> 标签定义一个描述列表。
<dl> 标签与 <dt> （定义项目/名字）和 <dd> （描述每一个项目/名字）一起使用。
<table>
		<thead>
			<td>1</td>
			<td>2</td>
		</thead>
		<tbody>
			<tr>
				<td colspan="2">1</td>
				<td>2</td>
			</tr>
			<tr>
				<td rowspan="2">1</td>
				<td>2</td>
			</tr>
			<tr>
				<td >1</td>
				<td>2</td>
			</tr>
		</tbody>
		<tfoot>
			<tr>
				<td >1</td>
				<td>2</td>
			</tr>
		</tfoot>
	</table>

	<dl>
	  <dt>Coffee</dt>
	  	<dd>Black hot drink</dd>
	  <dt>Milk</dt>
	  	<dd>White cold drink</dd>
	</dl> 
```
## 3.0 HTML语义化
>语义化的含义就是用正确的标签做正确的事情，html语义化就是让页面的内容结构化，便于对浏览器、搜索引擎解析；在没有样式CCS情况下也以一种文档格式显示，并且是容易阅读的。搜索引擎的爬虫依赖于标记来确定上下文和各个关键字的权重，利于 SEO(页面优化)。使阅读源代码的人对网站更容易将网站分块，便于阅读维护理解。

## 4.0 浏览器解析HTML方式
```
 有三种解析方式:
     1.0 非怪异（标准）模式 // 页面按照 HTML 与 CSS 的定义渲染
     2.0 怪异模式 // 中则尝试模拟更旧的浏览器的行为
     3.0 部分怪异（近乎标准）模式 // 实施了一种表单元格尺寸的怪异行为，除此之外符合标准定义
```
> 一个不含任何 DOCTYPE 的网页将会以 怪异(quirks) 模式渲染。

DOCTYPE它的目的:是要告诉标准通用标记语言解析器，它应该使用什么样的文档类型定义（DTD）来解析文档<br>
``HTML5提供的<DOCTYPE html>是标准模式，向后兼容的, 等同于开启了标准模式，那么浏览器就得老老实实的按照W3C的 标准解析渲染页面，这样一来，你的页面在所有的浏览器里显示的就都是一个样子了。
``
## 5.0 DOM结构
>DOM: Document Object Module, 文档对象模型。我们通过JavaScript操作页面的元素，进行添加、移动、改变或移除的方法和属性, 都是DOM提供的。

**DOM节点**<br>
根据 W3C 的 HTML DOM 标准，HTML 文档中的所有内容都是节点：<br>
1. 整个文档是一个文档节点
2. 每个 HTML 元素是元素节点
3. HTML 元素内的文本是文本节点
4. 每个 HTML 属性是属性节点
5. 注释是注释节点<br>

**HTML DOM 节点树**<br>
>HTML文本会被解析为DOM树, 树中的所有节点均可通过 JavaScript 进行访问。所有 HTML 元素（节点）均可被修改，也可以创建或删除节点。

**节点的关系**<br>
父（parent）、子（child）和同胞（sibling）等术语用于描述这些关系。父节点拥有子节点。同级的子节点被称为同胞（兄弟或姐妹）:<br>
* 在节点树中，顶端节点被称为根（root）
 * 每个节点都有父节点、除了根（它没有父节点）
 * 一个节点可拥有任意数量的子
 * 同胞是拥有相同父节点的节点
## 6.0 HTML5新增内容
>HTML5 是对 HTML 标准的第五次修订。其主要的目标是将互联网语义化，以便更好地被人类和机器阅读，并同时提供更好地支持各种媒体的嵌入。HTML5 的语法是向后兼容的。

**与HTML 4的不同之处**
* 文件类型声明（<!DOCTYPE>）仅有一型：<!DOCTYPE HTML>。
* 新的解析顺序：不再基于SGML。
* 新的元素：section, video, progress, nav, meter, time, aside, canvas, command, datalist, details, embed, figcaption, figure, footer, header, hgroup, keygen, mark, output, rp, rt, ruby, source, summary, wbr。
```
<article> 定义文档内的文章。
<footer>	定义文档或节的页脚。
<header>	定义文档或节的页眉。
<main>	定义文档的主内容。
<nav>	定义文档内的导航链接。 
```
*  input元素的新类型：date, email, url等等。
* 新的属性：ping（用于a与area）, charset（用于meta）, async（用于script）。
*  全域属性：id, tabindex, repeat。
*  新的全域属性： contextmenu, draggable, dropzone, hidden, spellcheck。
*  移除元素：acronym, applet, basefont, big, center, dir, font, frame, frameset, isindex, noframes, strike, tt。

<br>
**新增标签**<br>

```
HTML 5提供了一些新的元素和属性，反映典型的现代用法网站。其中有些是技术上类似<div>和<span>标签，但有一定含义，例如<nav>（网站导航块）和<footer></footer><audio></audio>和<video></video>标记。
```

**新应用程序接口（API）**<br>
除了原先的DOM接口，HTML5增加了更多样化的API:<br>
* HTML Geolocation
* HTML Drag and Drop
* HTML Local Storage
* HTML Application Cache
* HTML Web Workers
* HTML SSE
* HTML Canvas/WebGL
* HTML Audio/Video



