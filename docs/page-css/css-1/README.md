## 真正的移动端适配
[参考链接](https://www.jianshu.com/p/1f1b23f8348f)<br>

我们再写移动端适配的时候，会在入口页面增加这一行代码

```angular2html
<meta content="width=device-width, viewport-fit=cover, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no" name="viewport">
width=device-width : 表示让当前的可视宽度 = 设备宽度
viewport-fit=cover ：表示让当前的可视区域沾满整个屏幕(解决iphonex刘海全面屏底部留白问题)
initial-scale=1.0 :  设置页面的初始缩放值
maximum-scale=1.0 :  允许用户的最小缩放值
minimum-scale=1.0 :  允许用户的最大缩放值
user-scalable=no :   是否允许用户进行缩放，值为"no"或"yes", no 代表不允许，yes代表允许
```
meta标签中的viewport属性，就是视图的含义
#### 布局视口
也就是`<meta name="viewport" content="width=device-width">`中width属性的含义<br>

我们在css中写的所有样式，就是相对于布局视口进行布局的<br>

默认情况下，移动端的布局视口并不是屏幕宽度，而是一般在768px ~ 1024px间(大部分情况下980px) <br>

可以通过document.documentElement.clientWidth 和 document.documentElement.clientHeight获取

#### 布局视口
视觉视口是指用户通过设备屏幕看到的区域，默认等于当前浏览器的窗口大小(当initial-scale为1)<br>

当用户对浏览器进行缩放时，不会改变布局视口的大小，所以页面布局是不变的，但是缩放会改变觉视口的大小<br>

可以通过window.innerWidth 和window.innerHeight获取 (会随着缩放进行改变)<br>

放大页面，此时window.innerWidth反而减小 (页面放大，你看到的东西也变少了)

#### 理想视口
理想视口的概念常用于移动端，使用户不需要缩放，也不需要出现横向滚动条，便可以正常看到网站的所有内容。<br>

理想视口下，布局视口宽度 = 视觉视口宽度 = 设备宽度 <br>

可以通过screen.width 和screen.height获取 (常量，不会改变)


+ 设备像素也叫物理像素 <br>

  设备像素指的是显示器上的真实像素，每个像素的大小是屏幕固有的属性，屏幕出厂以后就不会改变了。<br>

  设备分辨率描述的就是这个显示器的宽和高分别是多少个设备像素。<br>

  早期的移动设备，只有物理像素，没有独立像素，在不缩放的前提下，CSS 中的 1px 就代表着 1 个物理像素。比如 iphone3 的物理像素是 320 * 480，那么 width: 320px; 的元素将会占满 iphone3 的屏幕宽度。
  <br>
+ 设备独立像素

  从 iphone4 开始，苹果公司便推出了所谓的 Retina 屏，物理像素变成 640 * 960，但是屏幕尺寸没有变化，也就是说单位面积上的物理像素的数量增加了，或者说屏幕密度增加了。如果还按照原来那样，1px CSS 像素由 1 个物理像素来渲染， 那么 width: 320px; 的元素只会占据半个屏幕的宽度。原来在 iphone3 上能够占满屏的网页，在 iphone4 上只会占一半的屏幕，同时 font-size: 20px; 的字体在 iphone4 上的尺寸也会缩小。
  <br>
  为了让同一个网页在 iphone4 和 iphone3 上的有相同的显示效果，引入了独立像素的概念。iphone4 的独立像素为 320 * 480，是 iphone4 的物理像素的一半，和 iphone3 的物理像素一样。也就是说，iphone4 上的 1 个独立像素 == 2 个物理像素。在 iphone4 上，在不缩放的前提下，CSS 中的 1px 便由 1 个独立像素来渲染，相当于 2 个物理像素。这样，width: 320px; 的元素由 320 个独立像素来渲染，也就是由 640 个物理像素来渲染，正好占满 iphopn4 的屏幕宽度。font-size: 20px; 的字体在 iphone3 和 iphone4 上的尺寸也相同，只不过在 iphone4 上的字体更清楚。
  <br>
  我们已经知道，iphone4 上，1 个独立像素 == 2 个物理像素，但是不是所有的设备上都这样。
  并且在缩放比为1时，独立像素 === css像素
  <br>

+ css像素

  在CSS中使用的px都是指css像素，比如width: 128px。css像素的大小是很容易变化的。当我们缩放页面的时候，元素的css像素数量不会改变，改变的只是每个css像素的大小。也就是说width: 128px的元素在缩放200%以后，宽度依然是128个css像素，只不过每个css像素的宽度和高度变为原来的两倍。如果原本元素宽度为128个设备独立像素，那么缩放200%以后元素宽度为256个设备独立像素（css像素宽度始终是128）
<br>
  在缩放比例为100%的情况下，一个css像素大小等于一个设备独立像素。

  为了描述不同型号的手机物理像素和独立像素之间的关系，引入了一个新的概念：设备像素比 devicePixelRatio（dpr）。在 js 中通过 window.devicePixelRatio 查看。
```angular2html
devicePixelRatio = 物理像素 / 独立像素
iphone3: devicePixelRatio = 320 / 320 = 1
iphone4: devicePixelRatio = 640 / 320 = 2
iphone6Plus: devicePixelRatio = 1242 / 414 = 3
```
在 media 查询中，resolution 就代表着 devicePixelRatio。
```angular2html
@media (min-resolution: 2dppx) {
  body {
    color: red;
  }
}
// 上面的代码表示，在 devicePixelRatio >= 2 的设备上，字体颜色为红色。
```
## 1.0 1px像素问题
这里的1像素指的是CSS像素。因此我们可以发现，在写1px的时候，在不同dpr的物理设备上映射的设备像素是不同的。dpr为2时，映射的像素为2px；dpr3时就映射成3px。这样的话，如果在屏幕尺寸比较大的设备上（准确来说时设备像素比较大），1px渲染出来就样子就会有些粗。

#### 解决方案
利用媒体查询 + css3的transform <br>
利用媒体查询区分二倍屏和三倍屏，利用transform:scale(xx)对高度进行缩放。代码如下：
```angular2html
/*二倍屏*/
@media only screen and (-webkit-min-device-pixel-ratio: 2.0) {
    .my-border::after {
        transform: scaleY(0.5);
        webkit-transform: scaleY(0.5);
    }
}
/*三倍屏*/
@media only screen and (-webkit-min-device-pixel-ratio: 3.0) {
    .my-border::after {
        transform: scaleY(0.33);
        webkit-transform: scaleY(0.33);
    }
}
```
注意：IOS 系统的 safari 浏览器不支持标准的 min-resolution，使用非标准的 min-device-pixel-ratio。

## 2.0 常见适配方案
#### 移动端为什么会有适配的问题
不同型号的手机可能它的宽度、高度是不相同的，我们总不能都把宽度写成 750px吧
> 简单一句话概括：移动端适配就是在进行屏幕宽度的等比例缩放：<br>
> 平时我们开发中，拿到的移动端设计稿一般是750 * 1334 尺寸大小（ iPhone6 的设备像素为标准的设计图）。那如果在750px设计稿上量出的元素宽度为100px，那么在375px宽度的屏幕下，这个元素宽度就应该等比例缩放成50px。<br>
> 所以适配的难点是：如果实现页面的等比例缩放？

### rem方案
>该方案的核心就是：所有需要动态布局的元素，不再使用px固定尺寸，而是采用rem相对尺寸 <br>
>rem的大小是相对于根元素html的字体大小：如果html的font-size为100px，那么1rem就等于100px

核心代码：
```angular2html
 <script type="text/javascript">
    window.getPushWindowTimes = new Date().getTime();
    (function (doc, win) {
      var docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function () {
          var clientWidth = docEl.clientWidth;
          docEl.style.fontSize = 100 * (clientWidth / 750) + 'px';
        };
      if (!doc.addEventListener) {
        return;
      }
      win.addEventListener(resizeEvt, recalc, false);
      doc.addEventListener('DOMContentLoaded', recalc, false);
      recalc()
    })(document, window)
  </script>
```
### vh/vw方案
vh、vw方案即将视觉视口宽度 window.innerWidth 和视觉视口高度 window.innerHeight 等分为 100 份。<br>

这种方案和上面的方案解决问题的思路一样。这个是需要将设计稿的px转成对应的vw，当然这种比例关系我们不用手动计算，webpack解析css时有个postcss-px-to-viewport插件，可以实现px到vw的自动转化。
<br>
核心代码：
```angular2html
// 根目录新建 postcss.config.js
    module.exports = {
        plugins: {
        'postcss-px-to-viewport': {
        unitToConvert: "px", // 要转化的单位
        viewportWidth: 750, // UI设计稿的宽度
        unitPrecision: 6, // 转换后的精度，即小数点位数
        propList: ["*"], // 指定转换的css属性的单位，*代表全部css属性的单位都进行转换
        viewportUnit: "vw", // 指定需要转换成的视窗单位，默认vw
        fontViewportUnit: "vw", // 指定字体需要转换成的视窗单位，默认vw      selectorBlackList: ["wrap"], // 指定不转换为视窗单位的类名，
        minPixelValue: 1, // 默认值1，小于或等于1px则不进行转换
        mediaQuery: true, // 是否在媒体查询的css代码中也进行转换，默认false
        replace: true, // 是否转换后直接更换属性值
        exclude: [/node_modules/], // 设置忽略文件，用正则做目录名匹配
        include: undefined, // 如果设置了include，那将只有匹配到的文件才会被转换
        landscape: false, // 是否添加根据 landscapeWidth 生成的媒体查询条件 @media (orientation: landscape)
        landscapeUnit: 'vw', // 横屏时使用的单位
        // landscapeWidth: 750 // 横屏时使用的视口宽度
        }
    }
```
我用的是vue单页面应用 下载对应的包即可










