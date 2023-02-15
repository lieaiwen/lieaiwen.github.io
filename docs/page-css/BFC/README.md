## BFC
BFC （Block Formatting Context） 格式化上下文，是web页面中盒模型布局的css渲染模式，指一个独立的渲染区域或者说是一个隔离的独立容器。
<hr>
形成BFC的条件 <br>
```
  1、浮动元素，float 除 none 以外的值；
  2、定位元素，position（absolute，fixed）；
  3、display 为以下其中之一的值 inline-block，table-cell，table-caption；
  4、overflow 除了 visible 以外的值（hidden，auto，scroll）；
```
BFC的特性
```
  1.内部的Box会在垂直方向上一个接一个的放置。
  2.垂直方向上的距离由margin决定
  3.bfc的区域不会与float的元素区域重叠。
  4.计算bfc的高度时，浮动元素也参与计算
  5.bfc就是页面上的一个独立容器，容器里面的子元素不会影响外面元素。
```
BFC的作用 <br>
  1.0 防止margin 重叠
  ``` css
    <div class="one">
            <div class="two">1</div>
            <div class="two">2</div>
    </div>
    .one{
        width:400px;
        height:400px;
        background: #999999;
        overflow: hidden;
    }
    .two{
        width:100%;
        height:100px;
        background: deeppink;
        margin:20px 0;
    }
  ```
  在常规文档流中，两个兄弟盒子之间的垂直距离是由他们的外边距所决定的，但不是他们的两个外边距之和，而是以较大的为准。<br>
  这个是重叠的，利用BFC让其不重叠
  ``` css
<div class="one">
    <div class="wrap">
        <div class="two">1</div>
    </div>
    <div class="two">2</div>
</div>
添加 css
.wrap{
   overflow: hidden;
  }
```
[demo](http://www.zliel.top/vpdemo/css-demo/bfc/bfc1.html) <br>
  2.0 不被浮动元素覆盖 常见的两栏布局<br>
  左边固定宽度，右边不设宽，右边宽度自适应
  ```
    <div class="left">1</div>
    <div class="right">2</div>
    .left{
                float: left;
                width:200px;
                height:100vh;
                background: deeppink;
                margin-right: 10px;
            }
            .right{
                overflow: hidden;
                background: mediumpurple;
                height:100vh;
            }
  ```
[demo](http://www.zliel.top/vpdemo/css-demo/bfc/bfc2.html) <br>
  3.0 对应的三栏布局不就来了么
  ``` css
<div class="left">1</div>
<div class="left">注意我的位置</div>
<div class="right">因为bfc的区域不会与float的元素区域重叠 所以自适应宽度，所以放在最后面</div>
      .left{
            float: left;
            width:200px;
            height:100vh;
            background: deeppink;
        }
        .right{
            overflow: hidden;
            background: mediumpurple;
            height:100vh;
        }
        .left:nth-child(2){
            float: right;
            width:200px;
            height:100vh;
            background: deeppink;
        }
  ```
  [demo](http://www.zliel.top/vpdemo/css-demo/bfc/bfc3.html) <br>
  4.0 防止字体环绕
  ```
  环绕了
      <div class="content">
        <div class="one">1</div>
        <p>阿尔个人赫尔</p>
     </div>
      .content{
        overflow: hidden;
        width:400px;
        height:400px;
        background: #999999;
    }
    .one{
        width:100px;
        height:100px;
        float: left;
        background: green;
    }
    防止环绕 加上
   .p{
      overflow: hidden;
    }
  ```
  [demo](http://www.zliel.top/vpdemo/css-demo/bfc/bfc4.html) <br>
  5.0 清楚浮动
  ```
  将包含块生成BFC即可撑开高度，利用浮动元素也参与BFC高度的计算。
    <div class="content">
        <div class="one">1</div>
        <div class="one two">2</div>
    </div>
    .content{
        border:5px solid green;
        overflow: hidden;
    }
    .one{
        float: left;
        width:200px;
        height:200px;
        border:4px solid red;
        margin-right: 10px;
    }
  ```
[demo](http://www.zliel.top/vpdemo/css-demo/bfc/bfc5.html) <br>


