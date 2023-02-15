## 虚拟Dom（Virtual Dom）
操作 DOM 是很耗费性能的一件事情，既然如此，我们可以考虑通过 JS 对象来模拟 DOM 对象，毕竟操作 JS 对象比操作 DOM 省时的多
```
// 假设这里模拟一个 ul，其中包含了 5 个 li
[1, 2, 3, 4, 5] 
// 这里替换上面的 li
[1, 2, 5, 4] 
```
我们一眼就可以看出先前的 ul 中的第三个 li 被移除了，四五替换了位置<br>
如果以上操作对应到 DOM 中,那么就是以下代码<br>
```
// 将第四个 li 和第五个交换位置
let fromNode = ul.childNodes[4]
let toNode = ul.childNodes[3]
// 删除第三个 li
ul.removeChild(ul.childNodes[2])

let cloneFromNode = fromNode.cloneNode(true) 
let cloenToNode = toNode.cloneNode(true)
// 如果传递给它的参数是 true，它还将递归复制当前节点的所有子孙节点。否则，它只复制当前节点 

ul.replaceChild(cloneFromNode, toNode)
ul.replaceChild(cloenToNode, fromNode)

```
>当然在实际操作中，我们还需要给每个节点一个标识，作为判断是同一个节点的依据。所以这也是 Vue 和 React 中官方推荐列表里的节点使用唯一的 key 来保证性能。

工具函数：
```
let StateEnums = {
        ChangeText: 0,
        ChangeProps: 1,
        Insert: 2,
        Move: 3,
        Remove: 4,
        Replace: 5
    }

   function isString(str) {
        return typeof str === 'string'
    }

    function move(arr, old_index, new_index) {
        while (old_index < 0) {
            old_index += arr.length
        }
        while (new_index < 0) {
            new_index += arr.length
        }
        if (new_index >= arr.length) {
            let k = new_index - arr.length
            while (k-- + 1) {
                arr.push(undefined)
            }
        }
        arr.splice(new_index, 0, arr.splice(old_index, 1)[0])
        return arr
    } 
```
那么既然 DOM 对象可以通过 JS 对象来模拟，反之也可以通过 JS 对象来渲染出对应的 DOM<br>
以下是一个 JS 对象模拟 DOM 对象的简单实现
```
class Element {
  /**
   * @param {String} tag 'div'
   * @param {Object} props { class: 'item' }
   * @param {Array} children [ Element1, 'text']
   * @param {String} key option
   */
  constructor(tag, props, children, key) {
    this.tag = tag
    this.props = props
    if (Array.isArray(children)) { // 如果是数组的话 赋值
      this.children = children
    } else if (isString(children)) { // 如果是字符串的话就 为空 或者 只有三个参数
      this.key = children
      this.children = null
    }
    if (key) this.key = key
  }
  // 渲染
  render() {
    let root = this._createElement(
      this.tag,
      this.props,
      this.children,
      this.key
    )
    document.body.appendChild(root)
    return root
  }
  create() {
    return this._createElement(this.tag, this.props, this.children, this.key)
  }
  // 创建节点
  _createElement(tag, props, child, key) {
    // 通过 tag 创建节点
    let el = document.createElement(tag)
    // 设置节点属性
    for (const key in props) { // 遍历对象 
      if (props.hasOwnProperty(key)) { // 确保key 一定在props 里面
        const value = props[key]
        el.setAttribute(key, value)
      }
    }
    if (key) {
      el.setAttribute('key', key)
    }
    // 递归添加子节点
    if (child) {
      const that = this;
      child.forEach(element => {
        let child
        if (element instanceof Element) { // 数组里子元素 是继承自Element的话 就再创建一个元素
          child = that._createElement(
            element.tag,
            element.props,
            element.children,
            element.key
          )
        } else {
          child = document.createTextNode(element)
        }
        el.appendChild(child)
      })
    }
    return el
  }
}
var b = new Element('p',{class:'text'},['2222'],'name')
    var a = new Element('div',{class:'text'},[b,'1111'],'name')
    console.log(a.render()) // 这样页面 就有 新的dom了
```
**Virtual Dom 算法简述**<br>
既然我们已经通过 JS 来模拟实现了 DOM，那么接下来的难点就在于如何判断旧的对象和新的对象之间的差异。<br>

DOM 是多叉树的结构，如果需要完整的对比两颗树的差异，那么需要的时间复杂度会是 O(n ^ 3)，这个复杂度肯定是不能接受的。于是 React 团队优化了算法，实现了 O(n) 的复杂度来对比差异。<br>

实现 O(n) 复杂度的关键就是只对比同层的节点，而不是跨层对比，这也是考虑到在实际业务中很少会去跨层的移动 DOM 元素。<br>
```
 <!-- 之前 -->
 <div>           <!-- 层级1 -->
   <p>            <!-- 层级2 -->
     <b> aoy </b>   <!-- 层级3 -->   
     <span>diff</Span>
   </P> 
 </div>
 
 <!-- 之后 -->
 <div>            <!-- 层级1 -->
   <p>             <!-- 层级2 -->
     <b> aoy </b>        <!-- 层级3 -->
   </p>
   <span>diff</Span>
 </div>
我们可能期望将 <span> 直接移动到 <p> 的后边，这是最优的操作。
但是实际的diff操作是移除<p> 里的  <span> 在创建一个新的 <span> 插到  <p> 的后边。
因为新加的 <span> 在层级2，旧的在层级3，属于不同层级的比较。
```
所以判断差异的算法就分为了两步<br>
* 首先从上至下，从左往右遍历对象，也就是树的深度遍历，这一步中会给每个节点添加索引，便于最后渲染差异
* 一旦节点有子元素，就去判断子元素是否有不同
## Virtual Dom 算法实现
**树的递归**<br>

首先我们来实现树的递归算法，在实现该算法前，先来考虑下两个节点对比会有几种情况
1. 新的节点的 tagName 或者 key 和旧的不同，这种情况代表需要替换旧的节点，并且也不再需要遍历新旧节点的子元素了，因为整个旧节点都被删掉了
2. 新的节点的 tagName 和 key（可能都没有）和旧的相同，开始遍历子树
3. 没有新的节点，那么什么都不用做
```
 function diff(oldDomTree, newDomTree){
         let patches = {}
         dfs(oldDomTree,newDomTree,0,patches)
         return patches;
     }
     function dfs(oldNode, newNode, index, patches){
     let curPatches=[];
     if(!newNode){
     }else if(newNode.tag === oldNode.tag && newNode.key === oldNode.key){
         let props = diffProps(oldNode.props, newNode.props);
         if (props.length) curPatches.push({type:StateEnums.ChangeProps, props})
         diffChildren(oldNode.children,newNode.children,index,patches)
     }else{
         curPatches.push({type:StateEnums.Replace, node:newNode})
     }
     if (curPatches.length) {
         if (patches[index]) {
             patches[index] = patches[index].concat(curPatches)
         } else {
             patches[index] = curPatches
         }
     }
 }
```
**判断属性的更改**<br>
判断属性的更改也分三个步骤
1. 遍历旧的属性列表，查看每个属性是否还存在于新的属性列表中
2. 遍历新的属性列表，判断两个列表中都存在的属性的值是否有变化
3. 在第二步中同时查看是否有属性不存在与旧的属性列列表中
```
 function diffProps(oldProps, newProps){
         let change =[];
         for(const key in oldProps){
             if(oldProps.hasOwnProperty(key) && !newProps[key]){ // 删除了旧属性
                 change.push({
                     prop:key
                 })
             }
         }
         for(const key in newProps){
             if(newProps.hasOwnProperty(key)){
                 const prop = newProps[key]
                 if(oldProps[key] && oldProps[key] !== newProps[key]){ // 修改了属性
                     change.push({
                         prop:key,
                         value:newProps[key]
                     })
                 }else if(!oldProps[key]){ // 新增了属性
                     change.push({
                         prop:key,
                         value:newProps[key]
                     })
                 }
             }
         }
         return change
     }
```
**判断列表差异算法实现**<br>
>这个算法是整个 Virtual Dom 中最核心的算法，且让我一一为你道来。 这里的主要步骤其实和判断属性差异是类似的，也是分为三步

1. 遍历旧的节点列表，查看每个节点是否还存在于新的节点列表中
2. 遍历新的节点列表，判断是否有新的节点
3. 在第二步中同时判断节点是否有移动

PS: 该算法只对有 key 的节点做处理
```
 function listDiff(oldList, newList, index, patches){ // 传进来的是children
         let oldKeys = getKeys(oldList) // oldList newList 就是 一个新的Element
         let newKeys = getKeys(newList)
         let changes = [];
         let list =[];
         oldList && oldList.forEach(function(item){
             let key = item.key
             if(isString(item)){
                 key = item
             }
             let index = newKeys.indexOf(key)
             if(index === -1){
                 list.push(null)
             }else{ list.push(key)}
         })
         let length = list.length
         for(let i =length-1;i>=0;i-- ){
             if(!list[i]){
                 list.splice(i,1)
                 changes.push({
                     type:StateEnums.Remove,
                     index:1
                 })
             }
         }
         newList && newList.forEach(function(item,i){
             let key = item.key
             if(isString(item)){
                 key = item
             }
             let index = list.indexOf(key)
             if(index === -1 || key == null){
                 changes.push({
                     type:StateEnums.Insert,
                     node:item,
                     index:i,
                 })
                 list.splice(i,0,key)
             }else{
                 if(index !== i){
                     changes.push({
                         type:StateEnums.Move,
                         from:index,
                         to:i
                     })
                     move(list,index,i)
                 }
             }
         })
         return {changes:changes,list:list}
 
     }
     function getKeys(list){
         let keys =[]
          let text;
         list && list.forEach(function(item){
             let key;
             if(isString(item)){
                 key =[item]
             }else if(item instanceof Element){
                 key =item.key
             }
             keys.push(key)
         })
          return keys;
      }
```
**遍历子元素打标识**<br>
对于这个函数来说，主要功能就两个
1. 判断两个列表差异
2. 给节点打上标记
```
 function diffChildren(oldChild,newChild, index, patches){
         let ld = listDiff(oldChild,newChild, index, patches)
         console.log(ld)
         let changes = ld.changes
         let list =ld.list
         if(changes.length){
             if(patches[index]){
                 patches[index] = patches[index].concat(changes)
             }else{
                 patches[index] = changes
             }
         }
         let last = null
         oldChild && oldChild.forEach(function(item,i){
             let child = item && item.children
             if(child){
                 index = last && last.children ? index + last.children.length + 1 : index + 1
                 let keyIndex = list.indexOf(item.key)
                 let node = newChild[keyIndex]
                 if(node){
                     dfs(item, node,index,patches)
                 }
             }else{
                 index +=1
             }
             last = item
         })
     }
```
**渲染差异**<br>
通过之前的算法，我们已经可以得出两个树的差异了。既然知道了差异，就需要局部去更新 DOM 了，下面就让我们来看看 Virtual Dom 算法的最后一步骤
<br>
这个函数主要两个功能
1. 深度遍历树，将需要做变更操作的取出来
2. 局部更新 DOM
```
 let index =0
     function patch(node, patchs){
         let changes = patchs[index]
         let childNodes = node && node.childNodes
         if(!childNodes){
             index +=1
         }
         if (changes && changes.length && patchs[index]) {
             changeDom(node, changes)
         }
         let last = null
         if (childNodes && childNodes.length) {
             childNodes.forEach(function(item, i) {
                 index = last && last.children ? index + last.children.length + 1 : index + 1
                 patch(item, patchs)
                 last = item
             })
         }
     }
 
     function changeDom(node, changes, noChild){
         changes && changes.forEach(function(change){
             let { type } = change
             switch (type){
                 case StateEnums.ChangeProps:
                     let {props} = change
                     props.forEach(function(item){
                         if(item.value){
                             node.setAttribute(item.prop,item.value)
                         }else {
                             node.removeAttribute(item.prop)
                         }
                     })
                     break;
                 case StateEnums.Remove:
                     // ul.removeChild(ul.childNodes[2])
                     if(node.childNodes[change.index]){
                         node.removeChild(node.childNodes[change.index])
                     }
                     // node.childNodes[change.index].remove()
                     break
                 case StateEnums.Insert:
                     let dom
                     if (isString(change.node)) {
                         dom = document.createTextNode(change.node)
                     } else if (change.node instanceof Element) {
                         dom = change.node.create()
                     }
                     node.insertBefore(dom, node.childNodes[change.index])
                     break
                 case StateEnums.Replace:
                     node.parentNode.replaceChild(change.node.create(), node)
                     break
                 case StateEnums.Move:
                     let fromNode = node.childNodes[change.from]
                     let toNode = node.childNodes[change.to]
                     let cloneFromNode = fromNode.cloneNode(true)
                     let cloenToNode = toNode.cloneNode(true)
                     node.replaceChild(cloneFromNode, toNode)
                     node.replaceChild(cloenToNode, fromNode)
                     break
                 default:
                     break
             }
         })
     }
```
**最后**<br>
Virtual Dom 算法的实现也就是以下三步
1. 通过 JS 来模拟创建 DOM 对象
2. 判断两个对象的差异
3. 渲染差异
```
let test4 = new Element('div', { class: 'my-div' }, ['test4'])
    let test5 = new Element('ul', { class: 'my-div' }, ['test5'])

    let test1 = new Element('div', { class: 'my-div' }, [test4])

    let test2 = new Element('div', { id: '11' }, [test5, test4])

    let root = test1.render()

   console.log(root)
    let pathchs = diff(test1, test2)
    console.log(pathchs)
    setTimeout(function() {
        console.log('开始更新')
        patch(root, pathchs)
        console.log('结束更新')
    }, 1000) 
```
