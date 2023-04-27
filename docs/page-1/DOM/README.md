## 文档对象模型（DOM）

`DOM` 表示由多层节点构成的文档,通过它开发者可以添加、删除和修改页面的各个部分

* 根节点的唯一子节点是<html>元素，我们称之为`文档元素（documentElement）`
* 每个文档只能有一个文档元素。在 HTML 页面中，文档元素始终是<html>元素。
* 每个节点都有 nodeType 属性，表示该节点的类型。

**操纵节点**

* 最常用的方法是 appendChild()，用于在 childNodes 列表末尾添加节点。
* 如果想把节点放到 childNodes 中的特定位置而不是末尾，则可以使用 insertBefore()方法。 这个方法接收两个参数：要插入的节点和参照节点。
* 相对地， replaceChild()方法接收两个参数：要插入的节点和要替换的节点。要替换的节点会被返回并从文档 树中完全移除，要插入的节点会取而代之。
* 要移除节点而不是替换节点，可以使用 removeChild()方法。
* cloneNode()，会返回与调用它的节点一模一样的节点。cloneNode()方法接收一个布尔值参数，表示是否深复制。

浏览器解析完页面之后，文档只有一个子节点，即<html>元素。这个元素既可以通过
documentElement 属性获取，也可以通过 childNodes 列表访问，如下所示：

```html
let html = document.documentElement; // 取得对<html>的引用
alert(html === document.childNodes[0]); // true
alert(html === document.firstChild); // true
```

这个例子表明 documentElement、firstChild 和 childNodes[0]都指向同一个值，即<html>元素。

document 对象还有一个 body 属性，直接指向<body>元素。因为
这个元素是开发者使用最多的元素，所以 JavaScript 代码中经常可以看到 document.body，比如：

>let body = document.body; // 取得对<body>的引用

```js
// 读取文档标题
let originalTitle = document.title; 
// 修改文档标题
document.title = "New page title";

// 取得完整的 URL 
let url = document.URL;
// 取得域名
let domain = document.domain;
// 取得来源
let referrer = document.referrer;
// referrer 包含链接到当前页面的那个页面的 URL。如果当前页面没有来源，则 referrer 属性包含空字符串。
```

**定位元素**

使用 DOM 最常见的情形可能就是获取某个或某组元素的引用，然后对它们执行某些操作
`getElementById()`和 `getElementsByTagName()`就是 Document 类型提供的两个方法。

1. getElementById()方法接收一个参数，即要获取元素的 ID，
2. getElementsByTagName()是另一个常用来获取元素引用的方法。这个方法接收一个参数，即要获取元素的标签名，返回包含零个或多个元素的 NodeList。
