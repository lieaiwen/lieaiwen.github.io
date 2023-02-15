## webpack
```
四个核心概念：

入口(entry)
输出(output)
loader
插件(plugins) 
```
**初始化一个webpack项目**
* npm install webpack webpack-cli --save-dev
>同理初始化vue项目 vue init webpack 项目名称

**处理css**

npm install --save-dev style-loader css-loader

**加载 Sass 文件**

npm install sass-loader node-sass --save-dev

**webpack 开启 SourceMap 和添加 CSS3 前缀**
```
 {
        loader:"css-loader",
        options:{ sourceMap: true }
      },
      {
        loader:"sass-loader",
        options:{ sourceMap: true }
      },
 
```
**为样式添加 CSS3 前缀**

npm install postcss-loader autoprefixer --save-dev

**webpack 将 CSS 抽取成单独文件**

npm install mini-css-extract-plugin --save-dev

**压缩 CSS**

npm install optimize-css-assets-webpack-plugin --save-dev

**压缩 JS**

npm install uglifyjs-webpack-plugin --save-dev

**webpack 清理目录插件**

npm install clean-webpack-plugin --save-dev

**图片处理**

npm install file-loader --save-dev

**图片优化**

pm install image-webpack-loader --save-dev

**图片 base64 处理**

npm install url-loader --save-dev

**webpack 配置合并和提取公共配置**

npm install webpack-merge --save-dev

**安装 babel-loader**

npm install babel-loader @babel/core @babel/preset-env --save-dev

>dev 开发分支  product 线上分支 生产分支

开启 js 的 sourceMap  不要在生产环境中使用 
```
let devConfig = {
  // ... 省略其他
+  devtool: 'inline-source-map'
} 
```
这里讲一下 babel-loader 的优化。
```
 babel-loader 可以配置 cacheDirectory 来提高打包效率：
 
 cacheDirectory：默认值 false，开启后构建时会缓存文件夹，后续从缓存中读取，将提高打包效率。
```

开启监控自动编译 --watch

**开启热更新**

npm install webpack-dev-server --save-dev

## 什么是前端缓存
https://blog.csdn.net/u010730126/article/details/102688274

有待总结的：
php 基础知识，
mysql 语句 https://www.cnblogs.com/tutuai/p/8371620.html
```输出语句
3.1 echo 只能输出数字，字符串

对于布尔型，true 输出1 false 输出 空
echo '111','2222';
可以输出多个参数

3.2 var_dump() 输出值和类型，
如果是数组的话，输出键值，和数据类型

3.3 print_r() 用来输出数组，输出的内容包括键和值，不包括数据类型

3.4 print 
不能输出多个参数，只能输出一个参数，此外
$n = print '123';
echo $n; //1
print 输出成功返回1，失败返回0 ，echo 没有返回值
```
tp5 路由的三种模式
1. 普通模式 完全用路径
2. 混合模式 可以用路径也可以用路由
3. 强制模式 必须用路由

```
tp5
数据库相关再model 层
页面相关再controller 层
valiidate 层 验证层
获取数据 BannerModel::get(1)->getData()
$region_id = CategoryModel::where('category_title','=',$region)
           ->find(); 
模糊查询
$goodsModel = new GoodsModel();
        $res = $goodsModel->where('shop_name','like','%'.$goods_name.'%')
            ->where('category','like','%'.$category_name.'%')->select();
$res->count(); // 总数
->page($page,$pageSize); 分页
// 降序
    $res = $res->order('price')->select()->hidden(['content'])->toArray();
}else{ // 升序
    $res = $res->order('price','desc')->select()->hidden(['content'])->toArray();

更新$res = $mes->save();
$res = $user->whereOr('id','like','%'.$search.'%')
                    ->whereOr('phone','like','%'.$search.'%')
                    ->page($page,$pageSize)
                    ->select();
更新信息 $mes = GoodsModel::get($goodsId);
             $mes->shop_name     = $name;
             $mes->content    = $detailMsg;
             $mes->category    = $region;
             $mes->category_id    = $region_id;
             $mes->price    = $price;
             $mes->stock    = $stock;
             $mes->img    = $img;
             $res = $mes->save();

保存数据 
$GoodsModel = new GoodsModel();
         $res =  $GoodsModel->save([
            'shop_name' => $name,
             'content' => $detailMsg,
             'category' => $region,
             'category_id' => $region_id,
             'price' => $price,
             'stock' => $stock,
             'img' => $img,
         ]);

保存 多条数据
$res = 0 || $user->saveAll($data);


删除数据 $res = GoodsModel::where('id','=',$goodsId)
                 ->delete();

获取参数 $goodsId = input('get.id'); 

```

## 小程序授权流程
支付流程
```
 wx.requestPayment({
       timeStamp: options.payment.timeStamp,
       nonceStr: options.payment.nonceStr,
       package: 'prepay_id=' + options.payment.prepay_id,
       signType: 'MD5',
       paySign: options.payment.paySign,
       success(res) {
         options.success(res);
       },
```
登录流程
```
 // 执行微信登录
     wx.login({
       success(res) {
         // 发送用户信息
         App._post_form('user/login', {
           code: res.code,
           user_info: e.detail.rawData,
           encrypted_data: e.detail.encryptedData,
           iv: e.detail.iv,
           signature: e.detail.signature,
           referee_id: wx.getStorageSync('referee_id')
         }, result => {}
```
