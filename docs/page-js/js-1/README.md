## 1.0 函数科里化
>是把接受多个参数的函数变换成接受一个单一参数的函数

## 2.0 原生js获取浏览器URL参数
```
www.baidu.com/s?name=1&age=2&city=3
function getQueryVariable(variable){
    var query = window.location.search.substring(1) //name=1&age=2&city=3
    var arr = query.split('&'); // ['name=1','age=2','city=3']
    for(var i=0;i<arr.length-1;i++){
        var childArr = arr[i].split('&')
        if(childArr[0] == variable){
            return childArr[1]
        }
    }
    return false;

} 
```

## 3.0 ajax请求的创建
```
//第一步，创建XMLHttpRequest对象
    var xmlHttp = new XMLHttpRequest();
    //第二步，注册回调函数
    xmlHttp.onreadystatechange = callBack;
    //第三步，配置请求信息，open(),get
    xmlHttp.open('post','www.badu.com/s',true);
    //post请求下需要配置请求头信息
    //xmlHttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    //第四步，发送请求,post请求下，要传递的参数放这
    xmlHttp.send("name=1&age=2");
    //第五步，创建回调函数
    function callBack(){
        if (xmlHttp.readyState == 4)
            if (xmlHttp.status == 200) {
                //取得返回的数据
                var data = xmlHttp.responseText;
                //json字符串转为json格式
                data = JSON.parse(data);
                return data;
            }
    } 
```

## 4.0 不借助第三个变量交换a,b两个变量值
> 比如 let a = 10 ; let b = 12;

**1.0 利用和值**
```
a = a + b   // 22 = 10 + 12
b = a - b   // 10 = 22 - 12
a = a - b   // 12 = 22 - 10
``` 
**2.0 利用位^运算符**
“^”运算符（位异或）用于对两个二进制操作数逐位进行比较，并根据如表格所示的换算表返回结果。
<br>
12 和 5 进行位异或运算，则返回值为 9。
>console.log(12 ^ 5);  //返回值9

下图以算式的形式解析了 12 和 5 进行位异或运算的过程。通过位异或运算，第 1、4 位的值为 true，而第 2、3 位的值为 false。
![avatar](/images/js/js-^.png)
```
 a ^= b;
 b ^= a;
 a ^= b;
```
**3.0 利用对象交换**
```
 a = {a:b,b:a};
 b = a.b;
 a = a.a;
```

**4.0 利用数组交换**
```
a = [a,b];
b = a[0];
a = a[1];

更简单的交换
a = [b,b=a][0];
```
**5.0 利用es6的解构赋值交换**
```
[a,b] = [b,a]; 
```

